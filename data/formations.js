/* =====================================================================
   DONNÉES — FORMATIONS
   ---------------------------------------------------------------------
   ⚠️  CONTENU DE SIMULATION : les formations ci-dessous sont des
       EXEMPLES. Dates, durées, prix et nombre de places sont fictifs.

   👉 Pour publier une vraie formation :
      1. Remplacez les informations (titre, dates, prix…).
      2. Passez « exemple: true » à « exemple: false ».
         → le badge « Exemple – informations à venir » disparaît
           automatiquement de la page et la formation est ajoutée
           aux données structurées Google (Schema.org « Course »).
   Pour ajouter une formation : copiez un bloc { ... }, collez-le
   avant le « ]; » final et modifiez-le (sans oublier la virgule).
   ===================================================================== */

window.FORMATIONS = [
  {
    exemple: true,                                   // ⚠️ EXEMPLE – informations à venir
    id: "formation-taurumi",
    titre: "Formation au Taurumi",
    sousTitre: "Le massage traditionnel polynésien",
    image: "images/taurumi-pierres-mains-800.jpg",
    imageAlt: "Mains de praticienne posant des pierres chaudes sur un dos, entourées de fleurs blanches",
    description: "Apprenez les gestes, le rythme et l'esprit du Taurumi tahitien : postures de la praticienne, travail des avant-bras, utilisation du monoï et déroulé complet d'une séance. Une transmission rare en France, au plus près de la tradition polynésienne.",
    dates: "Du 15 au 19 mars 2027",                   // EXEMPLE
    duree: "5 jours (35 h)",                         // EXEMPLE
    prix: "650 €",                                   // EXEMPLE
    places: "6 places",                              // EXEMPLE
    lieu: "Salon – Les Mages",
    public: "Tous niveaux, aucun prérequis"
  },
  {
    exemple: true,                                   // ⚠️ EXEMPLE – informations à venir
    id: "formation-massage-bien-etre",
    titre: "Initiation au massage bien-être",
    sousTitre: "Les bases d'un massage relaxant à l'huile",
    image: "images/formation-mains-massage-800.jpg",
    imageAlt: "Mains de praticienne massant le dos d'une personne allongée",
    description: "Deux journées pour découvrir les fondamentaux : installation, posture, qualité du toucher, enchaînements simples inspirés du massage californien. Idéal pour masser vos proches ou débuter un parcours.",
    dates: "Les 17 et 18 avril 2027",                // EXEMPLE
    duree: "2 jours (14 h)",                         // EXEMPLE
    prix: "260 €",                                   // EXEMPLE
    places: "8 places",                              // EXEMPLE
    lieu: "Salon – Les Mages",
    public: "Débutant·es"
  }
];
