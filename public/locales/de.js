window.LOCALES = window.LOCALES || {};
window.LOCALES.de = {
  meta: { name: "Deutsch", short: "DE", htmlLang: "de", locale: "de-DE" },

  ui: {
    brand: "Monibas Capital",
    brandTag: "Mit Köpfchen investieren, nicht aus dem Bauch.",
    skip: "Zum Inhalt springen",
    nav: { label: "Hauptnavigation", learn: "Lernen", simulator: "Simulatoren", forum: "Forum", ai: "KI-Berater", resources: "Nachrichten", menu: "Menü öffnen", closeMenu: "Menü schließen" },
    account: { login: "Anmelden", logout: "Abmelden", settings: "Einstellungen" },
    common: { close: "Schließen", cancel: "Abbrechen", confirm: "Bestätigen", retry: "Erneut versuchen" },

    hero: {
      title: "Investieren lernen",
      titleLine2: "von null an, mit Verstand.",
      lead: "Ein geführter Weg von den absoluten Grundlagen bis zu fortgeschrittenen Themen: Charts, die man versteht, Argumente dafür und dagegen bei jedem Thema, Tests zur Lernkontrolle und Werkzeuge zum Üben, ohne echtes Geld zu riskieren.",
      start: "Von vorn beginnen",
      continue: "Weiter mit Stufe {n}",
      review: "Lernweg ansehen",
      simulator: "Simulator ausprobieren",
      resume: "Du bist bei",
      allDone: "Du hast den gesamten Lernweg abgeschlossen. Wiederhole, was du möchtest, oder setze dein Wissen im Simulator um.",
      artCaption: "Jede Kerze fasst einen Börsentag zusammen.",
      artTag: "Du lernst, sie zu lesen",
      facts: { levels: "Stufen", questions: "Testfragen", minutes: "Minuten Lesezeit", languages: "Sprachen" }
    },
    how: {
      title: "So funktioniert es",
      sub: "Du brauchst kein Vorwissen. Du lernst in deinem Tempo und weißt immer, wo du stehst.",
      steps: [
        { h: "Lies in deinem Tempo", p: "Jede Stufe beginnt mit dem Wichtigsten in drei Sätzen und vertieft es dann mit Charts, Beispielen und einem optionalen Abschnitt für Fortgeschrittene." },
        { h: "Zeig, was du gelernt hast", p: "Jede Stufe endet mit einem Test aus 8 Fragen. Mit 70 % oder mehr schaltest du die nächste frei." },
        { h: "Üben und austauschen", p: "Simuliere den Zinseszins, frag den KI-Berater und teile deine Fragen mit der Community im Forum." }
      ]
    },
    route: {
      title: "Dein Lernweg",
      sub: "Drei Etappen und acht Stufen. Jede Stufe wird freigeschaltet, wenn du den Test der vorherigen bestehst.",
      summary: "{done} von {total} Stufen abgeschlossen",
      levelN: "Stufe {n}",
      min: "{n} Min.",
      score: "Ergebnis: {n} %",
      status: { done: "Abgeschlossen", open: "Verfügbar", locked: "Gesperrt" }
    },
    tools: {
      title: "Werkzeuge zum Üben",
      sub: "Du kannst sie jederzeit nutzen, auch bevor du den Lernweg abgeschlossen hast.",
      simulator: { h: "Simulatoren", p: "Zinseszins, Kosten, dein Depot, Positionsgröße und die Challenge „steigt oder fällt?“." },
      forum: { h: "Forum", p: "Stell Fragen, teile deine Erfahrungen und lerne von anderen, die ebenfalls anfangen." },
      ai: { h: "KI-Berater", p: "Erhalte klare Antworten auf konkrete Fragen – immer mit Vor- und Nachteilen." },
      resources: { h: "Nachrichten und Quellen", p: "Aktuelle Finanzschlagzeilen und die offiziellen Quellen, die du kennen solltest." }
    },

    level: {
      back: "Zurück zum Lernweg",
      minutes: "{n} Min. Lesezeit",
      essentials: "Das Wichtigste",
      deepHint: "Optional, für alle, die tiefer einsteigen möchten",
      jumpQuiz: "Kenne ich schon: zum Test",
      askAi: "Den Berater fragen",
      aiPrefill: "Ich habe eine Frage zu „{title}“: ",
      toc: "In dieser Stufe",
      tocQuiz: "Test der Stufe",
      pros: "Dafür",
      cons: "Dagegen und Risiken",
      termHint: "Tippe, um die Definition zu sehen",
      prev: "Vorherige Stufe",
      next: "Nächste Stufe",
      nextLocked: "Nächste Stufe (gesperrt)",
      swipeHint: "Wischen, um die ganze Grafik zu sehen",
      riskLabel: "Risikostufe: {n} von 5",
      pagerLabel: "Navigation zwischen den Stufen",
      locked: {
        title: "Diese Stufe ist noch gesperrt",
        text: "Um „{title}“ zu öffnen, bestehe zuerst den Test von Stufe {prev} mit mindestens 70 %.",
        go: "Zu Stufe {prev}",
        back: "Gesamten Lernweg ansehen"
      }
    },
    quiz: {
      title: "Test zu Stufe {n}",
      hint: "{q} Fragen. Beantworte {min} richtig (70 %), um die nächste Stufe freizuschalten.",
      hintLast: "{q} Fragen. Beantworte {min} richtig (70 %), um den Lernweg abzuschließen.",
      answered: "{a} von {q} beantwortet",
      submit: "Test auswerten",
      missing: "Dir fehlen noch {n} Antworten.",
      correct: "Richtig.",
      wrong: "Nicht ganz.",
      passTitle: "Bestanden!",
      passText: "Du hast {c} von {q} richtig beantwortet ({p} %).",
      unlocked: "Stufe {n} freigeschaltet",
      finished: "Du hast den gesamten Lernweg abgeschlossen. Herzlichen Glückwunsch!",
      failTitle: "Noch nicht",
      failText: "Du hast {c} von {q} richtig ({p} %), nötig sind {min}. Lies die Erklärungen und versuch es noch einmal.",
      retry: "Test wiederholen",
      goNext: "Zu Stufe {n}",
      backRoute: "Zurück zum Lernweg",
      previous: "Du hast diesen Test bereits mit {p} % bestanden. Du kannst ihn jederzeit wiederholen."
    },
    sim: {
      title: "Zinseszins-Simulator",
      sub: "Bewege die Regler und sieh, wie Zeit und Beständigkeit die Wirkung jedes Euros vervielfachen.",
      initial: "Startkapital",
      monthly: "Monatliche Sparrate",
      rate: "Geschätzte jährliche Rendite",
      years: "Anlagedauer",
      yearsVal: "{n} Jahre",
      yearVal: "1 Jahr",
      presetsLabel: "Beispielszenarien",
      presets: [
        { label: "Konservativ (3 %)", rate: 3 },
        { label: "Ausgewogen (5 %)", rate: 5 },
        { label: "Dynamisch (7 %)", rate: 7 }
      ],
      inflation: "Ergebnis in heutiger Kaufkraft anzeigen (nach 2 % Inflation pro Jahr)",
      contributed: "Eingezahltes Kapital",
      interest: "Erzielte Zinsen",
      final: "Geschätzter Endwert",
      legendTotal: "Gesamtwert",
      legendContrib: "Eingezahltes Kapital",
      tipYear: "Jahr {n}",
      chartLabel: "Entwicklung der Anlage Jahr für Jahr",
      note: "Simulation mit monatlicher Verzinsung und konstanter Rendite. In der Realität schwankt die Rendite jedes Jahr, es fallen Kosten und Steuern an, und vergangene Wertentwicklungen sind keine Garantie für die Zukunft.",
      privacy: "Die Berechnungen laufen auf deinem Gerät: Es werden keine Daten gesendet."
    },
    forum: {
      title: "Community-Forum",
      sub: "Ein Ort, um ohne Scheu Fragen zu stellen und zu teilen, was du lernst.",
      topicsLabel: "Forenthemen",
      rules: "Regeln: respektvoll bleiben, keine Renditeversprechen oder Kaufempfehlungen und keine persönlichen Daten teilen.",
      loading: "Beiträge werden geladen …",
      empty: "Zu diesem Thema gibt es noch keine Beiträge. Wie wäre es, wenn du das Gespräch beginnst?",
      offline: "Keine Verbindung zum Forenserver. Prüfe deine Verbindung und versuch es erneut.",
      composerLabel: "Schreib deinen Beitrag",
      placeholder: "Schreib deine Frage oder teile deine Erfahrung …",
      publish: "Veröffentlichen",
      counter: "{n}/600",
      reply: "Antworten",
      replyPh: "Schreib deine Antwort …",
      sendReply: "Antwort veröffentlichen",
      delete: "Löschen",
      deleteConfirm: "Diesen Beitrag löschen? Das lässt sich nicht rückgängig machen.",
      deleted: "Beitrag gelöscht",
      posted: "Beitrag veröffentlicht",
      replied: "Antwort veröffentlicht",
      loginCta: "Melde dich an, um Beiträge zu schreiben und zu antworten."
    },
    ai: {
      title: "KI-Berater",
      sub: "Klare Erklärungen zu deinen Fragen rund ums Investieren. Du siehst immer Argumente dafür und dagegen.",
      panelTitle: "Unterhaltung",
      panelSub: "Frag in deinen eigenen Worten; der Berater passt sich deinem Niveau an.",
      welcome: "Hallo! Ich bin der Berater von Monibas Capital. Frag mich alles zum Investieren: Begriffe, Produkte, Strategien oder Fragen zu den Stufen. Ich nenne dir immer die Vor- und Nachteile, aber keine persönlichen Empfehlungen.",
      needLogin: "Melde dich an, um den KI-Berater zu nutzen. So verhindern wir Missbrauch des Dienstes.",
      placeholder: "Zum Beispiel: Was ist der Unterschied zwischen einem ETF und einem Indexfonds?",
      inputLabel: "Deine Frage an den Berater",
      send: "Senden",
      thinking: "Der Berater schreibt",
      suggestions: [
        "Was ist ein ETF und worin unterscheidet er sich von einem Indexfonds?",
        "Lohnt sich das Investieren, wenn ich nur 50 € im Monat anlegen kann?",
        "Wie wirken sich steigende Zinsen auf meine Anlagen aus?",
        "Erklär mir das KGV an einem einfachen Beispiel"
      ],
      clear: "Neue Unterhaltung",
      disclaimer: "Die Antworten dienen nur der Orientierung und Bildung. Sie sind keine persönliche Finanzberatung, und der Berater hat keine Marktdaten in Echtzeit."
    },
    res: {
      title: "Nachrichten und Quellen",
      sub: "Bleib mit den Schlagzeilen führender Finanzmedien auf dem Laufenden und lerne die offiziellen Quellen zum Gegenprüfen kennen.",
      liveTitle: "Aktuelle Schlagzeilen",
      liveSub: "Werden automatisch aktualisiert. Tippe auf eine Schlagzeile, um den ganzen Artikel auf der Seite des Mediums zu lesen.",
      updated: "Aktualisiert: {time}",
      unavailable: "Die Schlagzeilen können gerade nicht geladen werden. Schau in der Zwischenzeit direkt bei den Quellen unten nach.",
      tip: "Prüfe eine Nachricht immer in mindestens zwei unabhängigen Quellen und misstraue jedem, der dir sichere Renditen verspricht.",
      sourcesTitle: "Referenzquellen",
      newTab: "(öffnet in einem neuen Tab)"
    },
    settings: {
      title: "Einstellungen",
      language: "Sprache",
      theme: "Darstellung",
      theme_auto: "Automatisch",
      theme_light: "Hell",
      theme_dark: "Dunkel",
      progress: "Dein Fortschritt",
      reset: "Fortschritt zurücksetzen",
      resetConfirm: "Deinen gesamten Fortschritt zurücksetzen? Die Stufen werden wieder gesperrt.",
      resetDone: "Fortschritt zurückgesetzt",
      account: "Konto",
      loggedAs: "Angemeldet als {name}",
      syncNote: "Deine Sprache und dein Fortschritt werden in deinem Konto gespeichert und zwischen Geräten synchronisiert.",
      deleteAccount: "Mein Konto löschen",
      deleteTitle: "Konto löschen",
      deleteText: "Dein Konto, dein Fortschritt und alle deine Forenbeiträge und Antworten werden gelöscht. Das lässt sich nicht rückgängig machen.",
      deletePwd: "Gib zur Bestätigung dein Passwort ein",
      deleteBtn: "Endgültig löschen",
      deleted: "Dein Konto wurde gelöscht",
      guestNote: "Melde dich an, um Fortschritt und Sprache in deinem Konto zu speichern und auf jedem Gerät zu nutzen."
    },
    auth: {
      title: "Dein Konto",
      sub: "Mit einem Konto kannst du im Forum schreiben, den KI-Berater nutzen und deinen Fortschritt speichern.",
      tabLogin: "Anmelden",
      tabRegister: "Konto erstellen",
      email: "E-Mail-Adresse",
      password: "Passwort",
      showPwd: "Passwort anzeigen",
      hidePwd: "Passwort verbergen",
      username: "Benutzername",
      usernameHint: "3 bis 30 Zeichen: Buchstaben, Ziffern, Punkt, Bindestrich oder Unterstrich. Er ist im Forum sichtbar.",
      passwordHint: "Mindestens 8 Zeichen. Verwende ein Passwort, das du nirgendwo sonst nutzt.",
      loginBtn: "Anmelden",
      registerBtn: "Konto erstellen",
      working: "Einen Moment …",
      welcome: "Hallo, {name}!",
      loggedOut: "Du hast dich abgemeldet"
    },
    heroChart: {
      "label": "Interaktiver Beispiel-Kerzenchart",
      "controls": "Chart-Optionen",
      "candles": "Kerzen",
      "line": "Linie",
      "ma": "Gleitender Durchschnitt (10)",
      "volume": "Volumen",
      "levels": "Unterstützung und Widerstand",
      "hint": "Fahre mit der Maus über eine Kerze oder tippe darauf, um zu sehen, was sie aussagt. Per Tastatur geht es mit den Pfeiltasten.",
      "session": "Handelstag {n}",
      "change": "Veränderung",
      "volumeLbl": "Volumen",
      "aboveMa": "Schluss über dem gleitenden Durchschnitt: Der übergeordnete Trend zeigt nach oben.",
      "belowMa": "Schluss unter dem gleitenden Durchschnitt: Der übergeordnete Trend ist schwach.",
      "caveat": "Kein Muster sagt allein die Zukunft voraus: Prüfe immer den Zusammenhang.",
      "note": "Beispieldaten: Sie gehören zu keinem echten Wertpapier.",
      "cta": "Glaubst du, du kannst die nächste Kerze erraten?",
      "ctaBtn": "Zur Challenge",
      "patterns": {
        "bigBull": {
          "h": "Starke steigende Kerze",
          "p": "Langer grüner Körper: Die Käufer haben den ganzen Tag dominiert. Kommt sie mit hohem Volumen, ist sie glaubwürdiger."
        },
        "bigBear": {
          "h": "Starke fallende Kerze",
          "p": "Langer roter Körper: Die Verkäufer haben übernommen. Mit hohem Volumen spiegelt sie meist echten Verkaufsdruck wider."
        },
        "bull": {
          "h": "Steigende Kerze",
          "p": "Schluss über der Eröffnung: Die Käufer haben gewonnen, aber nicht deutlich."
        },
        "bear": {
          "h": "Fallende Kerze",
          "p": "Schluss unter der Eröffnung: Die Verkäufer haben gewonnen, aber nicht deutlich."
        },
        "doji": {
          "h": "Doji",
          "p": "Eröffnung und Schluss fast gleich: Unentschlossenheit. Nach einer langen Bewegung kann er eine Pause andeuten, ist aber nie eine Garantie."
        },
        "hammer": {
          "h": "Hammer",
          "p": "Langer unterer Docht: Der Kurs fiel, und die Käufer haben ihn wieder nach oben gebracht. Nach einem Rückgang gilt er als mögliche Ablehnung tieferer Kurse."
        },
        "star": {
          "h": "Sternschnuppe",
          "p": "Langer oberer Docht: Der Kurs stieg, und die Verkäufer haben ihn wieder gedrückt. Nach einem Anstieg kann sie Erschöpfung signalisieren."
        }
      }
    },
    lab: {
      "title": "Simulatoren",
      "sub": "Übe mit interaktiven Werkzeugen, ohne echtes Geld und ohne Risiko. Alles läuft auf deinem Gerät.",
      "tabsLabel": "Verfügbare Simulatoren",
      "tabs": {
        "compound": "Zinseszins",
        "challenge": "Steigt oder fällt?",
        "fees": "Kosten",
        "portfolio": "Dein Depot",
        "position": "Positionsgröße"
      },
      "practice": "Setz es in die Praxis um",
      "practiceGo": "Simulator öffnen",
      "challenge": {
        "h": "Challenge: steigt oder fällt?",
        "p": "Schau dir den Chart an und tippe auf die Richtung der nächsten 5 Handelstage. Schlägt dein Bauchgefühl den Zufall?",
        "intro": "Du siehst 10 Kerzencharts. Entscheide jeweils, ob der Kurs in 5 Handelstagen höher oder tiefer als jetzt steht.",
        "start": "Challenge starten",
        "up": "Er steigt",
        "down": "Er fällt",
        "round": "Chart {n} von {total}",
        "score": "Treffer: {n}",
        "now": "Jetzt",
        "rightUp": "Richtig! Er ist um {p} gestiegen.",
        "rightDown": "Richtig! Er ist um {p} gefallen.",
        "wrongUp": "Daneben: Er ist um {p} gestiegen.",
        "wrongDown": "Daneben: Er ist um {p} gefallen.",
        "next": "Nächster Chart",
        "seeResult": "Ergebnis ansehen",
        "again": "Challenge wiederholen",
        "doneTitle": "Ergebnis: {n} von {total} Treffern",
        "verdictMid": "Genau das würde man auch beim Münzwurf erwarten.",
        "verdictHigh": "Gute Serie! Aber Vorsicht: 8 oder mehr von 10 Treffern aus purem Glück schafft etwa 1 von 18 Menschen.",
        "verdictLow": "Pechsträhne … die aber auch nichts bedeutet: 8 oder mehr von 10 Fehlern aus purem Zufall passieren etwa 1 von 18 Menschen.",
        "reveal": "Der Trick: Alle diese Charts wurden zufällig erzeugt. Trotzdem hast du wahrscheinlich Trends, Unterstützungen oder Muster gesehen.",
        "lesson": "Das Gehirn sucht Muster, auch wo es keine gibt. Deshalb folgen besonnene Anleger einem Plan statt ihrem Bauchgefühl.",
        "chartLabel": "Chart der Challenge"
      },
      "fees": {
        "h": "Was Kosten wirklich kosten",
        "p": "Vergleiche dieselbe Sparsumme mit niedrigen und hohen Kosten und sieh, wie viel der Unterschied über die Jahre ausmacht.",
        "initial": "Startkapital",
        "monthly": "Monatliche Sparrate",
        "years": "Jahre",
        "gross": "Jährliche Rendite vor Kosten",
        "feeA": "Jährliche Kosten von Fonds A",
        "feeB": "Jährliche Kosten von Fonds B",
        "hintA": "Typisch für einen Indexfonds",
        "hintB": "Typisch für einen aktiv gemanagten Fonds",
        "finalA": "Endwert mit A",
        "finalB": "Endwert mit B",
        "diff": "Unterschied",
        "summary": "Mit Fonds B hättest du am Ende {amount} weniger: {p} weniger Vermögen, weil du jährlich {d} Prozentpunkte mehr zahlst.",
        "legendA": "Fonds A",
        "legendB": "Fonds B",
        "chartLabel": "Vermögensentwicklung je nach Kosten",
        "note": "Berechnung mit monatlicher Verzinsung; die Kosten werden jeden Monat von der Rendite abgezogen. Ohne Steuern und Inflation."
      },
      "portfolio": {
        "h": "Stell dein Depot zusammen",
        "p": "Verteile dein Geld auf verschiedene Anlagen und sieh, wie sich erwartete Rendite und Risiko verändern.",
        "equity": "Aktien weltweit",
        "bonds": "Anleihen",
        "cash": "Liquidität",
        "gold": "Gold",
        "autoHint": "Wenn du einen Regler bewegst, passen sich die anderen an, sodass die Summe immer 100 % ergibt.",
        "presetsLabel": "Beispieldepots",
        "presets": [
          "Konservativ",
          "Ausgewogen",
          "Dynamisch",
          "Nur Aktien"
        ],
        "expReturn": "Erwartete jährliche Rendite",
        "vol": "Übliche Schwankung (Volatilität)",
        "badYear": "Ein schlechtes Jahr (etwa 1 von 40)",
        "badYearNote": "Mit 10.000 € Einsatz könnten dir in so einem Jahr etwa {amount} bleiben.",
        "riskLevel": "Risikostufe",
        "riskNames": [
          "Sehr gering",
          "Gering",
          "Mittel",
          "Hoch",
          "Sehr hoch"
        ],
        "rangeLabel": "Mögliche Ergebnisse in einem Jahr",
        "rangeBad": "Schlechtes Jahr",
        "rangeGood": "Gutes Jahr",
        "rangeExp": "Erwartet",
        "tails": "Achtung: In der Realität kommen extreme Einbrüche häufiger vor, als dieses Modell annimmt. 2008 fielen Aktien weltweit innerhalb eines Jahres um rund 40 %.",
        "assumptions": "Beispielhafte langfristige Annahmen (keine Prognose): Aktien 7 % pro Jahr bei 16 % Volatilität; Anleihen 3 % und 6 %; Liquidität 2 % und 1 %; Gold 4 % und 15 %.",
        "note": "Das ist keine Empfehlung: Das passende Depot hängt von deinem Anlagehorizont ab und davon, wie viel Verlust du aushältst, ohne zu verkaufen."
      },
      "position": {
        "h": "Positionsgröße",
        "p": "Der Rechner, den Trader nutzen: wie viele Aktien du kaufen kannst, ohne mehr zu riskieren als geplant.",
        "capital": "Kontokapital",
        "risk": "Maximales Risiko pro Trade",
        "entry": "Einstiegskurs",
        "stop": "Stop-Loss",
        "target": "Kursziel (Take-Profit)",
        "shares": "Zu kaufende Aktien",
        "invest": "Positionswert",
        "riskAmt": "Maximaler Verlust bei ausgelöstem Stop",
        "rr": "Chance-Risiko-Verhältnis",
        "rrVal": "1 : {n}",
        "breakevenNote": "Bei diesem Verhältnis musst du mindestens {p} deiner Trades gewinnen, um kein Geld zu verlieren (ohne Kosten).",
        "ofCapital": "{p} deines Kapitals",
        "errStop": "Bei einem Kauf muss der Stop-Loss unter dem Einstiegskurs liegen.",
        "errTarget": "Das Kursziel muss über dem Einstiegskurs liegen.",
        "warnSize": "Die Position übersteigt dein Kapital: Sie wäre nur mit Hebel möglich, und der vervielfacht auch die Verluste.",
        "warnRisk": "Mehr als 2 % pro Trade zu riskieren ist aggressiv: Viele Profi-Trader beschränken sich auf 0,5–1 %.",
        "note": "Beispiel für Käufe (Long-Positionen). Ein Stop-Loss garantiert keinen Ausstiegskurs: Eröffnet der Kurs mit einer Lücke, kann der Verlust größer sein.",
        "chartLabel": "Niveaus des Trades"
      }
    },
    footer: {
      explore: "Entdecken",
      rights: "Alle Rechte vorbehalten.",
      disclaimer: "Bildungsinhalte, keine Finanzberatung. Investieren ist mit Risiken verbunden, einschließlich des Verlusts des eingesetzten Kapitals. Vergangene Wertentwicklungen sind keine Garantie für die Zukunft.",
      sources: "Inhalte auf Grundlage von Leitfäden der Finanzaufsichtsbehörden und bekannter Anlegergemeinschaften. Zuletzt überprüft: September 2026.",
      privacy: "Wir verwenden nur ein technisch notwendiges Cookie, um dich angemeldet zu halten. Keine Werbung, kein Tracking."
    }
  },

  errors: {
    NETWORK: "Keine Verbindung zum Server. Prüfe deine Verbindung und versuch es erneut.",
    SERVER_ERROR: "Auf dem Server ist ein Fehler aufgetreten. Bitte versuch es in ein paar Minuten erneut.",
    NOT_FOUND: "Das Gesuchte wurde nicht gefunden.",
    INVALID_INPUT: "Die gesendeten Daten sind ungültig. Bitte prüfe sie und versuch es erneut.",
    INVALID_USERNAME: "Der Benutzername muss 3 bis 30 Zeichen lang sein: Buchstaben, Ziffern, Punkt, Bindestrich oder Unterstrich.",
    INVALID_EMAIL: "Gib eine gültige E-Mail-Adresse ein.",
    WEAK_PASSWORD: "Das Passwort muss mindestens 8 Zeichen lang sein (und höchstens 72).",
    REGISTRATION_FAILED: "Das Konto konnte nicht erstellt werden: Der Benutzername oder die E-Mail-Adresse wird bereits verwendet.",
    INVALID_CREDENTIALS: "E-Mail-Adresse oder Passwort ist falsch.",
    UNAUTHENTICATED: "Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.",
    FORBIDDEN: "Dazu hast du keine Berechtigung.",
    BAD_ORIGIN: "Die Anfrage wurde aus Sicherheitsgründen blockiert. Lade die Seite neu und versuch es erneut.",
    TOO_MANY_REQUESTS: "Du hast zu viele Anfragen hintereinander gesendet. Warte einen Moment und versuch es erneut.",
    TOPIC_NOT_FOUND: "Dieses Forenthema gibt es nicht.",
    POST_NOT_FOUND: "Dieser Beitrag existiert nicht mehr.",
    EMPTY_MESSAGE: "Schreib etwas, bevor du veröffentlichst.",
    AI_DISABLED: "Der KI-Berater ist auf diesem Server nicht aktiviert. Der Administrator muss den API-Schlüssel einrichten.",
    AI_ERROR: "Der Berater konnte gerade nicht antworten. Bitte versuch es gleich noch einmal."
  },

  topics: {
    "primeros-pasos": "Erste Schritte",
    "acciones": "Aktien",
    "etfs-fondos": "ETFs und Fonds",
    "materias-primas": "Rohstoffe",
    "estrategia": "Strategie"
  },

  stages: [
    { name: "Grundlagen", title: "Das Fundament", desc: "Was du vor dem Investieren brauchst, das wichtigste Vokabular und wie man einen Chart liest." },
    { name: "Mittelstufe", title: "In die Praxis", desc: "Welche Produkte es gibt, wie der Handel konkret funktioniert und wie man ein Unternehmen analysiert." },
    { name: "Fortgeschritten", title: "Denken wie ein Anleger", desc: "Strategie, Risikomanagement, Makroökonomie und der psychologische Faktor." }
  ],

  charts: {
    inflation: { idle: "Ungenutztes Geld", invested: "Angelegt zu 7 % pro Jahr", year: "Jahr {n}", note: "Kaufkraft von 1.000 € bei 3 % Inflation pro Jahr" },
    line: { price: "Kurs", time: "Zeit", resistance: "Widerstand", support: "Unterstützung" },
    candle: { high: "Hoch", low: "Tief", open: "Eröffnung", close: "Schluss", bull: "Steigende Kerze", bear: "Fallende Kerze", sequence: "Aufwärtsfolge" },
    ma: { price: "Tageskurs", ma: "Gleitender Durchschnitt" },
    risk: {
      x: "Risiko (Kursschwankungen)", y: "Erwartete Rendite", note: "Schematische Darstellung",
      items: ["Tagesgeld und Geldmarkt", "Anleihen", "Globaler Indexfonds", "Einzelaktien", "Rohstoffe", "Kryptowerte"]
    },
    orders: { current: "Aktueller Kurs", limitBuy: "Limit-Kauf", stop: "Stop-Loss", take: "Take-Profit" },
    donut: { center: "Beispiel", items: ["Aktien weltweit", "Anleihen", "Liquidität", "Rohstoffe"] },
    cycle: { phases: ["Aufschwung", "Boom", "Rezession", "Erholung", "Tiefpunkt"] },
    emotion: {
      phases: ["Optimismus", "Euphorie", "Unruhe", "Angst", "Panik", "Resignation", "Hoffnung", "Erleichterung"],
      top: "Höchstes Risiko", bottom: "Größte Chance"
    }
  },

  resources: {
    groups: [
      {
        icon: "shield", title: "Offizielle Stellen",
        items: [
          { name: "BaFin", url: "https://www.bafin.de", desc: "Die deutsche Finanzaufsicht. In ihrer Datenbank prüfst du, ob ein Anbieter zugelassen ist." },
          { name: "Verbraucherzentrale", url: "https://www.verbraucherzentrale.de", desc: "Unabhängige Verbraucherinformationen zu Geldanlage, Kosten und Fallen." },
          { name: "ESMA", url: "https://www.esma.europa.eu", desc: "Die europäische Wertpapieraufsicht: Warnungen und Leitfäden für Anleger." }
        ]
      },
      {
        icon: "message", title: "Communitys",
        items: [
          { name: "Wertpapier-Forum", url: "https://www.wertpapier-forum.de", desc: "Großes deutschsprachiges Forum zu Wertpapieren, ETFs und Altersvorsorge." },
          { name: "Finanzfluss", url: "https://www.finanzfluss.de", desc: "Bekanntes Bildungsangebot zu ETFs, Depots und persönlichen Finanzen." },
          { name: "Investing.com", url: "https://de.investing.com", desc: "Kurse, Wirtschaftskalender und Analysen." }
        ]
      },
      {
        icon: "news", title: "Finanzpresse",
        items: [
          { name: "Handelsblatt", url: "https://www.handelsblatt.com", desc: "Führende deutsche Wirtschafts- und Finanzzeitung." },
          { name: "FAZ – Finanzen", url: "https://www.faz.net/aktuell/finanzen/", desc: "Finanz- und Börsenteil der Frankfurter Allgemeinen Zeitung." },
          { name: "Börse Frankfurt", url: "https://www.boerse-frankfurt.de", desc: "Kurse, Nachrichten und Informationen der Frankfurter Wertpapierbörse." },
          { name: "Reuters", url: "https://www.reuters.com/markets", desc: "Internationale Nachrichtenagentur: Märkte nahezu in Echtzeit." }
        ]
      }
    ]
  },

  levels: [
    {
      title: "Bevor du investierst",
      subtitle: "Was dir klar sein sollte, bevor du deinen ersten Euro an der Börse anlegst.",
      minutes: 8,
      essentials: [
        "Investiere nur Geld, das du jahrelang nicht brauchst, und baue vorher einen Notgroschen auf.",
        "Dein Profil (Anlagehorizont, Verlusttragfähigkeit und emotionale Belastbarkeit) entscheidet, welche Produkte zu dir passen.",
        "Zeit und Zinseszins sind deine großen Verbündeten; die Inflation ist der stille Feind von ungenutztem Geld."
      ],
      blocks: [
        { t: "p", h: "Dein Anlegerprofil", html: "Bevor du dir eine einzige Aktie ansiehst, beantworte ehrlich: Wie lange kannst du das Geld angelegt lassen, ohne es anzurühren? Könntest du es verkraften, einen Teil davon zu verlieren? Wie würdest du reagieren, wenn es morgen 30 % weniger wert wäre? Die Aufsichtsbehörden betonen: Diese Antworten sollten bestimmen, was du kaufst – nicht ein Bauchgefühl oder ein Trend." },
        { t: "cards", items: [
          { icon: "clock", h: "Anlagehorizont", p: "Weniger als 2 Jahre, 2 bis 10 oder mehr als 10? Je länger, desto mehr Spielraum hast du, um dich von Kursrückgängen zu erholen." },
          { icon: "wallet", h: "Finanzielle Tragfähigkeit", p: "Würde dich der Verlust dieses Geldes im Alltag treffen? Wenn ja, gehört es nicht an die Börse." },
          { icon: "heart", h: "Emotionale Belastbarkeit", p: "Würdest du ruhig schlafen, wenn deine Anlage in einem Monat 20 % verliert? Sei ehrlich: Genau das ist die Ursache vieler Fehlentscheidungen." }
        ] },
        { t: "p", h: "Erst das Sicherheitsnetz, dann das Investieren", html: "Leg 3 bis 6 Monatsausgaben an einem sicheren, jederzeit verfügbaren Ort zurück, etwa auf einem Tagesgeldkonto oder in einem Geldmarktfonds, bevor du an den Märkten investierst. So musst du nie wegen einer unerwarteten Ausgabe im ungünstigsten Moment verkaufen." },
        { t: "quote", text: "Erst der Notgroschen, dann die Geldanlage. Niemals umgekehrt." },
        { t: "chart", id: "inflation", caption: "Bei einer durchschnittlichen Inflation von 3 % kaufst du mit 1.000 € im Sparstrumpf in 20 Jahren nur noch so viel wie heute mit rund 550 €. Angelegt zu 7 % pro Jahr (ein Beispielwert, keine Garantie) hätte sich die Kaufkraft mehr als verdoppelt." },
        { t: "p", h: "Der Zinseszins", html: "Erträge erzeugen weitere Erträge – wie ein Schneeball, der beim Rollen immer größer wird. Mit regelmäßigen Einzahlungen und einer durchschnittlichen Rendite von 7 % pro Jahr (ein häufiger historischer Richtwert für breit gestreute Aktienportfolios, kein Versprechen):" },
        { t: "table", head: ["Monatliche Sparrate", "Jahre", "Eingezahltes Kapital", "Ungefährer Endwert"], rows: [
          ["100 €", "10", "12.000 €", "≈ 17.300 €"],
          ["100 €", "25", "30.000 €", "≈ 81.000 €"],
          ["300 €", "25", "90.000 €", "≈ 243.000 €"]
        ] },
        { t: "callout", html: "Werte mit monatlicher Verzinsung, vor Kosten, Steuern und Inflation. Sie sollen die Wirkung der Zeit verdeutlichen und sind keine Prognose. Probiere deine eigenen Zahlen im <b>Simulator</b> aus." },
        { t: "balance", h: "Investieren: ja oder nein?", pros: [
          "Ungenutztes Geld verliert durch die Inflation Jahr für Jahr an Kaufkraft.",
          "Langfristig haben breit gestreute Aktien die Inflation und klassisches Sparen historisch übertroffen.",
          "Der Zinseszins belohnt einen frühen Start, auch mit kleinen Beträgen."
        ], cons: [
          "Du kannst einen Teil oder das gesamte eingesetzte Geld verlieren.",
          "Vergangene Renditen garantieren keine zukünftigen.",
          "Wenn du Geld investierst, das du bald brauchst, musst du womöglich mit Verlust verkaufen."
        ] },
        { t: "callout", html: "Die goldene Regel der Aufsichtsbehörden: <b>Investiere nicht in etwas, das du nicht verstehst</b>. Wenn du nicht in zwei Sätzen erklären kannst, was du gekauft hast und welches Risiko es birgt, ist noch nicht der richtige Zeitpunkt." },
        { t: "deep", h: "Realrendite, 72er-Regel und Opportunitätskosten", blocks: [
          { t: "p", html: "Deine <b>Realrendite</b> ist ungefähr die nominale Rendite abzüglich der Inflation. 5 % nominal bei 3 % Inflation sind real nur 2 %: Nur das erhöht tatsächlich deine Kaufkraft." },
          { t: "p", html: "Die <b>72er-Regel</b> schätzt, in wie vielen Jahren sich ein Kapital verdoppelt: Teile 72 durch die jährliche Rendite. Bei 6 % dauert es etwa 12 Jahre, bei 9 % etwa 8." },
          { t: "p", html: "Auch die <b>Opportunitätskosten</b> zählen: Einen Kredit mit 8 % effektivem Jahreszins zu tilgen, entspricht einer garantierten Rendite von 8 % – etwas, das keine Geldanlage versprechen kann. Deshalb ist es meist sinnvoll, teure Schulden vor dem Investieren abzubauen." }
        ] }
      ],
      quiz: [
        { q: "Was solltest du haben, bevor du mit dem Investieren beginnst?", o: ["Einen Notgroschen für 3 bis 6 Monatsausgaben", "Einen Privatkredit, um mehr anzulegen", "Nichts: Je früher du investierst, desto besser", "Eine Kreditkarte mit hohem Limit"], a: 0, e: "Ein Notgroschen sorgt dafür, dass du nie wegen einer unerwarteten Ausgabe im ungünstigsten Moment Anlagen verkaufen musst." },
        { q: "Was sollte laut den Aufsichtsbehörden deine Anlageentscheidungen leiten?", o: ["Was in sozialen Netzwerken empfohlen wird", "Dein Anlegerprofil: Ziele, Anlagehorizont und Risikotoleranz", "Immer in das zu investieren, was im Monat am stärksten gestiegen ist", "Das Depot eines Verwandten zu kopieren"], a: 1, e: "Deine finanzielle Lage, dein Anlagehorizont und deine Risikotoleranz bestimmen, welche Produkte zu dir passen." },
        { q: "Welche Rolle spielt der Zinseszins?", o: ["Er hat keine nennenswerte Wirkung", "Die erzielten Erträge erwirtschaften im Lauf der Zeit selbst Erträge", "Er gilt nur für Kredite, nicht für Anlagen", "Er verringert die Rendite, je mehr Zeit vergeht"], a: 1, e: "Durch den Zinseszins beschleunigt sich das Wachstum, je länger das Kapital angelegt bleibt." },
        { q: "Was bedeutet „Investiere nicht in etwas, das du nicht verstehst“?", o: ["Dass du nur in komplexe Produkte investieren solltest", "Dass du nicht kaufen solltest, wenn du nicht erklären kannst, was du kaufst und welches Risiko es hat", "Dass der Satz praktisch keine Bedeutung hat", "Dass er nur für Kryptowährungen gilt"], a: 1, e: "Es ist ein Grundprinzip des Anlegerschutzes, das alle Aufsichtsbehörden wiederholen." },
        { q: "Was gehört NICHT zu den drei Säulen des Anlegerprofils?", o: ["Anlagehorizont", "Finanzielle Tragfähigkeit von Verlusten", "Die Markenfarbe des Brokers", "Emotionale Risikotoleranz"], a: 2, e: "Die drei Säulen sind Anlagehorizont, finanzielle Verlusttragfähigkeit und emotionale Risikotoleranz." },
        { q: "Wie viele Monatsausgaben sollte dein Notgroschen vor dem Investieren abdecken?", o: ["3 bis 6 Monate", "Eine Woche", "Mindestens 5 Jahre", "Du brauchst kein Sicherheitsnetz"], a: 0, e: "Üblich sind 3 bis 6 Monatsausgaben an einem liquiden, jederzeit verfügbaren Ort." },
        { q: "Du zahlst 25 Jahre lang 100 € im Monat bei 7 % pro Jahr ein. Wie verhält sich der Endwert zum eingezahlten Betrag?", o: ["Der Endwert ist niedriger als der eingezahlte Betrag", "Der Endwert entspricht praktisch dem eingezahlten Betrag", "Der Endwert ist dank des Zinseszinses um ein Vielfaches höher", "Das lässt sich unmöglich berechnen"], a: 2, e: "Bei 30.000 € Einzahlung liegt der Endwert bei etwa 81.000 €: Die Zeit vervielfacht die Wirkung jeder Einzahlung." },
        { q: "Wie viele Jahre dauert es laut 72er-Regel ungefähr, bis sich ein Kapital bei 8 % pro Jahr verdoppelt?", o: ["3 Jahre", "9 Jahre", "20 Jahre", "72 Jahre"], a: 1, e: "72 ÷ 8 = 9. Eine praktische Faustregel, um ein Gefühl für die Wirkung der Zeit zu bekommen." }
      ]
    },

    {
      title: "Grundvokabular",
      subtitle: "Die Begriffe, die dir immer wieder begegnen, ohne Fachchinesisch erklärt.",
      minutes: 10,
      essentials: [
        "Eine Aktie ist ein kleiner Teil eines Unternehmens; eine Anleihe ist ein Kredit, den du gegen Zinsen vergibst.",
        "Mit einem ETF oder Indexfonds kaufst du auf einen Schlag Hunderte Unternehmen.",
        "Market-Orders setzen auf Schnelligkeit, Limit-Orders auf den Preis."
      ],
      blocks: [
        { t: "p", html: "Tippe auf jede Karte, um die Definition zu sehen. Du musst nicht alles auf einmal auswendig lernen: Komm einfach hierher zurück, wenn du etwas nachschlagen willst." },
        { t: "glossary", items: [
          { t: "Aktie", d: "Ein kleiner Anteil am Eigentum eines Unternehmens. Läuft es gut, steigt dein Anteil meist im Wert." },
          { t: "Anleihe", d: "Ein Kredit, den du einem Staat oder Unternehmen gegen vorab vereinbarte Zinsen gibst." },
          { t: "Dividende", d: "Der Teil des Gewinns, den ein Unternehmen an seine Aktionäre ausschüttet, meist in bar." },
          { t: "ETF", d: "Ein Fonds, der wie eine Aktie an der Börse gehandelt wird und meist einen ganzen Index abbildet." },
          { t: "Indexfonds", d: "Ein Fonds, der einen Index passiv und mit niedrigen Kosten nachbildet. Anders als ein ETF wird er nicht fortlaufend an der Börse gehandelt." },
          { t: "Börsenindex", d: "Ein Korb von Unternehmen, der die Entwicklung eines Marktes zusammenfasst, etwa der DAX oder der MSCI World." },
          { t: "Broker", d: "Das beaufsichtigte Unternehmen, über das du Wertpapiere kaufst und verkaufst." },
          { t: "Marktkapitalisierung", d: "Der gesamte Börsenwert eines Unternehmens: Aktienkurs mal Anzahl der Aktien." },
          { t: "Volatilität", d: "Wie stark und wie schnell sich der Kurs eines Wertpapiers bewegt. Mehr Volatilität bedeutet mehr Unsicherheit." },
          { t: "Diversifikation", d: "Dein Geld auf viele Anlagen zu verteilen, damit dich kein einzelner Fehlschlag ruiniert." },
          { t: "Spread", d: "Die Differenz zwischen dem Kaufkurs und dem Verkaufskurs zu einem bestimmten Zeitpunkt." },
          { t: "Market-Order", d: "Sofortiger Kauf oder Verkauf zum besten gerade verfügbaren Preis." },
          { t: "Limit-Order", d: "Ein Kauf oder Verkauf, der nur ausgeführt wird, wenn der von dir festgelegte Preis erreicht wird." },
          { t: "Annualisierte Rendite", d: "Der durchschnittliche Gewinn oder Verlust pro Jahr. So lassen sich Anlagen mit unterschiedlicher Dauer vergleichen." },
          { t: "Liquidität", d: "Wie leicht sich eine Anlage schnell und ohne Wertverlust in Bargeld umwandeln lässt." },
          { t: "Kursgewinn und Kursverlust", d: "Der Gewinn oder Verlust, wenn du etwas teurer oder billiger verkaufst, als du es gekauft hast." }
        ] },
        { t: "p", h: "Wie alles zusammenhängt", html: "Wenn du über deinen Broker einen ETF kaufst, gibst du eine Order (Market oder Limit) auf, die zum verfügbaren Preis ausgeführt wird, mit einem kleinen Spread zwischen Kauf und Verkauf. Der ETF steigt oder fällt mit dem Index, den er abbildet, und wenn du ihn mehrere Jahre hältst, misst man dein Ergebnis als annualisierte Rendite." },
        { t: "cards", h: "Die drei großen Anlageklassen", items: [
          { icon: "pie", h: "Aktien", p: "Aktien und Aktienfonds. Mehr Gewinnchancen und stärkere Schwankungen." },
          { icon: "lock", h: "Anleihen", p: "Anleihen und Geldmarktpapiere. Geringere Schwankungen und besser planbare Erträge." },
          { icon: "drop", h: "Liquidität", p: "Konten und Geldmarktfonds. Sofort verfügbar, bei geringer Rendite." }
        ] },
        { t: "deep", h: "Begriffe der Profis", blocks: [
          { t: "list", items: [
            "<b>Geld- und Briefkurs:</b> der beste Preis, zu dem jemand kaufen (Geldkurs, Bid) bzw. verkaufen (Briefkurs, Ask) möchte. Die Differenz ist der Spread.",
            "<b>TER:</b> die jährlichen Gesamtkosten eines Fonds oder ETFs in Prozent. Bei Indexfonds sind sie meist sehr niedrig.",
            "<b>Thesaurierend oder ausschüttend:</b> Thesaurierende Fonds legen die Dividenden wieder an, ausschüttende zahlen sie aus.",
            "<b>Tracking Error:</b> wie stark ein Indexfonds von dem Index abweicht, den er nachbilden soll.",
            "<b>Benchmark:</b> der Vergleichsindex, an dem eine Anlage gemessen wird.",
            "<b>Blue Chip:</b> ein großes, etabliertes Unternehmen mit hohem Handelsvolumen."
          ] }
        ] }
      ],
      quiz: [
        { q: "Was ist ein ETF?", o: ["Eine Art Einzelaktie", "Ein börsengehandelter Fonds, der meist einen Index abbildet und wie eine Aktie gekauft wird", "Ein Kredit an ein Unternehmen", "Eine Steuer auf Börsengewinne"], a: 1, e: "Ein ETF verbindet die Streuung eines Fonds mit der einfachen Handelbarkeit einer Aktie." },
        { q: "Was ist der Unterschied zwischen einer Market-Order und einer Limit-Order?", o: ["Es gibt keinen echten Unterschied", "Die Market-Order wird sofort zum besten Preis ausgeführt, die Limit-Order nur, wenn dein festgelegter Preis erreicht wird", "Die Limit-Order ist immer teurer", "Die Market-Order kann nur zum Verkaufen genutzt werden"], a: 1, e: "Die Market-Order setzt auf sofortige Ausführung, die Limit-Order auf Kontrolle über den Preis." },
        { q: "Was misst die Volatilität eines Wertpapiers?", o: ["Seine garantierte Rendite", "Wie stark und wie schnell sich sein Kurs bewegt", "Wie viele Aktionäre es hat", "Die Gebühr des Brokers"], a: 1, e: "Die Volatilität spiegelt Größe und Tempo der Kursbewegungen wider; sie garantiert keine Rendite." },
        { q: "Was ist Diversifikation?", o: ["Alles in ein vielversprechendes Unternehmen stecken", "Die Anlage auf verschiedene Werte verteilen, um das Risiko einer einzelnen Wette zu senken", "Jeden Monat alle Aktien verkaufen", "Eine Art Börsenorder"], a: 1, e: "Streuung verringert die Wirkung, die ein einzelner Fehlschlag auf das gesamte Depot hat." },
        { q: "Was ist der Spread?", o: ["Die jährlich gezahlte Dividende", "Die Differenz zwischen Kauf- und Verkaufskurs zu einem bestimmten Zeitpunkt", "Eine Steuer auf Kursgewinne", "Die Anzahl der umlaufenden Aktien"], a: 1, e: "Er ist die Differenz zwischen Briefkurs (Ask) und Geldkurs (Bid) in diesem Moment." },
        { q: "Was misst die Marktkapitalisierung eines Unternehmens?", o: ["Seine Gesamtschulden", "Den Aktienkurs multipliziert mit der Anzahl der Aktien", "Seinen jährlichen Nettogewinn", "Seine Mitarbeiterzahl"], a: 1, e: "Die Marktkapitalisierung ist der gesamte Börsenwert des Unternehmens." },
        { q: "Was ist ein Broker?", o: ["Eine sehr volatile Aktienart", "Das beaufsichtigte Unternehmen, über das du Wertpapiere kaufst und verkaufst", "Eine Steuer auf Dividenden", "Ein Börsenindex"], a: 1, e: "Der Broker, der von der zuständigen Behörde beaufsichtigt wird, führt deine Kauf- und Verkaufsaufträge aus." },
        { q: "Was zeigt die annualisierte Rendite?", o: ["Den Gesamtgewinn, unabhängig von der Dauer", "Den durchschnittlichen Gewinn oder Verlust pro Jahr, als wäre das Ergebnis gleichmäßig verteilt", "Den aktuellen Kurs des Wertpapiers", "Die Jahresgebühr des Brokers"], a: 1, e: "Sie rechnet das Ergebnis in einen Jahresdurchschnitt um, damit du Anlagen unterschiedlicher Dauer vergleichen kannst." }
      ]
    },

    {
      title: "Einen Chart lesen",
      subtitle: "Linien, Kerzen, Trends und Volumen: Was ein Chart wirklich aussagt.",
      minutes: 12,
      essentials: [
        "Der Linienchart zeigt den Trend, Kerzen zeigen, was innerhalb jedes Zeitraums passiert ist.",
        "Unterstützungen und Widerstände sind Zonen, in denen der Kurs oft stockt – keine unüberwindbaren Mauern.",
        "Volumen und gleitende Durchschnitte helfen, das Signal vom Rauschen zu trennen."
      ],
      blocks: [
        { t: "p", h: "Der Linienchart", html: "Er verbindet die Schlusskurse der einzelnen Zeiträume mit einer Linie. So erkennst du den Gesamttrend am einfachsten auf einen Blick, auch wenn er nicht zeigt, was im Tagesverlauf passiert ist." },
        { t: "chart", id: "line", caption: "Ein Aufwärtstrend mit seinen Schlüsselzonen: Widerstand, wo der Kurs beim Steigen oft stockt, und Unterstützung, wo er beim Fallen oft abprallt." },
        { t: "p", h: "Kerzencharts", html: "Jede Kerze fasst einen Zeitraum mit vier Werten zusammen: Eröffnung, Schluss, Hoch und Tief. Der Körper reicht von der Eröffnung bis zum Schluss, die Dochte markieren die Extremwerte." },
        { t: "chart", id: "candle", caption: "Grün: Der Schluss lag über der Eröffnung (steigend). Rot: Er lag darunter (fallend). Rechts eine Kerzenfolge, die einen Aufwärtstrend bildet." },
        { t: "list", h: "Trends, Unterstützungen und Widerstände", items: [
          "<b>Aufwärtstrend:</b> steigende Hochs und steigende Tiefs.",
          "<b>Abwärtstrend:</b> fallende Hochs und fallende Tiefs.",
          "<b>Seitwärtstrend:</b> Der Kurs bewegt sich ohne klare Richtung in einer Spanne.",
          "<b>Unterstützung:</b> eine Zone, in der es in der Vergangenheit genug Käufer gab, um einen Rückgang zu stoppen.",
          "<b>Widerstand:</b> eine Zone, in der es in der Vergangenheit genug Verkäufer gab, um einen Anstieg zu stoppen."
        ] },
        { t: "p", h: "Volumen und gleitende Durchschnitte", html: [
          "Unter dem Kurs siehst du meist das <b>Volumen</b>: wie viele Stücke gehandelt wurden. Eine Bewegung mit hohem Volumen hat mehr „Überzeugungskraft“ als eine mit wenig Umsatz.",
          "Der <b>gleitende Durchschnitt</b> (zum Beispiel über 50 oder 200 Handelstage) ist der Durchschnittskurs der letzten Zeiträume, dargestellt als glatte Linie, die den zugrunde liegenden Trend zeigt."
        ] },
        { t: "chart", id: "ma", caption: "Der Tageskurs schwankt um seinen gleitenden Durchschnitt. Solange der Kurs darüber liegt, werten viele Analysten das als Zeichen der Stärke." },
        { t: "balance", h: "Bringt es etwas, Charts anzuschauen?", pros: [
          "Es hilft dir, den Zeitpunkt für Kauf oder Verkauf zu wählen.",
          "Volumen und Trend liefern Kontext, den der Kurs allein nicht bietet."
        ], cons: [
          "Kein Muster garantiert, was als Nächstes passiert.",
          "Wer täglich auf den Chart schaut, obwohl er langfristig anlegt, riskiert Unruhe und impulsive Entscheidungen."
        ] },
        { t: "deep", h: "Skalen, Zeiträume und typische Fallen", blocks: [
          { t: "p", html: "Nutze für lange Zeiträume eine <b>logarithmische Skala</b>: Ein Anstieg von 10 € auf 20 € und einer von 100 € auf 200 € sind beide 100 % und erscheinen gleich groß. Auf einer linearen Skala sähe der zweite riesig aus." },
          { t: "p", html: "Wechsle den <b>Zeitrahmen</b> (Tag, Woche, Monat), bevor du Schlüsse ziehst: Ein Rückgang, der im Tageschart beängstigend wirkt, kann im Wochenchart eine einfache Korrektur sein." },
          { t: "p", html: "Vorsicht vor dem <b>Bestätigungsfehler</b>: Man „sieht“ leicht das Muster, das man ohnehin finden wollte. Gleiche es immer mit den Zahlen des Unternehmens ab." }
        ] }
      ],
      quiz: [
        { q: "Was stellt der Körper einer Kerze im Kerzenchart dar?", o: ["Das gehandelte Volumen", "Den Abstand zwischen Eröffnung und Schluss des Zeitraums", "Den Namen des Unternehmens", "Die Gebühr des Brokers"], a: 1, e: "Der Körper reicht von der Eröffnung bis zum Schluss; die Dochte markieren Hoch und Tief." },
        { q: "Was ist ein Widerstand?", o: ["Ein Kursniveau, an dem Anstiege in der Vergangenheit oft gestoppt wurden", "Eine Art verpflichtende Verkaufsorder", "Die Mindestdividende eines Unternehmens", "Eine Bankgebühr"], a: 0, e: "Es ist eine Zone, in der es historisch genug Verkäufer gab, um den Kurs zu bremsen." },
        { q: "Was kennzeichnet einen Aufwärtstrend?", o: ["Fallende Hochs und fallende Tiefs", "Dass sich der Kurs immer geradlinig bewegt", "Steigende Hochs und steigende Tiefs", "Dass das Volumen auf null sinkt"], a: 2, e: "Ein Aufwärtstrend ist durch eine Abfolge steigender Hochs und Tiefs definiert." },
        { q: "Wozu dient ein gleitender Durchschnitt?", o: ["Zur Berechnung der Steuern auf Dividenden", "Um den Kurs zu glätten und den zugrunde liegenden Trend besser zu erkennen", "Um den offiziellen Preis einer Aktie festzulegen", "Um die Fundamentalanalyse vollständig zu ersetzen"], a: 1, e: "Der gleitende Durchschnitt filtert das tägliche Rauschen heraus und macht den allgemeinen Trend sichtbar." },
        { q: "Was zeigt das Volumen in einem Chart?", o: ["Den historischen Durchschnittskurs", "Wie viele Stücke in diesem Zeitraum gehandelt wurden", "Die an diesem Tag gezahlte Dividende", "Die Gebühr des Brokers"], a: 1, e: "Das Volumen zeigt, wie viele Stücke den Besitzer gewechselt haben, und verleiht einer Kursbewegung „Überzeugungskraft“." },
        { q: "Was kennzeichnet einen Seitwärtstrend?", o: ["Ständig steigende Hochs und Tiefs", "Der Kurs bewegt sich ohne klare Richtung in einer Spanne", "Der Kurs kann nur fallen", "Er ist dasselbe wie ein Aufwärtstrend"], a: 1, e: "Im Seitwärtstrend pendelt der Kurs ohne klare Richtung innerhalb einer Spanne." },
        { q: "Was stellen die Dochte einer Kerze dar?", o: ["Eröffnungs- und Schlusskurs", "Das im Zeitraum erreichte Hoch und Tief", "Das gehandelte Volumen", "Den Namen des Wertpapiers"], a: 1, e: "Die Dochte markieren die Extremwerte, die der Kurs in diesem Zeitraum erreicht hat." },
        { q: "Was unterscheidet eine steigende von einer fallenden Kerze?", o: ["Die Farbe ist immer gleich", "Bei der steigenden liegt der Schluss über der Eröffnung, bei der fallenden darunter", "Die steigende Kerze hat keine Dochte", "Fallende Kerzen gibt es nur montags"], a: 1, e: "Steigend: Der Schluss lag höher als die Eröffnung. Fallend: Er lag niedriger." }
      ]
    },

    {
      title: "Was du kaufen kannst",
      subtitle: "Aktien, Fonds, Anleihen, Rohstoffe und mehr: Was jedes Produkt bietet und welche Risiken es birgt.",
      minutes: 12,
      essentials: [
        "Jedes Produkt kombiniert Risiko, Aufwand und Gewinnchancen auf andere Weise.",
        "Für den Einstieg bieten breite Indexfonds und ETFs Streuung und niedrige Kosten.",
        "Rohstoffe und Kryptowerte können ein Depot ergänzen, sollten aber nicht sein Fundament sein."
      ],
      blocks: [
        { t: "chart", id: "risk", caption: "Schematische Karte von Risiko und erwarteter Rendite. Je höher die mögliche Rendite, desto stärker die Schwankungen: Eine sehr rentable Anlage ohne Risiko gibt es nicht." },
        { t: "balance", h: "Einzelaktien", intro: "Wer Aktien eines bestimmten Unternehmens kauft, setzt auf dieses Unternehmen, nicht auf den Markt als Ganzes.", pros: [
          "Höhere Gewinnchancen, wenn du das richtige Unternehmen wählst.",
          "Stimmrecht auf der Hauptversammlung und mögliche Dividenden.",
          "Keine jährlichen Verwaltungsgebühren."
        ], cons: [
          "Konzentriertes Risiko: Eine einzige schlechte Nachricht kann den Kurs abstürzen lassen.",
          "Jedes Unternehmen zu analysieren und zu verfolgen, kostet Zeit.",
          "Man lässt sich leicht von Emotionen oder Moden mitreißen."
        ] },
        { t: "balance", h: "Indexfonds und ETFs", intro: "Sie bilden einen ganzen Index ab: Mit einem einzigen Kauf besitzt du Hunderte oder Tausende Unternehmen. Communitys wie die Bogleheads und viele Aufsichtsbehörden nennen sie als guten Einstieg.", pros: [
          "Sofortige Streuung.",
          "Sehr niedrige Kosten im Vergleich zu aktivem Management.",
          "Wenig Aufwand: Du musst keine Unternehmen auswählen."
        ], cons: [
          "Du schlägst den Markt nie: Du erhältst seine Rendite abzüglich der Kosten.",
          "Sie fallen ungeschützt, wenn der Markt fällt.",
          "Die Vielzahl an Indizes kann anfangs verwirren."
        ] },
        { t: "balance", h: "Anleihen", intro: "Du leihst einem Staat oder einem Unternehmen Geld gegen vereinbarte Zinsen.", pros: [
          "Geringere Schwankungen als Aktien.",
          "Planbare Erträge.",
          "Sie federn in einem gemischten Depot Kursrückgänge an der Börse ab."
        ], cons: [
          "Langfristig geringere erwartete Rendite.",
          "Ihr Kurs fällt, wenn die Zinsen steigen.",
          "Ausfallrisiko, wenn der Emittent in Schwierigkeiten gerät."
        ] },
        { t: "balance", h: "Rohstoffe und natürliche Ressourcen", intro: "Gold, Öl, Gas oder Metalle, meist über ETFs oder Aktien von Unternehmen der Branche (Energie, Bergbau, Landwirtschaft).", pros: [
          "Sie streuen das Depot über Aktien und Anleihen hinaus.",
          "Gold hat sich in Krisenzeiten oft als sicherer Hafen erwiesen.",
          "Sie können teilweise vor Inflation schützen."
        ], cons: [
          "Sehr anfällig für Geopolitik, Wetter und Entscheidungen der Förderländer.",
          "Sie erwirtschaften selbst keine Gewinne oder Dividenden.",
          "Manche Produkte, die sie abbilden, haben versteckte Kosten."
        ] },
        { t: "p", h: "Börsennotierte Immobilien (REITs)", html: "Das sind Unternehmen, die Immobilien besitzen und verwalten (Büros, Logistikzentren, Mietwohnungen) und einen Großteil ihres Gewinns als Dividende ausschütten. Sie bieten dir Zugang zum Immobilienmarkt, ohne eine Wohnung zu kaufen, leiden aber unter steigenden Zinsen." },
        { t: "p", h: "Kryptowerte – mit großer Vorsicht", html: "Das sind sehr volatile digitale Vermögenswerte mit geringerem Anlegerschutz als klassische Produkte. Wenn du dich dafür entscheidest, dann nur mit einem kleinen Teil deines Vermögens und nur mit Geld, dessen Totalverlust du verkraften kannst." },
        { t: "table", risk: [1, 2, 3, 4, 4, 5], h: "Schnellvergleich", head: ["Anlageform", "Typisches Risiko", "Aufwand", "Geeignet für"], rows: [
          ["Tagesgeld und Geldmarkt", "Sehr gering", "Minimal", "Notgroschen und kurze Fristen"],
          ["Anleihen", "Gering bis mittel", "Gering", "Stabilisierung des Depots"],
          ["Globaler Indexfonds oder ETF", "Mittel", "Gering", "Kern fast jedes langfristigen Depots"],
          ["Einzelaktien", "Hoch", "Hoch", "Wer Unternehmen analysieren möchte"],
          ["Rohstoffe", "Hoch", "Mittel", "Ergänzung zur Streuung"],
          ["Kryptowerte", "Sehr hoch", "Mittel", "Kleiner Anteil, nur wenn du es verstehst"]
        ] },
        { t: "deep", h: "Worauf du bei einem Fonds oder ETF achten solltest", blocks: [
          { t: "list", items: [
            "<b>Abgebildeter Index:</b> Weltmarkt, ein Land, eine Branche? Je breiter, desto besser gestreut.",
            "<b>TER:</b> die jährlichen Kosten. 1 % Unterschied wirkt klein, macht über 30 Jahre aber enorm viel aus.",
            "<b>Replikationsmethode:</b> physisch (er kauft die Wertpapiere des Index) oder synthetisch (er nutzt Derivate).",
            "<b>Währung und Fondsdomizil:</b> beeinflussen Besteuerung und Währungsrisiko.",
            "<b>Größe und Liquidität:</b> Sehr kleine Fonds werden womöglich geschlossen, und wenig gehandelte ETFs haben hohe Spreads."
          ] }
        ] }
      ],
      quiz: [
        { q: "Was kennzeichnet einen Indexfonds vor allem?", o: ["Aktives Management, das jeden Monat den Markt schlagen will", "Er bildet einen Index passiv und mit niedrigen Kosten nach", "Er investiert nur in ein Unternehmen", "Er garantiert eine feste Rendite"], a: 1, e: "Indexfonds folgen passiv einem Vergleichsindex, zu geringen Kosten." },
        { q: "Welches Risiko ist typisch für Rohstoffe?", o: ["Keines: Sie sind immer ein sicherer Hafen", "Hohe Anfälligkeit für Geopolitik, Wetter und Entscheidungen der Förderländer", "Ihr Preis kann nur steigen", "Sie sind staatlich garantiert"], a: 1, e: "Ihre Preise hängen von vielen äußeren Faktoren ab, die schwer vorherzusagen sind." },
        { q: "Was sind Anleihen?", o: ["Aktien von Technologieunternehmen", "Ein Kredit an einen Staat oder ein Unternehmen gegen vereinbarte Zinsen", "Eine Art Kryptowert", "Ein Fonds, der nur in Gold investiert"], a: 1, e: "Wer eine Anleihe kauft, verleiht Geld gegen vorab festgelegte Zinsen." },
        { q: "Was wird Einsteigern bei Kryptowerten empfohlen?", o: ["Den Großteil des Depots darin anzulegen", "Sie immer und ausnahmslos zu meiden", "Wenn überhaupt, dann nur einen kleinen Anteil und nur mit Geld, dessen Verlust man verkraften kann", "Einen Kredit aufzunehmen, um mehr zu investieren"], a: 2, e: "Wegen der hohen Volatilität und des geringeren Anlegerschutzes sind größte Vorsicht und ein begrenzter Anteil ratsam." },
        { q: "Was sind REITs?", o: ["Anleihen der Zentralbanken", "Unternehmen, die Immobilien besitzen und verwalten und einen Großteil ihres Gewinns als Dividende ausschütten", "Eine Art Kryptowert", "Fonds, die nur in physisches Gold investieren"], a: 1, e: "Sie bieten Zugang zu börsennotierten Immobilien, ohne dass man selbst eine Immobilie kaufen muss." },
        { q: "Was ist ein typischer Vorteil von Einzelaktien gegenüber einem Indexfonds?", o: ["Ein garantiert geringeres Risiko", "Höhere Gewinnchancen beim richtigen Unternehmen, dazu Stimmrecht und mögliche Dividenden", "Immer niedrigere Kosten", "Automatische Streuung"], a: 1, e: "Sie bündeln das Risiko auf ein Unternehmen, aber auch die Gewinnchance, wenn man richtig liegt." },
        { q: "Warum empfehlen viele Aufsichtsbehörden und Communitys wie die Bogleheads Einsteigern Indexfonds?", o: ["Weil sie garantieren, dass man Geld verdient", "Wegen ihrer automatischen Streuung und der niedrigen Kosten im Vergleich zu aktivem Management", "Weil sie kein Risiko haben", "Weil sie nur in Rohstoffe investieren"], a: 1, e: "Sie verteilen das Risiko auf viele Unternehmen und kosten viel weniger als aktives Management." },
        { q: "Was unterscheidet eine Anleihe von einer Aktie?", o: ["Die Anleihe ist ein Kredit mit vereinbarten Zinsen, die Aktie ein Anteil am Unternehmen", "Sie sind genau dasselbe", "Die Anleihe bringt immer mehr als die Aktie", "Die Aktie garantiert das eingesetzte Kapital"], a: 0, e: "Mit einer Anleihe verleihst du Geld, mit einer Aktie wirst du Miteigentümer." }
      ]
    },

    {
      title: "Wie der Handel in der Praxis funktioniert",
      subtitle: "Von der Depoteröffnung bis zur ersten Order – mit dem Schutz, der dir zusteht.",
      minutes: 12,
      essentials: [
        "Nutze nur Broker, die bei der Aufsichtsbehörde deines Landes registriert sind.",
        "Lerne die Ordertypen kennen: Market, Limit, Stop-Loss und Take-Profit.",
        "Automatische regelmäßige Einzahlungen nehmen dir die Versuchung, den besten Zeitpunkt erraten zu wollen."
      ],
      blocks: [
        { t: "steps", h: "Deine ersten Schritte, der Reihe nach", items: [
          "<b>Wähle einen beaufsichtigten Broker.</b> Prüfe auf der Website der Aufsichtsbehörde (in Deutschland die BaFin), ob er registriert und zugelassen ist.",
          "<b>Eröffne das Depot und bestätige deine Identität.</b> Du wirst nach Dokumenten gefragt: Das ist eine gesetzliche Pflicht gegen Geldwäsche.",
          "<b>Beantworte die Angemessenheitsprüfung.</b> Die EU-Regeln nach MiFID verlangen, dass deine Kenntnisse und deine finanzielle Lage zu deinem Schutz geprüft werden.",
          "<b>Überweise das Geld</b> von deinem Girokonto auf das Konto bei deinem Broker.",
          "<b>Suche das Produkt</b> über den Namen oder die ISIN und lies das Basisinformationsblatt.",
          "<b>Gib die Order auf</b> und wähle Ordertyp, Stückzahl und gegebenenfalls den Limitpreis."
        ] },
        { t: "chart", id: "orders", caption: "Wo die Orders im Verhältnis zum aktuellen Kurs liegen: Ein Limit-Kauf wartet auf einen niedrigeren Preis, ein Stop-Loss begrenzt Verluste und ein Take-Profit sichert Gewinne." },
        { t: "list", h: "Ordertypen", items: [
          "<b>Market:</b> wird sofort zum besten verfügbaren Preis ausgeführt. Schnell, aber ohne Kontrolle über den genauen Preis.",
          "<b>Limit:</b> wird nur zu deinem festgelegten Preis oder besser ausgeführt. Du kontrollierst den Preis, aber die Order wird womöglich nie ausgeführt.",
          "<b>Stop-Loss:</b> verkauft automatisch, wenn der Kurs auf dein festgelegtes Niveau fällt, um Verluste zu begrenzen.",
          "<b>Take-Profit:</b> verkauft automatisch, sobald das vorab festgelegte Gewinnziel erreicht ist."
        ] },
        { t: "callout", html: "<b>Steuern:</b> In Spanien wird der Wechsel zwischen Investmentfonds im Moment des Wechsels nicht besteuert, anders als der Verkauf von Aktien oder ETFs. In Deutschland gibt es diesen Vorteil nicht; hier gelten unter anderem der Sparer-Pauschbetrag und die Teilfreistellung bei Aktienfonds. Andere Länder haben steuerbegünstigte Konten (etwa das ISA im Vereinigten Königreich oder den PEA in Frankreich): Informiere dich über die Regeln in deinem Wohnsitzland." },
        { t: "balance", h: "Regelmäßige Einzahlungen (Sparplan)", intro: "Du investierst jeden Monat denselben Betrag, egal, was am Markt passiert.", pros: [
          "Du musst nicht versuchen, den besten Zeitpunkt zu erraten.",
          "Du kaufst mehr Anteile, wenn der Kurs niedrig ist, und weniger, wenn er hoch ist.",
          "Es entsteht eine automatische Gewohnheit ohne Stress."
        ], cons: [
          "Steigt der Markt stetig, hätte eine Einmalanlage im Durchschnitt etwas mehr gebracht.",
          "Jeder Kauf kann Gebühren kosten: Prüfe die Konditionen deines Brokers.",
          "Es erfordert Beständigkeit über viele Jahre."
        ] },
        { t: "deep", h: "Versteckte Kosten und Anlegerschutz", blocks: [
          { t: "list", items: [
            "<b>Währungsumtausch:</b> Beim Kauf von Aktien in Dollar können pro Umtausch 0,5 % oder mehr anfallen.",
            "<b>Depotgebühren:</b> Manche Broker verlangen Gebühren für die Verwahrung deiner Wertpapiere, andere nicht.",
            "<b>Entschädigungseinrichtung:</b> Geht ein Broker pleite, bleiben deine Wertpapiere dein Eigentum. Für Guthaben und nicht zurückerlangte Wertpapiere gibt es zusätzlich einen begrenzten Schutz: In der EU mindestens 20.000 €, manche Länder gehen weiter (der spanische FOGAIN deckt bis zu 100.000 €).",
            "<b>Wertpapierleihe:</b> Manche Broker verleihen deine Aktien an Dritte. Prüfe die Bedingungen und wer die Erträge erhält.",
            "<b>Slippage:</b> die Differenz zwischen dem erwarteten und dem tatsächlich ausgeführten Preis, häufig bei Market-Orders in wenig liquiden Werten."
          ] }
        ] }
      ],
      quiz: [
        { q: "Was solltest du prüfen, bevor du einen Broker wählst?", o: ["Dass er viel Werbung in sozialen Netzwerken macht", "Dass er bei der zuständigen Aufsichtsbehörde registriert ist und beaufsichtigt wird", "Dass er der neueste auf dem Markt ist", "Dass er keine persönlichen Daten verlangt"], a: 1, e: "Nur registrierte und beaufsichtigte Unternehmen bieten dir den rechtlichen Schutz, den du für sicheres Handeln brauchst." },
        { q: "Was ist eine Stop-Loss-Order?", o: ["Eine Order, die deine Anlage automatisch erhöht", "Ein automatischer Verkauf, wenn der Kurs auf dein festgelegtes Niveau fällt", "Eine Order, die nur zum Kaufen dient", "Eine Steuer auf Verluste"], a: 1, e: "Der Stop-Loss begrenzt Verluste, indem er auf dem von dir gewählten Kursniveau automatisch verkauft." },
        { q: "Welchen Steuervorteil haben Fondswechsel in Spanien?", o: ["Sie werden im Moment des Wechsels nicht besteuert", "Sie sind für immer steuerfrei", "Sie senken automatisch die Einkommensteuer auf dein Gehalt", "Es gibt keinen solchen Vorteil"], a: 0, e: "Anders als der Verkauf von Aktien oder ETFs löst der Wechsel zwischen Fonds in Spanien keine sofortige Besteuerung aus." },
        { q: "Was sind regelmäßige Einzahlungen (Sparplan)?", o: ["Das gesamte Kapital auf einmal investieren", "In festen Abständen denselben Betrag einzahlen, ohne den perfekten Zeitpunkt erraten zu wollen", "Eine Steuer auf Dividenden", "Beim ersten Kursrückgang verkaufen"], a: 1, e: "Automatische Einzahlungen glätten deinen durchschnittlichen Kaufpreis über die Zeit." },
        { q: "Was ist eine Take-Profit-Order?", o: ["Ein automatischer Verkauf, sobald das vorab festgelegte Gewinnziel erreicht ist", "Eine Art Steuer auf Gewinne", "Eine Order, die nur zum Kaufen dient", "Eine Kontoführungsgebühr"], a: 0, e: "Sie schließt die Position automatisch, wenn der Kurs dein Ziel erreicht." },
        { q: "Was prüfen die MiFID-Regeln, wenn du ein Depot bei einem Broker eröffnest?", o: ["Deine Kenntnisse und deine finanzielle Lage, um dich zu schützen", "Nur deinen Namen und deine Adresse", "Nichts Wichtiges: Es ist eine reine Formalität", "Deine politische Zugehörigkeit"], a: 0, e: "MiFID verlangt als Schutzmaßnahme, dass Kenntnisse und Lage vor dem Handel geprüft werden." },
        { q: "Welche steuerbegünstigten Konten für den langfristigen Vermögensaufbau gibt es in manchen europäischen Ländern?", o: ["Keine: In Europa gibt es so etwas nicht", "Konten wie das ISA oder den PEA sowie Altersvorsorgepläne", "Nur Konten für Kryptowerte", "Ein gewöhnliches Girokonto"], a: 1, e: "Mehrere Länder bieten steuerbegünstigte Anlageformen; es lohnt sich, die in deinem Land zu kennen." },
        { q: "Worin unterscheiden sich Limit- und Market-Orders bei den Garantien?", o: ["Die Limit-Order garantiert den Preis, wird aber vielleicht nicht ausgeführt; die Market-Order wird sofort ausgeführt, aber ohne genaue Preiskontrolle", "Beide garantieren immer denselben Preis", "Die Market-Order wird nie ausgeführt", "Die Limit-Order ist immer schneller"], a: 0, e: "Die Limit-Order setzt auf Preiskontrolle, die Market-Order auf sofortige Ausführung." }
      ]
    },

    {
      title: "Ein Unternehmen analysieren",
      subtitle: "Wichtige Kennzahlen, Fundamental- und Chartanalyse und wie man sie mit gesundem Menschenverstand kombiniert.",
      minutes: 14,
      essentials: [
        "Die Fundamentalanalyse untersucht das Geschäft, die technische Analyse das Kursverhalten.",
        "Kennzahlen wie KGV, Eigenkapitalrendite oder Verschuldung helfen beim Vergleichen, sollten aber nie allein betrachtet werden.",
        "Keine Methode sagt die Zukunft voraus: Jede liefert andere Informationen."
      ],
      blocks: [
        { t: "p", h: "Fundamentalanalyse", html: "Sie fragt, wie viel ein Unternehmen wirklich wert ist: wie viel es verdient, wie schnell es wächst, wie viele Schulden es hat und welche Vorteile es gegenüber der Konkurrenz besitzt. Liegt der Börsenkurs unter diesem geschätzten Wert, könnte die Aktie günstig sein." },
        { t: "cards", h: "Die meistgenutzten Kennzahlen", items: [
          { icon: "calc", h: "KGV", p: "Kurs ÷ Gewinn je Aktie. Zeigt, wie viele Jahre des heutigen Gewinns du für das Unternehmen bezahlst." },
          { icon: "chart", h: "PEG", p: "KGV ÷ erwartetes jährliches Gewinnwachstum. Damit lassen sich Unternehmen mit unterschiedlichem Wachstum vergleichen." },
          { icon: "target", h: "Eigenkapitalrendite (ROE)", p: "Gewinn ÷ Eigenkapital. Misst, wie effizient das Unternehmen das Geld seiner Aktionäre einsetzt." },
          { icon: "drop", h: "Dividendenrendite", p: "Jährliche Dividende ÷ Kurs. Vorsicht: Ein sehr hoher Wert kann eine bevorstehende Kürzung ankündigen." },
          { icon: "alert", h: "Nettoverschuldung / EBITDA", p: "Wie viele Jahre operativer Gewinn nötig wären, um die Schulden zu tilgen. Ab 3 oder 4 lohnt ein genauerer Blick." }
        ] },
        { t: "p", h: "Ein praktisches Beispiel", html: "Ein Unternehmen notiert bei 50 € und verdient 2,50 € je Aktie: Sein <b>KGV beträgt 20</b>, du bezahlst also 20 Jahre des heutigen Gewinns. Wächst der Gewinn um 10 % pro Jahr, liegt das <b>PEG bei 2</b> (20 ÷ 10). Ein anderes Unternehmen mit einem KGV von 15, das um 15 % wächst, hätte ein PEG von 1: Gemessen an seinem Wachstum ist es „günstiger“, wobei du prüfen müsstest, ob dieses Wachstum nachhaltig ist." },
        { t: "list", h: "Technische Analyse", items: [
          "<b>Gleitende Durchschnitte:</b> zeigen den zugrunde liegenden Trend. Kreuzt ein kurzer Durchschnitt einen langen von unten, gilt das oft als Kaufsignal.",
          "<b>RSI:</b> ein Indikator von 0 bis 100, der hilft zu erkennen, ob ein Wert kurzfristig überkauft (über 70) oder überverkauft (unter 30) ist.",
          "<b>Formationen:</b> Dreiecke, Flaggen oder Doppeltops, mit denen manche Analysten Bewegungen vorwegnehmen wollen, ohne Garantie, dass sie eintreten."
        ] },
        { t: "balance", h: "Fundamental- oder technische Analyse", neutral: true, prosLabel: "Fundamentalanalyse", consLabel: "Technische Analyse", pros: [
          "Richtet den Blick auf das echte Geschäft und seinen langfristigen Wert.",
          "Hilft bei der Entscheidung, was man kauft und jahrelang hält.",
          "Erfordert, Bilanzen zu lesen und die Branche zu verstehen."
        ], cons: [
          "Richtet den Blick auf Kurs, Volumen und Marktverhalten.",
          "Hilft bei der Entscheidung, wann man kauft oder verkauft.",
          "Sehr anfällig für Rauschen und subjektive Deutungen."
        ] },
        { t: "callout", html: "Das ehrliche Fazit: <b>Keine der beiden Methoden garantiert Ergebnisse</b>. Sie liefern unterschiedliche, sich ergänzende Informationen, und die meisten langfristigen Anleger gewichten die Fundamentaldaten deutlich stärker." },
        { t: "deep", h: "Die Zahlen eines Unternehmens lesen", blocks: [
          { t: "list", items: [
            "<b>Gewinn- und Verlustrechnung:</b> Umsatz, Kosten und Gewinn eines Zeitraums.",
            "<b>Bilanz:</b> was das Unternehmen besitzt (Aktiva) und was es schuldet (Passiva) zu einem bestimmten Zeitpunkt.",
            "<b>Kapitalflussrechnung:</b> das Geld, das tatsächlich hereinkommt und hinausgeht. Ein Gewinn, der nicht zu Geldzufluss wird, ist ein Warnsignal.",
            "<b>Wettbewerbsvorteil:</b> Marke, Patente, niedrige Kosten oder Netzwerkeffekte, die das Geschäft vor der Konkurrenz schützen.",
            "<b>Wo du sie findest:</b> in den Jahres- und Quartalsberichten im Bereich Investor Relations jedes Unternehmens und in den Meldungen an die Aufsichtsbehörden."
          ] }
        ] }
      ],
      quiz: [
        { q: "Was misst das KGV eines Unternehmens?", o: ["Seine Gesamtschulden in Euro", "Wie viele Jahre des heutigen Gewinns du für das Unternehmen bezahlst", "Seine Mitarbeiterzahl", "Die garantierte Dividendenrendite"], a: 1, e: "Das KGV setzt den Aktienkurs ins Verhältnis zum Gewinn je Aktie." },
        { q: "Was bewertet die Fundamentalanalyse vor allem?", o: ["Nur die Kursbewegung im Chart", "Das tatsächliche Geschäft: Gewinne, Schulden und Wachstum", "Nur das tägliche Volumen", "Die Meinung eines einzelnen Analysten"], a: 1, e: "Sie untersucht die tatsächliche Verfassung und die Aussichten des Geschäfts, nicht nur den Kurs." },
        { q: "Wozu dient der RSI in der technischen Analyse?", o: ["Zur Berechnung von Steuern", "Um abzuschätzen, ob ein Wert kurzfristig überkauft oder überverkauft ist", "Um den Preis einer Börsennotierung festzulegen", "Um die Bilanzen zu ersetzen"], a: 1, e: "Er ist ein Momentum-Indikator, der mögliche Übertreibungen beim Kaufen oder Verkaufen aufzeigt." },
        { q: "Welches ehrliche Fazit lässt sich zu technischer und Fundamentalanalyse ziehen?", o: ["Die technische Analyse sagt die Zukunft mit völliger Sicherheit voraus", "Die Fundamentalanalyse ist immer nutzlos", "Keine garantiert Ergebnisse: Sie liefern unterschiedliche, sich ergänzende Informationen", "Nur die Fundamentalanalyse funktioniert kurzfristig"], a: 2, e: "Beide bieten unterschiedliche Blickwinkel, aber keine beseitigt die Unsicherheit des Marktes." },
        { q: "Was misst die Eigenkapitalrendite (ROE)?", o: ["Wie viel Gewinn das Unternehmen mit dem Kapital seiner Aktionäre erzielt", "Den Aktienkurs", "Die Anzahl der umlaufenden Aktien", "Die Gesamtschulden"], a: 0, e: "Sie setzt den Nettogewinn ins Verhältnis zum Eigenkapital: Sie misst die Effizienz." },
        { q: "Wozu dient das PEG?", o: ["Um die gezahlte Dividende zu messen", "Um Unternehmen mit unterschiedlichem Wachstum zu vergleichen, indem das KGV ins Verhältnis zum erwarteten Wachstum gesetzt wird", "Zur Berechnung von Steuern", "Um den Preis einer Börsennotierung festzulegen"], a: 1, e: "Es teilt das KGV durch das erwartete Gewinnwachstum." },
        { q: "Was sind Kursformationen der technischen Analyse (Dreiecke, Flaggen, Doppeltops …)?", o: ["Mathematische Garantien für das, was passieren wird", "Formen, mit denen manche Analysten Bewegungen vorwegnehmen wollen, ohne Garantie, dass sie eintreten", "Eine Art Kauforder", "Eine Steuer auf Kursgewinne"], a: 1, e: "Sie sind Hilfsmittel; kein Muster garantiert die künftige Kursbewegung." },
        { q: "Was misst die Kennzahl Verschuldung / EBITDA?", o: ["Wie hoch die Schulden des Unternehmens im Verhältnis zu dem sind, was sein Geschäft erwirtschaftet", "Den Aktienkurs", "Die Anzahl der Aktionäre", "Die Dividendenrendite"], a: 0, e: "Sie hilft einzuschätzen, ob die Verschuldung im Verhältnis zur Ertragskraft vernünftig ist." }
      ]
    },

    {
      title: "Strategie und Risikomanagement",
      subtitle: "Wie du ein vernünftiges Depot aufbaust und es vor den teuersten Fehlern schützt.",
      minutes: 14,
      essentials: [
        "Streue über Anlageklassen, Branchen und Länder.",
        "Schreib deine Zielaufteilung auf und stelle sie regelmäßig wieder her (Rebalancing).",
        "Die größten Feinde von Privatanlegern sind meist Kosten und die eigenen Emotionen."
      ],
      blocks: [
        { t: "chart", id: "donut", caption: "Beispiel für ein gestreutes Depot bei einem ausgewogenen, langfristigen Profil. Das ist keine Empfehlung: Die passende Aufteilung hängt von deinem Profil ab." },
        { t: "list", h: "Verbreitete Strategien", items: [
          "<b>Passives Indexinvestieren:</b> den gesamten Markt mit Indexfonds kaufen und jahrzehntelang halten.",
          "<b>Value Investing:</b> Unternehmen suchen, die laut Fundamentalanalyse unter ihrem geschätzten Wert notieren.",
          "<b>Growth:</b> auf Unternehmen setzen, die viel schneller als der Durchschnitt wachsen, und dafür höhere Bewertungen in Kauf nehmen.",
          "<b>Dividendenstrategie:</b> Unternehmen mit stabilen oder steigenden Dividenden bevorzugen, um regelmäßige Einnahmen zu erzielen."
        ] },
        { t: "p", h: "Positionsgröße und Rebalancing", html: [
          "Die <b>Positionsgröße</b> ist der Anteil deines Gesamtkapitals, den du in eine einzelne Idee steckst. Eine verbreitete Regel unter Privatanlegern: nicht mehr als 5–10 % des Depots in eine einzelne Aktie.",
          "<b>Rebalancing</b> heißt, in regelmäßigen Abständen (zum Beispiel einmal im Jahr) zu deinen Zielanteilen zurückzukehren: Du verkaufst einen Teil dessen, was am stärksten gestiegen ist, und kaufst, was zurückgeblieben ist. So zwingst du dich diszipliniert dazu, günstig zu kaufen und teuer zu verkaufen."
        ] },
        { t: "list", h: "Die fünf teuersten Fehler", items: [
          "<b>FOMO:</b> die Angst, etwas zu verpassen, die dich wegen eines Hypes oder sozialen Drucks kaufen lässt.",
          "<b>Hebel, den du nicht verstehst:</b> Er vervielfacht Gewinne, aber auch Verluste – sogar über den Einsatz hinaus.",
          "<b>Kosten ignorieren:</b> 1–2 % mehr pro Jahr können über 20 oder 30 Jahre Zehntausende Euro weniger bedeuten.",
          "<b>Zu stark konzentrieren:</b> fast alles auf ein Unternehmen, eine Branche oder ein Land setzen.",
          "<b>Market-Timing versuchen:</b> Wer je nach Nachrichtenlage ein- und aussteigt, kauft meist teuer und verkauft billig."
        ] },
        { t: "quote", text: "Die Börse ist ein Mechanismus, der Geld von den Ungeduldigen zu den Geduldigen verschiebt." },
        { t: "balance", h: "Langfristig anlegen oder traden", prosLabel: "Für das langfristige Anlegen", consLabel: "Was die Daten über Trading sagen", pros: [
          "Weniger Kosten und Steuern.",
          "Weniger Stress und weniger impulsive Entscheidungen.",
          "Der Zinseszins kommt voll zur Geltung."
        ], cons: [
          "Im Durchschnitt und nach Kosten schneiden Privatanleger, die häufig handeln, schlechter ab als der Markt selbst.",
          "Es erfordert viel Zeit, Wissen und Selbstbeherrschung.",
          "Mit Hebel kann ein einziger Fehler mehr kosten als das eingesetzte Kapital."
        ] },
        { t: "deep", h: "Risiko messen wie ein Profi", blocks: [
          { t: "list", items: [
            "<b>Maximaler Drawdown:</b> der größte Rückgang von einem Hoch bis zum folgenden Tief. Frag dich, ob du den schlimmsten historischen Einbruch deines Depots aushalten könntest.",
            "<b>Volatilität (Standardabweichung):</b> wie stark die Renditen von ihrem Durchschnitt abweichen. Mehr Volatilität bedeutet mehr Unsicherheit.",
            "<b>Sharpe-Ratio:</b> die zusätzliche Rendite je eingegangener Risikoeinheit. Damit lassen sich Strategien mit unterschiedlichem Risiko vergleichen.",
            "<b>Korrelation:</b> wie sich zwei Anlagen im Verhältnis zueinander bewegen. Echte Streuung heißt, Anlagen mit geringer Korrelation zu kombinieren.",
            "<b>Reihenfolgerisiko:</b> Ein großer Einbruch genau dann, wenn du beginnst, Geld zu entnehmen, schadet viel mehr als derselbe Einbruch am Anfang."
          ] }
        ] }
      ],
      quiz: [
        { q: "Was bedeutet Rebalancing eines Depots?", o: ["Einmal im Jahr das ganze Depot verkaufen", "Regelmäßig zum Zielanteil jeder Anlageklasse zurückkehren", "Eine Art dringende Kauforder", "Das Risiko mit der Zeit immer erhöhen"], a: 1, e: "Es stellt die Zielmischung wieder her, indem man verkauft, was am stärksten gestiegen ist, und kauft, was zurückgeblieben ist." },
        { q: "Was ist FOMO beim Investieren?", o: ["Ein technischer Trendindikator", "Die Angst, etwas zu verpassen, die dich wegen eines Hypes oder sozialen Drucks kaufen lässt", "Eine Art regulierter Fonds", "Eine Bankgebühr"], a: 1, e: "FOMO verleitet zu impulsiven Entscheidungen, die auf Lärm statt auf eigener Analyse beruhen." },
        { q: "Welches Risiko birgt ein Hebel, den man nicht richtig versteht?", o: ["Keines: Er verbessert immer die Ergebnisse", "Er kann Gewinne wie Verluste vervielfachen – sogar über das eingesetzte Kapital hinaus", "Er betrifft nur die Steuern", "Er beseitigt die Schwankungen des Depots"], a: 1, e: "Der Hebel verstärkt die Ergebnisse in beide Richtungen." },
        { q: "Was zeigen Studien meist über aktives Trading von Privatanlegern?", o: ["Dass sie den Markt fast immer mühelos schlagen", "Dass sie im Durchschnitt und nach Kosten meist schlechter abschneiden als der Markt", "Dass es überhaupt keinen Unterschied gibt", "Dass es nur mit Kryptowährungen funktioniert"], a: 1, e: "Die empirischen Daten deuten darauf hin, dass häufiges Handeln der Rendite des durchschnittlichen Privatanlegers eher schadet." },
        { q: "Was ist die Positionsgröße?", o: ["Die Anzahl der Broker, die du nutzt", "Der Anteil deines Gesamtkapitals, den du in eine einzelne Anlageidee steckst", "Die Größe des Unternehmens, in das du investierst", "Eine Art Börsenorder"], a: 1, e: "Eine verbreitete Regel: nicht mehr als 5–10 % des Depots in eine einzelne Aktie." },
        { q: "Was kennzeichnet Value Investing?", o: ["Nur Kryptowerte kaufen", "Unternehmen suchen, die laut Fundamentalanalyse unter ihrem geschätzten Wert notieren", "Immer innerhalb eines Tages verkaufen", "Die Fundamentaldaten völlig ignorieren"], a: 1, e: "Es sucht Unternehmen, die der Markt im Verhältnis zu ihrem geschätzten Wert unterbewertet." },
        { q: "Worauf setzt die Dividendenstrategie?", o: ["Unternehmen mit stabilen oder steigenden Dividenden, die regelmäßige Einnahmen bringen", "Nur Unternehmen mit Verlusten", "Ausschließlich Rohstoffe", "Sehr volatile Kryptowerte"], a: 0, e: "Sie strebt regelmäßige Einnahmen durch nachhaltige Dividenden an." },
        { q: "Warum ist es langfristig ein teurer Fehler, Kosten zu ignorieren?", o: ["Kosten beeinflussen das Endergebnis nie", "1–2 % mehr pro Jahr können durch den Zinseszins über 20 oder 30 Jahre Zehntausende Euro weniger bedeuten", "Kosten gibt es nur bei Rohstoffen", "Sie sind nur wichtig, wenn du weniger als 100 € anlegst"], a: 1, e: "Kleine Kostenunterschiede werden mit der Zeit enorm verstärkt." }
      ]
    },

    {
      title: "Makroökonomie, Zyklen und Psychologie",
      subtitle: "Warum sich die Märkte bewegen und wie du verhinderst, dass deine Emotionen für dich entscheiden.",
      minutes: 15,
      essentials: [
        "Zinsen, Inflation und Wirtschaftswachstum bewegen die Märkte.",
        "Märkte verlaufen in Zyklen: Auf Anstiege folgen Rückgänge und umgekehrt.",
        "Deine psychologischen Denkfehler zu kennen, ist ebenso wichtig wie die Produkte zu kennen."
      ],
      blocks: [
        { t: "p", h: "Zentralbanken und Zinsen", html: "Die Europäische Zentralbank oder die US-Notenbank (Fed) erhöhen die Zinsen, um die Inflation zu bremsen, und senken sie, um die Wirtschaft anzukurbeln. Höhere Zinsen verteuern Kredite, drücken meist den Kurs bereits ausgegebener Anleihen und können die Bewertungen von Wachstumsunternehmen dämpfen." },
        { t: "cards", h: "Drei Indikatoren, die du verfolgen solltest", items: [
          { icon: "percent", h: "Inflation", p: "Steigt sie stark, erhöhen die Zentralbanken die Zinsen. Sie zehrt am Wert von Bargeld und festverzinslichen Anleihen." },
          { icon: "factory", h: "Wachstum (BIP)", p: "Eine wachsende Wirtschaft steigert die Unternehmensgewinne, eine Rezession verringert sie." },
          { icon: "currency", h: "Währungen", p: "Wenn du in einer anderen Währung investierst, erhöht oder verringert ihre Entwicklung gegenüber deiner Währung deine Rendite." }
        ] },
        { t: "chart", id: "cycle", caption: "Die Phasen des Konjunkturzyklus. Jede Phase begünstigt meist andere Branchen, doch niemand kann genau vorhersagen, wann sie wechselt." },
        { t: "p", h: "Marktzyklen", html: "Märkte wechseln zwischen Phasen des Anstiegs und des Rückgangs. Von einer <b>Korrektur</b> spricht man, wenn ein Index mehr als 10 % unter seinem Hoch liegt, von einem <b>Bärenmarkt</b>, wenn der Rückgang 20 % übersteigt. Historisch haben sich breit gestreute Märkte von allen Einbrüchen erholt, auch wenn es manchmal Jahre gedauert hat." },
        { t: "chart", id: "emotion", caption: "Der emotionale Zyklus des Anlegers: Euphorie fällt meist mit dem höchsten Risiko zusammen, Panik mit der größten Chance. Wer erkennt, in welcher Phase seine Emotionen stecken, schützt sich davor, teuer zu kaufen und billig zu verkaufen." },
        { t: "list", h: "Denkfehler, die dich Geld kosten", items: [
          "<b>Verlustaversion:</b> 100 € zu verlieren schmerzt mehr, als 100 € zu gewinnen freut – und das treibt dich zu Panikverkäufen.",
          "<b>Selbstüberschätzung:</b> nach ein paar Treffern zu glauben, man könne den Markt vorhersagen.",
          "<b>Herdenverhalten:</b> kaufen, weil alle anderen kaufen.",
          "<b>Ankereffekt:</b> sich an den bezahlten Kaufpreis klammern, als würde sich der Markt daran erinnern.",
          "<b>Rezenzeffekt:</b> annehmen, dass das, was in den letzten Monaten passiert ist, so weitergeht."
        ] },
        { t: "balance", h: "Solltest du die Wirtschaftsnachrichten verfolgen?", pros: [
          "Du verstehst, warum sich die Märkte bewegen, und wirst von Rückgängen nicht überrascht.",
          "Es hilft dir, Risiken in deinem Depot zu erkennen (Währung, Zinsen, Branchen)."
        ], cons: [
          "Zu viele Nachrichten verleiten dazu, mehr zu handeln als nötig.",
          "Schlagzeilen wollen Aufmerksamkeit: Sie verstärken Angst und Euphorie gleichermaßen."
        ] },
        { t: "callout", html: "Für langfristige Anleger ist ein <b>schriftlicher Plan</b> der beste Schutz vor Emotionen: was du kaufst, in welchem Verhältnis, wie oft du einzahlst und wann du rebalancierst. Entscheide in ruhigen Momenten und halte dich an den Plan, wenn es unruhig wird." },
        { t: "deep", h: "Steuern und fortgeschrittene Planung", blocks: [
          { t: "list", items: [
            "<b>Verlustverrechnung:</b> In vielen Ländern lassen sich Kursverluste mit Gewinnen desselben Jahres oder späterer Jahre verrechnen (in Spanien bis zu vier Jahre, in Deutschland über den Verlustverrechnungstopf unbegrenzt vortragbar).",
            "<b>Die Zwei-Monats-Regel:</b> Verkaufst du in Spanien börsennotierte Wertpapiere mit Verlust und kaufst in den zwei Monaten davor oder danach gleichartige Papiere, kannst du den Verlust erst geltend machen, wenn du die zurückgekauften verkaufst. Andere Länder haben ähnliche Regeln, etwa die 30-Tage-Regel im Vereinigten Königreich.",
            "<b>Doppelbesteuerung von Dividenden:</b> Ausländische Dividenden können im Quellenstaat und im Wohnsitzland besteuert werden; einen Teil kann man oft zurückfordern oder anrechnen lassen.",
            "<b>Steuerbegünstigte Anlageformen:</b> Altersvorsorgepläne, das ISA im Vereinigten Königreich, der PEA in Frankreich … jedes Land hat eigene.",
            "Steuerregeln ändern sich: Informiere dich immer bei der Finanzverwaltung deines Landes oder bei einer Steuerberatung."
          ] }
        ] }
      ],
      quiz: [
        { q: "Was tun Zentralbanken meist, wenn die Inflation sehr hoch ist?", o: ["Die Zinsen senken", "Die Zinsen erhöhen", "Aktien aller Unternehmen kaufen", "Die Börse schließen"], a: 1, e: "Höhere Zinsen verteuern Kredite und dämpfen die Nachfrage, was hilft, die Inflation zu bremsen." },
        { q: "Welche Wirkung hat eine Zinserhöhung meist auf bereits ausgegebene Anleihen?", o: ["Ihr Kurs steigt meist", "Ihr Kurs fällt meist", "Sie betrifft sie nicht", "Sie werden zu Aktien"], a: 1, e: "Neue Anleihen zahlen mehr, daher werden ältere mit niedrigerem Zins weniger attraktiv und ihr Kurs sinkt." },
        { q: "Was ist eine Marktkorrektur?", o: ["Ein Rückgang von mehr als 10 % vom Hoch", "Ein Fehler des Brokers", "Ein Anstieg um 50 %", "Eine Gesetzesänderung"], a: 0, e: "Es ist ein Rückgang von mehr als 10 %; übersteigt er 20 %, spricht man von einem Bärenmarkt." },
        { q: "Ab welchem Rückgang vom Hoch spricht man üblicherweise von einem Bärenmarkt?", o: ["5 %", "10 %", "20 %", "60 %"], a: 2, e: "Die übliche Schwelle ist ein Rückgang von mehr als 20 % vom Hoch." },
        { q: "Was ist Verlustaversion?", o: ["Nie zu investieren", "Einen Betrag zu verlieren schmerzt mehr, als denselben Betrag zu gewinnen freut", "Eine Art Versicherung", "Ein technischer Indikator"], a: 1, e: "Dieser Denkfehler treibt zu Panikverkäufen oder dazu, Verlustpositionen nie zu verkaufen." },
        { q: "Welche Phase des emotionalen Anlegerzyklus fällt meist mit dem höchsten Risiko zusammen?", o: ["Panik", "Resignation", "Euphorie", "Hoffnung"], a: 2, e: "Wenn alle euphorisch sind, sind die Kurse meist höher – und das Risiko ebenso." },
        { q: "Wie wirkt sich die Währung auf eine Anlage in einer anderen Währung aus?", o: ["Sie hat nie eine Wirkung", "Ihre Entwicklung gegenüber deiner Währung erhöht oder verringert die Rendite", "Sie betrifft nur Anleihen", "Sie verbessert immer die Rendite"], a: 1, e: "Fällt der Dollar gegenüber dem Euro, ist eine Dollar-Anlage in Euro weniger wert, auch wenn sie sich selbst nicht bewegt hat." },
        { q: "Was ist der beste Schutz vor emotionalen Entscheidungen?", o: ["Stündlich auf den Kurs schauen", "Influencern folgen", "Ein schriftlicher Anlageplan, der in Ruhe beschlossen wurde", "Mit Hebel handeln"], a: 2, e: "Ein schriftlicher Plan erinnert dich daran, was du beschlossen hattest, wenn die Emotionen hochkochen." }
      ]
    }
  ]
};
