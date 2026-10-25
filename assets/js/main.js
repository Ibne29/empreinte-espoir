/* Rendu et animations du site à partir de assets/js/data.js. Pas besoin de modifier ce fichier. */
(function () {
  "use strict";
  const S = window.SITE;
  const page = document.body.dataset.page;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = reduceMotion ? "auto" : "smooth";

  // ---------- Utilitaires ----------
  const esc = (v) =>
    String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // 1 € = 655,957 F CFA (parité fixe entre l'euro et le franc CFA)
  const RATE = 655.957;
  const currency = (n, code) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: code, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n || 0);
  // Arrondi d'une conversion approximative : 918 340 devient 918 000, 6 560 devient 6 600
  const roundApprox = (v) => {
    const step = v >= 100000 ? 1000 : v >= 1000 ? 100 : v >= 100 ? 10 : 1;
    return Math.round(v / step) * step;
  };
  // Montant dans la monnaie de saisie, suivi de l'autre monnaie : « 370 € (242 704 F CFA) »
  // Pour une estimation, la conversion est arrondie : « 370 € (243 000 F CFA) »
  const amount = (n, approx = false) => {
    const alt = (v) => (approx ? roundApprox(v) : v);
    const [main, other] = S.devise === "XOF"
      ? [currency(n, "XOF"), currency(alt((n || 0) / RATE), "EUR")]
      : [currency(n, "EUR"), currency(alt((n || 0) * RATE), "XOF")];
    return `${main} <span class="alt">(${other})</span>`;
  };
  const money = (n, approx = false) => `${approx ? "environ " : ""}${amount(n, approx)}`;

  const num = (n) => new Intl.NumberFormat("fr-FR").format(Math.round(n || 0));
  const pct = (a, b) => (b > 0 ? Math.min(100, Math.round((a / b) * 100)) : 0);
  const sum = (arr, f) => arr.reduce((t, x) => t + (f(x) || 0), 0);
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const fill = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

  const ICONS = {
    hands: '<path d="M7 11V6a2 2 0 1 1 4 0v4"/><path d="M11 10V4a2 2 0 1 1 4 0v6"/><path d="M15 10V6a2 2 0 1 1 4 0v8a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4L3 14a2 2 0 0 1 3.4-2l1.6 2"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-9 16-9 0 10-3 16-9 16z"/><path d="M4 21c3-5 6-8 11-11"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    drop: '<path d="M12 2.7s-6.5 7.1-6.5 11.8a6.5 6.5 0 0 0 13 0C18.5 9.8 12 2.7 12 2.7z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    health: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
    bowl: '<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 7c0-1.5 1-2 1-3.5M12 7c0-1.5 1-2 1-3.5M16 7c0-1.5 1-2 1-3.5"/>',
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M22 20a7 7 0 0 0-4-6.3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8"/><path d="M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    left: '<path d="M15 18l-6-6 6-6"/>',
    right: '<path d="M9 18l6-6-6-6"/>',
    up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.heart}</svg>`;

  // Couleur et icône de l'illustration, déduites du type de projet
  const THEMES = [
    [/aliment|nourri|repas|denr/i, "bowl", "food"],
    [/sant|hygi|m[ée]dic|soin/i, "health", "sante"],
    [/couchage|natte|moustiquaire|abri/i, "home", "couchage"],
    [/duc|cole|scolaire/i, "book", "edu"],
    [/eau|forage|puits/i, "drop", "eau"],
  ];
  const theme = (type) => {
    const t = THEMES.find(([re]) => re.test(type || ""));
    return t ? { icon: t[1], cls: t[2] } : { icon: "heart", cls: "default" };
  };

  // Photo du projet, ou illustration animée aux couleurs du projet
  const visual = (src, alt, type, label = "") => {
    if (src) return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
    const t = theme(type);
    return `<div class="ph ph-${t.cls}" role="img" aria-label="${esc(label || alt)}"><i></i><i></i>${icon(t.icon, "ph-icon")}${label ? `<span class="ph-label">${esc(label)}</span>` : ""}</div>`;
  };

  const donLink = (p) => (p && p.lienDon) || S.dons.lienPrincipal || "cagnotte.html#moyens";
  const isExternal = (url) => /^https?:/.test(url);
  const donButton = (p, label = "Faire un don", cls = "btn btn-gold") => {
    const url = donLink(p);
    return `<a class="${cls}" href="${esc(url)}"${isExternal(url) ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
  };

  // Compteur animé : la valeur s'affiche à 0 puis monte quand l'élément apparaît
  const counter = (value, format = "num") =>
    `<span data-count="${value || 0}" data-format="${format}">${format === "money" ? money(0) : format === "approx" ? money(0, true) : format === "pct" ? "0%" : "0"}</span>`;

  const bar = (v) => `
      <div class="progress" role="progressbar" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100" aria-label="Avancement de la collecte">
        <span style="--w:${v}%"></span>
      </div>`;

  const progress = (p) => {
    const v = pct(p.collecte, p.budget);
    return `
      ${bar(v)}
      <div class="progress-meta">
        <span><strong>${counter(p.collecte, "money")}</strong> collectés</span>
        <span class="pct">${counter(v, "pct")}</span>
      </div>
      <div class="progress-sub">Objectif : ${money(p.budget, true)}</div>
      ${p.collecte > 0
        ? `<div class="progress-sub">Reste à collecter : ${money(Math.max(0, p.budget - p.collecte), true)}</div>`
        : '<div class="progress-sub first">Soyez le premier à donner !</div>'}`;
  };

  // « Environ 10 € (6 600 F CFA) suffisent pour qu'un habitant… »
  const exemple = (p) => p.exemple
    ? `<p class="exemple">${icon("gift", "icon icon-sm")}<span>Environ ${amount(p.exemple.montant, true)} suffisent pour ${esc(p.exemple.texte)}.</span></p>`
    : "";

  // « 50 enfants », « 200 habitants » ; pour un projet à venir : « environ 200 habitants »
  const people = (p, approx = false) => `${approx ? "environ " : ""}${num(p.beneficiaires)} ${esc(p.unite || "enfants")}`;

  // Budget d'un projet = somme de son détail + marge pour les imprévus, arrondi à la dizaine
  const subtotal = (p) => sum(p.detailBudget || [], (l) => l.montant);
  S.projetsFuturs.forEach((p) => {
    if (p.detailBudget && p.detailBudget.length) {
      p.budget = Math.round((subtotal(p) * (1 + (p.imprevus || 0) / 100)) / 10) * 10;
    }
  });

  const sourceLink = (s) => s.lien
    ? `<a href="${esc(s.lien)}" target="_blank" rel="noopener">${esc(s.texte)}</a>`
    : esc(s.texte);

  // Tableau dépliable : lignes du budget, imprévus, total et sources numérotées
  const budgetTable = (p) => {
    const lines = p.detailBudget || [];
    if (!lines.length) return "";
    const sources = S.sources || {};
    const cited = [];
    const ref = (key) => {
      if (!key || !sources[key]) return "";
      if (!cited.includes(key)) cited.push(key);
      return `<sup>${cited.indexOf(key) + 1}</sup>`;
    };
    const rows = lines.map((l) => `<tr><td>${esc(l.poste)}${ref(l.source)}</td><td>${money(l.montant)}</td></tr>`).join("");
    const margin = p.budget - subtotal(p);
    const reperes = (p.reperes || []).filter((k) => sources[k]);
    return `
      <details class="budget">
        <summary>Détail du budget estimé et sources des prix</summary>
        <table class="expenses">
          <tbody>${rows}
            ${margin > 0 ? `<tr class="imprevus"><td>Imprévus (${p.imprevus} %)</td><td>${money(margin)}</td></tr>` : ""}
          </tbody>
          <tfoot><tr><td>Total estimé</td><td>${money(p.budget)}</td></tr></tfoot>
        </table>
        ${cited.length ? `<ol class="sources">${cited.map((k) => `<li>${sourceLink(sources[k])}</li>`).join("")}</ol>` : ""}
        ${reperes.length ? `<p class="budget-note"><strong>Pour comparer :</strong></p><ul class="sources">${reperes.map((k) => `<li>${sourceLink(sources[k])}</li>`).join("")}</ul>` : ""}
        <p class="budget-note">Les lignes sans numéro sont des estimations, à vérifier sur place avec des devis.</p>
      </details>`;
  };

  // Chiffres clés ; avec un lien, la case entière est cliquable
  const statItems = (items) => items.map(([value, label, format, href], i) => {
    const content = `<strong>${counter(value, format)}</strong><span>${label}${href ? icon("right", "icon stat-go") : ""}</span>`;
    return href
      ? `<a class="stat" href="${href}" data-reveal style="--i:${i}">${content}</a>`
      : `<div class="stat" data-reveal style="--i:${i}">${content}</div>`;
  }).join("");

  // ---------- En-tête, pied de page, décors ----------
  const NAV = [
    ["index", "index.html", "L'association"],
    ["projets", "projets.html", "Futurs projets"],
    ["realisations", "realisations.html", "Réalisations"],
    ["cagnotte", "cagnotte.html", "Cagnotte"],
  ];

  const AURORA = '<div class="aurora" aria-hidden="true"><span></span><span></span><span></span></div>';
  const WAVE_PATH = "M0 60C240 110 480 10 720 60S1200 10 1440 60S1920 10 2160 60S2640 10 2880 60V120H0Z";
  const WAVE = `<div class="hero-wave" aria-hidden="true">${
    `<svg viewBox="0 0 2880 120" preserveAspectRatio="none"><path d="${WAVE_PATH}"/></svg>`.repeat(2)}</div>`;

  function renderLayout() {
    const links = NAV.map(
      ([key, href, label]) => `<a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a>`
    ).join("");

    const banner = S.demo
      ? '<div class="demo-banner">Site en préparation : les projets et les montants affichés sont des exemples.</div>'
      : "";

    $("[data-header]").outerHTML = `
      ${banner}
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="${esc(S.nom)}, accueil">
            <img src="assets/img/logo.svg" alt="" width="44" height="44">
            <span><strong>${esc(S.nom)}</strong><small>Association</small></span>
          </a>
          <button class="nav-toggle" aria-expanded="false" aria-controls="nav" aria-label="Ouvrir le menu">${icon("menu")}</button>
          <nav id="nav" class="nav">${links}${donButton(null, "Faire un don", "btn btn-gold btn-sm btn-glow")}</nav>
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

    $("[data-footer]").outerHTML = `
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
        <div class="container footer-bottom">© ${new Date().getFullYear()} ${esc(S.nom)}. Tous droits réservés.</div>
      </footer>`;

    document.body.insertAdjacentHTML("afterbegin", '<div class="scroll-progress" aria-hidden="true"><span></span></div>');
    document.body.insertAdjacentHTML("beforeend", `<button class="to-top" aria-label="Remonter en haut de la page">${icon("up")}</button>`);
    $$("[data-aurora]").forEach((el) => el.insertAdjacentHTML("afterbegin", AURORA));
    $$(".hero").forEach((el) => el.insertAdjacentHTML("beforeend", WAVE));

    const toggle = $(".nav-toggle");
    const nav = $("#nav");
    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      toggle.innerHTML = icon(open ? "close" : "menu");
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  function setupScroll() {
    const header = $(".site-header");
    const progressBar = $(".scroll-progress span");
    const toTop = $(".to-top");
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      header.classList.toggle("is-scrolled", y > 10);
      toTop.classList.toggle("is-visible", y > 600);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior }));
    update();
  }

  // ---------- Composants animés ----------
  function setupRotator() {
    const el = $("[data-rotator]");
    const words = S.motsHero || [];
    if (!el || !words.length) return;
    el.innerHTML = words.map((w, i) => `<span${i === 0 ? ' class="is-active"' : ""}>${esc(w)}</span>`).join("");
    fill("[data-rotator-sr]", esc(words.join(", ")));
    if (reduceMotion || words.length < 2) return;
    const spans = $$("span", el);
    let i = 0;
    setInterval(() => {
      const prev = spans[i];
      i = (i + 1) % spans.length;
      prev.classList.replace("is-active", "is-leaving");
      spans[i].classList.remove("is-leaving");
      spans[i].classList.add("is-active");
      setTimeout(() => prev.classList.remove("is-leaving"), 800);
    }, 2800);
  }

  function setupMarquees() {
    const sources = {
      valeurs: S.valeurs.map((v) => [v.icone, v.nom]),
      domaines: S.domaines.map((d) => [d.icone, d.nom]),
    };
    $$("[data-marquee]").forEach((track) => {
      const items = sources[track.dataset.marquee] || [];
      const group = items.map(([ic, label]) => `<span class="mq-item">${icon(ic)}${esc(label)}</span><span class="mq-sep"></span>`).join("");
      // Deux moitiés identiques : l'animation glisse de -50 % pour boucler sans saut
      track.innerHTML = group.repeat(6);
    });
  }

  function setupCarousel(root) {
    const track = $(".carousel-track", root);
    const items = [...track.children];
    if (!items.length) return;
    root.insertAdjacentHTML("beforeend", `
      <div class="carousel-nav">
        <button class="car-btn" data-dir="-1" aria-label="Précédent">${icon("left")}</button>
        <div class="car-dots">${items.map((_, i) => `<button aria-label="Aller à l'élément ${i + 1}"></button>`).join("")}</div>
        <button class="car-btn" data-dir="1" aria-label="Suivant">${icon("right")}</button>
      </div>`);
    const dots = $$(".car-dots button", root);
    const step = () => (items[1] ? items[1].offsetLeft - items[0].offsetLeft : track.clientWidth);
    const visible = () => Math.max(1, Math.round((track.clientWidth + step() - items[0].offsetWidth) / step()));
    const pages = () => Math.max(1, items.length - visible() + 1);
    const current = () => Math.min(pages() - 1, Math.round(track.scrollLeft / step()));
    const go = (i) => track.scrollTo({ left: ((i + pages()) % pages()) * step(), behavior });

    const sync = () => {
      const n = pages();
      root.classList.toggle("is-static", n < 2);
      dots.forEach((d, i) => {
        d.hidden = i >= n;
        if (i === current()) d.setAttribute("aria-current", "true");
        else d.removeAttribute("aria-current");
      });
    };
    let raf = 0;
    track.addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(sync); }, { passive: true });
    window.addEventListener("resize", sync);
    $$(".car-btn", root).forEach((b) => b.addEventListener("click", () => go(current() + Number(b.dataset.dir))));
    dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
    sync();

    // Défilement automatique, en pause quand on survole ou touche le carrousel
    let paused = false;
    let resume = 0;
    root.addEventListener("mouseenter", () => { paused = true; });
    root.addEventListener("mouseleave", () => { paused = false; });
    root.addEventListener("focusin", () => { paused = true; });
    root.addEventListener("focusout", () => { paused = false; });
    root.addEventListener("touchstart", () => {
      paused = true;
      clearTimeout(resume);
      resume = setTimeout(() => { paused = false; }, 8000);
    }, { passive: true });
    if (!reduceMotion) {
      setInterval(() => { if (!paused && !document.hidden && pages() > 1) go(current() + 1); }, 4500);
    }
  }

  function setupQuotes() {
    const root = $("[data-quotes]");
    const list = S.citations || [];
    if (!root || !list.length) return;
    root.innerHTML = `
      <div class="quotes-stage">${list.map((q, i) => `
        <figure class="quote${i === 0 ? " is-active" : ""}">
          <blockquote>« ${esc(q.texte)} »</blockquote>
          ${q.traduction ? `<p class="quote-trad">${esc(q.traduction)}</p>` : ""}
          <figcaption>${esc(q.source)}</figcaption>
        </figure>`).join("")}
      </div>
      <div class="quote-dots">${list.map((_, i) => `<button aria-label="Citation ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}></button>`).join("")}</div>`;
    const quotes = $$(".quote", root);
    const dots = $$(".quote-dots button", root);
    let i = 0;
    let paused = false;
    const show = (n) => {
      quotes[i].classList.remove("is-active");
      dots[i].removeAttribute("aria-current");
      i = (n + quotes.length) % quotes.length;
      quotes[i].classList.add("is-active");
      dots[i].setAttribute("aria-current", "true");
    };
    dots.forEach((d, n) => d.addEventListener("click", () => show(n)));
    root.addEventListener("mouseenter", () => { paused = true; });
    root.addEventListener("mouseleave", () => { paused = false; });
    if (!reduceMotion && quotes.length > 1) {
      setInterval(() => { if (!paused && !document.hidden) show(i + 1); }, 6000);
    }
  }

  function countUp(el) {
    const target = parseFloat(el.dataset.count) || 0;
    const format = el.dataset.format;
    const out = (v) => (format === "money" ? money(v)
      : format === "approx" ? money(v, true)
      : format === "pct" ? `${Math.round(v)}%`
      : num(v));
    if (reduceMotion || target === 0) { el.innerHTML = out(target); return; }
    const start = performance.now();
    const duration = 1800;
    const tick = (now) => {
      const k = Math.min(1, (now - start) / duration);
      el.innerHTML = out(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // Apparitions au défilement, compteurs, barres de progression
  function animateOnScroll() {
    const targets = $$("[data-reveal], [data-count], .progress");
    const run = (el) => {
      if (el.matches("[data-count]")) countUp(el);
      if (el.matches(".progress")) el.classList.add("is-filled");
      if (el.matches("[data-reveal]")) {
        el.classList.add("is-visible");
        // Une fois apparu, on retire l'attribut pour que les effets de survol n'héritent pas du délai
        const done = (e) => {
          if (e.target !== el) return;
          el.removeAttribute("data-reveal");
          el.removeEventListener("transitionend", done);
        };
        el.addEventListener("transitionend", done);
      }
    };
    if (!("IntersectionObserver" in window)) { targets.forEach(run); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    targets.forEach((el) => io.observe(el));
  }

  // ---------- Page : l'association ----------
  function projectCard(p) {
    return `
      <article class="card project-card">
        <div class="card-media">${visual(p.image, p.titre, p.type)}<span class="chip">${esc(p.type)}</span></div>
        <div class="card-body">
          <h3>${esc(p.titre)}</h3>
          <p class="muted">${icon("pin", "icon icon-sm")} ${esc(p.lieu)}, ${people(p, true)}</p>
          ${progress(p)}
          <a class="link-arrow" href="projets.html#${esc(p.id)}">Voir le projet <span aria-hidden="true">→</span></a>
        </div>
      </article>`;
  }

  function renderHome() {
    const realises = S.projetsRealises;
    const futurs = S.projetsFuturs;
    fill("[data-accroche]", esc(S.accroche));
    fill("[data-qui]", esc(S.presentation.quiSommesNous));
    fill("[data-mission]", esc(S.presentation.mission));
    fill("[data-organisation]", esc(S.presentation.organisation));
    setupRotator();

    fill("[data-hero-chips]", S.domaines.slice(0, 3).map((d, i) =>
      `<div class="float-chip c${i + 1}">${icon(d.icone)}<span>${esc(d.nom)}</span></div>`).join(""));

    fill("[data-stats]", statItems([
      [realises.length, "projets réalisés", "num", "realisations.html"],
      [sum(realises, (p) => p.beneficiaires), "personnes aidées", "num", "realisations.html"],
      [futurs.length, "projets en préparation", "num", "projets.html"],
      [S.zones.length, "zones d'intervention", "num", "#organisation"],
    ]));

    // Une section par cause : texte, chiffres clés et source
    $$("[data-cause-section]").forEach((section) => {
      const c = S.causes[section.dataset.causeSection];
      if (!c) { section.remove(); return; }
      fill(`[data-cause-section="${section.dataset.causeSection}"] [data-cause-content]`, `
        <div class="cause-text" data-reveal="left">
          <h2>${esc(c.titre)}</h2>
          <p>${esc(c.intro)}</p>
          <p class="facts-source">${c.source.lien
            ? `<a href="${esc(c.source.lien)}" target="_blank" rel="noopener">${esc(c.source.texte)}</a>`
            : esc(c.source.texte)}</p>
        </div>
        <div class="facts">${c.chiffres.map((f, i) => `
          <div class="fact" data-reveal style="--i:${i}">
            <strong>${esc(f.valeur)}</strong>
            <p>${esc(f.texte)}</p>
          </div>`).join("")}
        </div>`);
    });

    fill("[data-valeurs]", S.valeurs.map((v, i) => `
      <article class="value-card" data-reveal style="--i:${i}">
        <span class="value-num">${String(i + 1).padStart(2, "0")}</span>
        <div class="value-icon">${icon(v.icone)}</div>
        <h3>${esc(v.nom)}</h3>
        <p>${esc(v.texte)}</p>
      </article>`).join(""));

    fill("[data-apercu]", futurs.map(projectCard).join(""));

    fill("[data-zones]", S.zones.map((z, i) => `
      <li class="zone" data-reveal="left" style="--i:${i}">
        <span class="zone-pin">${icon("pin")}</span>
        <div><strong>${esc(z.nom)}</strong><span>${esc(z.detail)}</span></div>
      </li>`).join(""));

    fill("[data-equipe]", S.equipe.map((m, i) => `
      <li class="member" data-reveal="zoom" style="--i:${i}">
        <div class="avatar" aria-hidden="true">${esc(m.nom.split(/\s+/).map((w) => w[0]).join("").slice(0, 2))}</div>
        <strong>${esc(m.nom)}</strong><span>${esc(m.role)}</span>
      </li>`).join(""));

    setupMarquees();
    setupQuotes();
  }

  // ---------- Page : futurs projets ----------
  const meta = (name, label, value) =>
    `<li>${icon(name)}<span><small>${label}</small>${value}</span></li>`;

  // Boutons « Tous les projets / Enfants talibés / Eau potable »
  function setupFilters() {
    const bar = $("[data-filters]");
    if (!bar || !S.causes) return;
    const options = [["all", "Tous les projets"], ...Object.entries(S.causes).map(([key, c]) => [key, c.nom])];
    bar.innerHTML = options.map(([key, label], i) =>
      `<button class="filter" data-cause="${esc(key)}" aria-pressed="${i === 0}">${esc(label)}</button>`).join("");
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      $$(".filter", bar).forEach((b) => b.setAttribute("aria-pressed", b === btn));
      const key = btn.dataset.cause;
      $$("[data-cause-item]").forEach((el) => {
        const show = key === "all" || el.dataset.causeItem === key;
        el.hidden = !show;
        if (show && !reduceMotion) {
          el.classList.remove("is-filtered-in");
          void el.offsetWidth; // relance l'animation
          el.classList.add("is-filtered-in");
        }
      });
    });
  }

  function renderFuturs() {
    const list = S.projetsFuturs;
    setupFilters();
    fill("[data-futurs]", list.length ? list.map((p, n) => `
      <article class="project-detail" id="${esc(p.id)}" data-cause-item="${esc(p.cause || "")}" data-reveal>
        <div class="pd-media">${visual(p.image, p.titre, p.type)}<span class="chip">${esc(p.type)}</span><span class="pd-index">${String(n + 1).padStart(2, "0")}</span></div>
        <div class="pd-body">
          <h2>${esc(p.titre)}</h2>
          <p>${esc(p.description)}</p>
          <ul class="meta-grid">
            ${meta("pin", "Lieu", esc(p.lieu))}
            ${meta("users", "Bénéficiaires", `environ ${counter(p.beneficiaires)} ${esc(p.unite || "enfants")}`)}
            ${meta("coin", "Budget estimé", counter(p.budget, "approx"))}
          </ul>
          ${p.calendrier && p.calendrier.length ? `
            <h3 class="h-small">${icon("calendar", "icon icon-sm")} Calendrier prévisionnel <small>(dates indicatives)</small></h3>
            <ol class="timeline">${p.calendrier.map((c, i) => `
              <li data-reveal="left" style="--i:${i + 1}"><strong>${esc(c.date)}</strong><span>${esc(c.etape)}</span></li>`).join("")}
            </ol>` : ""}
          ${budgetTable(p)}
          <div class="pd-funding">
            ${progress(p)}
            ${donButton(p, "Soutenir ce projet")}
          </div>
        </div>
      </article>`).join("") : '<p class="empty">Aucun projet en préparation pour le moment.</p>');
  }

  // ---------- Page : réalisations ----------
  const PHASES = [["avant", "Avant"], ["pendant", "Pendant"], ["apres", "Après"]];

  const comingSoon = () => `
    <div class="coming" data-reveal>
      <div class="sprout" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <ellipse class="sp-ring" cx="100" cy="150" rx="34" ry="9"/>
          <ellipse class="sp-ring r2" cx="100" cy="150" rx="34" ry="9"/>
          <path class="sp-ground" d="M44 150h112"/>
          <path class="sp-stem" d="M100 150V80"/>
          <path class="sp-leaf l1" d="M100 100c0-22 14-36 40-38-2 26-16 38-40 38z"/>
          <path class="sp-leaf l2" d="M100 115c0-18-12-30-34-31 2 21 13 31 34 31z"/>
        </svg>
      </div>
      <h2>Nos premiers projets sont en préparation</h2>
      <p class="muted">Dès qu'un projet sera terminé, vous trouverez ici :</p>
      <ul class="coming-steps">
        <li data-reveal style="--i:1">${icon("camera")}<strong>Les photos</strong><span>Avant, pendant et après chaque projet.</span></li>
        <li data-reveal style="--i:2">${icon("coin")}<strong>Les dépenses</strong><span>Le détail de chaque somme dépensée.</span></li>
        <li data-reveal style="--i:3">${icon("target")}<strong>Le résultat</strong><span>Ce qui a changé pour les enfants et les villages.</span></li>
      </ul>
      <div class="actions-center">
        <a class="btn btn-green" href="projets.html">Voir les futurs projets</a>
        ${donButton(null, "Soutenir un projet")}
      </div>
    </div>`;

  function renderRealises() {
    const list = S.projetsRealises;
    if (!list.length) {
      $("[data-realises-stats]").closest(".stats-wrap").remove();
      fill("[data-realises]", comingSoon());
      return;
    }

    fill("[data-realises-stats]", statItems([
      [list.length, "projets terminés"],
      [sum(list, (p) => p.beneficiaires), "personnes aidées"],
      [sum(list, (p) => sum(p.depenses, (d) => d.montant)), "dépensés sur le terrain", "money"],
    ]));

    fill("[data-realises]", list.map((p) => {
      const total = sum(p.depenses, (d) => d.montant);
      const tabs = PHASES.map(([k, label], i) => `
        <button role="tab" aria-selected="${i === 0}" aria-controls="${esc(p.id)}-${k}" id="${esc(p.id)}-tab-${k}" tabindex="${i === 0 ? 0 : -1}">${label}</button>`).join("");
      const panels = PHASES.map(([k, label], i) => {
        const pics = (p.photos && p.photos[k]) || [];
        return `
          <div class="gallery" role="tabpanel" id="${esc(p.id)}-${k}" aria-labelledby="${esc(p.id)}-tab-${k}"${i === 0 ? "" : " hidden"}>
            ${pics.length
              ? pics.map((src) => `<button class="thumb" data-full="${esc(src)}" aria-label="Agrandir la photo">${visual(src, `${p.titre}, photo ${label.toLowerCase()}`)}</button>`).join("")
              : `<div class="thumb">${visual("", "", p.type, `Photo « ${label} » à venir`)}</div>`}
          </div>`;
      }).join("");

      return `
        <article class="realisation" id="${esc(p.id)}" data-reveal>
          <header class="real-head">
            <span class="chip chip-static">${esc(p.type)}</span>
            <h2>${esc(p.titre)}</h2>
            <p class="muted meta-line">
              <span>${icon("pin", "icon icon-sm")} ${esc(p.lieu)}</span>
              <span>${icon("calendar", "icon icon-sm")} ${esc(p.date)}</span>
              <span>${icon("users", "icon icon-sm")} ${people(p)}</span>
            </p>
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
                <h3 class="h-small">Résultat</h3>
                <p>${esc(p.resultat)}</p>
              </div>
            </div>
          </div>
        </article>`;
    }).join(""));

    $$(".tabs").forEach(setupTabs);
    setupLightbox();
  }

  function setupTabs(tablist) {
    const tabs = $$("[role=tab]", tablist);
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
    const img = $("img", box);
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
    const v = pct(totalCollecte, totalBudget);
    fill("[data-cagnotte-total]", `
      <div class="total-card" data-reveal style="--i:2">
        <div><small>Total collecté</small><strong>${counter(totalCollecte, "money")}</strong></div>
        <div><small>Objectif total estimé</small><strong>${counter(totalBudget, "approx")}</strong></div>
        <div class="total-progress">
          ${bar(v)}
          <div class="progress-sub"><strong class="pct">${counter(v, "pct")}</strong> de l'objectif atteint.
            ${totalCollecte > 0
              ? `Reste à collecter : ${money(Math.max(0, totalBudget - totalCollecte), true)}`
              : '<span class="first">La collecte démarre, soyez parmi les premiers !</span>'}</div>
        </div>
      </div>`);

    setupFilters();
    fill("[data-cagnotte]", list.map((p, i) => `
      <article class="card fund-card" data-cause-item="${esc(p.cause || "")}" data-reveal style="--i:${i}">
        <div class="card-media card-media-thin">${visual(p.image, p.titre, p.type)}<span class="chip">${esc(p.type)}</span></div>
        <div class="card-body">
          <h3>${esc(p.titre)}</h3>
          <p class="muted">${icon("pin", "icon icon-sm")} ${esc(p.lieu)}, ${people(p, true)}</p>
          ${progress(p)}
          ${exemple(p)}
          <div class="fund-actions">
            ${donButton(p, "Donner pour ce projet")}
            <a class="link-arrow" href="projets.html#${esc(p.id)}">Détails <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </article>`).join(""));

    const d = S.dons;
    const ways = [
      d.lienPrincipal && `<div class="way">${icon("coin")}<div><strong>Carte bancaire ou en ligne</strong><p>Paiement sécurisé en quelques clics.</p><a class="btn btn-gold btn-sm" href="${esc(d.lienPrincipal)}" target="_blank" rel="noopener">Donner en ligne</a></div></div>`,
      d.wave && `<div class="way">${icon("phone")}<div><strong>Wave</strong><p>Envoyez votre don au <b>${esc(d.wave)}</b></p></div></div>`,
      d.orangeMoney && `<div class="way">${icon("phone")}<div><strong>Orange Money</strong><p>Envoyez votre don au <b>${esc(d.orangeMoney)}</b></p></div></div>`,
      d.iban && `<div class="way">${icon("coin")}<div><strong>Virement bancaire</strong><p>${esc(d.titulaire)}<br><b class="iban">${esc(d.iban)}</b></p></div></div>`,
    ].filter(Boolean);
    fill("[data-moyens]", ways.length
      ? ways.join("")
      : `<p class="empty">Les moyens de paiement seront bientôt activés. En attendant, écrivez-nous à <a href="mailto:${esc(S.contact.email)}">${esc(S.contact.email)}</a>.</p>`);
  }

  // ---------- Lancement ----------
  renderLayout();
  ({ index: renderHome, projets: renderFuturs, realisations: renderRealises, cagnotte: renderCagnotte }[page] || (() => {}))();
  $$("[data-carousel]").forEach(setupCarousel);
  setupScroll();
  animateOnScroll();

  // Ancre (#projet) après rendu dynamique
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }
})();
