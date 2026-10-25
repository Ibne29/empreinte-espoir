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
 *  - Sans photo, une illustration aux couleurs du projet s'affiche.
 *
 *  ⚠ Les futurs projets ci-dessous sont des EXEMPLES à remplacer.
 *    Tant que demo vaut true, un bandeau l'indique sur le site.
 * ============================================================
 */
window.SITE = {
  demo: true,

  nom: "Empreinte d'Espoir",
  slogan: "Laisser une trace durable là où l'espoir manque.",
  // Code de devise : "EUR" (euro) ou "XOF" (franc CFA)
  devise: "EUR",

  // Mots qui défilent dans le grand titre : « Ensemble, apportons … »
  motsHero: ["l'eau potable", "l'éducation", "la santé", "l'espoir"],

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

  // Icônes disponibles : drop, book, health, bowl, home, heart, leaf, hands, eye, target
  domaines: [
    { nom: "Accès à l'eau", icone: "drop", texte: "Puits, forages et points d'eau potable pour les villages." },
    { nom: "Éducation", icone: "book", texte: "Fournitures, salles de classe et soutien aux élèves." },
    { nom: "Santé", icone: "health", texte: "Équipement des cases de santé et accès aux soins." },
    { nom: "Alimentation", icone: "bowl", texte: "Colis alimentaires pour les familles en difficulté." },
    { nom: "Soutien aux familles", icone: "home", texte: "Aide d'urgence et accompagnement des foyers fragiles." },
  ],

  valeurs: [
    { nom: "Solidarité", icone: "hands", texte: "Nous agissons ensemble, avec et pour les communautés." },
    { nom: "Transparence", icone: "eye", texte: "Chaque don est tracé, chaque dépense est publiée." },
    { nom: "Sincérité", icone: "heart", texte: "Des engagements honnêtes, tenus jusqu'au bout." },
    { nom: "Durabilité", icone: "leaf", texte: "Des réalisations pensées pour durer dans le temps." },
    { nom: "Impact", icone: "target", texte: "Des résultats concrets, mesurés et partagés." },
  ],

  // « Comment ça marche » sur la page d'accueil
  etapes: [
    { titre: "Identifier un besoin", icone: "search", texte: "Nos référents locaux recensent les besoins avec les communautés." },
    { titre: "Collecter les fonds", icone: "coin", texte: "Chaque projet a sa cagnotte, avec un objectif clair et public." },
    { titre: "Réaliser sur le terrain", icone: "tool", texte: "Les travaux et distributions sont menés avec des acteurs locaux." },
    { titre: "Rendre des comptes", icone: "camera", texte: "Photos avant / pendant / après et dépenses publiées sur ce site." },
  ],

  // Citations qui défilent sur la page d'accueil
  citations: [
    { texte: "Nit nittay garabam.", traduction: "L'homme est le remède de l'homme.", source: "Proverbe wolof" },
    { texte: "Seul on va plus vite, ensemble on va plus loin.", source: "Proverbe africain" },
    { texte: "Il faut tout un village pour élever un enfant.", source: "Proverbe africain" },
    { texte: "Quand les toiles d'araignée s'unissent, elles peuvent attacher un lion.", source: "Proverbe éthiopien" },
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
  // collecte = montant déjà reçu pour ce projet (à mettre à jour à chaque don)
  projetsFuturs: [
    {
      id: "puits-village",
      titre: "Forage d'un puits pour un village",
      lieu: "Région de Kaolack, Sénégal",
      type: "Accès à l'eau",
      beneficiaires: 800,
      budget: 9000,
      collecte: 0,
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
      collecte: 0,
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
      collecte: 0,
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
  // Vide pour l'instant : la page affiche « Nos premières réalisations arrivent bientôt ».
  // Quand un projet est terminé, ajouter un bloc sur ce modèle :
  //
  // {
  //   id: "puits-village",
  //   titre: "Forage d'un puits pour un village",
  //   lieu: "Région de Kaolack, Sénégal",
  //   type: "Accès à l'eau",
  //   date: "Mai 2027",
  //   beneficiaires: 800,
  //   description: "Ce qui a été fait.",
  //   resultat: "Le résultat concret pour les bénéficiaires.",
  //   depenses: [
  //     { poste: "Forage", montant: 6000 },
  //     { poste: "Pompe manuelle", montant: 2500 },
  //   ],
  //   photos: {
  //     avant: ["assets/img/projets/puits-avant.jpg"],
  //     pendant: ["assets/img/projets/puits-pendant.jpg"],
  //     apres: ["assets/img/projets/puits-apres.jpg"],
  //   },
  // },
  projetsRealises: [],
};
