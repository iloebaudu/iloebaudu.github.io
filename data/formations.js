/* =====================================================================
   DONNÉES — FORMATIONS
   ---------------------------------------------------------------------
   ⚠️  CONTENU DE SIMULATION : les 5 formations ci-dessous sont des
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
    sousTitre: "Le massage traditionnel polynésien de Tahiti",
    image: "images/polynesie-coucher-soleil-plage-800.jpg",
    imageAlt: "Plage bordée de cocotiers au coucher du soleil, ambiance des îles",
    description: "Apprenez les gestes, le rythme et l'esprit du Taurumi tahitien : postures de la praticienne, travail des avant-bras, utilisation du monoï et déroulé complet d'une séance. Une transmission rare en France, au plus près de la tradition polynésienne.",
    dates: "Du 15 au 19 mars 2027",                   // EXEMPLE
    duree: "5 jours (35 h)",                          // EXEMPLE
    prix: "650 €",                                     // EXEMPLE
    places: "6 places",                                // EXEMPLE
    lieu: "Salon – Les Mages",
    public: "Tous niveaux, aucun prérequis"
  },
  {
    exemple: true,                                   // ⚠️ EXEMPLE – informations à venir
    id: "formation-lomi-lomi",
    titre: "Formation au Lomi-lomi",
    sousTitre: "Le massage traditionnel hawaïen",
    image: "images/lomi-lomi-hawaii-kauai-800.jpg",
    imageAlt: "Côte verdoyante de Kauai à Hawaï bordée par l'océan",
    description: "Découvrez les longs mouvements continus des avant-bras qui font la signature du Lomi-lomi, la fluidité des enchaînements et la philosophie hawaïenne qui l'accompagne.",
    dates: "Du 12 au 14 avril 2027",                  // EXEMPLE
    duree: "3 jours (21 h)",                          // EXEMPLE
    prix: "420 €",                                     // EXEMPLE
    places: "6 places",                                // EXEMPLE
    lieu: "Salon – Les Mages",
    public: "Tous niveaux"
  },
  {
    exemple: true,                                   // ⚠️ EXEMPLE – informations à venir
    id: "formation-californien",
    titre: "Formation au massage californien",
    sousTitre: "La douceur et l'art de l'effleurage",
    image: "images/formation-mains-massage-800.jpg",
    imageAlt: "Mains de praticienne massant le dos d'une personne allongée",
    description: "Les fondamentaux d'un massage relaxant à l'huile : installation, posture, qualité du toucher, lissages, pétrissages et enchaînements harmonieux sur l'ensemble du corps.",
    dates: "Les 17 et 18 mai 2027",                   // EXEMPLE
    duree: "2 jours (14 h)",                          // EXEMPLE
    prix: "260 €",                                     // EXEMPLE
    places: "8 places",                                // EXEMPLE
    lieu: "Salon – Les Mages",
    public: "Débutant·es"
  },
  {
    exemple: true,                                   // ⚠️ EXEMPLE – informations à venir
    id: "formation-thai",
    titre: "Formation au massage thaï",
    sousTitre: "Pressions et étirements au futon",
    image: "images/thai-temple-thailande-800.jpg",
    imageAlt: "Temple doré thaïlandais sous un ciel bleu",
    description: "Apprenez à pratiquer au sol, sur futon, un massage thaï traditionnel : pressions des paumes et des pouces, mobilisations, étirements et travail sur les lignes d'énergie.",
    dates: "Du 7 au 9 juin 2027",                     // EXEMPLE
    duree: "3 jours (21 h)",                          // EXEMPLE
    prix: "390 €",                                     // EXEMPLE
    places: "6 places",                                // EXEMPLE
    lieu: "Salon – Les Mages",
    public: "Tous niveaux"
  },
  {
    exemple: true,                                   // ⚠️ EXEMPLE – informations à venir
    id: "formation-pierres-chaudes",
    titre: "Formation au massage aux pierres chaudes",
    sousTitre: "Chaleur, pierres de basalte et lâcher-prise",
    image: "images/pierres-zen-nature-800.jpg",
    imageAlt: "Galets lisses empilés dans un décor naturel verdoyant",
    description: "Préparation et chauffe des pierres, règles de sécurité, pose des pierres et intégration des pierres dans un massage à l'huile complet.",
    dates: "Les 26 et 27 juin 2027",                  // EXEMPLE
    duree: "2 jours (14 h)",                          // EXEMPLE
    prix: "290 €",                                     // EXEMPLE
    places: "6 places",                                // EXEMPLE
    lieu: "Salon – Les Mages",
    public: "Personnes pratiquant déjà le massage"
  }
];
