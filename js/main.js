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
     7. Manège de cartes des massages (accueil)
     Les cartes sont réparties sur un arc ; elles suivent la souris :
     chaque déplacement horizontal fait tourner le manège, sans fin
     (le défilement boucle). Balayage du doigt sur téléphone, flèches,
     clavier et molette horizontale fonctionnent aussi.
     Aucun défilement automatique. Version sans dépendance.
     Cartes générées depuis data/massages.js (nom, origine, image, imagePos, vedette).
     ------------------------------------------------------------------- */
  (function () {
    var racine = document.querySelector("[data-fan]");
    var massages = window.MASSAGES;
    if (!racine || !massages || !massages.length) return;

    var scene = racine.querySelector(".fan__scene");
    var points = racine.querySelector(".fan__points");
    var annonce = racine.querySelector("[data-fan-annonce]");

    var n = massages.length, DEMI = n / 2;
    var ESPACE = 60 / n;              // écart entre deux cartes, en rem (largeur totale constante)
    var PX_PAR_CARTE = 100;           // balayage tactile : pixels à parcourir pour avancer d'une carte
    var PX_SOURIS = 110;              // souris : pixels à parcourir pour avancer d'une carte (plus petit = plus rapide)
    var FLUIDITE = 6;                 // plus élevé = le manège rattrape plus vite la souris
    var reduit = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    /* Cartes (liens vers la fiche du massage) */
    var cartes = massages.map(function (m, i) {
      var a = document.createElement("a");
      a.className = "fan-card";
      a.href = "massages-du-monde.html#" + m.id;
      a.setAttribute("aria-label", m.nom + (m.vedette ? " (recommandé)" : ""));
      a.innerHTML =
        '<img src="' + esc(m.image) + '" alt="' + esc(m.imageAlt) + '"' +
          (m.imagePos ? ' style="object-position:' + esc(m.imagePos) + '"' : "") +
          ' width="800" height="533" loading="lazy" decoding="async" draggable="false">' +
        (m.vedette ? '<span class="fan-card__badge">Recommandé</span>' : "") +
        '<span class="fan-card__legende"><span class="fan-card__nom">' + esc(m.nom) +
        '</span><span class="fan-card__origine">' + esc(m.origine) + "</span></span>";
      a._i = i;
      a._h = 0;                                     // niveau de survol lissé (0 à 1)
      scene.appendChild(a);
      return a;
    });
    massages.forEach(function () { points.appendChild(document.createElement("span")); });

    var t = 0;                 // position affichée du manège (en cartes) ; la carte « t » est au centre
    var cible = 0;             // position visée (souris, doigt, flèches) : t la rattrape en douceur
    var survole = false, derniereX = 0, survolIdx = -1, glisse = null, minuteurRoue = 0;
    var t0 = null, introFini = reduit;
    var raf = 0, dernier = 0, centreAffiche = -1, demarre = false;

    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
    function wrap(v) { return (((v + DEMI) % n) + n) % n - DEMI; }    // ramène v dans [-n/2, n/2[
    function mult() {
      var w = window.innerWidth;
      return w < 480 ? 0.28 : w < 640 ? 0.38 : w < 768 ? 0.5 : w < 1024 ? 0.75 : 1;
    }
    function easeOutBack(x) { var c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); }

    function dessiner(now) {
      var m = mult(), enIntro = !introFini;
      if (t0 === null) t0 = now;
      var ecoule = now - t0;
      var calme = Math.abs(cible - t) < 0.12;          // la carte survolée ne se lève que lorsque le manège est stable
      cartes.forEach(function (el) {
        var i = el._i, p = wrap(i - t), ap = Math.abs(p), d = p / DEMI;
        var x = p * ESPACE * m, y = d * d * 7.3, rot = d * 21, sc = 1 - 0.2244 * d * d;
        var op = clamp((DEMI - ap) / 0.6, 0, 1);      // les cartes s'effacent en douceur au « raccord » du manège
        el._h += ((survolIdx === i && calme ? 1 : 0) - el._h) * 0.18;
        y -= 2.5 * el._h;
        sc *= 1 + 0.08 * el._h;
        var z = Math.round((DEMI - ap) * 20) + 1 + (el._h > 0.5 ? 200 : 0);
        if (enIntro) {                                 // ouverture en éventail depuis le centre
          var q = clamp((ecoule - Math.abs(wrap(i)) * 80) / 1100, 0, 1), e = easeOutBack(q);
          x *= e; rot *= e; y = 12 + (y - 12) * e; sc = 0.5 + (sc - 0.5) * e;
          op *= Math.min(1, q * 3);
        }
        el.style.visibility = op < 0.02 ? "hidden" : "visible";
        el.style.opacity = op;
        el.style.zIndex = z;
        el.style.transform = "translate(" + x + "rem," + y + "rem) rotate(" + rot + "deg) scale(" + sc + ")";
      });
      if (enIntro && ecoule > 1100 + DEMI * 80 + 50) introFini = true;
      var c = ((Math.round(t) % n) + n) % n;
      if (c !== centreAffiche) {
        centreAffiche = c;
        for (var k = 0; k < points.children.length; k++) points.children[k].classList.toggle("est-actif", k === c);
      }
    }

    function boucle(now) {
      raf = requestAnimationFrame(boucle);
      var dt = Math.min(0.05, (now - dernier) / 1000);
      dernier = now;
      t = reduit ? cible : t + (cible - t) * (1 - Math.exp(-dt * FLUIDITE));
      dessiner(now);
    }
    function demarrer() { if (!raf) { dernier = performance.now(); raf = requestAnimationFrame(boucle); } }
    function arreter() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }

    /* --- La souris fait tourner le manège : chaque déplacement horizontal l'entraîne, sans limite --- */
    scene.addEventListener("pointerenter", function (e) {
      if (e.pointerType !== "mouse") return;
      survole = true;
      derniereX = e.clientX;
    });
    scene.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse" || !survole) return;
      cible += (e.clientX - derniereX) / PX_SOURIS;     // vers la droite : cartes suivantes ; vers la gauche : précédentes
      derniereX = e.clientX;
    });
    scene.addEventListener("pointerleave", function (e) {
      if (e.pointerType !== "mouse") return;
      survole = false; survolIdx = -1;
      cible = Math.round(cible);                        // une carte vient se placer au centre
    });
    cartes.forEach(function (el) {
      el.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") survolIdx = el._i; });
      el.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse" && survolIdx === el._i) survolIdx = -1; });
    });

    scene.addEventListener("wheel", function (e) {        // défilement horizontal au pavé tactile ou à la molette
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;   // le défilement vertical de la page reste normal
      e.preventDefault();
      cible += e.deltaX / 150;
      clearTimeout(minuteurRoue);
      minuteurRoue = setTimeout(function () { if (!survole) cible = Math.round(cible); }, 250);
    }, { passive: false });

    /* --- Balayage du doigt --- */
    scene.addEventListener("touchstart", function (e) {
      glisse = { x: e.touches[0].clientX, y: e.touches[0].clientY, depart: cible, actif: false };
    }, { passive: true });
    scene.addEventListener("touchmove", function (e) {
      if (!glisse) return;
      var dx = e.touches[0].clientX - glisse.x, dy = e.touches[0].clientY - glisse.y;
      if (!glisse.actif && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) glisse.actif = true;
      if (glisse.actif) cible = glisse.depart - dx / PX_PAR_CARTE;
    }, { passive: true });
    function finGlisse() {
      if (glisse && glisse.actif) cible = Math.round(cible);
      glisse = null;
    }
    scene.addEventListener("touchend", finGlisse, { passive: true });
    scene.addEventListener("touchcancel", finGlisse, { passive: true });

    /* --- Flèches et clavier --- */
    function annoncer(valeur) {
      var i = ((Math.round(valeur) % n) + n) % n;
      if (annonce) annonce.textContent = massages[i].nom + " (" + (i + 1) + " sur " + n + ")";
    }
    function relatif(dir) {
      cible = Math.round(cible) + dir;
      annoncer(cible);
    }
    racine.querySelector("[data-fan-prec]").addEventListener("click", function () { relatif(-1); });
    racine.querySelector("[data-fan-suiv]").addEventListener("click", function () { relatif(1); });
    racine.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") relatif(1);
      else if (e.key === "ArrowLeft") relatif(-1);
    });
    scene.addEventListener("focusin", function (e) {      // au clavier, la carte qui reçoit le focus vient au centre
      var carte = e.target.closest ? e.target.closest(".fan-card") : null;
      var visibleClavier = true;
      try { visibleClavier = e.target.matches(":focus-visible"); } catch (err) { /* navigateur ancien */ }
      if (carte && visibleClavier) cible = cible + wrap(carte._i - cible);
    });

    /* Le manège ne s'anime que lorsqu'il est à l'écran */
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { if (!demarre) { demarre = true; t0 = null; } demarrer(); }
        else arreter();
      }, { threshold: 0.1 }).observe(racine);
    } else {
      demarrer();
    }
  })();

  /* Année automatique dans le pied de page */
  document.querySelectorAll("[data-annee]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
