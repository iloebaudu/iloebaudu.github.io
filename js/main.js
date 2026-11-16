/* =====================================================================
   Script principal — volontairement léger, sans dépendance.
   1. Menu burger (mobile)
   2. Apparition douce des blocs au scroll
   3. Affichage des tarifs, massages et formations depuis /data/*.js
   4. Données structurées « Course » générées depuis data/formations.js
   ===================================================================== */
(function () {
  "use strict";

  /* Petite fonction de sécurité : échappe le texte avant de l'insérer en HTML */
  function esc(txt) {
    return String(txt == null ? "" : txt)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* -------------------------------------------------------------------
     1. Menu burger
     ------------------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var fermer = function () {
      nav.classList.remove("est-ouvert");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Ouvrir le menu");
    };
    toggle.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("est-ouvert");
      toggle.setAttribute("aria-expanded", String(ouvert));
      toggle.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("est-ouvert")) { fermer(); toggle.focus(); }
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) fermer(); });
  }

  /* -------------------------------------------------------------------
     2. Tarifs : tout élément <ul data-tarifs> reçoit la grille de prix
     ------------------------------------------------------------------- */
  function htmlTarifs() {
    return (window.TARIFS || []).map(function (t) {
      return "<li><span>" + esc(t.duree) + "</span> <strong>" + esc(t.prix) + " €</strong></li>";
    }).join("");
  }
  if (window.TARIFS) {
    document.querySelectorAll("[data-tarifs]").forEach(function (el) { el.innerHTML = htmlTarifs(); });
    // Blocs de tarifs détaillés : <span data-prix="0"> = premier tarif, etc.
    document.querySelectorAll("[data-prix]").forEach(function (el) {
      var t = window.TARIFS[+el.getAttribute("data-prix")];
      if (t) el.textContent = t.prix + " €";
    });
    document.querySelectorAll("[data-duree]").forEach(function (el) {
      var t = window.TARIFS[+el.getAttribute("data-duree")];
      if (t) el.textContent = t.duree;
    });
  }

  /* -------------------------------------------------------------------
     3a. Cartes « Massages du monde »
     ------------------------------------------------------------------- */
  var listeMassages = document.getElementById("liste-massages");
  if (listeMassages && window.MASSAGES) {
    listeMassages.innerHTML = window.MASSAGES.map(function (m) {
      return '<article class="carte reveal' + (m.vedette ? " carte--vedette" : "") + '" id="' + esc(m.id) + '">' +
        '<div class="carte__media"><img src="' + esc(m.image) + '" alt="' + esc(m.imageAlt) + '"' + (m.imagePos ? ' style="object-position:' + esc(m.imagePos) + '"' : "") + ' loading="lazy" decoding="async" width="800" height="533"></div>' +
        '<div class="carte__corps">' +
          (m.vedette ? '<p><span class="etiquette">Ma spécialité</span></p>' : "") +
          '<p class="carte__origine">' + esc(m.origine) + "</p>" +
          "<h2 class=\"h3\">" + esc(m.nom) + "</h2>" +
          "<p>" + esc(m.accroche) + "</p>" +
          '<dl class="details-massage">' +
            "<dt>Origine</dt><dd>" + esc(m.origineTexte) + "</dd>" +
            "<dt>Déroulé</dt><dd>" + esc(m.deroule) + "</dd>" +
            "<dt>Ressenti</dt><dd>" + esc(m.ressenti) + "</dd>" +
          "</dl>" +
          (m.tarifTexte ? '<p class="tarif-note">' + esc(m.tarifTexte) + "</p>"
                        : '<ul class="tarifs" aria-label="Tarifs">' + htmlTarifs() + "</ul>") +
          (m.lien ? '<a class="carte__lien" href="' + esc(m.lien) + '">En savoir plus sur la ' + esc(m.nom.toLowerCase()) + " →</a>" : "") +
        "</div></article>";
    }).join("");
  }

  /* -------------------------------------------------------------------
     3b. Formations
     ------------------------------------------------------------------- */
  var listeFormations = document.getElementById("liste-formations");
  if (listeFormations && window.FORMATIONS) {
    listeFormations.innerHTML = window.FORMATIONS.map(function (f) {
      return '<article class="carte formation reveal' + (f.exemple ? " formation--exemple" : "") + '" id="' + esc(f.id) + '">' +
        '<div class="carte__media"><img src="' + esc(f.image) + '" alt="' + esc(f.imageAlt) + '"' + (f.imagePos ? ' style="object-position:' + esc(f.imagePos) + '"' : "") + ' loading="lazy" decoding="async" width="800" height="533"></div>' +
        '<div class="carte__corps">' +
          (f.exemple ? '<span class="badge-exemple">Exemple – informations à venir</span>' : "") +
          "<h2 class=\"h3\">" + esc(f.titre) + "</h2>" +
          '<p class="carte__origine">' + esc(f.sousTitre) + "</p>" +
          "<p>" + esc(f.description) + "</p>" +
          '<dl class="infos-formation">' +
            "<dt>Dates</dt><dd>" + esc(f.dates) + "</dd>" +
            "<dt>Durée</dt><dd>" + esc(f.duree) + "</dd>" +
            "<dt>Tarif</dt><dd>" + esc(f.prix) + "</dd>" +
            "<dt>Places</dt><dd>" + esc(f.places) + "</dd>" +
            "<dt>Lieu</dt><dd>" + esc(f.lieu) + "</dd>" +
            "<dt>Public</dt><dd>" + esc(f.public) + "</dd>" +
          "</dl>" +
          '<a class="btn btn--appel carte__lien" href="tel:+33618930126">S\'inscrire par téléphone</a>' +
        "</div></article>";
    }).join("");

    /* 4. Données structurées Schema.org « Course » (lues par Google).
       Les formations d'exemple n'y figurent qu'avec leur titre et leur description,
       sans dates ni prix fictifs, pour ne pas publier de fausses informations. */
    var cours = window.FORMATIONS.map(function (f) {
      var c = {
        "@type": "Course",
        "name": f.titre,
        "description": f.description,
        "inLanguage": "fr",
        "provider": { "@type": "Person", "name": "Isabelle Di Nunzio" }
      };
      if (!f.exemple) {
        c.hasCourseInstance = {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "courseWorkload": f.duree,
          "location": { "@type": "Place", "name": f.lieu,
            "address": { "@type": "PostalAddress", "streetAddress": "178 chemin du Roulet Haut",
              "postalCode": "30960", "addressLocality": "Les Mages", "addressCountry": "FR" } }
        };
        c.offers = { "@type": "Offer", "category": "Paid", "priceCurrency": "EUR",
          "price": String(f.prix).replace(/[^0-9.,]/g, "").replace(",", ".") };
      }
      return c;
    });
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": cours });
    document.head.appendChild(s);
  }

  /* -------------------------------------------------------------------
     5. Apparition au scroll (respecte « réduire les animations »)
     ------------------------------------------------------------------- */
  var blocs = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("est-visible"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    blocs.forEach(function (b) { obs.observe(b); });
  } else {
    blocs.forEach(function (b) { b.classList.add("est-visible"); });
  }

  /* Année automatique dans le pied de page */
  document.querySelectorAll("[data-annee]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
