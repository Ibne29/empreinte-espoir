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
 *  (imprevus, en %). Ce détail n'est pas affiché sur le site.
 *  Tant que demo vaut true, un bandeau l'indique sur le site.
 * ============================================================
 */
window.SITE = {
  demo: true,

  nom: "Empreinte d'Espoir",
  slogan: "Enfants talibés et eau potable au Sénégal.",
  // Texte sous le grand titre de la page d'accueil
  accroche:
    "Au Sénégal, nous aidons les enfants talibés et les villages qui manquent d'eau potable. Chaque don va à un projet précis.",
  // Monnaie dans laquelle les montants sont saisis : "EUR" (euro) ou "XOF" (franc CFA).
  // L'autre monnaie s'affiche à côté, entre parenthèses.
  devise: "EUR",

  // Fin du grand titre, qui change toutes les 3 secondes : « Ensemble, offrons … »
  motsHero: ["de l'eau potable", "des soins", "un puits", "de l'espoir"],

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
      "Empreinte d'Espoir est une association de bénévoles qui agit au Sénégal pour deux causes : les enfants talibés et l'eau potable dans les villages. Nous commençons petit, avec des projets précis, et nous publions chacune de nos dépenses.",
    mission:
      "Améliorer la santé et les conditions de vie des enfants talibés, et donner aux villages un accès durable à l'eau potable.",
    organisation:
      "L'association est gérée par un bureau de bénévoles. Les décisions de financement sont prises ensemble, et chaque projet a un responsable sur place.",
  },

  // Les deux causes de l'association. Chaque projet est rattaché à l'une d'elles (champ cause).
  causes: {
    talibes: {
      nom: "Enfants talibés",
      titre: "Qui sont les enfants talibés ?",
      intro:
        "Au Sénégal, beaucoup de familles confient leurs garçons à un maître coranique pour qu'ils apprennent le Coran dans un daara : ce sont les talibés. De nombreux maîtres prennent soin d'eux, mais dans d'autres daaras, les enfants doivent mendier chaque jour, manquent de soins et dorment sur des nattes posées sur le sable.",
      chiffres: [
        { valeur: "Plus de 100 000", texte: "enfants talibés obligés de mendier chaque jour au Sénégal." },
        { valeur: "100 à 1 250 F CFA", texte: "la somme que la plupart des talibés interrogés devaient rapporter chaque jour à leur maître." },
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
        "Dans beaucoup de villages, l'eau à boire vient encore d'un puits ouvert ou abîmé, exposé à la poussière et aux animaux. Réparer un puits ou en creuser un nouveau change la vie de tout un village.",
      chiffres: [
        { valeur: "23,4 %", texte: "des ménages ruraux boivent l'eau d'une source non protégée, contre 4 % en ville." },
        { valeur: "17,3 %", texte: "des ménages ruraux mettent au moins 30 minutes pour aller chercher l'eau à boire." },
      ],
      source: {
        texte: "Chiffres : ANSD, Situation économique et sociale du Sénégal 2019 (enquête EDS-Continue 2019).",
        lien: "https://www.vie-publique.sn/documents/10231/eau-et-assainissement-situation-economique-et-sociale-senegal-2019-ansd",
      },
    },
  },

  // Domaines d'action : les 3 premiers flottent autour du logo, tous défilent dans le bandeau doré.
  // Icônes disponibles : drop, bowl, health, home, book, heart, leaf, hands, eye, target
  domaines: [
    { nom: "Eau potable", icone: "drop" },
    { nom: "Santé et hygiène", icone: "health" },
    { nom: "Couchage", icone: "home" },
    { nom: "Éducation", icone: "book" },
  ],

  valeurs: [
    { nom: "Solidarité", icone: "hands", texte: "Agir avec les habitants, les familles et les maîtres coraniques." },
    { nom: "Transparence", icone: "eye", texte: "Chaque don et chaque dépense sont publiés sur ce site." },
    { nom: "Sincérité", icone: "heart", texte: "Nous ne promettons que ce que nous pouvons tenir." },
    { nom: "Durabilité", icone: "leaf", texte: "Des puits entretenus et des actions qui continuent de servir après notre passage." },
    { nom: "Impact", icone: "target", texte: "Nous comptons les personnes aidées et nous le montrons." },
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
  // detailBudget = calcul interne du budget en euros (non affiché sur le site)
  // imprevus = marge en % ajoutée au total des lignes (le budget final est arrondi à la dizaine)
  // calendrier = facultatif, à ajouter quand les dates sont fixées : [{ etape: "...", date: "Mars 2027" }]
  // collecte = montant déjà reçu pour ce projet (à mettre à jour à chaque don)
  // Les budgets et les bénéficiaires des futurs projets s'affichent avec « environ » : ce sont des estimations.
  projetsFuturs: [
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
        "Un kit d'hygiène et du savon pour trois mois pour chaque enfant, et trois passages d'un infirmier pour soigner la gale et les plaies.",
      image: "",
      lienDon: "",
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
        { poste: "Puisatiers : 4 ouvriers pendant 15 jours à 7 500 F CFA par jour", montant: 690 },
        { poste: "Location d'une motopompe pour vider et nettoyer le puits", montant: 95 },
        { poste: "Ciment : 25 sacs à 4 000 F CFA", montant: 155 },
        { poste: "Fer à béton, sable et gravier", montant: 215 },
        { poste: "Margelle, dalle, couvercle métallique et poulie", montant: 230 },
        { poste: "Transport des matériaux et de l'équipe", montant: 155 },
        { poste: "Désinfection du puits et analyse de l'eau en laboratoire", montant: 95 },
      ],
      collecte: 0,
      description:
        "Le puits du village est abîmé et ouvert. Des puisatiers le nettoient et le creusent plus profond, puis une margelle et un couvercle protègent l'eau.",
      image: "",
      lienDon: "",
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
        { poste: "Moustiquaires imprégnées : 40 à 4 500 F CFA", montant: 275 },
        { poste: "Nattes : 20 à 5 000 F CFA (une pour deux enfants)", montant: 155 },
        { poste: "Couvertures : 40 à 4 000 F CFA", montant: 245 },
        { poste: "Cordes, crochets et installation", montant: 35 },
        { poste: "Transport et suivi par un bénévole", montant: 65 },
      ],
      collecte: 0,
      description:
        "Des moustiquaires et des nattes avant la saison des pluies, puis des couvertures avant les nuits fraîches.",
      image: "",
      lienDon: "",
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
        { poste: "Équipe de 5 puisatiers pendant 40 jours à 7 500 F CFA par jour", montant: 2290 },
        { poste: "Ciment : 120 sacs à 4 000 F CFA pour les parois et la margelle", montant: 735 },
        { poste: "Fer à béton", montant: 385 },
        { poste: "Sable et gravier", montant: 305 },
        { poste: "Location des moules et de l'outillage", montant: 230 },
        { poste: "Margelle, couvercle, poulie, seaux et cordes", montant: 230 },
        { poste: "Transport des matériaux et de l'équipe", montant: 385 },
        { poste: "Analyse de l'eau en laboratoire", montant: 80 },
        { poste: "Formation du comité d'entretien et caisse pour les réparations", montant: 95 },
      ],
      collecte: 0,
      description:
        "Un puits d'environ 25 mètres, creusé à la main avec des parois en béton, pour un village sans point d'eau proche. Un comité d'habitants est formé pour l'entretenir.",
      image: "",
      lienDon: "",
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
