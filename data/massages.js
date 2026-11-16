/* =====================================================================
   DONNÉES — MASSAGES & TARIFS
   ---------------------------------------------------------------------
   👉 Ce fichier est le SEUL endroit à modifier pour :
      - changer les tarifs (bloc TARIFS),
      - ajouter, retirer ou modifier un massage (bloc MASSAGES).

   Les cartes de la page « Massages du monde » et les prix affichés
   sur les autres pages sont générés automatiquement à partir d'ici.

   Règles d'écriture :
   - Gardez les guillemets "..." autour des textes.
   - Une apostrophe dans un texte est autorisée : "l'huile".
   - Chaque massage se termine par une virgule « }, ».
   - Vocabulaire bien-être uniquement (pas de « soigner », « guérir »…).
   ===================================================================== */

window.TARIFS = [
  // Même grille pour tous les massages et la réflexologie.
  { duree: "1 h",     prix: 60 },
  { duree: "1 h 30",  prix: 80 }
];

window.MASSAGES = [
  {
    id: "sur-mesure",
    nom: "Massage sur mesure",
    origine: "Techniques du monde · composé pour vous",
    vedette: true,                       // true = mis en avant (grande carte)
    image: "images/huile-flacon-mains-800.jpg",
    imageAlt: "Main versant quelques gouttes d'huile de massage depuis un flacon compte-gouttes",
    accroche: "Le massage qui me ressemble le plus : celui que je compose pour vous.",
    origineTexte: "Au fil de mes voyages, j'ai appris de nombreuses techniques, de Tahiti à la Thaïlande en passant par Hawaï. Je les associe librement, sans protocole figé.",
    deroule: "Nous échangeons d'abord sur vos envies et vos besoins du moment, puis j'enchaîne les gestes les plus adaptés : mouvements enveloppants, pressions, étirements doux, pierres chaudes…",
    ressenti: "Un massage unique, ajusté à vous : détente profonde, relâchement des tensions ou regain d'énergie."
  },
  {
    id: "taurumi",                       // identifiant (lettres, sans espace) : sert d'ancre #taurumi
    nom: "Taurumi",
    origine: "Tahiti · Polynésie française",
    image: "images/tahiti-bungalows-lagon-800.jpg",
    imageAlt: "Lagon turquoise de Polynésie avec des bungalows sur pilotis",
    accroche: "Le massage traditionnel polynésien, transmis de génération en génération.",
    origineTexte: "Pratique ancestrale des îles de la Société, le Taurumi accompagnait autrefois la vie de famille et les grands moments du quotidien polynésien.",
    deroule: "Mains, avant-bras et coudes glissent en longs mouvements enveloppants, au rythme de la respiration, avec un monoï chaud parfumé à la fleur de tiaré.",
    ressenti: "Une sensation de vague qui délie les tensions, réchauffe le corps et laisse une profonde impression de lâcher-prise."
  },
  {
    id: "lomi-lomi",
    nom: "Lomi-lomi",
    origine: "Hawaï",
    image: "images/lomi-lomi-hawaii-kauai-800.jpg",
    imageAlt: "Côte verdoyante de Kauai à Hawaï bordée par l'océan",
    accroche: "Le cousin hawaïen du Taurumi, fluide comme l'océan.",
    origineTexte: "Issu de la tradition hawaïenne, le Lomi-lomi est lié à la philosophie de l'harmonie entre le corps, l'esprit et la nature.",
    deroule: "De longs mouvements continus des avant-bras parcourent le corps d'un seul geste, avec une huile chaude.",
    ressenti: "Un bercement ample et rythmé, idéal pour relâcher le mental et retrouver de la légèreté."
  },
  {
    id: "thai",
    nom: "Massage thaï",
    origine: "Thaïlande",
    image: "images/thai-temple-thailande-800.jpg",
    imageAlt: "Temple doré thaïlandais sous un ciel bleu",
    accroche: "Pressions et étirements, à la manière d'un yoga accompagné.",
    origineTexte: "Héritage des temples thaïlandais, il s'inspire de la notion de lignes d'énergie qui parcourent le corps.",
    deroule: "Pratiqué habillé, en tenue souple, sur un futon au sol : pressions des paumes et des pouces, mobilisations et étirements progressifs.",
    ressenti: "Une sensation de souplesse et de légèreté, le corps comme « déplié »."
  },
  {
    id: "californien",
    nom: "Massage californien",
    origine: "Californie · États-Unis",
    image: "images/californien-golden-gate-800.jpg",
    imageAlt: "Le pont du Golden Gate à San Francisco au-dessus de la baie",
    accroche: "La douceur à l'état pur, pour une détente profonde.",
    origineTexte: "Né en Californie dans les années 1970, il s'inscrit dans une approche globale de la relaxation.",
    deroule: "Lissages lents et enveloppants, pétrissages légers et mouvements harmonieux sur l'ensemble du corps, avec une huile neutre ou parfumée.",
    ressenti: "Un profond bien-être, une sensation d'unité du corps et un vrai temps pour soi."
  },
  {
    id: "pierres-chaudes",
    nom: "Massage aux pierres chaudes",
    origine: "Traditions du monde",
    image: "images/pierres-chaudes-mains-800.jpg",
    imageAlt: "Mains posant des pierres chaudes sur un dos, entourées de fleurs blanches",
    accroche: "La chaleur des pierres volcaniques pour un relâchement en profondeur.",
    origineTexte: "L'usage de pierres chauffées pour se détendre se retrouve dans de nombreuses cultures, des Amériques à l'Asie.",
    deroule: "Des pierres de basalte lisses et chaudes sont posées sur le corps puis utilisées comme prolongement des mains, en alternance avec des mouvements à l'huile.",
    ressenti: "Une chaleur douce et diffuse qui enveloppe le corps et invite à un lâcher-prise total."
  },
  {
    id: "massage-assis",
    nom: "Massage assis",
    origine: "Inspiré de l'amma japonais",
    image: "images/massage-assis-mains-dos-800.jpg",
    imageAlt: "Mains de praticienne posées sur le dos d'une personne",
    accroche: "Une pause détente express, habillé·e, sur une chaise ergonomique.",
    origineTexte: "Inspiré de techniques japonaises traditionnelles, le massage assis permet de se détendre sans se déshabiller ni s'allonger.",
    deroule: "Installé·e confortablement sur une chaise de massage, vous recevez des pressions et des étirements sur le dos, les épaules, la nuque, les bras et la tête.",
    ressenti: "Une détente rapide des épaules et de la nuque, et une sensation de légèreté pour repartir du bon pied."
  },
  {
    id: "massage-ventre",
    nom: "Massage du ventre",
    origine: "Traditions du monde",
    image: "images/formation-gestes-bras-800.jpg",
    imageAlt: "Gros plan sur des mains effectuant des pressions douces",
    accroche: "Un massage doux et enveloppant du ventre, centre de nos émotions.",
    origineTexte: "Le massage du ventre est présent dans de nombreuses traditions, notamment en Asie, où le ventre est considéré comme un centre d'énergie.",
    deroule: "Des mouvements lents et circulaires, des lissages et de légères pressions sont réalisés sur le ventre avec une huile tiède, dans le respect de votre confort.",
    ressenti: "Une sensation d'apaisement, de chaleur et de relâchement, idéale pour se recentrer."
  },
  {
    id: "reflexologie-plantaire",
    nom: "Réflexologie plantaire",
    origine: "Traditions du monde",
    image: "images/reflexologie-pieds-fleurs-800.jpg",
    imageAlt: "Pieds posés dans une vasque décorée de fleurs de frangipanier",
    accroche: "Une détente globale à partir des pieds.",
    origineTexte: "Inspirée de pratiques anciennes d'Asie et d'Égypte, la réflexologie plantaire a été structurée au XXe siècle.",
    deroule: "Des pressions précises et des lissages sont réalisés sur les différentes zones de la voûte plantaire, confortablement installé·e et habillé·e.",
    ressenti: "Une détente qui se diffuse dans tout le corps, une sensation de légèreté et d'apaisement.",
    lien: "reflexologie.html"            // (optionnel) lien vers une page dédiée
  }
];
