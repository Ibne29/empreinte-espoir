/*
 * ============================================================
 *  CONTENU DU SITE : Association Empreinte d'Espoir
 * ============================================================
 *  C'est le SEUL fichier à modifier pour mettre à jour le site :
 *  textes, projets, montants collectés, photos, contacts.
 *
 *  - Les montants sont en euros, sans espace : 370
 *    Le site affiche automatiquement l'équivalent en francs CFA
 *    (taux fixe : 1 € = 655,957 F CFA).
 *  - Les dates sont libres : "Janvier 2027", "Mars à juin 2027"...
 *  - Les photos se placent dans assets/img/projets/ puis on
 *    indique leur chemin : "assets/img/projets/repas-avant.jpg"
 *  - Sans photo, une illustration aux couleurs du projet s'affiche.
 *
 *  ATTENTION : les futurs projets ci-dessous sont des EXEMPLES.
 *  Leurs budgets sont des estimations faites à partir des prix
 *  courants au Sénégal, à vérifier sur place.
 *  Tant que demo vaut true, un bandeau l'indique sur le site.
 * ============================================================
 */
window.SITE = {
  demo: true,

  nom: "Empreinte d'Espoir",
  slogan: "Une aide concrète pour les enfants talibés du Sénégal.",
  // Texte sous le grand titre de la page d'accueil
  accroche:
    "Au Sénégal, des milliers d'enfants des écoles coraniques mendient chaque jour dans la rue. Nous leur apportons une aide concrète, projet par projet.",
  // Monnaie dans laquelle les montants sont saisis : "EUR" (euro) ou "XOF" (franc CFA).
  // L'autre monnaie s'affiche à côté, entre parenthèses.
  devise: "EUR",

  // Fin du grand titre, qui change toutes les 3 secondes : « Offrons aux enfants talibés … »
  motsHero: ["un repas chaud", "des soins", "une moustiquaire", "de l'espoir"],

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
      "Empreinte d'Espoir est une association de bénévoles. Nous avons décidé d'agir pour les enfants talibés que l'on croise chaque jour dans les rues du Sénégal. Nous commençons petit, avec des projets concrets et chiffrés, et nous publions chacune de nos dépenses.",
    mission:
      "Aider les enfants talibés à manger à leur faim, à se soigner, à dormir dans de meilleures conditions et à apprendre.",
    organisation:
      "L'association est gérée par un bureau de bénévoles. Les décisions de financement sont prises ensemble, et chaque projet a un responsable sur place.",
  },

  // Section « Qui sont les enfants talibés ? »
  talibes: {
    intro:
      "Au Sénégal, beaucoup de familles confient leurs garçons à un maître coranique pour qu'ils apprennent le Coran dans un daara. Ces élèves s'appellent les talibés. De nombreux maîtres prennent soin d'eux. Mais dans d'autres daaras, les enfants doivent mendier chaque jour pour rapporter de l'argent, du riz ou du sucre. Ils mangent peu, manquent de savon et de moustiquaires, et dorment sur des nattes posées sur le sable.",
    chiffres: [
      { valeur: "Plus de 100 000", texte: "enfants talibés obligés de mendier chaque jour au Sénégal." },
      { valeur: "100 à 1 250 F CFA", texte: "la somme que la plupart des talibés interrogés devaient rapporter chaque jour à leur maître." },
      { valeur: "13 daaras sur 22", texte: "visités par les enquêteurs donnaient peu ou pas de nourriture aux enfants." },
    ],
    source: {
      texte: "Chiffres : Human Rights Watch, rapport publié en juin 2019.",
      lien: "https://www.hrw.org/fr/news/2019/06/11/senegal-des-abus-incontroles-dans-des-ecoles-coraniques",
    },
  },

  // Icônes disponibles : bowl, health, home, book, drop, heart, leaf, hands, eye, target
  domaines: [
    { nom: "Repas", icone: "bowl", texte: "Des repas chauds pour des enfants qui mangent souvent ce qu'on leur donne dans la rue." },
    { nom: "Santé et hygiène", icone: "health", texte: "Du savon, des soins contre la gale et les plaies, des moustiquaires contre le paludisme." },
    { nom: "Couchage", icone: "home", texte: "Des nattes et des couvertures pour ne plus dormir à même le sol." },
    { nom: "Éducation", icone: "book", texte: "Des cahiers et des cours de lecture et de calcul, en plus de l'enseignement coranique." },
  ],

  valeurs: [
    { nom: "Solidarité", icone: "hands", texte: "Aider les enfants, avec les personnes qui les entourent." },
    { nom: "Transparence", icone: "eye", texte: "Chaque don et chaque dépense sont publiés sur ce site." },
    { nom: "Sincérité", icone: "heart", texte: "Nous ne promettons que ce que nous pouvons tenir." },
    { nom: "Durabilité", icone: "leaf", texte: "Des actions qui continuent de servir après notre passage." },
    { nom: "Impact", icone: "target", texte: "Nous comptons les enfants aidés et nous le montrons." },
  ],

  // Section « Comment nous travaillons »
  etapes: [
    { titre: "Aller à la rencontre", icone: "search", texte: "Nous rencontrons les maîtres coraniques et les enfants pour connaître leurs besoins." },
    { titre: "Collecter", icone: "coin", texte: "Chaque projet a sa cagnotte et un objectif chiffré." },
    { titre: "Agir sur place", icone: "tool", texte: "Les achats se font au Sénégal et nos bénévoles assurent la distribution." },
    { titre: "Rendre compte", icone: "camera", texte: "Photos, dépenses et nombre d'enfants aidés sont publiés ici." },
  ],

  // Proverbes qui défilent sur la page d'accueil
  citations: [
    { texte: "Nit nittay garabam.", traduction: "L'homme est le remède de l'homme.", source: "Proverbe wolof" },
    { texte: "Il faut tout un village pour élever un enfant.", source: "Proverbe africain" },
    { texte: "Seul on va plus vite, ensemble on va plus loin.", source: "Proverbe africain" },
  ],

  zones: [
    { nom: "Dakar", detail: "Quartier à préciser" },
    { nom: "Thiès", detail: "Quartier à préciser" },
    { nom: "Saint-Louis", detail: "Quartier à préciser" },
  ],

  equipe: [
    { nom: "Prénom Nom", role: "Président(e)" },
    { nom: "Prénom Nom", role: "Secrétaire général(e)" },
    { nom: "Prénom Nom", role: "Trésorier(ère)" },
    { nom: "Prénom Nom", role: "Responsable des projets" },
  ],

  // ---------- 2. FUTURS PROJETS (alimentent aussi la cagnotte) ----------
  // collecte = montant déjà reçu pour ce projet (à mettre à jour à chaque don)
  // exemple = ce que permet un petit don, affiché sous la barre de collecte
  projetsFuturs: [
    {
      id: "repas-vendredi",
      titre: "Un repas chaud chaque vendredi",
      lieu: "Dakar",
      type: "Repas",
      beneficiaires: 50,
      // 12 repas x 20 000 F CFA (environ 400 F CFA par enfant) = 240 000 F CFA, soit 366 €
      budget: 370,
      collecte: 0,
      description:
        "Un repas chaud (riz, poisson et légumes) chaque vendredi pendant trois mois pour les 50 enfants d'un daara. Le repas est préparé sur place par une cuisinière du quartier.",
      image: "",
      lienDon: "", // lien spécifique à ce projet (sinon lien principal)
      exemple: { montant: 5, texte: "un enfant reçoit un repas chaud chaque vendredi pendant deux mois" },
      calendrier: [
        { etape: "Choix du daara et de la cuisinière", date: "Décembre 2026" },
        { etape: "Un repas chaud chaque vendredi", date: "Janvier à mars 2027" },
        { etape: "Bilan publié sur le site", date: "Avril 2027" },
      ],
    },
    {
      id: "hygiene-soins",
      titre: "Savon, hygiène et soins",
      lieu: "Thiès",
      type: "Santé et hygiène",
      beneficiaires: 50,
      // 50 kits x 3 000 F CFA + soins de la gale 75 000 + infirmier 20 000 + bassines et seaux 15 000
      // = 260 000 F CFA, soit 396 €
      budget: 400,
      collecte: 0,
      description:
        "Un kit pour chaque enfant (savon, brosse à dents, dentifrice, serviette), des bassines et des seaux pour le daara, et le passage d'un infirmier pour soigner la gale et les plaies.",
      image: "",
      lienDon: "",
      exemple: { montant: 5, texte: "vous offrez un kit d'hygiène complet à un enfant" },
      calendrier: [
        { etape: "Achat des kits et des produits", date: "Janvier 2027" },
        { etape: "Distribution et premiers soins", date: "Février 2027" },
        { etape: "Deuxième passage de l'infirmier", date: "Mars 2027" },
      ],
    },
    {
      id: "moustiquaires-nattes",
      titre: "Moustiquaires et nattes",
      lieu: "Saint-Louis",
      type: "Couchage",
      beneficiaires: 40,
      // 40 moustiquaires x 3 500 F CFA + 20 nattes x 3 000 F CFA = 200 000 F CFA, soit 305 €
      budget: 310,
      collecte: 0,
      description:
        "40 moustiquaires imprégnées et 20 nattes neuves pour un daara, avant la saison des pluies, période où le paludisme progresse.",
      image: "",
      lienDon: "",
      exemple: { montant: 6, texte: "un enfant dort sous une moustiquaire imprégnée" },
      calendrier: [
        { etape: "Recensement des enfants du daara", date: "Avril 2027" },
        { etape: "Achat et distribution", date: "Juin 2027" },
        { etape: "Vérification sur place", date: "Septembre 2027" },
      ],
    },
  ],

  // ---------- 3. PROJETS RÉALISÉS ----------
  // Vide pour l'instant : la page affiche « Nos premiers projets sont en préparation ».
  // Quand un projet est terminé, ajouter un bloc sur ce modèle :
  //
  // {
  //   id: "repas-vendredi",
  //   titre: "Un repas chaud chaque vendredi",
  //   lieu: "Dakar",
  //   type: "Repas",
  //   date: "Avril 2027",
  //   beneficiaires: 50,
  //   description: "Ce qui a été fait.",
  //   resultat: "Le résultat concret pour les enfants.",
  //   depenses: [
  //     { poste: "Riz, poisson et légumes", montant: 280 },
  //     { poste: "Gaz et cuisinière", montant: 85 },
  //   ],
  //   photos: {
  //     avant: ["assets/img/projets/repas-avant.jpg"],
  //     pendant: ["assets/img/projets/repas-pendant.jpg"],
  //     apres: ["assets/img/projets/repas-apres.jpg"],
  //   },
  // },
  projetsRealises: [],
};
