window.LOCALES = window.LOCALES || {};
window.LOCALES.fr = {
  meta: { name: "Français", short: "FR", htmlLang: "fr", locale: "fr-FR" },

  ui: {
    brand: "Monibas Capital",
    brandTag: "Investissez avec la tête, pas à l'aveugle.",
    skip: "Aller au contenu",
    nav: { label: "Navigation principale", learn: "Apprendre", simulator: "Simulateurs", forum: "Forum", ai: "Conseiller IA", resources: "Actualités", menu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
    account: { login: "Se connecter", logout: "Se déconnecter", settings: "Paramètres" },
    common: { close: "Fermer", cancel: "Annuler", confirm: "Confirmer", retry: "Réessayer" },

    hero: {
      title: "Apprenez à investir",
      titleLine2: "en partant de zéro, avec discernement.",
      lead: "Un parcours guidé des bases jusqu'aux notions avancées : des graphiques faciles à comprendre, des arguments pour et contre sur chaque sujet, des tests pour vérifier vos acquis et des outils pour vous entraîner sans risquer d'argent.",
      start: "Commencer depuis le début",
      continue: "Reprendre au niveau {n}",
      review: "Revoir le parcours",
      simulator: "Essayer le simulateur",
      resume: "Vous en êtes au",
      allDone: "Vous avez terminé tout le parcours. Révisez quand vous voulez ou mettez vos connaissances à l'épreuve dans le simulateur.",
      artCaption: "Chaque bougie résume une séance de marché.",
      artTag: "Vous apprendrez à les lire",
      facts: { levels: "niveaux", questions: "questions de test", minutes: "minutes de lecture", languages: "langues" }
    },
    how: {
      title: "Comment ça marche",
      sub: "Aucune connaissance préalable n'est nécessaire. Vous avancez à votre rythme et savez toujours où vous en êtes.",
      steps: [
        { h: "Lisez à votre rythme", p: "Chaque niveau commence par l'essentiel en trois idées, puis s'enrichit de graphiques, d'exemples et d'une partie facultative pour approfondir." },
        { h: "Prouvez vos acquis", p: "Chaque niveau se termine par un test de 8 questions. Avec 70 % de bonnes réponses, vous débloquez le suivant." },
        { h: "Entraînez-vous et échangez", p: "Simulez les intérêts composés, interrogez le conseiller IA et partagez vos questions avec la communauté du forum." }
      ]
    },
    route: {
      title: "Votre parcours d'apprentissage",
      sub: "Trois étapes et huit niveaux. Chaque niveau se débloque en réussissant le test du précédent.",
      summary: "{done} niveaux terminés sur {total}",
      levelN: "Niveau {n}",
      min: "{n} min",
      score: "Note : {n} %",
      status: { done: "Terminé", open: "Disponible", locked: "Verrouillé" }
    },
    tools: {
      title: "Des outils pour s'entraîner",
      sub: "Utilisez-les à tout moment, sans attendre la fin du parcours.",
      simulator: { h: "Simulateurs", p: "Intérêts composés, coût des frais, votre portefeuille, taille de position et le défi « hausse ou baisse ? »." },
      forum: { h: "Forum", p: "Posez vos questions, partagez votre expérience et apprenez d'autres personnes qui débutent aussi." },
      ai: { h: "Conseiller IA", p: "Obtenez des réponses claires à vos questions, toujours avec les avantages et les inconvénients." },
      resources: { h: "Actualités et sources", p: "Des titres économiques à jour et les sources officielles à connaître." }
    },

    level: {
      back: "Retour au parcours",
      minutes: "{n} min de lecture",
      essentials: "L'essentiel",
      deepHint: "Facultatif, pour aller plus loin",
      jumpQuiz: "Je maîtrise déjà : aller au test",
      askAi: "Interroger le conseiller",
      aiPrefill: "J'ai une question sur « {title} » : ",
      toc: "Dans ce niveau",
      tocQuiz: "Test du niveau",
      pros: "Pour",
      cons: "Contre et risques",
      termHint: "Touchez pour voir la définition",
      prev: "Niveau précédent",
      next: "Niveau suivant",
      nextLocked: "Niveau suivant (verrouillé)",
      swipeHint: "Faites glisser pour voir tout le graphique",
      riskLabel: "Niveau de risque : {n} sur 5",
      pagerLabel: "Navigation entre les niveaux",
      locked: {
        title: "Ce niveau est encore verrouillé",
        text: "Pour ouvrir « {title} », réussissez d'abord le test du niveau {prev} avec au moins 70 %.",
        go: "Aller au niveau {prev}",
        back: "Voir tout le parcours"
      }
    },
    quiz: {
      title: "Test du niveau {n}",
      hint: "{q} questions. Avec {min} bonnes réponses (70 %), vous débloquez le niveau suivant.",
      hintLast: "{q} questions. Avec {min} bonnes réponses (70 %), vous terminez le parcours.",
      answered: "{a} sur {q} répondues",
      submit: "Corriger le test",
      missing: "Il vous reste {n} questions sans réponse.",
      correct: "Bonne réponse.",
      wrong: "Ce n'est pas ça.",
      passTitle: "Réussi !",
      passText: "Vous avez {c} bonnes réponses sur {q} ({p} %).",
      unlocked: "Niveau {n} débloqué",
      finished: "Vous avez terminé tout le parcours. Félicitations !",
      failTitle: "Pas encore",
      failText: "Vous avez {c} bonnes réponses sur {q} ({p} %) et il en faut {min}. Lisez les explications et réessayez.",
      retry: "Refaire le test",
      goNext: "Aller au niveau {n}",
      backRoute: "Retour au parcours",
      previous: "Vous avez déjà réussi ce test avec {p} %. Vous pouvez le refaire quand vous voulez."
    },
    sim: {
      title: "Simulateur d'intérêts composés",
      sub: "Déplacez les curseurs et voyez comment le temps et la régularité démultiplient chaque euro.",
      initial: "Capital de départ",
      monthly: "Versement mensuel",
      rate: "Rendement annuel estimé",
      years: "Durée de placement",
      yearsVal: "{n} ans",
      yearVal: "1 an",
      presetsLabel: "Scénarios d'exemple",
      presets: [
        { label: "Prudent (3 %)", rate: 3 },
        { label: "Équilibré (5 %)", rate: 5 },
        { label: "Dynamique (7 %)", rate: 7 }
      ],
      inflation: "Afficher le résultat en euros d'aujourd'hui (après 2 % d'inflation par an)",
      contributed: "Capital versé",
      interest: "Intérêts générés",
      final: "Valeur finale estimée",
      legendTotal: "Valeur totale",
      legendContrib: "Capital versé",
      tipYear: "Année {n}",
      chartLabel: "Évolution de la valeur du placement année après année",
      note: "Simulation avec capitalisation mensuelle et rendement constant. En réalité, le rendement varie chaque année, il y a des frais et des impôts, et les performances passées ne préjugent pas des performances futures.",
      privacy: "Les calculs sont faits sur votre appareil : aucune donnée n'est envoyée."
    },
    forum: {
      title: "Forum de la communauté",
      sub: "Un espace pour poser vos questions sans crainte et partager ce que vous apprenez.",
      topicsLabel: "Sujets du forum",
      rules: "Règles : respect mutuel, aucune promesse de rendement ni recommandation d'achat, et ne partagez pas de données personnelles.",
      loading: "Chargement des messages…",
      empty: "Aucun message sur ce sujet pour l'instant. Lancez la conversation !",
      offline: "Impossible de joindre le serveur du forum. Vérifiez votre connexion et réessayez.",
      composerLabel: "Écrivez votre message",
      placeholder: "Posez votre question ou partagez votre expérience…",
      publish: "Publier",
      counter: "{n}/600",
      reply: "Répondre",
      replyPh: "Écrivez votre réponse…",
      sendReply: "Publier la réponse",
      delete: "Supprimer",
      deleteConfirm: "Supprimer ce message ? Cette action est irréversible.",
      deleted: "Message supprimé",
      posted: "Message publié",
      replied: "Réponse publiée",
      loginCta: "Connectez-vous pour publier et répondre."
    },
    ai: {
      title: "Conseiller IA",
      sub: "Obtenez des explications claires à vos questions sur l'investissement. Vous verrez toujours les arguments pour et contre.",
      panelTitle: "Conversation",
      panelSub: "Posez vos questions avec vos propres mots : les réponses s'adaptent à votre niveau.",
      welcome: "Bonjour ! Je suis le conseiller de Monibas Capital. Posez-moi toutes vos questions sur l'investissement : notions, produits, stratégies ou points des niveaux. Je vous donnerai toujours les avantages et les inconvénients, sans recommandation personnalisée.",
      needLogin: "Connectez-vous pour utiliser le conseiller IA. Cela nous permet d'éviter les abus.",
      placeholder: "Par exemple : quelle différence entre un ETF et un fonds indiciel ?",
      inputLabel: "Votre question pour le conseiller",
      send: "Envoyer",
      thinking: "Le conseiller est en train d'écrire",
      suggestions: [
        "Qu'est-ce qu'un ETF et en quoi diffère-t-il d'un fonds indiciel ?",
        "Est-ce que ça vaut la peine d'investir si je ne peux mettre que 50 € par mois ?",
        "Comment la hausse des taux d'intérêt affecte-t-elle mes placements ?",
        "Explique-moi le PER avec un exemple simple"
      ],
      clear: "Nouvelle conversation",
      disclaimer: "Les réponses sont indicatives et pédagogiques. Elles ne constituent pas un conseil financier personnalisé, et le conseiller ne dispose pas de données de marché en temps réel."
    },
    res: {
      title: "Actualités et sources",
      sub: "Suivez les titres des grands médias économiques et découvrez les sources officielles pour recouper l'information.",
      liveTitle: "Titres en direct",
      liveSub: "Mis à jour automatiquement. Touchez un titre pour lire l'article complet sur le site du média.",
      updated: "Mis à jour : {time}",
      unavailable: "Impossible de charger les titres pour le moment. En attendant, consultez directement les sources ci-dessous.",
      tip: "Vérifiez toujours une information auprès d'au moins deux sources indépendantes et méfiez-vous de quiconque promet des rendements garantis.",
      sourcesTitle: "Sources de référence",
      newTab: "(s'ouvre dans un nouvel onglet)"
    },
    settings: {
      title: "Paramètres",
      language: "Langue",
      theme: "Apparence",
      theme_auto: "Automatique",
      theme_light: "Claire",
      theme_dark: "Sombre",
      progress: "Votre progression",
      reset: "Réinitialiser la progression",
      resetConfirm: "Réinitialiser toute votre progression ? Les niveaux seront de nouveau verrouillés.",
      resetDone: "Progression réinitialisée",
      account: "Compte",
      loggedAs: "Connecté en tant que {name}",
      syncNote: "Votre langue et votre progression sont enregistrées dans votre compte et synchronisées entre vos appareils.",
      deleteAccount: "Supprimer mon compte",
      deleteTitle: "Supprimer votre compte",
      deleteText: "Votre compte, votre progression et tous vos messages et réponses du forum seront supprimés. Cette action est irréversible.",
      deletePwd: "Saisissez votre mot de passe pour confirmer",
      deleteBtn: "Supprimer définitivement",
      deleted: "Votre compte a été supprimé",
      guestNote: "Connectez-vous pour enregistrer votre progression et votre langue dans votre compte et les retrouver sur tous vos appareils."
    },
    auth: {
      title: "Votre compte",
      sub: "Avec un compte, vous pouvez publier sur le forum, utiliser le conseiller IA et enregistrer votre progression.",
      tabLogin: "Se connecter",
      tabRegister: "Créer un compte",
      email: "Adresse e-mail",
      password: "Mot de passe",
      showPwd: "Afficher le mot de passe",
      hidePwd: "Masquer le mot de passe",
      username: "Nom d'utilisateur",
      usernameHint: "De 3 à 30 caractères : lettres, chiffres, point, tiret ou tiret bas. Il sera visible sur le forum.",
      passwordHint: "8 caractères minimum. Choisissez un mot de passe que vous n'utilisez nulle part ailleurs.",
      loginBtn: "Se connecter",
      registerBtn: "Créer un compte",
      working: "Un instant…",
      welcome: "Bonjour, {name} !",
      loggedOut: "Vous êtes déconnecté"
    },
    heroChart: {
      "label": "Graphique en chandeliers interactif d'exemple",
      "controls": "Options du graphique",
      "candles": "Chandeliers",
      "line": "Ligne",
      "ma": "Moyenne mobile (10)",
      "volume": "Volume",
      "levels": "Support et résistance",
      "hint": "Survolez ou touchez un chandelier pour voir ce qu'il raconte. Au clavier, utilisez les flèches.",
      "session": "Séance {n}",
      "change": "Variation",
      "volumeLbl": "Volume",
      "aboveMa": "Il clôture au-dessus de sa moyenne mobile : la tendance de fond est haussière.",
      "belowMa": "Il clôture sous sa moyenne mobile : la tendance de fond est fragile.",
      "caveat": "Aucune figure ne prédit l'avenir à elle seule : vérifiez toujours le contexte.",
      "note": "Données illustratives : elles ne correspondent à aucun titre réel.",
      "cta": "Vous pensez pouvoir deviner le prochain chandelier ?",
      "ctaBtn": "Relevez le défi",
      "patterns": {
        "bigBull": {
          "h": "Chandelier haussier fort",
          "p": "Long corps vert : les acheteurs ont dominé toute la séance. S'il s'accompagne d'un volume élevé, il gagne en crédibilité."
        },
        "bigBear": {
          "h": "Chandelier baissier fort",
          "p": "Long corps rouge : les vendeurs ont pris le contrôle. Avec un volume élevé, il traduit souvent une vraie pression vendeuse."
        },
        "bull": {
          "h": "Chandelier haussier",
          "p": "Il a clôturé au-dessus de son ouverture : les acheteurs l'ont emporté, sans excès."
        },
        "bear": {
          "h": "Chandelier baissier",
          "p": "Il a clôturé sous son ouverture : les vendeurs l'ont emporté, sans excès."
        },
        "doji": {
          "h": "Doji",
          "p": "Ouverture et clôture presque identiques : indécision. Après un long mouvement, il peut annoncer une pause, sans jamais le garantir."
        },
        "hammer": {
          "h": "Marteau",
          "p": "Longue mèche basse : le cours a chuté puis les acheteurs l'ont fait remonter. Après une baisse, on y voit un possible rejet des prix bas."
        },
        "star": {
          "h": "Étoile filante",
          "p": "Longue mèche haute : le cours a monté puis les vendeurs l'ont fait redescendre. Après une hausse, elle peut signaler un essoufflement."
        }
      }
    },
    lab: {
      "title": "Simulateurs",
      "sub": "Entraînez-vous avec des outils interactifs, sans argent réel et sans risque. Tout fonctionne sur votre appareil.",
      "tabsLabel": "Simulateurs disponibles",
      "tabs": {
        "compound": "Intérêts composés",
        "challenge": "Hausse ou baisse ?",
        "fees": "Frais",
        "portfolio": "Votre portefeuille",
        "position": "Taille de position"
      },
      "practice": "Mettez-le en pratique",
      "practiceGo": "Ouvrir le simulateur",
      "challenge": {
        "h": "Défi : hausse ou baisse ?",
        "p": "Observez le graphique et pariez sur la direction des 5 prochaines séances. Votre intuition bat-elle le hasard ?",
        "intro": "Vous verrez 10 graphiques en chandeliers. Pour chacun, décidez si dans 5 séances le cours sera plus haut ou plus bas qu'aujourd'hui.",
        "start": "Commencer le défi",
        "up": "Il montera",
        "down": "Il baissera",
        "round": "Graphique {n} sur {total}",
        "score": "Bonnes réponses : {n}",
        "now": "Maintenant",
        "rightUp": "Bien vu ! Il a monté de {p}.",
        "rightDown": "Bien vu ! Il a baissé de {p}.",
        "wrongUp": "Raté : il a monté de {p}.",
        "wrongDown": "Raté : il a baissé de {p}.",
        "next": "Graphique suivant",
        "seeResult": "Voir le résultat",
        "again": "Recommencer le défi",
        "doneTitle": "Résultat : {n} bonnes réponses sur {total}",
        "verdictMid": "C'est exactement ce que donnerait un pile ou face.",
        "verdictHigh": "Belle série ! Mais attention : trouver 8 bonnes réponses ou plus sur 10 par pure chance arrive à 1 personne sur 18.",
        "verdictLow": "Mauvaise série… qui ne veut rien dire non plus : se tromper 8 fois ou plus sur 10 par pur hasard arrive à 1 personne sur 18.",
        "reveal": "L'astuce : tous ces graphiques ont été générés au hasard. Pourtant, vous y avez sans doute vu des tendances, des supports ou des figures.",
        "lesson": "Le cerveau cherche des motifs même là où il n'y en a pas. C'est pourquoi les investisseurs avisés suivent un plan, pas leurs intuitions.",
        "chartLabel": "Graphique du défi"
      },
      "fees": {
        "h": "Le coût des frais",
        "p": "Comparez la même épargne avec des frais bas et des frais élevés, et découvrez ce que la différence vous coûte au fil des ans.",
        "initial": "Capital de départ",
        "monthly": "Versement mensuel",
        "years": "Années",
        "gross": "Rendement annuel avant frais",
        "feeA": "Frais annuels du fonds A",
        "feeB": "Frais annuels du fonds B",
        "hintA": "Typiques d'un fonds indiciel",
        "hintB": "Typiques d'un fonds à gestion active",
        "finalA": "Valeur finale avec A",
        "finalB": "Valeur finale avec B",
        "diff": "Différence",
        "summary": "Avec le fonds B, vous finiriez avec {amount} de moins : un patrimoine inférieur de {p} pour {d} points de frais en plus par an.",
        "legendA": "Fonds A",
        "legendB": "Fonds B",
        "chartLabel": "Évolution du patrimoine selon les frais",
        "note": "Calcul avec capitalisation mensuelle ; les frais sont déduits du rendement chaque mois. Impôts et inflation non compris."
      },
      "portfolio": {
        "h": "Composez votre portefeuille",
        "p": "Répartissez votre argent entre plusieurs actifs et observez l'évolution du rendement attendu et du risque.",
        "equity": "Actions mondiales",
        "bonds": "Obligations",
        "cash": "Liquidités",
        "gold": "Or",
        "autoHint": "Quand vous déplacez un curseur, les autres s'ajustent pour que le total fasse toujours 100 %.",
        "presetsLabel": "Portefeuilles d'exemple",
        "presets": [
          "Prudent",
          "Équilibré",
          "Dynamique",
          "100 % actions"
        ],
        "expReturn": "Rendement annuel attendu",
        "vol": "Variation habituelle (volatilité)",
        "badYear": "Une mauvaise année (environ 1 sur 40)",
        "badYearNote": "Avec 10 000 € investis, lors d'une telle année il pourrait vous rester environ {amount}.",
        "riskLevel": "Niveau de risque",
        "riskNames": [
          "Très faible",
          "Faible",
          "Moyen",
          "Élevé",
          "Très élevé"
        ],
        "rangeLabel": "Résultats possibles sur un an",
        "rangeBad": "Mauvaise année",
        "rangeGood": "Bonne année",
        "rangeExp": "Attendu",
        "tails": "Attention : dans la réalité, les chutes extrêmes sont plus fréquentes que ne le prévoit ce modèle. En 2008, les actions mondiales ont chuté d'environ 40 % en un an.",
        "assumptions": "Hypothèses illustratives à long terme (pas une prévision) : actions 7 % par an et 16 % de volatilité ; obligations 3 % et 6 % ; liquidités 2 % et 1 % ; or 4 % et 15 %.",
        "note": "Ce n'est pas une recommandation : le bon portefeuille dépend de votre horizon et de la baisse que vous pouvez supporter sans vendre."
      },
      "position": {
        "h": "Taille de position",
        "p": "Le calculateur qu'utilisent les traders : combien d'actions acheter pour ne jamais risquer plus que prévu.",
        "capital": "Capital du compte",
        "risk": "Risque maximal par opération",
        "entry": "Prix d'entrée",
        "stop": "Stop-loss",
        "target": "Objectif (take-profit)",
        "shares": "Actions à acheter",
        "invest": "Montant de la position",
        "riskAmt": "Perte maximale si le stop est touché",
        "rr": "Ratio gain/risque",
        "rrVal": "1 : {n}",
        "breakevenNote": "Avec ce ratio, il vous faut au moins {p} d'opérations gagnantes pour ne pas perdre d'argent (hors frais).",
        "ofCapital": "{p} de votre capital",
        "errStop": "Pour un achat, le stop-loss doit être inférieur au prix d'entrée.",
        "errTarget": "L'objectif doit être supérieur au prix d'entrée.",
        "warnSize": "La position dépasse votre capital : elle ne serait possible qu'avec un effet de levier, qui multiplie aussi les pertes.",
        "warnRisk": "Risquer plus de 2 % par opération est agressif : beaucoup de traders professionnels se limitent à 0,5–1 %.",
        "note": "Exemple pour des achats (positions longues). Le stop-loss ne garantit pas le prix de sortie : en cas d'ouverture en gap, la perte peut être plus importante.",
        "chartLabel": "Niveaux de l'opération"
      }
    },
    footer: {
      explore: "Explorer",
      rights: "Tous droits réservés.",
      disclaimer: "Contenu pédagogique, pas un conseil financier. Investir comporte des risques, y compris la perte du capital. Les performances passées ne préjugent pas des performances futures.",
      sources: "Contenu élaboré à partir des guides des autorités de contrôle et de communautés d'investisseurs reconnues. Dernière révision : septembre 2026.",
      privacy: "Nous n'utilisons qu'un cookie technique pour maintenir votre session. Ni publicité ni traceurs."
    }
  },

  errors: {
    NETWORK: "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
    SERVER_ERROR: "Une erreur s'est produite sur le serveur. Réessayez dans quelques minutes.",
    NOT_FOUND: "Ce que vous cherchez est introuvable.",
    INVALID_INPUT: "Les données envoyées ne sont pas valides. Vérifiez-les et réessayez.",
    INVALID_USERNAME: "Le nom d'utilisateur doit contenir de 3 à 30 caractères : lettres, chiffres, point, tiret ou tiret bas.",
    INVALID_EMAIL: "Saisissez une adresse e-mail valide.",
    WEAK_PASSWORD: "Le mot de passe doit contenir au moins 8 caractères (et 72 au maximum).",
    REGISTRATION_FAILED: "Impossible de créer le compte : ce nom d'utilisateur ou cette adresse e-mail est déjà utilisé.",
    INVALID_CREDENTIALS: "L'adresse e-mail ou le mot de passe est incorrect.",
    UNAUTHENTICATED: "Votre session a expiré. Reconnectez-vous.",
    FORBIDDEN: "Vous n'avez pas l'autorisation d'effectuer cette action.",
    BAD_ORIGIN: "La requête a été bloquée pour des raisons de sécurité. Rechargez la page et réessayez.",
    TOO_MANY_REQUESTS: "Vous avez envoyé trop de requêtes d'affilée. Patientez un peu et réessayez.",
    TOPIC_NOT_FOUND: "Ce sujet du forum n'existe pas.",
    POST_NOT_FOUND: "Ce message n'existe plus.",
    EMPTY_MESSAGE: "Écrivez quelque chose avant de publier.",
    AI_DISABLED: "Le conseiller IA n'est pas activé sur ce serveur. L'administrateur doit configurer la clé d'API.",
    AI_ERROR: "Le conseiller n'a pas pu répondre pour le moment. Réessayez dans quelques instants."
  },

  topics: {
    "primeros-pasos": "Premiers pas",
    "acciones": "Actions",
    "etfs-fondos": "ETF et fonds",
    "materias-primas": "Matières premières",
    "estrategia": "Stratégie"
  },

  stages: [
    { name: "Débutant", title: "Les fondations", desc: "Ce qu'il faut avant d'investir, le vocabulaire clé et la lecture d'un graphique." },
    { name: "Intermédiaire", title: "Passer à l'action", desc: "Les produits existants, le fonctionnement concret des ordres et l'analyse d'une entreprise." },
    { name: "Avancé", title: "Penser en investisseur", desc: "Stratégie, gestion du risque, macroéconomie et facteur psychologique." }
  ],

  charts: {
    inflation: { idle: "Argent qui dort", invested: "Placé à 7 % par an", year: "Année {n}", note: "Pouvoir d'achat de 1 000 € avec 3 % d'inflation par an" },
    line: { price: "Prix", time: "Temps", resistance: "Résistance", support: "Support" },
    candle: { high: "Plus haut", low: "Plus bas", open: "Ouverture", close: "Clôture", bull: "Bougie haussière", bear: "Bougie baissière", sequence: "Séquence haussière" },
    ma: { price: "Cours quotidien", ma: "Moyenne mobile" },
    risk: {
      x: "Risque (variations du prix)", y: "Rendement espéré", note: "Schéma illustratif",
      items: ["Dépôts et monétaire", "Obligations", "Fonds indiciel mondial", "Actions individuelles", "Matières premières", "Crypto-actifs"]
    },
    orders: { current: "Cours actuel", limitBuy: "Achat à cours limité", stop: "Stop-loss", take: "Take-profit" },
    donut: { center: "Exemple", items: ["Actions mondiales", "Obligations", "Liquidités", "Matières premières"] },
    cycle: { phases: ["Expansion", "Pic", "Récession", "Reprise", "Creux"] },
    emotion: {
      phases: ["Optimisme", "Euphorie", "Anxiété", "Peur", "Panique", "Découragement", "Espoir", "Soulagement"],
      top: "Risque maximal", bottom: "Opportunité maximale"
    }
  },

  resources: {
    groups: [
      {
        icon: "shield", title: "Organismes officiels",
        items: [
          { name: "AMF", url: "https://www.amf-france.org", desc: "Autorité des marchés financiers : listes noires, guides et vérification des intermédiaires." },
          { name: "Mes questions d'argent", url: "https://www.mesquestionsdargent.fr", desc: "Portail public d'éducation financière de la Banque de France." },
          { name: "ESMA", url: "https://www.esma.europa.eu", desc: "Autorité européenne des marchés : alertes et guides pour les investisseurs." }
        ]
      },
      {
        icon: "message", title: "Communautés",
        items: [
          { name: "Bogleheads", url: "https://www.bogleheads.org", desc: "Forum anglophone consacré à l'investissement indiciel à long terme." },
          { name: "Boursorama", url: "https://www.boursorama.com", desc: "Cours, actualités et forums francophones sur la Bourse." },
          { name: "Investing.com", url: "https://fr.investing.com", desc: "Cours, calendrier économique et analyses." }
        ]
      },
      {
        icon: "news", title: "Presse économique",
        items: [
          { name: "Les Échos", url: "https://www.lesechos.fr", desc: "Quotidien économique de référence en France." },
          { name: "Reuters", url: "https://www.reuters.com/markets", desc: "Agence internationale : marchés quasiment en temps réel." },
          { name: "Bloomberg", url: "https://www.bloomberg.com/markets", desc: "Données de marché et actualité financière." },
          { name: "Euronext", url: "https://www.euronext.com", desc: "Données officielles de la Bourse de Paris." }
        ]
      }
    ]
  },

  levels: [
    {
      title: "Avant d'investir",
      subtitle: "Ce qu'il faut avoir en tête avant de placer votre premier euro en Bourse.",
      minutes: 8,
      essentials: [
        "N'investissez que de l'argent dont vous n'aurez pas besoin avant des années, et constituez d'abord une épargne de précaution.",
        "Votre profil (horizon, capacité à encaisser des pertes et tolérance émotionnelle) détermine les produits qui vous conviennent.",
        "Le temps et les intérêts composés sont vos meilleurs alliés ; l'inflation, l'ennemi silencieux de l'argent qui dort."
      ],
      blocks: [
        { t: "p", h: "Votre profil d'investisseur", html: "Avant de regarder la moindre action, répondez honnêtement : combien de temps pouvez-vous laisser l'argent placé sans y toucher ? Pourriez-vous vous permettre d'en perdre une partie ? Comment réagiriez-vous s'il valait demain 30 % de moins ? Les autorités de contrôle, comme l'AMF en France, insistent : ce sont ces réponses, et non une intuition ou une mode, qui doivent guider vos achats." },
        { t: "cards", items: [
          { icon: "clock", h: "Horizon de placement", p: "Moins de 2 ans, entre 2 et 10 ans, ou plus de 10 ? Plus il est long, plus vous avez de marge pour vous remettre des baisses." },
          { icon: "wallet", h: "Capacité financière", p: "Perdre cet argent affecterait-il votre quotidien ? Si la réponse est oui, il ne devrait pas être en Bourse." },
          { icon: "heart", h: "Tolérance émotionnelle", p: "Dormiriez-vous tranquille en voyant votre placement chuter de 20 % en un mois ? Soyez sincère : c'est la cause de nombreuses mauvaises décisions." }
        ] },
        { t: "p", h: "L'épargne de précaution passe avant l'investissement", html: "Mettez de côté 3 à 6 mois de dépenses sur un support liquide et sûr, comme un livret ou un fonds monétaire, avant d'investir en Bourse. Ainsi, vous n'aurez jamais à vendre au pire moment à cause d'un imprévu." },
        { t: "quote", text: "D'abord l'épargne de précaution, ensuite l'investissement. Jamais l'inverse." },
        { t: "chart", id: "inflation", caption: "Avec une inflation moyenne de 3 %, 1 000 € gardés dans un tiroir n'achèteront dans 20 ans que ce qu'environ 550 € achètent aujourd'hui. Placés à 7 % par an (chiffre illustratif, non garanti), leur pouvoir d'achat aurait plus que doublé." },
        { t: "p", h: "Les intérêts composés", html: "Les gains produisent à leur tour de nouveaux gains, comme une boule de neige qui grossit en roulant. Avec des versements réguliers et un rendement moyen de 7 % par an (une référence historique courante pour les portefeuilles d'actions diversifiés, pas une promesse) :" },
        { t: "table", head: ["Versement mensuel", "Années", "Capital versé", "Valeur finale approximative"], rows: [
          ["100 €", "10", "12 000 €", "≈ 17 300 €"],
          ["100 €", "25", "30 000 €", "≈ 81 000 €"],
          ["300 €", "25", "90 000 €", "≈ 243 000 €"]
        ] },
        { t: "callout", html: "Chiffres avec capitalisation mensuelle, hors frais, impôts et inflation. Ils servent à comprendre l'effet du temps, pas à faire une prévision. Essayez vos propres chiffres dans le <b>Simulateur</b>." },
        { t: "balance", h: "Investir : oui ou non ?", pros: [
          "L'argent qui dort perd du pouvoir d'achat chaque année à cause de l'inflation.",
          "Sur le long terme, les actions diversifiées ont historiquement battu l'inflation et l'épargne traditionnelle.",
          "Les intérêts composés récompensent ceux qui commencent tôt, même avec peu."
        ], cons: [
          "Vous pouvez perdre une partie ou la totalité de l'argent investi.",
          "Les performances passées ne préjugent pas des performances futures.",
          "Si vous investissez de l'argent dont vous aurez bientôt besoin, vous risquez de devoir vendre à perte."
        ] },
        { t: "callout", html: "La règle d'or des autorités de contrôle : <b>n'investissez pas dans ce que vous ne comprenez pas</b>. Si vous ne pouvez pas expliquer en deux phrases ce que vous avez acheté et quel risque cela comporte, ce n'est pas encore le moment." },
        { t: "deep", h: "Rendement réel, règle de 72 et coût d'opportunité", blocks: [
          { t: "p", html: "Le <b>rendement réel</b> correspond à peu près au rendement nominal moins l'inflation. Un rendement nominal de 5 % avec 3 % d'inflation ne fait que 2 % en termes réels : c'est ce qui augmente vraiment votre pouvoir d'achat." },
          { t: "p", html: "La <b>règle de 72</b> estime le nombre d'années nécessaires pour doubler un capital : divisez 72 par le rendement annuel. À 6 %, il faut environ 12 ans ; à 9 %, environ 8." },
          { t: "p", html: "Le <b>coût d'opportunité</b> compte aussi : rembourser une dette à 8 % de TAEG équivaut à un rendement garanti de 8 %, ce qu'aucun placement ne peut promettre. C'est pourquoi il est souvent judicieux de solder les dettes coûteuses avant d'investir." }
        ] }
      ],
      quiz: [
        { q: "Que recommande-t-on d'avoir avant de commencer à investir ?", o: ["Une épargne de précaution de 3 à 6 mois de dépenses", "Un prêt personnel pour investir davantage", "Rien : plus tôt on investit, mieux c'est", "Une carte de crédit avec un plafond élevé"], a: 0, e: "L'épargne de précaution évite de devoir vendre ses placements au pire moment à cause d'un imprévu." },
        { q: "Selon les autorités de contrôle comme l'AMF, qu'est-ce qui doit guider vos décisions d'investissement ?", o: ["Ce qui est recommandé sur les réseaux sociaux", "Votre profil d'investisseur : objectifs, horizon et tolérance au risque", "Toujours investir dans ce qui a le plus monté ce mois-ci", "Copier le portefeuille d'un proche"], a: 1, e: "Votre situation financière, votre horizon et votre tolérance au risque déterminent les produits qui vous conviennent." },
        { q: "Quel rôle jouent les intérêts composés ?", o: ["Ils n'ont pas d'effet notable", "Les gains obtenus produisent eux aussi des gains au fil du temps", "Ils ne concernent que les prêts, pas les placements", "Ils réduisent le rendement avec le temps"], a: 1, e: "Les intérêts composés accélèrent la croissance à mesure que le capital reste placé longtemps." },
        { q: "Que signifie « n'investissez pas dans ce que vous ne comprenez pas » ?", o: ["Qu'il ne faut investir que dans des produits complexes", "Que si vous ne pouvez pas expliquer ce que vous avez acheté et son risque, ce n'est pas le moment de l'acheter", "Que c'est une phrase sans portée pratique", "Que cela ne concerne que les cryptomonnaies"], a: 1, e: "C'est un principe de base de la protection des investisseurs, rappelé par toutes les autorités de contrôle." },
        { q: "Lequel de ces éléments n'est PAS l'un des trois piliers du profil d'investisseur ?", o: ["L'horizon de placement", "La capacité financière à encaisser des pertes", "La couleur du logo du courtier", "La tolérance émotionnelle au risque"], a: 2, e: "Les trois piliers sont l'horizon de placement, la capacité financière à encaisser des pertes et la tolérance émotionnelle au risque." },
        { q: "Combien de mois de dépenses recommande-t-on de réunir en épargne de précaution avant d'investir ?", o: ["De 3 à 6 mois", "Une semaine", "Au moins 5 ans", "Aucune épargne de précaution n'est nécessaire"], a: 0, e: "On recommande généralement de couvrir 3 à 6 mois de dépenses sur un support liquide et accessible." },
        { q: "En versant 100 € par mois pendant 25 ans à 7 % par an, comment se compare la valeur finale au total versé ?", o: ["La valeur finale est inférieure au total versé", "La valeur finale est quasiment égale au total versé", "La valeur finale est plusieurs fois supérieure grâce aux intérêts composés", "C'est impossible à calculer"], a: 2, e: "Pour 30 000 € versés, la valeur finale avoisine 81 000 € : le temps démultiplie l'effet de chaque versement." },
        { q: "D'après la règle de 72, en combien d'années environ un capital double-t-il à 8 % par an ?", o: ["3 ans", "9 ans", "20 ans", "72 ans"], a: 1, e: "72 ÷ 8 = 9. C'est une approximation rapide et très utile pour mesurer l'effet du temps." }
      ]
    },

    {
      title: "Le vocabulaire de base",
      subtitle: "Les termes que vous entendrez sans cesse, expliqués sans jargon.",
      minutes: 10,
      essentials: [
        "Une action est une petite part d'une entreprise ; une obligation, un prêt que vous accordez contre des intérêts.",
        "Un ETF ou un fonds indiciel vous permet d'acheter des centaines d'entreprises en une seule fois.",
        "Les ordres au marché privilégient la rapidité ; les ordres à cours limité, le prix."
      ],
      blocks: [
        { t: "p", html: "Touchez chaque carte pour voir sa définition. Inutile de tout mémoriser d'un coup : revenez ici dès que vous en avez besoin." },
        { t: "glossary", items: [
          { t: "Action", d: "Une petite part de la propriété d'une entreprise. Si l'entreprise se porte bien, votre part vaut généralement davantage." },
          { t: "Obligation", d: "Un prêt que vous accordez à un État ou à une entreprise contre un intérêt fixé à l'avance." },
          { t: "Dividende", d: "La part du bénéfice qu'une entreprise distribue à ses actionnaires, en général en numéraire." },
          { t: "ETF", d: "Un fonds coté en Bourse comme une action, qui réplique généralement un indice entier." },
          { t: "Fonds indiciel", d: "Un fonds qui copie un indice de façon passive, avec des frais réduits. Contrairement à un ETF, il ne se négocie pas en continu." },
          { t: "Indice boursier", d: "Un panier d'entreprises qui résume l'évolution d'un marché, comme le CAC 40 ou le MSCI World." },
          { t: "Courtier", d: "L'intermédiaire agréé par lequel vous achetez et vendez des titres." },
          { t: "Capitalisation", d: "La valeur totale d'une entreprise en Bourse : cours de l'action multiplié par le nombre d'actions." },
          { t: "Volatilité", d: "L'ampleur et la rapidité des variations du prix d'un actif. Plus de volatilité, c'est plus d'incertitude." },
          { t: "Diversification", d: "Répartir son argent entre de nombreux actifs pour qu'aucun faux pas isolé ne vous fasse couler." },
          { t: "Spread", d: "L'écart entre le prix auquel vous pouvez acheter et celui auquel vous pouvez vendre à un instant donné." },
          { t: "Ordre au marché", d: "Achat ou vente immédiat au meilleur prix disponible à ce moment-là." },
          { t: "Ordre à cours limité", d: "Achat ou vente exécuté uniquement si le prix que vous fixez est atteint." },
          { t: "Rendement annualisé", d: "Le gain ou la perte moyens par an. Il permet de comparer des placements de durées différentes." },
          { t: "Liquidité", d: "La facilité avec laquelle un placement peut être converti rapidement en argent sans perdre de valeur." },
          { t: "Plus-value et moins-value", d: "Le gain (plus-value) ou la perte (moins-value) lorsque vous revendez quelque chose plus ou moins cher que son prix d'achat." }
        ] },
        { t: "p", h: "Comment les pièces s'assemblent", html: "Quand vous achetez un ETF via votre courtier, vous passez un ordre (au marché ou à cours limité) qui s'exécute au prix disponible, avec un petit spread entre l'achat et la vente. L'ETF monte ou baisse avec l'indice qu'il réplique et, si vous le conservez plusieurs années, votre résultat se mesure en rendement annualisé." },
        { t: "cards", h: "Les trois grandes familles", items: [
          { icon: "pie", h: "Actions", p: "Actions et fonds actions. Plus de potentiel de gain et plus de variations." },
          { icon: "lock", h: "Obligations", p: "Obligations et bons du Trésor. Moins de variations et un rendement plus prévisible." },
          { icon: "drop", h: "Liquidités", p: "Comptes et fonds monétaires. Disponibles immédiatement, avec un faible rendement." }
        ] },
        { t: "deep", h: "Les termes des professionnels", blocks: [
          { t: "list", items: [
            "<b>Bid et ask :</b> le meilleur prix auquel quelqu'un est prêt à acheter (bid) et à vendre (ask). Leur écart est le spread.",
            "<b>Frais courants (TER) :</b> le coût annuel total d'un fonds ou d'un ETF, exprimé en pourcentage. Il est généralement très bas pour les fonds indiciels.",
            "<b>Capitalisation ou distribution :</b> les fonds de capitalisation réinvestissent les dividendes ; les fonds de distribution les versent.",
            "<b>Tracking error :</b> l'écart entre un fonds indiciel et l'indice qu'il cherche à répliquer.",
            "<b>Indice de référence :</b> l'indice auquel on compare un placement.",
            "<b>Blue chip :</b> une grande entreprise solide dont les titres s'échangent en grand volume."
          ] }
        ] }
      ],
      quiz: [
        { q: "Qu'est-ce qu'un ETF ?", o: ["Un type d'action individuelle", "Un fonds coté qui réplique généralement un indice et s'achète comme une action", "Un prêt à une entreprise", "Un impôt sur les gains boursiers"], a: 1, e: "Un ETF combine la diversification d'un fonds et la facilité de négociation d'une action." },
        { q: "Quelle différence entre un ordre au marché et un ordre à cours limité ?", o: ["Il n'y a pas de vraie différence", "L'ordre au marché s'exécute immédiatement au meilleur prix ; l'ordre limité, seulement si le prix fixé est atteint", "L'ordre limité est toujours plus cher", "L'ordre au marché ne sert qu'à vendre"], a: 1, e: "L'ordre au marché privilégie l'exécution immédiate ; l'ordre limité, la maîtrise du prix." },
        { q: "Que mesure la volatilité d'un actif ?", o: ["Son rendement garanti", "L'ampleur et la rapidité des variations de son prix", "Le nombre de ses actionnaires", "Les frais facturés par le courtier"], a: 1, e: "La volatilité reflète l'ampleur et la vitesse des variations de prix ; elle ne garantit aucun rendement." },
        { q: "Qu'est-ce que la diversification ?", o: ["Tout miser sur une seule entreprise prometteuse", "Répartir son placement entre différents actifs pour réduire le risque d'un seul pari", "Vendre toutes ses actions chaque mois", "Un type d'ordre de Bourse"], a: 1, e: "Diversifier limite l'impact d'un actif qui tourne mal sur l'ensemble du portefeuille." },
        { q: "Qu'est-ce que le spread ?", o: ["Le dividende annuel versé", "L'écart entre le prix d'achat et le prix de vente à un instant donné", "Un impôt sur les plus-values", "Le nombre d'actions en circulation"], a: 1, e: "C'est l'écart entre le prix de vente proposé (ask) et le prix d'achat proposé (bid) à ce moment-là." },
        { q: "Que mesure la capitalisation boursière d'une entreprise ?", o: ["Sa dette totale", "Le cours de l'action multiplié par le nombre d'actions", "Son bénéfice net annuel", "Son nombre de salariés"], a: 1, e: "La capitalisation boursière est la valeur totale de l'entreprise en Bourse." },
        { q: "Qu'est-ce qu'un courtier ?", o: ["Un type d'action très volatile", "L'intermédiaire agréé par lequel vous achetez et vendez des titres", "Un impôt sur les dividendes", "Un indice boursier"], a: 1, e: "Le courtier, contrôlé par l'autorité compétente, exécute vos ordres d'achat et de vente." },
        { q: "Qu'indique le rendement annualisé ?", o: ["Le gain total, quelle que soit la durée écoulée", "Le gain ou la perte moyens par an si le résultat était réparti uniformément", "Le cours actuel de l'actif", "Les frais annuels du courtier"], a: 1, e: "Il ramène le résultat à une moyenne annuelle pour comparer des placements de durées différentes." }
      ]
    },

    {
      title: "Lire un graphique",
      subtitle: "Courbes, bougies, tendances et volume : ce qu'un graphique vous dit vraiment.",
      minutes: 12,
      essentials: [
        "La courbe montre la tendance ; les bougies, ce qui s'est passé au cours de chaque période.",
        "Supports et résistances sont des zones où le prix a tendance à marquer une pause, pas des murs infranchissables.",
        "Le volume et les moyennes mobiles aident à distinguer le signal du bruit."
      ],
      blocks: [
        { t: "p", h: "Le graphique en courbe", html: "Il relie par une ligne le cours de clôture de chaque période. C'est la façon la plus simple de repérer d'un coup d'œil la tendance générale, même s'il ne montre pas ce qui s'est passé pendant la journée." },
        { t: "chart", id: "line", caption: "Une tendance haussière et ses niveaux clés : la résistance, où le prix a tendance à plafonner à la hausse, et le support, où il a tendance à rebondir à la baisse." },
        { t: "p", h: "Les chandeliers japonais", html: "Chaque bougie résume une période avec quatre données : ouverture, clôture, plus haut et plus bas. Le corps va de l'ouverture à la clôture ; les mèches indiquent les extrêmes." },
        { t: "chart", id: "candle", caption: "Vert : clôture au-dessus de l'ouverture (haussière). Rouge : clôture en dessous (baissière). À droite, une suite de bougies formant une tendance haussière." },
        { t: "list", h: "Tendances, supports et résistances", items: [
          "<b>Haussière :</b> des plus hauts et des plus bas de plus en plus élevés.",
          "<b>Baissière :</b> des plus hauts et des plus bas de plus en plus bas.",
          "<b>Latérale :</b> le prix évolue dans un couloir, sans direction claire.",
          "<b>Support :</b> une zone où il y a historiquement eu assez d'acheteurs pour stopper une baisse.",
          "<b>Résistance :</b> une zone où il y a historiquement eu assez de vendeurs pour stopper une hausse."
        ] },
        { t: "p", h: "Volume et moyennes mobiles", html: [
          "Sous le prix figure généralement le <b>volume</b> : le nombre de titres échangés. Un mouvement accompagné d'un fort volume a plus de « conviction » qu'un mouvement à faible volume.",
          "La <b>moyenne mobile</b> (par exemple sur 50 ou 200 séances) est le prix moyen des dernières périodes, tracé comme une ligne lissée qui révèle la tendance de fond."
        ] },
        { t: "chart", id: "ma", caption: "Le cours quotidien oscille autour de sa moyenne mobile. Tant que le cours reste au-dessus, de nombreux analystes y voient un signe de solidité." },
        { t: "balance", h: "Regarder les graphiques, est-ce utile ?", pros: [
          "Cela aide à choisir le moment d'acheter ou de vendre.",
          "Le volume et la tendance apportent un contexte que le prix seul ne donne pas."
        ], cons: [
          "Aucune figure ne garantit ce qui va se passer ensuite.",
          "Consulter le graphique tous les jours peut créer de l'anxiété et des décisions impulsives si votre horizon est long."
        ] },
        { t: "deep", h: "Échelles, unités de temps et pièges courants", blocks: [
          { t: "p", html: "Utilisez une <b>échelle logarithmique</b> sur de longues périodes : une hausse de 10 à 20 € et une autre de 100 à 200 € font toutes deux 100 % et apparaîtront aussi grandes. En échelle linéaire, la seconde paraîtrait énorme." },
          { t: "p", html: "Changez d'<b>unité de temps</b> (quotidienne, hebdomadaire, mensuelle) avant de conclure : une baisse inquiétante sur le graphique quotidien peut n'être qu'une simple correction sur le graphique hebdomadaire." },
          { t: "p", html: "Attention au <b>biais de confirmation</b> : il est facile de « voir » la figure qu'on voulait trouver. Confrontez-la toujours aux chiffres de l'entreprise." }
        ] }
      ],
      quiz: [
        { q: "Sur un graphique en chandeliers, que représente le corps de la bougie ?", o: ["Le volume échangé", "L'écart entre l'ouverture et la clôture de la période", "Le nom de l'entreprise", "Les frais du courtier"], a: 1, e: "Le corps va de l'ouverture à la clôture ; les mèches indiquent le plus haut et le plus bas." },
        { q: "Qu'est-ce qu'une résistance ?", o: ["Un niveau de prix où les hausses ont eu tendance à s'essouffler", "Un type d'ordre de vente obligatoire", "Le dividende minimum d'une entreprise", "Des frais bancaires"], a: 0, e: "C'est une zone où il y a historiquement eu assez de vendeurs pour freiner le prix." },
        { q: "Qu'indique une tendance haussière ?", o: ["Des plus hauts et des plus bas de plus en plus bas", "Que le prix évolue toujours en ligne droite", "Des plus hauts et des plus bas de plus en plus élevés", "Que le volume tombe à zéro"], a: 2, e: "Une tendance haussière se définit par une succession de plus hauts et de plus bas croissants." },
        { q: "À quoi sert une moyenne mobile ?", o: ["À calculer l'impôt sur les dividendes", "À lisser le prix pour mieux voir la tendance de fond", "À fixer le cours officiel d'une action", "À remplacer complètement l'analyse fondamentale"], a: 1, e: "La moyenne mobile filtre le bruit quotidien et aide à voir la tendance générale." },
        { q: "Que montre le volume sur un graphique ?", o: ["Le prix moyen historique", "Le nombre de titres échangés sur la période", "Le dividende versé ce jour-là", "Les frais facturés par le courtier"], a: 1, e: "Le volume indique combien de titres ont changé de mains et donne de la « conviction » à un mouvement de prix." },
        { q: "Qu'est-ce qui caractérise une tendance latérale ?", o: ["Des plus hauts et des plus bas toujours croissants", "Le prix évolue dans un couloir, sans direction claire", "Le prix ne peut que baisser", "C'est la même chose qu'une tendance haussière"], a: 1, e: "Dans une tendance latérale, le prix oscille dans une fourchette sans direction nette." },
        { q: "Sur une bougie japonaise, que représentent les mèches ?", o: ["Les cours d'ouverture et de clôture", "Le plus haut et le plus bas atteints sur la période", "Le volume échangé", "Le nom de l'actif"], a: 1, e: "Les mèches indiquent les extrêmes touchés par le prix pendant la période." },
        { q: "Qu'est-ce qui distingue une bougie haussière d'une bougie baissière ?", o: ["La couleur est toujours la même", "Dans la haussière, la clôture est au-dessus de l'ouverture ; dans la baissière, en dessous", "La haussière n'a pas de mèches", "La baissière n'apparaît que le lundi"], a: 1, e: "Haussière : clôture plus haute que l'ouverture. Baissière : clôture plus basse." }
      ]
    },

    {
      title: "Ce que l'on peut acheter",
      subtitle: "Actions, fonds, obligations, matières premières et plus encore : ce que chacun offre et quels risques il comporte.",
      minutes: 12,
      essentials: [
        "Chaque produit combine différemment risque, effort et potentiel de gain.",
        "Pour débuter, les fonds indiciels et les ETF larges offrent diversification et frais réduits.",
        "Les matières premières et les crypto-actifs peuvent compléter un portefeuille, mais ne devraient pas en être la base."
      ],
      blocks: [
        { t: "chart", id: "risk", caption: "Carte illustrative du risque et du rendement espéré. Plus le rendement potentiel est élevé, plus les variations sont fortes : le placement très rentable et sans risque n'existe pas." },
        { t: "balance", h: "Actions individuelles", intro: "Acheter les actions d'une entreprise précise, c'est parier sur cette entreprise, pas sur le marché dans son ensemble.", pros: [
          "Un potentiel de gain plus élevé si vous choisissez la bonne entreprise.",
          "Droit de vote en assemblée générale et dividendes éventuels.",
          "Pas de frais de gestion annuels."
        ], cons: [
          "Risque concentré : une mauvaise nouvelle peut faire plonger le cours.",
          "Il faut du temps pour analyser et suivre chaque entreprise.",
          "Il est facile de se laisser emporter par ses émotions ou par les modes."
        ] },
        { t: "balance", h: "Fonds indiciels et ETF", intro: "Ils répliquent un indice entier : en un seul achat, vous détenez des centaines ou des milliers d'entreprises. Des communautés comme les Bogleheads et de nombreuses autorités de contrôle les présentent comme un bon point de départ.", pros: [
          "Diversification immédiate.",
          "Frais très faibles par rapport à la gestion active.",
          "Peu d'effort : pas besoin de choisir des entreprises."
        ], cons: [
          "Vous ne battrez jamais le marché : vous obtenez son rendement, moins les frais.",
          "Ils baissent quand le marché baisse, sans protection.",
          "La multitude d'indices peut dérouter au début."
        ] },
        { t: "balance", h: "Obligations", intro: "Vous prêtez de l'argent à un État ou à une entreprise contre un intérêt convenu.", pros: [
          "Moins de variations que les actions.",
          "Des revenus prévisibles.",
          "Elles amortissent les baisses de la Bourse dans un portefeuille mixte."
        ], cons: [
          "Un rendement espéré plus faible sur le long terme.",
          "Leur prix baisse quand les taux d'intérêt montent.",
          "Risque de défaut si l'émetteur rencontre des difficultés."
        ] },
        { t: "balance", h: "Matières premières et ressources naturelles", intro: "Or, pétrole, gaz ou métaux, généralement via des ETF ou des actions d'entreprises du secteur (énergie, mines, agriculture).", pros: [
          "Elles diversifient par rapport aux actions et aux obligations.",
          "L'or a souvent joué le rôle de valeur refuge en période de crise.",
          "Elles peuvent protéger en partie contre l'inflation."
        ], cons: [
          "Très sensibles à la géopolitique, au climat et aux décisions des pays producteurs.",
          "Elles ne génèrent ni bénéfices ni dividendes par elles-mêmes.",
          "Certains produits qui les répliquent ont des coûts cachés."
        ] },
        { t: "p", h: "L'immobilier coté (SIIC et REIT)", html: "Ce sont des sociétés qui possèdent et gèrent des biens immobiliers (bureaux, entrepôts logistiques, logements locatifs) et distribuent une grande partie de leurs bénéfices sous forme de dividendes. Elles donnent accès à l'immobilier sans acheter d'appartement, mais souffrent quand les taux d'intérêt montent." },
        { t: "p", h: "Les crypto-actifs, avec beaucoup de prudence", html: "Ce sont des actifs numériques très volatils, avec une protection des investisseurs plus limitée que pour les produits traditionnels. Si vous décidez d'investir, que ce soit une petite part de votre patrimoine et uniquement avec de l'argent que vous pouvez vous permettre de perdre entièrement." },
        { t: "table", risk: [1, 2, 3, 4, 4, 5], h: "Comparatif rapide", head: ["Support", "Risque typique", "Effort", "Pour qui"], rows: [
          ["Dépôts et monétaire", "Très faible", "Minimal", "Épargne de précaution et court terme"],
          ["Obligations", "Faible à moyen", "Faible", "Stabiliser un portefeuille"],
          ["Fonds indiciel ou ETF mondial", "Moyen", "Faible", "Le cœur de presque tout portefeuille à long terme"],
          ["Actions individuelles", "Élevé", "Élevé", "Ceux qui veulent analyser des entreprises"],
          ["Matières premières", "Élevé", "Moyen", "Un complément de diversification"],
          ["Crypto-actifs", "Très élevé", "Moyen", "Une petite part, seulement si on comprend"]
        ] },
        { t: "deep", h: "Ce qu'il faut vérifier avant d'acheter un fonds ou un ETF", blocks: [
          { t: "list", items: [
            "<b>Indice répliqué :</b> le marché mondial, un pays, un secteur ? Plus il est large, plus il est diversifié.",
            "<b>Frais courants :</b> le coût annuel. Un écart de 1 % paraît minime, mais sur 30 ans il est énorme.",
            "<b>Méthode de réplication :</b> physique (le fonds achète les titres de l'indice) ou synthétique (il utilise des produits dérivés).",
            "<b>Devise et domiciliation :</b> elles influent sur la fiscalité et sur le risque de change.",
            "<b>Taille et liquidité :</b> les très petits fonds peuvent fermer et les ETF peu échangés ont des spreads élevés."
          ] }
        ] }
      ],
      quiz: [
        { q: "Qu'est-ce qui caractérise principalement un fonds indiciel ?", o: ["Une gestion active qui cherche à battre le marché chaque mois", "Il réplique un indice de façon passive avec des frais réduits", "Il n'investit que dans une seule entreprise", "Il garantit un rendement fixe"], a: 1, e: "Les fonds indiciels suivent un indice de référence de façon passive et à faible coût." },
        { q: "Quel risque est propre aux matières premières ?", o: ["Aucun : ce sont toujours des valeurs refuges", "Une forte sensibilité à la géopolitique, au climat et aux décisions des pays producteurs", "Leur prix ne peut que monter", "Elles sont garanties par l'État"], a: 1, e: "Leurs prix dépendent de nombreux facteurs extérieurs difficiles à prévoir." },
        { q: "Que sont les obligations ?", o: ["Des actions d'entreprises technologiques", "Un prêt à un État ou à une entreprise contre un intérêt convenu", "Un type de crypto-actif", "Un fonds investi uniquement en or"], a: 1, e: "Acheter une obligation, c'est prêter de l'argent contre un intérêt fixé à l'avance." },
        { q: "Que recommande-t-on à un débutant au sujet des crypto-actifs ?", o: ["Y placer l'essentiel de son portefeuille", "Les éviter toujours et sans exception", "S'il investit, se limiter à une petite part et à de l'argent qu'il peut perdre", "Emprunter pour investir davantage"], a: 2, e: "Du fait de leur forte volatilité et d'une protection réglementaire moindre, la plus grande prudence et une exposition limitée s'imposent." },
        { q: "Que sont les SIIC ou les REIT ?", o: ["Des obligations émises par les banques centrales", "Des sociétés qui possèdent et gèrent des biens immobiliers et distribuent une grande partie de leurs bénéfices en dividendes", "Un type de crypto-actif", "Des fonds investis uniquement en or physique"], a: 1, e: "Elles donnent accès à l'immobilier coté sans avoir à acheter un bien." },
        { q: "Quel avantage typique ont les actions individuelles par rapport à un fonds indiciel ?", o: ["Un risque plus faible garanti", "Davantage de potentiel de gain si l'on choisit la bonne entreprise, plus le droit de vote et d'éventuels dividendes", "Des frais toujours plus bas", "Une diversification automatique"], a: 1, e: "Elles concentrent le risque sur une entreprise, mais aussi le potentiel de gain si l'on voit juste." },
        { q: "Pourquoi de nombreuses autorités et communautés comme les Bogleheads recommandent-elles les fonds indiciels aux débutants ?", o: ["Parce qu'ils garantissent de gagner de l'argent", "Pour leur diversification automatique et leurs frais faibles par rapport à la gestion active", "Parce qu'ils ne comportent aucun risque", "Parce qu'ils n'investissent que dans les matières premières"], a: 1, e: "Ils répartissent le risque sur de nombreuses entreprises et coûtent bien moins cher que la gestion active." },
        { q: "Qu'est-ce qui distingue une obligation d'une action ?", o: ["L'obligation est un prêt à intérêt convenu ; l'action, une part de propriété de l'entreprise", "C'est exactement la même chose", "L'obligation rapporte toujours plus que l'action", "L'action garantit le capital investi"], a: 0, e: "Avec une obligation, vous prêtez de l'argent ; avec une action, vous devenez copropriétaire." }
      ]
    },

    {
      title: "Passer des ordres en pratique",
      subtitle: "De l'ouverture d'un compte à votre premier ordre, avec les protections auxquelles vous avez droit.",
      minutes: 12,
      essentials: [
        "N'utilisez que des courtiers agréés par l'autorité de contrôle de votre pays.",
        "Connaissez les types d'ordres : au marché, à cours limité, stop-loss et take-profit.",
        "Automatiser des versements réguliers évite la tentation de deviner le meilleur moment."
      ],
      blocks: [
        { t: "steps", h: "Vos premiers pas, dans l'ordre", items: [
          "<b>Choisissez un courtier agréé.</b> Vérifiez sur le site de l'autorité de contrôle (l'AMF en France) qu'il est enregistré et autorisé.",
          "<b>Ouvrez le compte et justifiez votre identité.</b> Des documents vous seront demandés : c'est une obligation légale contre le blanchiment.",
          "<b>Répondez au questionnaire d'adéquation.</b> La réglementation européenne MiFID impose d'évaluer vos connaissances et votre situation financière pour vous protéger.",
          "<b>Transférez l'argent</b> de votre compte bancaire vers votre compte-titres.",
          "<b>Recherchez le produit</b> par son nom ou son code ISIN et lisez son document d'informations clés.",
          "<b>Passez l'ordre</b> en choisissant le type, la quantité et, le cas échéant, le cours limite."
        ] },
        { t: "chart", id: "orders", caption: "La position des ordres par rapport au cours actuel : l'achat à cours limité attend un prix plus bas, le stop-loss limite les pertes et le take-profit sécurise les gains." },
        { t: "list", h: "Les types d'ordres", items: [
          "<b>Au marché :</b> exécuté immédiatement au meilleur prix disponible. Il est rapide, mais vous ne maîtrisez pas le prix exact.",
          "<b>À cours limité :</b> exécuté uniquement au prix que vous fixez ou à un meilleur prix. Vous maîtrisez le prix, mais il peut ne jamais être exécuté.",
          "<b>Stop-loss :</b> vend automatiquement si le prix descend jusqu'au niveau que vous fixez, pour limiter les pertes.",
          "<b>Take-profit :</b> vend automatiquement lorsque l'objectif de gain fixé à l'avance est atteint."
        ] },
        { t: "callout", html: "<b>Fiscalité :</b> chaque pays a ses règles et ses enveloppes avantageuses. En France, le PEA permet, après 5 ans, de ne payer que les prélèvements sociaux sur les gains ; en Espagne, les transferts entre fonds d'investissement ne sont pas imposés au moment du transfert. Renseignez-vous toujours sur les règles de votre pays de résidence." },
        { t: "balance", h: "Les versements programmés (DCA)", intro: "Il s'agit d'investir la même somme chaque mois, quoi qu'il arrive sur les marchés.", pros: [
          "Cela évite la tentation de deviner le meilleur moment.",
          "Vous achetez plus de parts quand le prix est bas et moins quand il est haut.",
          "Cela crée une habitude automatique et sans stress."
        ], cons: [
          "Si le marché monte de façon continue, tout investir d'un coup aurait rapporté un peu plus en moyenne.",
          "Chaque achat peut entraîner des frais : vérifiez les conditions du courtier.",
          "Cela demande de la régularité pendant des années."
        ] },
        { t: "deep", h: "Coûts cachés et protection des investisseurs", blocks: [
          { t: "list", items: [
            "<b>Change de devise :</b> acheter des actions en dollars peut coûter 0,5 % ou plus à chaque conversion.",
            "<b>Droits de garde :</b> certains courtiers facturent la conservation de vos titres ; d'autres non.",
            "<b>Fonds de garantie :</b> si un courtier fait faillite, vos titres restent à vous. Les espèces et les titres non restituables bénéficient en outre d'une couverture limitée : le minimum européen est de 20 000 €, et certains pays vont plus loin (en France, jusqu'à 70 000 € pour les titres).",
            "<b>Prêt de titres :</b> certains courtiers prêtent vos actions à des tiers. Renseignez-vous sur les conditions et sur qui perçoit les revenus.",
            "<b>Glissement (slippage) :</b> l'écart entre le prix attendu et le prix réellement exécuté, fréquent avec les ordres au marché sur des titres peu liquides."
          ] }
        ] }
      ],
      quiz: [
        { q: "Que devez-vous vérifier avant de choisir un courtier ?", o: ["Qu'il fait beaucoup de publicité sur les réseaux sociaux", "Qu'il est enregistré et contrôlé par l'autorité compétente", "Qu'il est le plus récent du marché", "Qu'il ne demande aucune donnée personnelle"], a: 1, e: "Seuls les établissements agréés et contrôlés offrent la protection juridique nécessaire pour investir en sécurité." },
        { q: "Qu'est-ce qu'un ordre stop-loss ?", o: ["Un ordre qui augmente automatiquement votre placement", "Une vente automatique déclenchée si le prix descend au niveau que vous avez fixé", "Un ordre qui ne sert qu'à acheter", "Un impôt sur les pertes"], a: 1, e: "Le stop-loss limite les pertes en vendant automatiquement au niveau de prix choisi." },
        { q: "Quel avantage fiscal ont les transferts entre fonds d'investissement en Espagne ?", o: ["Ils ne sont pas imposés au moment du transfert", "Ils sont exonérés d'impôt pour toujours", "Ils réduisent automatiquement l'impôt sur votre salaire", "Cet avantage n'existe pas"], a: 0, e: "Contrairement à la vente d'actions ou d'ETF, un transfert entre fonds ne déclenche pas d'imposition immédiate en Espagne." },
        { q: "Que sont les versements programmés (DCA) ?", o: ["Investir tout son capital d'un coup", "Verser la même somme à intervalles réguliers, sans chercher à deviner le moment idéal", "Un type d'impôt sur les dividendes", "Vendre au premier signe de baisse"], a: 1, e: "Automatiser les versements lisse le prix d'achat moyen dans le temps." },
        { q: "Qu'est-ce qu'un ordre take-profit ?", o: ["Une vente automatique lorsque l'objectif de gain fixé à l'avance est atteint", "Un type d'impôt sur les gains", "Un ordre qui ne sert qu'à acheter", "Des frais de tenue de compte"], a: 0, e: "Il clôture automatiquement la position lorsque le prix atteint votre objectif." },
        { q: "Qu'évalue la réglementation MiFID à l'ouverture d'un compte chez un courtier ?", o: ["Vos connaissances et votre situation financière, pour vous protéger", "Seulement votre nom et votre adresse", "Rien d'important : c'est une simple formalité", "Votre appartenance politique"], a: 0, e: "MiFID impose d'évaluer vos connaissances et votre situation avant d'investir, par mesure de protection." },
        { q: "Quel type de comptes fiscalement avantageux pour l'épargne à long terme existe dans certains pays européens ?", o: ["Aucun : cela n'existe pas en Europe", "Des comptes comme le PEA ou l'ISA, ou des plans d'épargne retraite", "Uniquement des comptes de crypto-actifs", "Un simple compte courant"], a: 1, e: "Plusieurs pays proposent des enveloppes fiscalement avantageuses ; renseignez-vous sur celles de votre pays." },
        { q: "En matière de garanties, quelle différence entre un ordre à cours limité et un ordre au marché ?", o: ["L'ordre limité garantit le prix mais peut ne pas être exécuté ; l'ordre au marché est exécuté immédiatement, sans maîtrise exacte du prix", "Les deux garantissent toujours le même prix", "L'ordre au marché n'est jamais exécuté", "L'ordre limité est toujours plus rapide"], a: 0, e: "L'ordre limité privilégie la maîtrise du prix ; l'ordre au marché, l'exécution immédiate." }
      ]
    },

    {
      title: "Analyser une entreprise",
      subtitle: "Ratios clés, analyse fondamentale et technique, et comment les combiner avec bon sens.",
      minutes: 14,
      essentials: [
        "L'analyse fondamentale étudie l'entreprise ; l'analyse technique, le comportement du prix.",
        "Des ratios comme le PER, le ROE ou l'endettement aident à comparer, mais ne doivent jamais être utilisés seuls.",
        "Aucune méthode ne prédit l'avenir : chacune apporte une information différente."
      ],
      blocks: [
        { t: "p", h: "L'analyse fondamentale", html: "Elle cherche à savoir ce que vaut réellement une entreprise : combien elle gagne, à quel rythme elle croît, combien elle doit et quels avantages elle a sur ses concurrents. Si le cours en Bourse est inférieur à cette valeur estimée, l'action pourrait être bon marché." },
        { t: "cards", h: "Les ratios les plus utilisés", items: [
          { icon: "calc", h: "PER", p: "Cours ÷ bénéfice par action. Il indique combien d'années de bénéfice actuel vous payez pour l'entreprise." },
          { icon: "chart", h: "PEG", p: "PER ÷ croissance annuelle attendue du bénéfice. Il permet de comparer des entreprises qui croissent à des rythmes différents." },
          { icon: "target", h: "ROE", p: "Bénéfice ÷ capitaux propres. Il mesure l'efficacité avec laquelle l'entreprise utilise l'argent de ses actionnaires." },
          { icon: "drop", h: "Rendement du dividende", p: "Dividende annuel ÷ cours. Attention : un chiffre très élevé peut annoncer une baisse du dividende." },
          { icon: "alert", h: "Dette nette / EBITDA", p: "Le nombre d'années de résultat opérationnel qu'il faudrait pour rembourser la dette. Au-delà de 3 ou 4, il faut y regarder de près." }
        ] },
        { t: "p", h: "Un exemple concret", html: "Une entreprise cote 50 € et gagne 2,50 € par action : son <b>PER est de 20</b>, autrement dit vous payez 20 années de bénéfices actuels. Si ses bénéfices progressent de 10 % par an, son <b>PEG est de 2</b> (20 ÷ 10). Une autre entreprise avec un PER de 15 et une croissance de 15 % aurait un PEG de 1 : elle est « moins chère » au regard de sa croissance, à condition que cette croissance soit durable." },
        { t: "list", h: "L'analyse technique", items: [
          "<b>Moyennes mobiles :</b> elles montrent la tendance de fond. Le croisement d'une moyenne courte au-dessus d'une moyenne longue est souvent lu comme un signal haussier.",
          "<b>RSI :</b> un indicateur de 0 à 100 qui aide à repérer si un actif est suracheté (au-dessus de 70) ou survendu (en dessous de 30) à court terme.",
          "<b>Figures :</b> triangles, drapeaux ou doubles sommets que certains analystes utilisent pour anticiper les mouvements, sans aucune garantie qu'ils se réalisent."
        ] },
        { t: "balance", h: "Fondamental ou technique ?", neutral: true, prosLabel: "Analyse fondamentale", consLabel: "Analyse technique", pros: [
          "Se concentre sur l'activité réelle et sa valeur à long terme.",
          "Utile pour décider quoi acheter et conserver pendant des années.",
          "Demande de lire des comptes et de comprendre le secteur."
        ], cons: [
          "Se concentre sur le prix, le volume et le comportement du marché.",
          "Utile pour décider quand acheter ou vendre.",
          "Très exposée au bruit et aux interprétations subjectives."
        ] },
        { t: "callout", html: "La conclusion honnête : <b>aucune des deux méthodes ne garantit de résultat</b>. Elles apportent des informations différentes et complémentaires, et la plupart des investisseurs de long terme accordent bien plus de poids à l'analyse fondamentale." },
        { t: "deep", h: "Lire les comptes d'une entreprise", blocks: [
          { t: "list", items: [
            "<b>Compte de résultat :</b> les revenus, les charges et le bénéfice sur une période.",
            "<b>Bilan :</b> ce que l'entreprise possède (actif) et ce qu'elle doit (passif) à un instant donné.",
            "<b>Tableau des flux de trésorerie :</b> l'argent qui entre et sort réellement. Un bénéfice qui ne se transforme pas en trésorerie est un signal d'alerte.",
            "<b>Avantage concurrentiel :</b> marque, brevets, coûts bas ou effets de réseau qui protègent l'activité de la concurrence.",
            "<b>Où trouver ces informations :</b> dans les rapports annuels et trimestriels de la rubrique « Investisseurs » de chaque entreprise et dans les publications réglementées."
          ] }
        ] }
      ],
      quiz: [
        { q: "Que mesure le PER d'une entreprise ?", o: ["Sa dette totale en euros", "Combien d'années de bénéfice actuel vous payez pour l'entreprise", "Son nombre de salariés", "Le rendement garanti du dividende"], a: 1, e: "Le PER met en rapport le cours de l'action et le bénéfice par action." },
        { q: "Qu'évalue principalement l'analyse fondamentale ?", o: ["Uniquement l'évolution du prix sur les graphiques", "L'activité réelle de l'entreprise : bénéfices, dette et croissance", "Seulement le volume quotidien", "L'avis d'un seul analyste"], a: 1, e: "Elle étudie la santé et les perspectives réelles de l'entreprise, pas seulement son cours." },
        { q: "À quoi sert le RSI en analyse technique ?", o: ["À calculer les impôts", "À mesurer si un actif est suracheté ou survendu à court terme", "À fixer le prix d'introduction en Bourse", "À remplacer les états financiers"], a: 1, e: "C'est un indicateur de dynamique qui aide à repérer d'éventuels excès d'achat ou de vente." },
        { q: "Quelle conclusion honnête peut-on tirer de l'analyse technique par rapport à l'analyse fondamentale ?", o: ["L'analyse technique prédit l'avenir avec une certitude absolue", "L'analyse fondamentale est toujours inutile", "Aucune ne garantit de résultat : elles apportent des informations différentes et complémentaires", "Seule l'analyse fondamentale fonctionne à court terme"], a: 2, e: "Toutes deux offrent des points de vue différents, mais aucune ne supprime l'incertitude du marché." },
        { q: "Que mesure le ROE ?", o: ["Le bénéfice que l'entreprise génère avec le capital de ses actionnaires", "Le cours de l'action", "Le nombre d'actions en circulation", "La dette totale"], a: 0, e: "Il met en rapport le bénéfice net et les capitaux propres : il mesure l'efficacité." },
        { q: "À quoi sert le ratio PEG ?", o: ["À mesurer le dividende versé", "À comparer des entreprises qui croissent à des rythmes différents en rapportant le PER à la croissance attendue", "À calculer les impôts", "À fixer le prix d'introduction en Bourse"], a: 1, e: "Il divise le PER par la croissance attendue du bénéfice." },
        { q: "Que sont les figures de l'analyse technique (triangles, drapeaux, doubles sommets…) ?", o: ["Des garanties mathématiques de ce qui va se passer", "Des formes que certains analystes utilisent pour anticiper les mouvements, sans garantie qu'elles se réalisent", "Un type d'ordre d'achat", "Un impôt sur les plus-values"], a: 1, e: "Ce sont des outils d'appui ; aucune figure ne garantit l'évolution future du prix." },
        { q: "Que mesure le ratio dette / EBITDA ?", o: ["Le niveau d'endettement de l'entreprise par rapport à ce que génère son activité", "Le cours de l'action", "Le nombre d'actionnaires", "Le rendement du dividende"], a: 0, e: "Il aide à juger si l'endettement est raisonnable au regard de la capacité à générer des bénéfices." }
      ]
    },

    {
      title: "Stratégie et gestion du risque",
      subtitle: "Comment construire un portefeuille cohérent et le protéger des erreurs les plus coûteuses.",
      minutes: 14,
      essentials: [
        "Diversifiez entre types d'actifs, secteurs et pays.",
        "Définissez par écrit votre répartition cible et rééquilibrez régulièrement.",
        "Les pires ennemis de l'investisseur particulier sont souvent les frais et ses propres émotions."
      ],
      blocks: [
        { t: "chart", id: "donut", caption: "Exemple illustratif de portefeuille diversifié pour un profil équilibré à long terme. Ce n'est pas une recommandation : la bonne répartition dépend de votre profil." },
        { t: "list", h: "Les stratégies courantes", items: [
          "<b>Gestion indicielle passive :</b> acheter tout le marché avec des fonds indiciels et conserver pendant des décennies.",
          "<b>Value investing :</b> rechercher des entreprises cotées en dessous de leur valeur estimée selon l'analyse fondamentale.",
          "<b>Croissance :</b> miser sur des entreprises qui croissent bien plus vite que la moyenne, en acceptant des valorisations plus élevées.",
          "<b>Dividendes :</b> privilégier les entreprises aux dividendes stables ou croissants pour obtenir des revenus réguliers."
        ] },
        { t: "p", h: "Taille des positions et rééquilibrage", html: [
          "La <b>taille d'une position</b> correspond à la part de votre capital total placée sur une seule idée. Une règle courante chez les particuliers consiste à ne pas dépasser 5 à 10 % du portefeuille sur une seule action.",
          "Le <b>rééquilibrage</b> consiste à revenir régulièrement (par exemple une fois par an) à vos pourcentages cibles : vous vendez une partie de ce qui a le plus monté et achetez ce qui est resté à la traîne. Il vous oblige, avec discipline, à acheter bas et à vendre haut."
        ] },
        { t: "list", h: "Les cinq erreurs les plus coûteuses", items: [
          "<b>Le FOMO :</b> la peur de passer à côté, qui pousse à acheter par effet de mode ou sous la pression sociale.",
          "<b>L'effet de levier mal compris :</b> il multiplie les gains, mais aussi les pertes, parfois au-delà de la somme investie.",
          "<b>Ignorer les frais :</b> 1 à 2 % de plus par an peuvent représenter des dizaines de milliers d'euros en moins sur 20 ou 30 ans.",
          "<b>Trop se concentrer :</b> miser presque tout sur une entreprise, un secteur ou un pays.",
          "<b>Vouloir anticiper le marché :</b> entrer et sortir au gré de l'actualité finit souvent par acheter cher et vendre bas."
        ] },
        { t: "quote", text: "La Bourse est un mécanisme qui transfère l'argent des impatients vers les patients." },
        { t: "balance", h: "Long terme ou trading ?", prosLabel: "En faveur du long terme", consLabel: "Ce que disent les études sur le trading", pros: [
          "Moins de frais et d'impôts.",
          "Moins de stress et moins de décisions impulsives.",
          "Il tire pleinement parti des intérêts composés."
        ], cons: [
          "En moyenne, et après frais, les particuliers qui passent beaucoup d'ordres font moins bien que le marché lui-même.",
          "Il exige beaucoup de temps, de formation et de maîtrise de soi.",
          "Avec effet de levier, une erreur peut coûter plus que le capital investi."
        ] },
        { t: "deep", h: "Mesurer le risque comme un professionnel", blocks: [
          { t: "list", items: [
            "<b>Perte maximale (drawdown) :</b> la plus forte baisse d'un sommet à un creux. Demandez-vous si vous supporteriez la pire baisse historique de votre portefeuille.",
            "<b>Volatilité (écart type) :</b> dans quelle mesure les rendements s'écartent de leur moyenne. Plus de volatilité signifie plus d'incertitude.",
            "<b>Ratio de Sharpe :</b> le rendement supplémentaire obtenu par unité de risque pris. Il permet de comparer des stratégies aux risques différents.",
            "<b>Corrélation :</b> la façon dont deux actifs évoluent l'un par rapport à l'autre. Bien diversifier, c'est combiner des actifs peu corrélés.",
            "<b>Risque de séquence :</b> subir une forte baisse juste au moment où l'on commence à retirer de l'argent fait bien plus mal que la subir au début."
          ] }
        ] }
      ],
      quiz: [
        { q: "Qu'est-ce que le rééquilibrage d'un portefeuille ?", o: ["Vendre tout le portefeuille une fois par an", "Revenir périodiquement aux pourcentages cibles de chaque type d'actif", "Un type d'ordre d'achat urgent", "Augmenter toujours le risque avec le temps"], a: 1, e: "Il ramène le portefeuille à sa composition cible en vendant ce qui a le plus monté et en achetant ce qui est à la traîne." },
        { q: "Qu'est-ce que le FOMO en investissement ?", o: ["Un indicateur technique de tendance", "La peur de passer à côté, qui pousse à acheter par effet de mode ou sous la pression sociale", "Un type de fonds réglementé", "Des frais bancaires"], a: 1, e: "Le FOMO pousse à des décisions impulsives fondées sur le bruit et non sur sa propre analyse." },
        { q: "Quel risque présente l'effet de levier si on le comprend mal ?", o: ["Aucun : il améliore toujours les résultats", "Il peut multiplier aussi bien les gains que les pertes, parfois au-delà du capital investi", "Il n'a d'effet que sur les impôts", "Il supprime la volatilité du portefeuille"], a: 1, e: "L'effet de levier amplifie les résultats dans les deux sens." },
        { q: "Que montrent généralement les études sur le trading actif des particuliers ?", o: ["Qu'ils battent presque toujours le marché facilement", "Qu'en moyenne, après frais, ils obtiennent souvent de moins bons résultats que le marché", "Qu'il n'y a aucune différence", "Que cela ne marche qu'avec les cryptomonnaies"], a: 1, e: "Les données empiriques indiquent que les transactions fréquentes pénalisent souvent le rendement moyen du particulier." },
        { q: "Qu'est-ce que la taille d'une position ?", o: ["Le nombre de courtiers que vous utilisez", "La part de votre capital total placée sur une seule idée d'investissement", "La taille de l'entreprise dans laquelle vous investissez", "Un type d'ordre de Bourse"], a: 1, e: "Une règle courante consiste à ne pas mettre plus de 5 à 10 % du portefeuille sur une seule action." },
        { q: "Qu'est-ce qui caractérise le value investing ?", o: ["N'acheter que des crypto-actifs", "Rechercher des entreprises cotées en dessous de leur valeur estimée selon l'analyse fondamentale", "Toujours revendre en moins d'une journée", "Ignorer complètement les fondamentaux"], a: 1, e: "Il cherche des entreprises que le marché sous-évalue par rapport à leur valeur estimée." },
        { q: "Que privilégie l'investissement axé sur les dividendes ?", o: ["Les entreprises aux dividendes stables ou croissants, pour des revenus réguliers", "Uniquement les entreprises déficitaires", "Exclusivement les matières premières", "Des crypto-actifs très volatils"], a: 0, e: "Il recherche des revenus réguliers grâce à des dividendes durables." },
        { q: "Pourquoi ignorer les frais est-il une erreur coûteuse sur le long terme ?", o: ["Les frais n'ont jamais d'effet sur le résultat final", "1 à 2 % de plus par an peuvent représenter des dizaines de milliers d'euros en moins sur 20 ou 30 ans, par l'effet composé", "Les frais n'existent que sur les matières premières", "Ils ne comptent que si vous investissez moins de 100 €"], a: 1, e: "De petites différences de coût sont énormément amplifiées avec le temps." }
      ]
    },

    {
      title: "Macroéconomie, cycles et psychologie",
      subtitle: "Pourquoi les marchés bougent et comment éviter que vos émotions décident à votre place.",
      minutes: 15,
      essentials: [
        "Les taux d'intérêt, l'inflation et la croissance économique font bouger les marchés.",
        "Les marchés traversent des cycles : les hausses sont suivies de baisses, et inversement.",
        "Connaître vos biais psychologiques est aussi important que connaître les produits."
      ],
      blocks: [
        { t: "p", h: "Les banques centrales et les taux d'intérêt", html: "La Banque centrale européenne ou la Réserve fédérale américaine relèvent leurs taux pour freiner l'inflation et les abaissent pour stimuler l'économie. Des taux plus élevés renchérissent le crédit, font généralement baisser le prix des obligations déjà émises et peuvent refroidir la valorisation des entreprises de croissance." },
        { t: "cards", h: "Trois indicateurs à suivre", items: [
          { icon: "percent", h: "Inflation", p: "Si elle grimpe fortement, les banques centrales relèvent leurs taux. Elle érode la valeur des liquidités et des obligations à taux fixe." },
          { icon: "factory", h: "Croissance (PIB)", p: "Une économie en croissance dope les bénéfices des entreprises ; une récession les réduit." },
          { icon: "currency", h: "Devises", p: "Si vous investissez dans une autre monnaie, son évolution face à l'euro s'ajoute à votre rendement ou s'en retranche." }
        ] },
        { t: "chart", id: "cycle", caption: "Les phases du cycle économique. Chaque phase favorise souvent des secteurs différents, mais personne ne peut prévoir précisément quand le cycle se retourne." },
        { t: "p", h: "Les cycles de marché", html: "Les marchés alternent phases de hausse et de baisse. On parle de <b>correction</b> lorsqu'un indice recule de plus de 10 % par rapport à son sommet et de <b>marché baissier</b> lorsque la baisse dépasse 20 %. Historiquement, les marchés diversifiés se sont remis de toutes leurs baisses, même s'il a parfois fallu des années." },
        { t: "chart", id: "emotion", caption: "Le cycle émotionnel de l'investisseur : l'euphorie coïncide souvent avec le risque maximal et la panique avec la plus grande opportunité. Savoir dans quelle phase se trouvent vos émotions vous évite d'acheter cher et de vendre bas." },
        { t: "list", h: "Les biais qui vous feront perdre de l'argent", items: [
          "<b>Aversion à la perte :</b> perdre 100 € fait plus mal que gagner 100 € ne fait plaisir, ce qui pousse à vendre en pleine panique.",
          "<b>Excès de confiance :</b> après quelques réussites, se croire capable de prédire le marché.",
          "<b>Comportement moutonnier :</b> acheter parce que tout le monde achète.",
          "<b>Ancrage :</b> rester fixé sur son prix d'achat, comme si le marché s'en souvenait.",
          "<b>Biais de récence :</b> croire que ce qui s'est passé ces derniers mois va continuer."
        ] },
        { t: "balance", h: "Faut-il suivre l'actualité économique ?", pros: [
          "Vous comprenez pourquoi les marchés bougent et les baisses ne vous prennent pas par surprise.",
          "Cela vous aide à repérer les risques de votre portefeuille (devise, taux d'intérêt, secteurs)."
        ], cons: [
          "Trop d'actualité incite à passer trop d'ordres.",
          "Les titres cherchent à capter l'attention : ils amplifient la peur comme l'euphorie."
        ] },
        { t: "callout", html: "Pour l'investisseur de long terme, la meilleure défense contre les émotions est un <b>plan écrit</b> : ce que vous achetez, dans quelle proportion, à quelle fréquence vous versez et quand vous rééquilibrez. Décidez à tête reposée et appliquez le plan quand les émotions montent." },
        { t: "deep", h: "Fiscalité et planification avancée", blocks: [
          { t: "list", items: [
            "<b>Imputation des pertes :</b> dans de nombreux pays, les moins-values peuvent être déduites des plus-values de la même année ou des années suivantes (10 ans en France, 4 ans en Espagne).",
            "<b>Règle des deux mois :</b> en Espagne, si vous vendez à perte des titres cotés et rachetez des titres identiques dans les deux mois précédents ou suivants, vous ne pouvez pas imputer cette perte tant que vous n'avez pas revendu les titres rachetés. D'autres pays ont des règles comparables.",
            "<b>Double imposition des dividendes :</b> les dividendes étrangers peuvent être imposés à la source et dans votre pays ; une partie est souvent récupérable grâce aux conventions fiscales.",
            "<b>Enveloppes fiscalement avantageuses :</b> PEA, assurance-vie et PER en France, ISA au Royaume-Uni… chaque pays a les siennes.",
            "Les règles fiscales évoluent : renseignez-vous toujours auprès de l'administration fiscale de votre pays ou d'un conseiller fiscal."
          ] }
        ] }
      ],
      quiz: [
        { q: "Que font généralement les banques centrales quand l'inflation est très élevée ?", o: ["Elles baissent leurs taux d'intérêt", "Elles relèvent leurs taux d'intérêt", "Elles achètent des actions de toutes les entreprises", "Elles ferment la Bourse"], a: 1, e: "Relever les taux renchérit le crédit et refroidit la demande, ce qui aide à freiner l'inflation." },
        { q: "Quel effet une hausse des taux a-t-elle généralement sur les obligations déjà émises ?", o: ["Leur prix a tendance à monter", "Leur prix a tendance à baisser", "Elle ne les affecte pas", "Elles se transforment en actions"], a: 1, e: "Les nouvelles obligations rapportent davantage : les anciennes, moins rémunératrices, perdent de leur attrait et leur prix baisse." },
        { q: "Qu'est-ce qu'une correction de marché ?", o: ["Une baisse de plus de 10 % par rapport au sommet", "Une erreur du courtier", "Une hausse de 50 %", "Un changement de loi"], a: 0, e: "C'est une baisse de plus de 10 % ; au-delà de 20 %, on parle de marché baissier." },
        { q: "À partir de quelle baisse par rapport au sommet parle-t-on généralement de marché baissier ?", o: ["5 %", "10 %", "20 %", "60 %"], a: 2, e: "Le seuil habituel est une baisse de plus de 20 % par rapport au sommet." },
        { q: "Qu'est-ce que l'aversion à la perte ?", o: ["Ne jamais investir", "Le fait qu'une perte fasse plus mal qu'un gain du même montant ne fait plaisir", "Un type d'assurance", "Un indicateur technique"], a: 1, e: "Ce biais pousse à vendre dans la panique ou à ne jamais vendre ses placements perdants." },
        { q: "Dans le cycle émotionnel de l'investisseur, avec quelle phase le risque maximal coïncide-t-il généralement ?", o: ["La panique", "Le découragement", "L'euphorie", "L'espoir"], a: 2, e: "Quand tout le monde est euphorique, les prix sont souvent plus élevés, et le risque aussi." },
        { q: "Comment la devise influe-t-elle sur un placement dans une autre monnaie ?", o: ["Elle n'a jamais d'effet", "Son évolution face à votre monnaie s'ajoute au rendement ou s'en retranche", "Elle ne concerne que les obligations", "Elle améliore toujours le rendement"], a: 1, e: "Si le dollar baisse face à l'euro, un placement en dollars vaut moins en euros, même s'il n'a pas bougé." },
        { q: "Quelle est la meilleure défense contre les décisions émotionnelles ?", o: ["Consulter le cours toutes les heures", "Suivre les influenceurs", "Un plan d'investissement écrit et décidé à tête reposée", "Investir avec effet de levier"], a: 2, e: "Un plan écrit vous rappelle ce que vous aviez décidé quand les émotions prennent le dessus." }
      ]
    }
  ]
};
