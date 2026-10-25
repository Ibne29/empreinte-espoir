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
 *    indique leur chemin : "assets/img/projets/puits-avant.jpg"
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
  slogan: "Enfants talibés et eau potable au Sénégal.",
  // Texte sous le grand titre de la page d'accueil
  accroche:
    "Au Sénégal, nous aidons les enfants talibés qui mendient dans la rue et les villages qui manquent d'eau potable. Chaque projet a un budget précis, et nous publions chaque dépense.",
  // Monnaie dans laquelle les montants sont saisis : "EUR" (euro) ou "XOF" (franc CFA).
  // L'autre monnaie s'affiche à côté, entre parenthèses.
  devise: "EUR",

  // Fin du grand titre, qui change toutes les 3 secondes : « Ensemble, offrons … »
  motsHero: ["de l'eau potable", "un repas chaud", "des soins", "un puits", "de l'espoir"],

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
      "Empreinte d'Espoir est une association de bénévoles. Nous agissons au Sénégal pour deux causes : les enfants talibés que l'on croise chaque jour dans la rue, et les villages qui n'ont pas d'eau potable. Nous commençons petit, avec des projets précis, et nous publions chacune de nos dépenses.",
    mission:
      "Aider les enfants talibés à manger, se soigner, dormir et apprendre dans de bonnes conditions, et donner aux villages un accès durable à l'eau potable.",
    organisation:
      "L'association est gérée par un bureau de bénévoles. Les décisions de financement sont prises ensemble, et chaque projet a un responsable sur place.",
  },

  // Les deux causes de l'association. Chaque projet est rattaché à l'une d'elles (champ cause).
  causes: {
    talibes: {
      nom: "Enfants talibés",
      titre: "Qui sont les enfants talibés ?",
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
    eau: {
      nom: "Eau potable",
      titre: "L'eau potable dans les villages",
      intro:
        "Dans beaucoup de villages, l'eau à boire vient encore d'un puits ouvert ou abîmé. Elle est exposée à la poussière, aux eaux de pluie qui ruissellent et aux animaux, et rend malades les enfants en premier. Quand le puits s'assèche à la saison sèche, il faut marcher loin pour trouver de l'eau. Réparer un puits ou en creuser un nouveau change la vie de tout un village.",
      chiffres: [
        { valeur: "23,4 %", texte: "des ménages ruraux boivent l'eau d'une source non protégée, contre 4 % en ville." },
        { valeur: "99,5 %", texte: "de ces sources non protégées sont des puits ouverts, exposés au ruissellement et aux saletés." },
        { valeur: "17,3 %", texte: "des ménages ruraux mettent au moins 30 minutes pour aller chercher l'eau à boire." },
      ],
      source: {
        texte: "Chiffres : ANSD, Situation économique et sociale du Sénégal 2019 (enquête EDS-Continue 2019).",
        lien: "https://www.vie-publique.sn/documents/10231/eau-et-assainissement-situation-economique-et-sociale-senegal-2019-ansd",
      },
    },
  },

  // Icônes disponibles : drop, bowl, health, home, book, heart, leaf, hands, eye, target
  // Les 3 premiers domaines flottent autour du logo sur la page d'accueil.
  domaines: [
    { nom: "Eau potable", icone: "drop", texte: "Construction et réparation de puits pour les villages qui n'ont pas d'eau propre." },
    { nom: "Repas", icone: "bowl", texte: "Des repas chauds pour des enfants qui mangent souvent ce qu'on leur donne dans la rue." },
    { nom: "Santé et hygiène", icone: "health", texte: "Du savon, des soins contre la gale et les plaies, des moustiquaires contre le paludisme." },
    { nom: "Couchage", icone: "home", texte: "Des nattes et des couvertures pour ne plus dormir à même le sol." },
    { nom: "Éducation", icone: "book", texte: "Des cahiers et des cours de lecture et de calcul, en plus de l'enseignement coranique." },
  ],

  valeurs: [
    { nom: "Solidarité", icone: "hands", texte: "Agir avec les habitants, les familles et les maîtres coraniques." },
    { nom: "Transparence", icone: "eye", texte: "Chaque don et chaque dépense sont publiés sur ce site." },
    { nom: "Sincérité", icone: "heart", texte: "Nous ne promettons que ce que nous pouvons tenir." },
    { nom: "Durabilité", icone: "leaf", texte: "Des puits entretenus et des actions qui continuent de servir après notre passage." },
    { nom: "Impact", icone: "target", texte: "Nous comptons les personnes aidées et nous le montrons." },
  ],

  // Section « Comment nous travaillons »
  etapes: [
    { titre: "Aller à la rencontre", icone: "search", texte: "Nous rencontrons les villages, les maîtres coraniques et les enfants pour connaître leurs besoins." },
    { titre: "Collecter", icone: "coin", texte: "Chaque projet a sa cagnotte et un objectif chiffré." },
    { titre: "Agir sur place", icone: "tool", texte: "Les travaux sont confiés à des artisans locaux et nos bénévoles assurent les distributions." },
    { titre: "Rendre compte", icone: "camera", texte: "Photos, dépenses et nombre de personnes aidées sont publiés ici." },
  ],

  // Proverbes qui défilent sur la page d'accueil
  citations: [
    { texte: "Nit nittay garabam.", traduction: "L'homme est le remède de l'homme.", source: "Proverbe wolof" },
    { texte: "Il faut tout un village pour élever un enfant.", source: "Proverbe africain" },
    { texte: "Seul on va plus vite, ensemble on va plus loin.", source: "Proverbe africain" },
  ],

  zones: [
    { nom: "Dakar", detail: "Enfants talibés" },
    { nom: "Thiès", detail: "Enfants talibés" },
    { nom: "Saint-Louis", detail: "Enfants talibés" },
    { nom: "Région de Kaffrine", detail: "Eau potable, villages à préciser" },
    { nom: "Région de Tambacounda", detail: "Eau potable, villages à préciser" },
  ],

  equipe: [
    { nom: "Prénom Nom", role: "Président(e)" },
    { nom: "Prénom Nom", role: "Secrétaire général(e)" },
    { nom: "Prénom Nom", role: "Trésorier(ère)" },
    { nom: "Prénom Nom", role: "Responsable des projets" },
  ],

  // ---------- 2. FUTURS PROJETS (alimentent aussi la cagnotte) ----------
  // cause = "talibes" ou "eau" (sert aux filtres des pages Projets et Cagnotte)
  // unite = "enfants" par défaut, ou "habitants" pour un village
  // collecte = montant déjà reçu pour ce projet (à mettre à jour à chaque don)
  // exemple = ce que permet un petit don, affiché sous la barre de collecte
  projetsFuturs: [
    {
      id: "repas-vendredi",
      cause: "talibes",
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
      id: "reparer-puits",
      cause: "eau",
      titre: "Réparer le puits d'un village",
      lieu: "Région de Kaffrine",
      type: "Eau potable",
      beneficiaires: 200,
      unite: "habitants",
      // Puisatiers (curage et approfondissement) 120 000 + réparation des parois 50 000
      // + ciment, fer, sable et gravier 90 000 + couvercle et poulie 60 000
      // + transport 20 000 + analyse de l'eau 15 000 = 355 000 F CFA, soit 541 €
      budget: 550,
      collecte: 0,
      description:
        "Le puits du village est abîmé et ouvert, et l'eau baisse à la saison sèche. Des puisatiers le nettoient et le creusent plus profond, puis une margelle en béton et un couvercle protègent l'eau des saletés et des animaux.",
      image: "",
      lienDon: "",
      exemple: { montant: 3, texte: "un habitant du village a accès à une eau propre" },
      calendrier: [
        { etape: "Visite du puits avec les habitants", date: "Janvier 2027" },
        { etape: "Nettoyage et approfondissement, en fin de saison sèche", date: "Avril 2027" },
        { etape: "Margelle, couvercle et analyse de l'eau", date: "Mai 2027" },
      ],
    },
    {
      id: "hygiene-soins",
      cause: "talibes",
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
      id: "construire-puits",
      cause: "eau",
      titre: "Construire un puits",
      lieu: "Région de Tambacounda",
      type: "Eau potable",
      beneficiaires: 300,
      unite: "habitants",
      // Puits creusé à la main (environ 15 à 20 m) : équipe de puisatiers 250 000
      // + ciment 160 000 + fer à béton 80 000 + sable et gravier 60 000 + buses 70 000
      // + margelle, couvercle et poulie 70 000 + transport 60 000 + analyse de l'eau 15 000
      // = 765 000 F CFA, soit 1 166 €. Plus cher si la nappe d'eau est profonde.
      budget: 1200,
      collecte: 0,
      description:
        "Un village sans point d'eau proche. Une équipe de puisatiers creuse un puits à la main, avec des parois en béton, une margelle et un couvercle. Un comité d'habitants est formé pour l'entretenir.",
      image: "",
      lienDon: "",
      exemple: { montant: 4, texte: "un habitant du village a de l'eau potable près de chez lui" },
      calendrier: [
        { etape: "Choix de l'emplacement avec le village", date: "Février 2027" },
        { etape: "Creusement et pose des parois en béton", date: "Mars à mai 2027" },
        { etape: "Mise en service et comité d'entretien", date: "Juin 2027" },
      ],
    },
    {
      id: "moustiquaires-nattes",
      cause: "talibes",
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
  //   id: "reparer-puits",
  //   cause: "eau",
  //   titre: "Réparer le puits d'un village",
  //   lieu: "Région de Kaffrine",
  //   type: "Eau potable",
  //   date: "Mai 2027",
  //   beneficiaires: 200,
  //   unite: "habitants",
  //   description: "Ce qui a été fait.",
  //   resultat: "Le résultat concret pour les habitants.",
  //   depenses: [
  //     { poste: "Puisatiers", montant: 185 },
  //     { poste: "Ciment, fer, sable et gravier", montant: 140 },
  //   ],
  //   photos: {
  //     avant: ["assets/img/projets/puits-avant.jpg"],
  //     pendant: ["assets/img/projets/puits-pendant.jpg"],
  //     apres: ["assets/img/projets/puits-apres.jpg"],
  //   },
  // },
  projetsRealises: [],
};
