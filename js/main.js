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
          (m.vedette ? '<p><span class="etiquette">Recommandé</span></p>' : "") +
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

  /* -------------------------------------------------------------------
     6. Carte Google Maps chargée seulement au clic (respect du RGPD)
     ------------------------------------------------------------------- */
  document.querySelectorAll("[data-gmaps]").forEach(function (ecran) {
    var bouton = ecran.querySelector("button");
    if (!bouton) return;
    bouton.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = ecran.getAttribute("data-gmaps");
      iframe.title = "Carte Google Maps : salon d'Isabelle Di Nunzio à Les Mages";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.setAttribute("allowfullscreen", "");
      ecran.replaceWith(iframe);
      iframe.focus();
    });
  });

  /* -------------------------------------------------------------------
     7. Éventail de cartes des massages (accueil)
     Version sans dépendance d'un composant « card fan carousel » :
     animations en transitions CSS (pas de GSAP), cartes générées depuis
     data/massages.js (nom, origine, image, imagePos, vedette).
     ------------------------------------------------------------------- */
  (function () {
    var racine = document.querySelector("[data-fan]");
    var massages = window.MASSAGES;
    if (!racine || !massages || !massages.length) return;

    var scene = racine.querySelector(".fan__scene");
    var nav = racine.querySelector(".fan__nav");
    var points = racine.querySelector(".fan__points");
    var annonce = racine.querySelector("[data-fan-annonce]");

    var MAX = 7, MOITIE = 3;                       // 7 cartes visibles au maximum
    var total = massages.length;
    var pagine = total > MAX;
    // Position de chaque carte de l'éventail (x en rem, y en rem, rotation en degrés)
    var EVENTAIL = [
      { rot: -21, scale: 0.7756, x: -30, y: 7.3, z: 1 },
      { rot: -14, scale: 0.8498, x: -22, y: 4.0, z: 2 },
      { rot: -7,  scale: 0.9346, x: -11, y: 1.3, z: 3 },
      { rot: 0,   scale: 1.0,    x: 0,   y: 0.0, z: 10 },
      { rot: 7,   scale: 0.9346, x: 11,  y: 1.3, z: 3 },
      { rot: 14,  scale: 0.8498, x: 22,  y: 4.0, z: 2 },
      { rot: 21,  scale: 0.7756, x: 30,  y: 7.3, z: 1 }
    ];
    var REBOND = "cubic-bezier(.34,1.56,.64,1)";   // léger rebond « élastique »
    var DOUX = "cubic-bezier(.22,.61,.36,1)";

    /* Cartes (liens vers la fiche du massage) */
    var cartes = massages.map(function (m) {
      var a = document.createElement("a");
      a.className = "fan-card is-hors";
      a.href = "massages-du-monde.html#" + m.id;
      a.setAttribute("aria-label", m.nom + (m.vedette ? " (recommandé)" : ""));
      a.innerHTML =
        '<img src="' + esc(m.image) + '" alt="' + esc(m.imageAlt) + '"' +
          (m.imagePos ? ' style="object-position:' + esc(m.imagePos) + '"' : "") +
          ' width="800" height="533" loading="lazy" decoding="async" draggable="false">' +
        (m.vedette ? '<span class="fan-card__badge">Recommandé</span>' : "") +
        '<span class="fan-card__legende"><span class="fan-card__nom">' + esc(m.nom) +
        '</span><span class="fan-card__origine">' + esc(m.origine) + "</span></span>";
      scene.appendChild(a);
      return a;
    });

    if (pagine) {
      massages.forEach(function () { points.appendChild(document.createElement("span")); });
    } else {
      nav.style.display = "none";
    }

    var centre = 0;          // index de la carte au centre
    var entree = false;      // l'animation d'entrée a eu lieu
    var occupe = false;      // animation en cours : on ignore le survol
    var sens = null;         // « droite » ou « gauche »
    var vusAvant = {};
    var ordre = [];          // cartes visibles : { el, slot }
    var actif = null;        // slot survolé
    var timerOccupe = null, timerSortie = null;

    function mult() {
      var w = window.innerWidth;
      return w < 480 ? 0.28 : w < 640 ? 0.38 : w < 768 ? 0.5 : w < 1024 ? 0.75 : 1;
    }
    function cfg(slot) {
      var n = pagine ? MAX : total;
      if (n >= MAX) return EVENTAIL[slot];
      var c = n >> 1, d = n > 1 ? (slot - c) / c : 0, ad = Math.abs(d);
      return { rot: d * 21, scale: 1 - 0.2244 * ad * ad, x: d * 30, y: ad * ad * 7.3, z: 10 - Math.abs(slot - c) };
    }
    function visibles(c) {
      var map = {};
      if (!pagine) { cartes.forEach(function (_, i) { map[i] = i; }); return map; }
      for (var s = 0; s < MAX; s++) map[(((c + s - MOITIE) % total) + total) % total] = s;
      return map;
    }
    function pose(el, x, y, rot, scale) {
      el.style.transform = "translate(" + x + "rem," + y + "rem) rotate(" + rot + "deg) scale(" + scale + ")";
    }
    function instant(el, x, y, rot, scale, opacite) {
      el.style.transition = "none";
      pose(el, x, y, rot, scale);
      el.style.opacity = opacite;
      void el.offsetWidth;                          // force l'application avant la transition
    }
    function anime(el, o) {
      el.style.transition = "transform " + o.duree + "s " + o.courbe + " " + (o.delai || 0) + "s, opacity " +
        Math.min(o.duree, 0.5) + "s ease " + (o.delai || 0) + "s, visibility 0s linear " + (o.delaiVis || 0) + "s";
      pose(el, o.x, o.y, o.rot, o.scale);
      el.style.opacity = o.opacite;
      el._y = o.y;
    }

    function rendre() {
      var m = mult(), map = visibles(centre), nouveaux = {}, premier = !entree;
      occupe = true;
      clearTimeout(timerOccupe);
      ordre = [];
      cartes.forEach(function (el, i) {
        var slot = map[i], etaitVisible = vusAvant[i] === true;
        if (slot !== undefined) {
          var c = cfg(slot), x = c.x * m, y = c.y;
          el.style.zIndex = c.z;
          el.classList.remove("is-hors");
          if (premier) {
            instant(el, 0, 12, 0, 0.5, 0);
            anime(el, { x: x, y: y, rot: c.rot, scale: c.scale, opacite: 1, duree: 1.1, courbe: REBOND, delai: 0.2 + slot * 0.06 });
          } else if (!etaitVisible) {
            var d = sens === "droite" ? 40 : -40;
            instant(el, d, y, sens === "droite" ? 30 : -30, 0.5, 0);
            anime(el, { x: x, y: y, rot: c.rot, scale: c.scale, opacite: 1, duree: 0.6, courbe: DOUX });
          } else {
            anime(el, { x: x, y: y, rot: c.rot, scale: c.scale, opacite: 1, duree: 0.5, courbe: DOUX });
          }
          nouveaux[i] = true;
          el._slot = slot;
          ordre.push({ el: el, slot: slot });
        } else {
          el._slot = undefined;
          el.style.zIndex = 0;
          if (etaitVisible) {
            el.classList.add("is-hors");            // la visibilité bascule après la sortie (0,4 s)
            anime(el, { x: sens === "droite" ? -40 : 40, y: el._y || 0, rot: sens === "droite" ? -30 : 30, scale: 0.5, opacite: 0, duree: 0.4, courbe: "ease-in", delaiVis: 0.4 });
          } else {
            el.classList.add("is-hors");
            instant(el, 0, 0, 0, 0.3, 0);
          }
        }
      });
      ordre.sort(function (a, b) { return a.slot - b.slot; });
      vusAvant = nouveaux;
      entree = true;
      timerOccupe = setTimeout(function () { occupe = false; }, premier ? 2000 : 750);
      var pts = points.children;
      for (var k = 0; k < pts.length; k++) pts[k].classList.toggle("est-actif", k === centre);
      if (!premier && annonce) annonce.textContent = massages[centre].nom + " (" + (centre + 1) + " sur " + total + ")";
    }

    /* Survol : la carte survolée se lève, ses voisines s'écartent */
    function survol(slotSurvole) {
      var m = mult(), milieu = ordre.length >> 1;
      ordre.forEach(function (e) {
        var base = cfg(e.slot), x = base.x * m, y = base.y, rot = base.rot, sc = base.scale, delai;
        if (slotSurvole !== null) {
          var dist = Math.abs(e.slot - slotSurvole);
          delai = dist * 0.02;
          if (e.slot === slotSurvole) { y -= 2.5; sc *= 1.08; }
          else {
            var norm = milieu > 0 ? (e.slot - milieu) / milieu : 0;
            var push = 8 * (1 - Math.abs(norm)) * (1 + 0.2 * Math.max(0, 3 - dist));
            if (e.slot < slotSurvole) { x -= push * m; rot -= 3 / (dist + 1); }
            else { x += push * m; rot += 3 / (dist + 1); }
            if (e.slot === ordre.length - 1 && slotSurvole < milieu) y -= 1;
            if (e.slot === 0 && slotSurvole > milieu) y -= 1;
          }
        } else {
          delai = Math.abs(e.slot - milieu) * 0.02;
        }
        anime(e.el, { x: x, y: y, rot: rot, scale: sc, opacite: 1, duree: 0.5, courbe: REBOND, delai: delai });
        e.el.style.zIndex = base.z;
      });
    }
    function entrer(el) {
      if (occupe || el._slot === undefined) return;
      clearTimeout(timerSortie);
      if (actif !== el._slot) { actif = el._slot; survol(actif); }
    }
    function sortir() {
      if (occupe) return;
      clearTimeout(timerSortie);
      timerSortie = setTimeout(function () { actif = null; survol(null); }, 50);
    }
    cartes.forEach(function (el) {
      el.addEventListener("mouseenter", function () { entrer(el); });
      el.addEventListener("focus", function () { entrer(el); });
      el.addEventListener("blur", sortir);
    });
    scene.addEventListener("mouseleave", sortir);

    /* Navigation : flèches, clavier et balayage tactile */
    function aller(dir) {
      if (occupe || !pagine || !entree) return;
      sens = dir;
      centre = dir === "droite" ? (centre + 1) % total : (centre - 1 + total) % total;
      actif = null;
      rendre();
    }
    racine.querySelector("[data-fan-prec]").addEventListener("click", function () { aller("gauche"); });
    racine.querySelector("[data-fan-suiv]").addEventListener("click", function () { aller("droite"); });
    racine.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") aller("droite");
      else if (e.key === "ArrowLeft") aller("gauche");
    });
    var x0 = null;
    scene.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    scene.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 50) aller(dx < 0 ? "droite" : "gauche");
    }, { passive: true });
    window.addEventListener("resize", function () { if (entree && !occupe) survol(actif); });

    /* Animation d'entrée quand l'éventail arrive à l'écran */
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { io.disconnect(); rendre(); }
      }, { threshold: 0.25 });
      io.observe(racine);
    } else {
      rendre();
    }
  })();

  /* Année automatique dans le pied de page */
  document.querySelectorAll("[data-annee]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
