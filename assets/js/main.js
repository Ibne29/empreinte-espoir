/* Rendu du site à partir de assets/js/data.js — pas besoin de modifier ce fichier. */
(function () {
  "use strict";
  const S = window.SITE;
  const page = document.body.dataset.page;

  // ---------- Utilitaires ----------
  const esc = (v) =>
    String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const money = (n) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: S.devise, maximumFractionDigits: 0 }).format(n || 0);

  const num = (n) => new Intl.NumberFormat("fr-FR").format(n || 0);
  const pct = (a, b) => (b > 0 ? Math.min(100, Math.round((a / b) * 100)) : 0);
  const sum = (arr, f) => arr.reduce((t, x) => t + (f(x) || 0), 0);
  const $ = (sel) => document.querySelector(sel);
  const fill = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

  const ICONS = {
    hands: '<path d="M7 11V6a2 2 0 1 1 4 0v4"/><path d="M11 10V4a2 2 0 1 1 4 0v6"/><path d="M15 10V6a2 2 0 1 1 4 0v8a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4L3 14a2 2 0 0 1 3.4-2l1.6 2"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 10-3 16-9 16z"/><path d="M4 21c3-5 6-8 11-11"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M22 20a7 7 0 0 0-4-6.3"/>',
    tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  const donLink = (p) => (p && p.lienDon) || S.dons.lienPrincipal || "cagnotte.html#moyens";
  const isExternal = (url) => /^https?:/.test(url);
  const donButton = (p, label = "Faire un don", cls = "btn btn-gold") => {
    const url = donLink(p);
    return `<a class="${cls}" href="${esc(url)}"${isExternal(url) ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
  };

  const photo = (src, alt, label = "Photo à venir") =>
    src
      ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
      : `<div class="ph" role="img" aria-label="${esc(label)}"><span>${esc(label)}</span></div>`;

  const bar = (v) => `
      <div class="progress" role="progressbar" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100" aria-label="Avancement de la collecte">
        <span style="width:${v}%"></span>
      </div>`;

  const progress = (p) => {
    const v = pct(p.collecte, p.budget);
    return `
      ${bar(v)}
      <div class="progress-meta">
        <span><strong>${money(p.collecte)}</strong> collectés</span>
        <span class="pct">${v}%</span>
      </div>
      <div class="progress-sub">Objectif : ${money(p.budget)} · Reste : ${money(Math.max(0, p.budget - p.collecte))}</div>`;
  };

  // ---------- En-tête et pied de page ----------
  const NAV = [
    ["index", "index.html", "L'association"],
    ["projets", "projets.html", "Futurs projets"],
    ["realisations", "realisations.html", "Réalisations"],
    ["cagnotte", "cagnotte.html", "Cagnotte"],
  ];

  function renderLayout() {
    const links = NAV.map(
      ([key, href, label]) => `<a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a>`
    ).join("");

    const banner = S.demo
      ? '<div class="demo-banner">Site en préparation — les projets et montants affichés sont des exemples.</div>'
      : "";

    document.querySelector("[data-header]").outerHTML = `
      ${banner}
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="${esc(S.nom)} — accueil">
            <img src="assets/img/logo.svg" alt="" width="44" height="44">
            <span><strong>${esc(S.nom)}</strong><small>Association</small></span>
          </a>
          <button class="nav-toggle" aria-expanded="false" aria-controls="nav" aria-label="Ouvrir le menu">${icon("menu")}</button>
          <nav id="nav" class="nav">${links}${donButton(null, "Faire un don", "btn btn-gold btn-sm")}</nav>
        </div>
      </header>`;

    const c = S.contact;
    const contactItems = [
      c.email && `<li>${icon("mail")}<a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>`,
      c.telephone && `<li>${icon("phone")}<a href="tel:${esc(c.telephone.replace(/\s/g, ""))}">${esc(c.telephone)}</a></li>`,
      c.adresse && `<li>${icon("pin")}<span>${esc(c.adresse)}</span></li>`,
    ].filter(Boolean).join("");
    const socials = [
      c.facebook && `<a href="${esc(c.facebook)}" target="_blank" rel="noopener">Facebook</a>`,
      c.instagram && `<a href="${esc(c.instagram)}" target="_blank" rel="noopener">Instagram</a>`,
      c.whatsapp && `<a href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>`,
    ].filter(Boolean).join("");

    document.querySelector("[data-footer]").outerHTML = `
      <footer class="site-footer" id="contact">
        <div class="container footer-grid">
          <div>
            <div class="brand brand-light">
              <img src="assets/img/logo.svg" alt="" width="44" height="44">
              <span><strong>${esc(S.nom)}</strong><small>Association</small></span>
            </div>
            <p class="footer-slogan">${esc(S.slogan)}</p>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul class="footer-links">${NAV.map(([, href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul class="footer-contact">${contactItems}</ul>
            ${socials ? `<div class="socials">${socials}</div>` : ""}
          </div>
        </div>
        <div class="container footer-bottom">© ${new Date().getFullYear()} ${esc(S.nom)} — Tous droits réservés</div>
      </footer>`;

    const toggle = $(".nav-toggle");
    const nav = $("#nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      toggle.innerHTML = icon(open ? "close" : "menu");
    });
  }

  // ---------- Page : l'association ----------
  function renderHome() {
    const realises = S.projetsRealises;
    const futurs = S.projetsFuturs;
    fill("[data-slogan]", esc(S.slogan));
    fill("[data-qui]", esc(S.presentation.quiSommesNous));
    fill("[data-mission]", esc(S.presentation.mission));
    fill("[data-organisation]", esc(S.presentation.organisation));

    fill("[data-stats]", [
      [realises.length, "projets réalisés"],
      [num(sum(realises, (p) => p.beneficiaires)), "bénéficiaires aidés"],
      [futurs.length, "projets en préparation"],
      [S.zones.length, "pays d'intervention"],
    ].map(([v, l]) => `<div class="stat"><strong>${v}</strong><span>${l}</span></div>`).join(""));

    fill("[data-valeurs]", S.valeurs.map((v) => `
      <article class="value-card">
        <div class="value-icon">${icon(v.icone)}</div>
        <h3>${esc(v.nom)}</h3>
        <p>${esc(v.texte)}</p>
      </article>`).join(""));

    fill("[data-zones]", S.zones.map((z) => `
      <li class="zone">${icon("pin")}<div><strong>${esc(z.nom)}</strong><span>${esc(z.detail)}</span></div></li>`).join(""));

    fill("[data-equipe]", S.equipe.map((m) => `
      <li class="member">
        <div class="avatar" aria-hidden="true">${esc(m.nom.split(/\s+/).map((w) => w[0]).join("").slice(0, 2))}</div>
        <strong>${esc(m.nom)}</strong><span>${esc(m.role)}</span>
      </li>`).join(""));

    fill("[data-apercu]", futurs.slice(0, 3).map(projectCard).join(""));
  }

  // ---------- Page : futurs projets ----------
  const meta = (name, label, value) =>
    `<li>${icon(name)}<span><small>${label}</small>${value}</span></li>`;

  function projectCard(p) {
    return `
      <article class="card project-card">
        <div class="card-media">${photo(p.image, p.titre)}<span class="chip">${esc(p.type)}</span></div>
        <div class="card-body">
          <h3>${esc(p.titre)}</h3>
          <p class="muted">${icon("pin", "icon icon-sm")} ${esc(p.lieu)}</p>
          ${progress(p)}
          <a class="link-arrow" href="projets.html#${esc(p.id)}">Voir le projet →</a>
        </div>
      </article>`;
  }

  function renderFuturs() {
    const list = S.projetsFuturs;
    fill("[data-futurs]", list.length ? list.map((p) => `
      <article class="project-detail" id="${esc(p.id)}">
        <div class="pd-media">${photo(p.image, p.titre)}<span class="chip">${esc(p.type)}</span></div>
        <div class="pd-body">
          <h2>${esc(p.titre)}</h2>
          <p>${esc(p.description)}</p>
          <ul class="meta-grid">
            ${meta("pin", "Localisation", esc(p.lieu))}
            ${meta("tag", "Type de projet", esc(p.type))}
            ${meta("users", "Bénéficiaires estimés", num(p.beneficiaires))}
            ${meta("coin", "Budget nécessaire", money(p.budget))}
          </ul>
          ${p.calendrier && p.calendrier.length ? `
            <h3 class="h-small">${icon("calendar", "icon icon-sm")} Calendrier prévisionnel</h3>
            <ol class="timeline">${p.calendrier.map((c) => `<li><strong>${esc(c.date)}</strong><span>${esc(c.etape)}</span></li>`).join("")}</ol>` : ""}
          <div class="pd-funding">
            ${progress(p)}
            ${donButton(p, "Soutenir ce projet")}
          </div>
        </div>
      </article>`).join("") : '<p class="empty">Aucun projet en préparation pour le moment.</p>');
  }

  // ---------- Page : réalisations ----------
  const PHASES = [["avant", "Avant"], ["pendant", "Pendant"], ["apres", "Après"]];

  function renderRealises() {
    const list = S.projetsRealises;
    fill("[data-realises-stats]", [
      [list.length, "projets terminés"],
      [num(sum(list, (p) => p.beneficiaires)), "bénéficiaires"],
      [money(sum(list, (p) => sum(p.depenses, (d) => d.montant))), "investis sur le terrain"],
    ].map(([v, l]) => `<div class="stat"><strong>${v}</strong><span>${l}</span></div>`).join(""));

    fill("[data-realises]", list.length ? list.map((p) => {
      const total = sum(p.depenses, (d) => d.montant);
      const tabs = PHASES.map(([k, label], i) => `
        <button role="tab" aria-selected="${i === 0}" aria-controls="${esc(p.id)}-${k}" id="${esc(p.id)}-tab-${k}" tabindex="${i === 0 ? 0 : -1}">${label}</button>`).join("");
      const panels = PHASES.map(([k, label], i) => {
        const pics = (p.photos && p.photos[k]) || [];
        return `
          <div class="gallery" role="tabpanel" id="${esc(p.id)}-${k}" aria-labelledby="${esc(p.id)}-tab-${k}"${i === 0 ? "" : " hidden"}>
            ${pics.length
              ? pics.map((src) => `<button class="thumb" data-full="${esc(src)}" aria-label="Agrandir la photo">${photo(src, `${p.titre} — ${label}`)}</button>`).join("")
              : `<div class="thumb">${photo("", "", `Photo « ${label} » à venir`)}</div>`}
          </div>`;
      }).join("");

      return `
        <article class="realisation" id="${esc(p.id)}">
          <header class="real-head">
            <span class="chip chip-static">${esc(p.type)}</span>
            <h2>${esc(p.titre)}</h2>
            <p class="muted">${icon("pin", "icon icon-sm")} ${esc(p.lieu)} · ${icon("calendar", "icon icon-sm")} ${esc(p.date)} · ${icon("users", "icon icon-sm")} ${num(p.beneficiaires)} bénéficiaires</p>
          </header>
          <div class="real-grid">
            <div>
              <div class="tabs" role="tablist" aria-label="Photos du projet">${tabs}</div>
              ${panels}
            </div>
            <div class="real-info">
              <p>${esc(p.description)}</p>
              <h3 class="h-small">Dépenses réalisées</h3>
              <table class="expenses">
                <tbody>${p.depenses.map((d) => `<tr><td>${esc(d.poste)}</td><td>${money(d.montant)}</td></tr>`).join("")}</tbody>
                <tfoot><tr><td>Total</td><td>${money(total)}</td></tr></tfoot>
              </table>
              <div class="result">
                <h3 class="h-small">Résultat final</h3>
                <p>${esc(p.resultat)}</p>
              </div>
            </div>
          </div>
        </article>`;
    }).join("") : '<p class="empty">Nos premiers projets réalisés seront présentés ici très bientôt.</p>');

    document.querySelectorAll(".tabs").forEach(setupTabs);
    setupLightbox();
  }

  function setupTabs(tablist) {
    const tabs = [...tablist.querySelectorAll("[role=tab]")];
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      tab.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") select(tabs[(i + 1) % tabs.length]);
        if (e.key === "ArrowLeft") select(tabs[(i - 1 + tabs.length) % tabs.length]);
      });
    });
  }

  function setupLightbox() {
    const box = document.createElement("dialog");
    box.className = "lightbox";
    box.innerHTML = `<button class="lb-close" aria-label="Fermer">${icon("close")}</button><img alt="">`;
    document.body.appendChild(box);
    const img = box.querySelector("img");
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-full]");
      if (t) { img.src = t.dataset.full; box.showModal(); }
    });
    box.addEventListener("click", (e) => { if (e.target !== img) box.close(); });
  }

  // ---------- Page : cagnotte ----------
  function renderCagnotte() {
    const list = S.projetsFuturs;
    const totalBudget = sum(list, (p) => p.budget);
    const totalCollecte = sum(list, (p) => p.collecte);
    fill("[data-cagnotte-total]", `
      <div class="total-card">
        <div><small>Total collecté</small><strong>${money(totalCollecte)}</strong></div>
        <div><small>Objectif global</small><strong>${money(totalBudget)}</strong></div>
        <div class="total-progress">
          ${bar(pct(totalCollecte, totalBudget))}
          <div class="progress-sub"><strong class="pct">${pct(totalCollecte, totalBudget)}%</strong> de l'objectif atteint · Reste : ${money(Math.max(0, totalBudget - totalCollecte))}</div>
        </div>
      </div>`);

    fill("[data-cagnotte]", list.map((p) => `
      <article class="card fund-card">
        <div class="card-body">
          <span class="chip chip-static">${esc(p.type)}</span>
          <h3>${esc(p.titre)}</h3>
          <p class="muted">${icon("pin", "icon icon-sm")} ${esc(p.lieu)} · ${num(p.beneficiaires)} bénéficiaires</p>
          ${progress(p)}
          <div class="fund-actions">
            ${donButton(p, "Donner pour ce projet")}
            <a class="link-arrow" href="projets.html#${esc(p.id)}">Détails →</a>
          </div>
        </div>
      </article>`).join(""));

    const d = S.dons;
    const ways = [
      d.lienPrincipal && `<div class="way">${icon("coin")}<div><strong>Carte bancaire / en ligne</strong><p>Paiement sécurisé en quelques clics.</p><a class="btn btn-gold btn-sm" href="${esc(d.lienPrincipal)}" target="_blank" rel="noopener">Donner en ligne</a></div></div>`,
      d.wave && `<div class="way">${icon("phone")}<div><strong>Wave</strong><p>Envoyez votre don au <b>${esc(d.wave)}</b></p></div></div>`,
      d.orangeMoney && `<div class="way">${icon("phone")}<div><strong>Orange Money</strong><p>Envoyez votre don au <b>${esc(d.orangeMoney)}</b></p></div></div>`,
      d.iban && `<div class="way">${icon("coin")}<div><strong>Virement bancaire</strong><p>${esc(d.titulaire)}<br><b class="iban">${esc(d.iban)}</b></p></div></div>`,
    ].filter(Boolean);
    fill("[data-moyens]", ways.length
      ? ways.join("")
      : `<p class="empty">Les moyens de paiement seront activés très prochainement. En attendant, contactez-nous à <a href="mailto:${esc(S.contact.email)}">${esc(S.contact.email)}</a>.</p>`);
  }

  // ---------- Lancement ----------
  renderLayout();
  ({ index: renderHome, projets: renderFuturs, realisations: renderRealises, cagnotte: renderCagnotte }[page] || (() => {}))();

  // Ancre (#projet) après rendu dynamique
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
})();
