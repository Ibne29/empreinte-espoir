/*
 * ============================================================
 *  CONTENU DU SITE — Association Empreinte d'Espoir
 * ============================================================
 *  C'est le SEUL fichier à modifier pour mettre à jour le site :
 *  textes, projets, montants collectés, photos, contacts.
 *
 *  - Les montants sont des nombres sans espace : 1500000
 *  - Les dates sont libres : "Janvier 2027", "T2 2027"...
 *  - Les photos se placent dans assets/img/projets/ puis on
 *    indique leur chemin : "assets/img/projets/puits-avant.jpg"
 *  - Une liste de photos vide [] affiche un emplacement "Photo à venir".
 *
 *  ⚠ Les projets ci-dessous sont des EXEMPLES à remplacer.
 *    Tant que demo vaut true, un bandeau l'indique sur le site.
 * ============================================================
 */
window.SITE = {
  demo: true,

  nom: "Empreinte d'Espoir",
  slogan: "Laisser une trace durable là où l'espoir manque.",
  // Code de devise : "EUR" (euro) ou "XOF" (franc CFA)
  devise: "EUR",

  contact: {
    email: "contact@empreintedespoir.org",
    telephone: "+221 00 000 00 00",
    whatsapp: "", // ex : "221770000000" (sans + ni espace)
    adresse: "Adresse du siège à compléter",
    facebook: "",
    instagram: "",
  },

  // Moyens de don. Laisser "" pour masquer un moyen.
  dons: {
    // Lien de la page de collecte (HelloAsso, Stripe, PayPal...)
    lienPrincipal: "",
    wave: "",          // numéro Wave
    orangeMoney: "",   // numéro Orange Money
    iban: "",          // virement bancaire
    titulaire: "Association Empreinte d'Espoir",
  },

  presentation: {
    quiSommesNous:
      "Empreinte d'Espoir est une association à but non lucratif fondée par des femmes et des hommes engagés, qui ont choisi d'agir concrètement auprès des populations les plus vulnérables d'Afrique. Nous partons des besoins exprimés sur le terrain et nous rendons compte de chaque franc dépensé.",
    mission:
      "Améliorer durablement les conditions de vie des personnes défavorisées en finançant et en réalisant des projets utiles : accès à l'eau, éducation, santé, alimentation et soutien aux familles.",
    organisation:
      "L'association est dirigée par un bureau bénévole élu par l'assemblée générale. Les décisions de financement sont prises collectivement, et chaque projet est suivi par un référent local présent sur place.",
  },

  valeurs: [
    { nom: "Solidarité", icone: "hands", texte: "Nous agissons ensemble, avec et pour les communautés." },
    { nom: "Transparence", icone: "eye", texte: "Chaque don est tracé, chaque dépense est publiée." },
    { nom: "Sincérité", icone: "heart", texte: "Des engagements honnêtes, tenus jusqu'au bout." },
    { nom: "Durabilité", icone: "leaf", texte: "Des réalisations pensées pour durer dans le temps." },
    { nom: "Impact", icone: "target", texte: "Des résultats concrets, mesurés et partagés." },
  ],

  zones: [
    { nom: "Sénégal", detail: "Régions rurales — à préciser" },
    { nom: "Mali", detail: "Zones à préciser" },
    { nom: "Guinée", detail: "Zones à préciser" },
  ],

  equipe: [
    { nom: "Prénom Nom", role: "Président(e)" },
    { nom: "Prénom Nom", role: "Secrétaire général(e)" },
    { nom: "Prénom Nom", role: "Trésorier(ère)" },
    { nom: "Prénom Nom", role: "Responsable des projets" },
  ],

  // ---------- 2. FUTURS PROJETS (alimentent aussi la cagnotte) ----------
  projetsFuturs: [
    {
      id: "puits-village",
      titre: "Forage d'un puits pour un village",
      lieu: "Région de Kaolack, Sénégal",
      type: "Accès à l'eau",
      beneficiaires: 800,
      budget: 9000,
      collecte: 3150,
      description:
        "Construction d'un puits équipé d'une pompe manuelle pour offrir un accès à l'eau potable toute l'année et réduire les longues marches quotidiennes des femmes et des enfants.",
      image: "",
      lienDon: "", // lien spécifique à ce projet (sinon lien principal)
      calendrier: [
        { etape: "Étude du terrain", date: "Janvier 2027" },
        { etape: "Travaux de forage", date: "Mars 2027" },
        { etape: "Mise en service", date: "Mai 2027" },
      ],
    },
    {
      id: "fournitures-scolaires",
      titre: "Kits scolaires pour la rentrée",
      lieu: "Ziguinchor, Sénégal",
      type: "Éducation",
      beneficiaires: 300,
      budget: 4500,
      collecte: 2900,
      description:
        "Distribution de kits complets (cartables, cahiers, stylos, manuels) aux élèves de trois écoles primaires de zones rurales.",
      image: "",
      lienDon: "",
      calendrier: [
        { etape: "Recensement des élèves", date: "Juin 2027" },
        { etape: "Achats et préparation", date: "Août 2027" },
        { etape: "Distribution", date: "Octobre 2027" },
      ],
    },
    {
      id: "case-sante",
      titre: "Équipement d'une case de santé",
      lieu: "Région de Kayes, Mali",
      type: "Santé",
      beneficiaires: 1500,
      budget: 12000,
      collecte: 1200,
      description:
        "Achat de matériel médical de base, de lits et de médicaments essentiels pour une case de santé qui dessert plusieurs villages.",
      image: "",
      lienDon: "",
      calendrier: [
        { etape: "Évaluation des besoins", date: "T1 2027" },
        { etape: "Achat du matériel", date: "T3 2027" },
        { etape: "Livraison et formation", date: "T4 2027" },
      ],
    },
  ],

  // ---------- 3. PROJETS RÉALISÉS ----------
  projetsRealises: [
    {
      id: "ramadan-2026",
      titre: "Distribution de denrées alimentaires",
      lieu: "Thiès, Sénégal",
      type: "Alimentation",
      date: "Mars 2026",
      beneficiaires: 120,
      description:
        "Distribution de colis alimentaires (riz, huile, sucre, lait) à 120 familles en situation de grande précarité.",
      resultat:
        "120 familles ont reçu un colis couvrant leurs besoins de base pendant un mois. La distribution a été réalisée avec les chefs de quartier pour toucher les foyers les plus fragiles.",
      depenses: [
        { poste: "Achat des denrées", montant: 3600 },
        { poste: "Transport", montant: 350 },
        { poste: "Emballage et logistique", montant: 150 },
      ],
      photos: { avant: [], pendant: [], apres: [] },
    },
    {
      id: "salle-classe",
      titre: "Rénovation d'une salle de classe",
      lieu: "Fatick, Sénégal",
      type: "Éducation",
      date: "Juillet 2026",
      beneficiaires: 45,
      description:
        "Réfection du toit, des murs et du sol d'une salle de classe devenue dangereuse, et remplacement des tables-bancs.",
      resultat:
        "45 élèves étudient désormais dans une salle saine, protégée de la pluie, avec 20 tables-bancs neufs.",
      depenses: [
        { poste: "Matériaux (toiture, ciment)", montant: 2100 },
        { poste: "Main-d'œuvre locale", montant: 900 },
        { poste: "Tables-bancs", montant: 1000 },
      ],
      photos: { avant: [], pendant: [], apres: [] },
    },
  ],
};
