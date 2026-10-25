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
 *  Le budget de chaque projet est calculé tout seul à partir de
 *  son détail (detailBudget) et de la marge pour les imprévus
 *  (imprevus, en %). Chaque ligne peut citer une source de prix
 *  (voir la liste « sources » plus bas). Prix à vérifier sur place.
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

  // ---------- SOURCES DES PRIX ----------
  // Citées dans le détail des budgets (champ source de chaque ligne).
  sources: {
    riz: {
      texte: "Riz brisé ordinaire : 300 F CFA le kilo à Dakar depuis le 6 janvier 2026 (Primature du Sénégal).",
      lien: "https://www.primature.sn/publications/communiques-officiels/baisse-du-prix-du-riz-ordinaire-brise",
    },
    huile: {
      texte: "Huile raffinée : prix officiel de 1 000 F CFA la bouteille au détail, fixé en juin 2024 (Conseil national de la consommation). Les prix des marchés sont souvent plus élevés, nous comptons 1 300 F CFA le litre.",
      lien: "https://www.ndarinfo.com/Pain-ciment-riz-huile-Les-prix-officiels-devoiles-par-le-Conseil-national-de-la-consommation_a38485.html",
    },
    ciment: {
      texte: "Ciment : 3 550 F CFA le sac au prix distributeur fixé en juin 2024 (Conseil national de la consommation). Plus cher dans les régions éloignées, nous comptons 4 000 F CFA le sac.",
      lien: "https://www.ndarinfo.com/Pain-ciment-riz-huile-Les-prix-officiels-devoiles-par-le-Conseil-national-de-la-consommation_a38485.html",
    },
    gaz: {
      texte: "Bouteille de gaz butane de 6 kg : 2 885 F CFA depuis le 6 décembre 2025 (Commission de régulation du secteur de l'énergie).",
      lien: "https://fr.allafrica.com/stories/202512080378.html",
    },
    smig: {
      texte: "Salaire minimum (SMIG) : 370,526 F CFA de l'heure depuis le 1er juillet 2023, soit environ 3 000 F CFA pour une journée de 8 heures. Nous comptons 5 000 F CFA par jour pour une cuisinière et 7 500 F CFA pour un puisatier, ouvrier qualifié.",
      lien: "https://support.payspace.com/portal/en/kb/articles/senegal-increase-in-transport-allowance-and-smig",
    },
    moustiquaire: {
      texte: "Moustiquaire imprégnée : environ 2 dollars pièce en achat groupé par les grandes organisations (Against Malaria Foundation). Achetée sur place en petite quantité, elle coûte plus cher, nous comptons 4 500 F CFA.",
      lien: "https://www.againstmalaria.com/DollarsPerNet.aspx",
    },
    puitsUnicef: {
      texte: "Puits creusé à la main avec parois en béton : de 2 500 à 10 000 dollars selon le terrain, 1 à 3 mois de travaux, en saison sèche uniquement (UNICEF et Practica, note technique n° 3, 2009).",
      lien: "https://www.ri.org//content/uploads/2019/08/Selection-of-Well-Construction-Methods.pdf",
    },
    puitsAsso: {
      texte: "Exemple d'une autre association : 850 € par puits villageois simple au Sénégal, matériel, transport et équipe de 5 puisatiers compris (Vie Sans Frontières).",
      lien: "https://www.helloasso.com/associations/vie-sans-frontieres/collectes/we-care-about-water",
    },
  },

  // ---------- 2. FUTURS PROJETS (alimentent aussi la cagnotte) ----------
  // cause = "talibes" ou "eau" (sert aux filtres des pages Projets et Cagnotte)
  // unite = "enfants" par défaut, ou "habitants" pour un village
  // detailBudget = lignes du budget en euros ; source = clé de la liste « sources » ci-dessus
  // imprevus = marge en % ajoutée au total des lignes (le budget final est arrondi à la dizaine)
  // reperes = sources de comparaison citées sous le détail du budget (facultatif)
  // collecte = montant déjà reçu pour ce projet (à mettre à jour à chaque don)
  // exemple = ce que permet un don, affiché sous la barre de collecte
  projetsFuturs: [
    {
      id: "repas-vendredi",
      cause: "talibes",
      titre: "Un repas chaud chaque vendredi",
      lieu: "Dakar",
      type: "Repas",
      beneficiaires: 50,
      imprevus: 15,
      detailBudget: [
        { poste: "Riz : 130 kg à 300 F CFA le kilo", montant: 60, source: "riz" },
        { poste: "Poisson ou poulet : 6 kg par repas à 2 500 F CFA le kilo", montant: 300 },
        { poste: "Légumes, oignons, tomate et épices : 6 000 F CFA par repas", montant: 120 },
        { poste: "Huile : 1,5 litre par repas", montant: 40, source: "huile" },
        { poste: "Gaz : une bouteille de 6 kg par repas", montant: 60, source: "gaz" },
        { poste: "Cuisinière et aide : 5 000 F CFA chacune par repas", montant: 200, source: "smig" },
        { poste: "Marmites, bols et louches (achat unique)", montant: 95 },
        { poste: "Transport et suivi par un bénévole", montant: 65 },
      ],
      collecte: 0,
      description:
        "Un repas chaud (riz, poisson ou poulet, légumes) chaque vendredi pendant trois mois, soit 13 repas, pour les 50 enfants d'un daara. Le repas est préparé sur place par une cuisinière du quartier.",
      image: "",
      lienDon: "", // lien spécifique à ce projet (sinon lien principal)
      exemple: { montant: 10, texte: "un enfant reçoit un repas chaud chaque vendredi pendant un mois et demi" },
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
      imprevus: 20,
      detailBudget: [
        { poste: "Puisatiers : 4 ouvriers pendant 15 jours à 7 500 F CFA par jour", montant: 690, source: "smig" },
        { poste: "Location d'une motopompe pour vider et nettoyer le puits", montant: 95 },
        { poste: "Ciment : 25 sacs à 4 000 F CFA", montant: 155, source: "ciment" },
        { poste: "Fer à béton, sable et gravier", montant: 215 },
        { poste: "Margelle, dalle, couvercle métallique et poulie", montant: 230 },
        { poste: "Transport des matériaux et de l'équipe", montant: 155 },
        { poste: "Désinfection du puits et analyse de l'eau en laboratoire", montant: 95 },
      ],
      collecte: 0,
      description:
        "Le puits du village est abîmé et ouvert, et l'eau baisse à la saison sèche. Des puisatiers le vident, le nettoient et le creusent plus profond, puis une margelle en béton et un couvercle protègent l'eau des saletés et des animaux.",
      image: "",
      lienDon: "",
      exemple: { montant: 10, texte: "un habitant du village a accès à une eau propre" },
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
      imprevus: 15,
      detailBudget: [
        { poste: "Kits d'hygiène : savon, brosse à dents, dentifrice, serviette, coupe-ongles (5 000 F CFA le kit)", montant: 385 },
        { poste: "Savon pour trois mois : un savon par enfant et par semaine", montant: 325 },
        { poste: "Médicaments contre la gale et pour les plaies", montant: 230 },
        { poste: "Infirmier : trois passages au daara", montant: 115 },
        { poste: "Bassines, seaux, bouilloires et poubelles", montant: 95 },
        { poste: "Transport et suivi par un bénévole", montant: 65 },
      ],
      collecte: 0,
      description:
        "Un kit pour chaque enfant (savon, brosse à dents, dentifrice, serviette), du savon pour trois mois, des bassines et des seaux pour le daara, et trois passages d'un infirmier pour soigner la gale et les plaies.",
      image: "",
      lienDon: "",
      exemple: { montant: 15, texte: "un enfant reçoit un kit d'hygiène et du savon pour trois mois" },
      calendrier: [
        { etape: "Achat des kits et des produits", date: "Janvier 2027" },
        { etape: "Distribution et premiers soins", date: "Février 2027" },
        { etape: "Deuxième et troisième passages de l'infirmier", date: "Mars et avril 2027" },
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
      imprevus: 20,
      detailBudget: [
        { poste: "Équipe de 5 puisatiers pendant 40 jours à 7 500 F CFA par jour", montant: 2290, source: "smig" },
        { poste: "Ciment : 120 sacs à 4 000 F CFA pour les parois et la margelle", montant: 735, source: "ciment" },
        { poste: "Fer à béton", montant: 385 },
        { poste: "Sable et gravier", montant: 305 },
        { poste: "Location des moules et de l'outillage", montant: 230 },
        { poste: "Margelle, couvercle, poulie, seaux et cordes", montant: 230 },
        { poste: "Transport des matériaux et de l'équipe", montant: 385 },
        { poste: "Analyse de l'eau en laboratoire", montant: 80 },
        { poste: "Formation du comité d'entretien et caisse pour les réparations", montant: 95 },
      ],
      // Repères de coût cités sous le détail du budget
      reperes: ["puitsUnicef", "puitsAsso"],
      collecte: 0,
      description:
        "Un village sans point d'eau proche. Une équipe de puisatiers creuse un puits à la main d'environ 25 mètres, avec des parois en béton, une margelle et un couvercle. Un comité d'habitants est formé pour l'entretenir. Si l'eau est plus profonde que prévu, le coût augmente : c'est pour cela que la marge pour les imprévus est de 20 %.",
      image: "",
      lienDon: "",
      exemple: { montant: 20, texte: "un habitant du village a de l'eau potable près de chez lui" },
      calendrier: [
        { etape: "Choix de l'emplacement avec le village", date: "Février 2027" },
        { etape: "Creusement et pose des parois en béton, en saison sèche", date: "Mars à mai 2027" },
        { etape: "Mise en service et comité d'entretien", date: "Juin 2027" },
      ],
    },
    {
      id: "moustiquaires-nattes",
      cause: "talibes",
      titre: "Moustiquaires, nattes et couvertures",
      lieu: "Saint-Louis",
      type: "Couchage",
      beneficiaires: 40,
      imprevus: 15,
      detailBudget: [
        { poste: "Moustiquaires imprégnées : 40 à 4 500 F CFA", montant: 275, source: "moustiquaire" },
        { poste: "Nattes : 20 à 5 000 F CFA (une pour deux enfants)", montant: 155 },
        { poste: "Couvertures : 40 à 4 000 F CFA", montant: 245 },
        { poste: "Cordes, crochets et installation", montant: 35 },
        { poste: "Transport et suivi par un bénévole", montant: 65 },
      ],
      collecte: 0,
      description:
        "40 moustiquaires imprégnées et 20 nattes avant la saison des pluies, période où le paludisme progresse, puis 40 couvertures avant les nuits fraîches de l'hiver.",
      image: "",
      lienDon: "",
      exemple: { montant: 7, texte: "un enfant dort sous une moustiquaire imprégnée" },
      calendrier: [
        { etape: "Recensement des enfants du daara", date: "Avril 2027" },
        { etape: "Moustiquaires et nattes", date: "Juin 2027" },
        { etape: "Couvertures avant les nuits fraîches", date: "Novembre 2027" },
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
