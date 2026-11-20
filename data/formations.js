/* =====================================================================
   DONNÉES — FORMATIONS
   ---------------------------------------------------------------------
   Durées et tarifs fournis par Isabelle :
     - 3 jours, 630 €  : Taurumi, Lomi-lomi, californien, pierres chaudes
     - 4 jours, 840 €  : massage thaï, massage du ventre
     - tarifs adaptés pour les autofinancements (champ « financement »)

   👉 À compléter : « dates » (pour l'instant « À venir »).
      Vous pouvez aussi ajouter un champ « places: "6 places", » dans une formation :
      il s'affichera automatiquement.
   👉 « exemple: true » affiche le badge « Exemple – informations à venir »
      (à n'utiliser que pour une formation fictive).
   Pour ajouter une formation : copiez un bloc { ... }, collez-le
   avant le « ]; » final et modifiez-le (sans oublier la virgule).
   ===================================================================== */

window.FORMATIONS = [
  {
    exemple: false,
    id: "formation-taurumi",
    titre: "Formation au Taurumi",
    sousTitre: "Le massage traditionnel polynésien de Tahiti",
    image: "images/formation-taurumi-groupe-800.jpg",
    imageAlt: "Stagiaires en paréo assises en cercle, mains levées, lors d'une formation au Taurumi",
    description: "Apprenez les gestes, le rythme et l'esprit du Taurumi tahitien : postures de la praticienne, travail des avant-bras, utilisation du monoï et déroulé complet d'une séance. Une transmission rare en France, au plus près de la tradition polynésienne.",
    dates: "À venir",                                 // dates des prochaines sessions : à compléter
    duree: "3 jours",
    prix: "630 €",
    lieu: "Salon – Les Mages",
    public: "Tous niveaux, aucun prérequis",
    financement: "Tarifs adaptés pour les autofinancements"
  },
  {
    exemple: false,
    id: "formation-lomi-lomi",
    titre: "Formation au Lomi-lomi",
    sousTitre: "Le massage traditionnel hawaïen",
    image: "images/formation-lomi-lomi-table-800.jpg",
    imageAlt: "Praticienne en paréo près d'une table de massage, devant une tenture fleurie",
    description: "Découvrez les longs mouvements continus des avant-bras qui font la signature du Lomi-lomi, la fluidité des enchaînements et la philosophie hawaïenne qui l'accompagne.",
    dates: "À venir",                                 // dates des prochaines sessions : à compléter
    duree: "3 jours",
    prix: "630 €",
    lieu: "Salon – Les Mages",
    public: "Tous niveaux",
    financement: "Tarifs adaptés pour les autofinancements"
  },
  {
    exemple: false,
    id: "formation-californien",
    titre: "Formation au massage californien",
    sousTitre: "La douceur et l'art de l'effleurage",
    image: "images/formation-californien-pratique-800.jpg",
    imagePos: "50% 30%",
    imageAlt: "Stagiaire massant le dos d'une personne, observée par la formatrice",
    description: "Les fondamentaux d'un massage relaxant à l'huile : installation, posture, qualité du toucher, lissages, pétrissages et enchaînements harmonieux sur l'ensemble du corps.",
    dates: "À venir",                                 // dates des prochaines sessions : à compléter
    duree: "3 jours",
    prix: "630 €",
    lieu: "Salon – Les Mages",
    public: "Débutant·es",
    financement: "Tarifs adaptés pour les autofinancements"
  },
  {
    exemple: false,
    id: "formation-pierres-chaudes",
    titre: "Formation au massage aux pierres chaudes",
    sousTitre: "Chaleur, pierres de basalte et lâcher-prise",
    image: "images/formation-pierres-chaudes-800.jpg",
    imagePos: "50% 60%",
    imageAlt: "Mains posant une pierre chaude de basalte sur un dos",
    description: "Préparation et chauffe des pierres, règles de sécurité, pose des pierres et intégration des pierres dans un massage à l'huile complet.",
    dates: "À venir",                                 // dates des prochaines sessions : à compléter
    duree: "3 jours",
    prix: "630 €",
    lieu: "Salon – Les Mages",
    public: "Personnes pratiquant déjà le massage",
    financement: "Tarifs adaptés pour les autofinancements"
  },
  {
    exemple: false,
    id: "formation-thai",
    titre: "Formation au massage thaï",
    sousTitre: "Pressions et étirements au futon",
    image: "images/formation-thai-etirement-800.jpg",
    imageAlt: "Massage thaï : étirement en position assise, mains dans les mains",
    description: "Apprenez à pratiquer au sol, sur futon, un massage thaï traditionnel : pressions des paumes et des pouces, mobilisations, étirements et travail sur les lignes d'énergie.",
    dates: "À venir",                                 // dates des prochaines sessions : à compléter
    duree: "4 jours",
    prix: "840 €",
    lieu: "Salon – Les Mages",
    public: "Tous niveaux",
    financement: "Tarifs adaptés pour les autofinancements"
  },
  {
    exemple: false,
    id: "formation-ventre",
    titre: "Formation au massage du ventre",
    sousTitre: "Un massage doux et enveloppant du ventre",
    image: "images/formation-gestes-bras-800.jpg",
    imageAlt: "Gros plan sur des mains effectuant des pressions douces",
    description: "Apprenez un massage du ventre doux et enveloppant : installation dans le respect de l'intimité, mouvements circulaires, lissages, pressions légères et accompagnement de la respiration.",
    dates: "À venir",                                 // dates des prochaines sessions : à compléter
    duree: "4 jours",
    prix: "840 €",
    lieu: "Salon – Les Mages",
    public: "Tous niveaux",
    financement: "Tarifs adaptés pour les autofinancements"
  }
];
