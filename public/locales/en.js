window.LOCALES = window.LOCALES || {};
window.LOCALES.en = {
  meta: { name: "English", short: "EN", htmlLang: "en", locale: "en-GB" },

  ui: {
    brand: "The Investor's Notebook",
    brandTag: "Learn to invest from scratch",
    skip: "Skip to content",
    nav: { label: "Main navigation", learn: "Learn", simulator: "Simulator", forum: "Forum", ai: "AI Consultant", resources: "News", menu: "Open menu", closeMenu: "Close menu" },
    account: { login: "Log in", logout: "Log out", settings: "Settings" },
    common: { close: "Close", cancel: "Cancel", confirm: "Confirm", retry: "Try again" },

    hero: {
      title: "Learn to invest",
      titleLine2: "from scratch, with judgement.",
      lead: "A guided path from the very basics to advanced topics: charts that make sense, arguments for and against on every subject, tests to check what you've learnt and tools to practise without risking money.",
      start: "Start from scratch",
      continue: "Continue with level {n}",
      review: "Review the path",
      simulator: "Try the simulator",
      resume: "You're on",
      allDone: "You've completed the whole path. Review whenever you like or put what you've learnt to the test in the simulator.",
      artCaption: "Each candle sums up one market session.",
      artTag: "You'll learn to read them",
      facts: { levels: "levels", questions: "test questions", minutes: "minutes of reading", languages: "languages" }
    },
    how: {
      title: "How it works",
      sub: "You don't need to know anything beforehand. You move at your own pace and always know where you are.",
      steps: [
        { h: "Read at your own pace", p: "Each level starts with the essentials in three ideas, then expands with charts, examples and an optional section for going deeper." },
        { h: "Show what you've learnt", p: "Each level ends with an 8-question test. Score 70% or more to unlock the next one." },
        { h: "Practise and discuss", p: "Simulate compound interest, ask the AI consultant and share questions with the forum community." }
      ]
    },
    route: {
      title: "Your learning path",
      sub: "Three stages and eight levels. Each level unlocks when you pass the previous level's test.",
      summary: "{done} of {total} levels completed",
      levelN: "Level {n}",
      min: "{n} min",
      score: "Score: {n}%",
      status: { done: "Completed", open: "Available", locked: "Locked" }
    },
    tools: {
      title: "Tools to practise with",
      sub: "Use them at any time, without waiting to finish the path.",
      simulator: { h: "Simulator", p: "See how much your savings could grow with regular contributions and the passage of time." },
      forum: { h: "Forum", p: "Ask questions, share your experience and learn from other people who are also starting out." },
      ai: { h: "AI Consultant", p: "Get clear answers to specific questions, always with the pros and cons." },
      resources: { h: "News and sources", p: "Up-to-date financial headlines and the official sources worth knowing." }
    },

    level: {
      back: "Back to the path",
      minutes: "{n} min read",
      essentials: "The essentials",
      deepHint: "Optional, for those who want to go further",
      jumpQuiz: "I already know this: go to the test",
      askAi: "Ask the consultant",
      aiPrefill: "I have a question about “{title}”: ",
      toc: "In this level",
      tocQuiz: "Level test",
      pros: "For",
      cons: "Against and risks",
      termHint: "Tap to see the definition",
      prev: "Previous level",
      next: "Next level",
      nextLocked: "Next level (locked)",
      pagerLabel: "Level navigation",
      locked: {
        title: "This level is still locked",
        text: "To open “{title}”, first pass the level {prev} test with at least 70%.",
        go: "Go to level {prev}",
        back: "See the full path"
      }
    },
    quiz: {
      title: "Level {n} test",
      hint: "{q} questions. Get {min} right (70%) to unlock the next level.",
      hintLast: "{q} questions. Get {min} right (70%) to complete the path.",
      answered: "{a} of {q} answered",
      submit: "Mark the test",
      missing: "You still have {n} questions to answer.",
      correct: "Correct.",
      wrong: "Not quite.",
      passTitle: "Passed!",
      passText: "You got {c} out of {q} right ({p}%).",
      unlocked: "Level {n} unlocked",
      finished: "You've completed the whole path. Congratulations!",
      failTitle: "Not yet",
      failText: "You got {c} out of {q} right ({p}%) and you need {min}. Read the explanations and try again.",
      retry: "Retake the test",
      goNext: "Go to level {n}",
      backRoute: "Back to the path",
      previous: "You've already passed this test with {p}%. You can retake it whenever you like."
    },
    sim: {
      title: "Compound interest simulator",
      sub: "Move the controls and see how time and consistency multiply the effect of every euro.",
      initial: "Initial capital",
      monthly: "Monthly contribution",
      rate: "Estimated annual return",
      years: "Years invested",
      yearsVal: "{n} years",
      yearVal: "1 year",
      presetsLabel: "Example scenarios",
      presets: [
        { label: "Conservative (3%)", rate: 3 },
        { label: "Moderate (5%)", rate: 5 },
        { label: "Dynamic (7%)", rate: 7 }
      ],
      inflation: "Show the result in today's money (after 2% annual inflation)",
      contributed: "Capital contributed",
      interest: "Interest earned",
      final: "Estimated final value",
      legendTotal: "Total value",
      legendContrib: "Capital contributed",
      tipYear: "Year {n}",
      chartLabel: "Year-by-year growth of the investment",
      note: "Simulation with monthly compounding and a constant return. In reality returns vary every year, there are fees and taxes, and past performance does not guarantee future results.",
      privacy: "Calculations run on your device: no data is sent anywhere."
    },
    forum: {
      title: "Community forum",
      sub: "A place to ask questions without fear and share what you're learning.",
      topicsLabel: "Forum topics",
      rules: "Rules: be respectful, no promises of returns or buy recommendations, and don't share personal data.",
      loading: "Loading messages…",
      empty: "There are no messages on this topic yet. Why not start the conversation?",
      offline: "Can't connect to the forum server. Check your connection and try again.",
      composerLabel: "Write your message",
      placeholder: "Write your question or share your experience…",
      publish: "Post",
      counter: "{n}/600",
      reply: "Reply",
      replyPh: "Write your reply…",
      sendReply: "Post reply",
      delete: "Delete",
      deleteConfirm: "Delete this message? This can't be undone.",
      deleted: "Message deleted",
      posted: "Message posted",
      replied: "Reply posted",
      loginCta: "Log in to post and reply."
    },
    ai: {
      title: "AI Consultant",
      sub: "Get clear explanations to your investing questions. You'll always see arguments for and against.",
      panelTitle: "Conversation",
      panelSub: "Ask in your own words; it adapts to your level.",
      welcome: "Hi! I'm the Notebook's consultant. Ask me anything about investing: concepts, products, strategies or questions about the levels. I'll always give you the pros and cons, with no personalised recommendations.",
      needLogin: "Log in to use the AI consultant. This helps us prevent misuse of the service.",
      placeholder: "For example: what's the difference between an ETF and an index fund?",
      inputLabel: "Your question for the consultant",
      send: "Send",
      thinking: "The consultant is typing",
      suggestions: [
        "What is an ETF and how is it different from an index fund?",
        "Is it worth investing if I can only put in €50 a month?",
        "How do rising interest rates affect my investments?",
        "Explain the P/E ratio with a simple example"
      ],
      clear: "New conversation",
      disclaimer: "Answers are for guidance and education only. They are not personalised financial advice, and the consultant has no real-time market data."
    },
    res: {
      title: "News and sources",
      sub: "Keep up to date with headlines from leading financial media and get to know the official sources for cross-checking.",
      liveTitle: "Live headlines",
      liveSub: "Updated automatically. Tap a headline to read the full story on the publisher's website.",
      updated: "Updated: {time}",
      unavailable: "Headlines can't be loaded right now. In the meantime, check the sources below directly.",
      tip: "Always check a story in at least two independent sources, and be wary of anyone promising guaranteed returns.",
      sourcesTitle: "Reference sources",
      newTab: "(opens in a new tab)"
    },
    settings: {
      title: "Settings",
      language: "Language",
      theme: "Appearance",
      theme_auto: "Automatic",
      theme_light: "Light",
      theme_dark: "Dark",
      progress: "Your progress",
      reset: "Reset progress",
      resetConfirm: "Reset all your progress? The levels will be locked again.",
      resetDone: "Progress reset",
      account: "Account",
      loggedAs: "Logged in as {name}",
      syncNote: "Your language and progress are saved to your account and synced across devices.",
      guestNote: "Log in to save your progress and language to your account and use them on any device."
    },
    auth: {
      title: "Your account",
      sub: "With an account you can post in the forum, use the AI consultant and save your progress.",
      tabLogin: "Log in",
      tabRegister: "Create account",
      email: "Email address",
      password: "Password",
      showPwd: "Show password",
      hidePwd: "Hide password",
      username: "Username",
      usernameHint: "3 to 30 characters: letters, numbers, full stop, hyphen or underscore. It will be visible in the forum.",
      passwordHint: "At least 8 characters. Use a password you don't use anywhere else.",
      loginBtn: "Log in",
      registerBtn: "Create account",
      working: "One moment…",
      welcome: "Hi, {name}!",
      loggedOut: "You've logged out"
    },
    footer: {
      disclaimer: "Educational content, not financial advice. Investing involves risk, including the loss of capital. Past performance does not guarantee future results.",
      sources: "Content based on guides from financial regulators and well-known investor communities. Last reviewed: September 2026.",
      privacy: "We only use one technical cookie to keep you logged in. No ads, no trackers."
    }
  },

  errors: {
    NETWORK: "Can't connect to the server. Check your connection and try again.",
    SERVER_ERROR: "Something went wrong on the server. Please try again in a few minutes.",
    NOT_FOUND: "We couldn't find what you were looking for.",
    INVALID_INPUT: "The data sent isn't valid. Please check it and try again.",
    INVALID_USERNAME: "Usernames must be 3 to 30 characters long: letters, numbers, full stop, hyphen or underscore.",
    INVALID_EMAIL: "Enter a valid email address.",
    WEAK_PASSWORD: "Passwords must be at least 8 characters long (and no more than 72).",
    REGISTRATION_FAILED: "The account couldn't be created: that username or email address is already in use.",
    INVALID_CREDENTIALS: "The email address or password is incorrect.",
    UNAUTHENTICATED: "Your session has expired. Please log in again.",
    FORBIDDEN: "You don't have permission to do this.",
    BAD_ORIGIN: "The request was blocked for security reasons. Reload the page and try again.",
    TOO_MANY_REQUESTS: "You've made too many requests in a row. Wait a moment and try again.",
    TOPIC_NOT_FOUND: "That forum topic doesn't exist.",
    POST_NOT_FOUND: "That message no longer exists.",
    EMPTY_MESSAGE: "Write something before posting.",
    AI_DISABLED: "The AI consultant isn't enabled on this server. The administrator needs to set up the API key.",
    AI_ERROR: "The consultant couldn't answer right now. Please try again in a moment."
  },

  topics: {
    "primeros-pasos": "First steps",
    "acciones": "Shares",
    "etfs-fondos": "ETFs and funds",
    "materias-primas": "Commodities",
    "estrategia": "Strategy"
  },

  stages: [
    { name: "Beginner", title: "The foundations", desc: "What you need before investing, the key vocabulary and how to read a chart." },
    { name: "Intermediate", title: "Taking action", desc: "Which products exist, how trading works in practice and how to analyse a company." },
    { name: "Advanced", title: "Thinking like an investor", desc: "Strategy, risk management, macroeconomics and the psychological factor." }
  ],

  charts: {
    inflation: { idle: "Idle money", invested: "Invested at 7% a year", year: "Year {n}", note: "Purchasing power of €1,000 with 3% annual inflation" },
    line: { price: "Price", time: "Time", resistance: "Resistance", support: "Support" },
    candle: { high: "High", low: "Low", open: "Open", close: "Close", bull: "Bullish candle", bear: "Bearish candle", sequence: "Bullish sequence" },
    ma: { price: "Daily price", ma: "Moving average" },
    risk: {
      x: "Risk (price swings)", y: "Expected return", note: "Illustrative diagram",
      items: ["Deposits and money market", "Bonds", "Global index fund", "Individual shares", "Commodities", "Crypto-assets"]
    },
    orders: { current: "Current price", limitBuy: "Limit buy", stop: "Stop-loss", take: "Take-profit" },
    donut: { center: "Example", items: ["Global equities", "Bonds", "Cash", "Commodities"] },
    cycle: { phases: ["Expansion", "Peak", "Recession", "Recovery", "Trough"] },
    emotion: {
      phases: ["Optimism", "Euphoria", "Anxiety", "Fear", "Panic", "Despondency", "Hope", "Relief"],
      top: "Maximum risk", bottom: "Maximum opportunity"
    }
  },

  resources: {
    groups: [
      {
        icon: "shield", title: "Official bodies",
        items: [
          { name: "Investor.gov (SEC)", url: "https://www.investor.gov", desc: "The US regulator's investor education site. Check brokers and learn the basics." },
          { name: "Financial Conduct Authority", url: "https://www.fca.org.uk", desc: "UK regulator. Use its register to check that a firm is authorised." },
          { name: "ESMA", url: "https://www.esma.europa.eu", desc: "The EU securities authority: investor warnings and guides." }
        ]
      },
      {
        icon: "message", title: "Communities",
        items: [
          { name: "Bogleheads", url: "https://www.bogleheads.org", desc: "Forum and wiki focused on low-cost, long-term index investing." },
          { name: "Monevator", url: "https://monevator.com", desc: "Well-known UK blog on passive investing and personal finance." },
          { name: "Investing.com", url: "https://www.investing.com", desc: "Quotes, economic calendar and analysis." }
        ]
      },
      {
        icon: "news", title: "Financial press",
        items: [
          { name: "Financial Times", url: "https://www.ft.com", desc: "Leading international business newspaper." },
          { name: "Reuters", url: "https://www.reuters.com/markets", desc: "International news agency: markets in near real time." },
          { name: "Bloomberg", url: "https://www.bloomberg.com/markets", desc: "Market data and financial news." },
          { name: "CNBC", url: "https://www.cnbc.com", desc: "Business news and market coverage." }
        ]
      }
    ]
  },

  levels: [
    {
      title: "Before you invest",
      subtitle: "What you should be clear about before putting your first euro into the markets.",
      minutes: 8,
      essentials: [
        "Only invest money you won't need for years, and build an emergency fund first.",
        "Your profile (time horizon, ability to absorb losses and emotional tolerance) decides which products suit you.",
        "Time and compound interest are your great allies; inflation is the silent enemy of idle money."
      ],
      blocks: [
        { t: "p", h: "Your investor profile", html: "Before looking at a single share, answer honestly: how long can you leave the money invested without touching it? Could you afford to lose part of it? How would you react if tomorrow it were worth 30% less? Regulators insist that these answers, not a hunch or a trend, should guide what you buy." },
        { t: "cards", items: [
          { icon: "clock", h: "Time horizon", p: "Less than 2 years, between 2 and 10, or more than 10? The longer it is, the more room you have to recover from falls." },
          { icon: "wallet", h: "Financial capacity", p: "Would losing that money affect your daily life? If the answer is yes, it shouldn't be in the stock market." },
          { icon: "heart", h: "Emotional tolerance", p: "Would you sleep soundly watching your investment drop 20% in a month? Be honest: it's the cause of many bad decisions." }
        ] },
        { t: "p", h: "The safety net comes before investing", html: "Set aside 3 to 6 months of expenses in something liquid and safe, such as an interest-bearing account or a money market fund, before investing in the markets. That way you'll never have to sell at the worst moment because of an unexpected expense." },
        { t: "quote", text: "Emergency fund first, investing second. Never the other way round." },
        { t: "chart", id: "inflation", caption: "With average inflation of 3%, €1,000 kept in a drawer will buy in 20 years what about €550 buys today. Invested at 7% a year (an illustrative figure, not a guarantee), its purchasing power would have more than doubled." },
        { t: "p", h: "Compound interest", html: "Returns generate further returns, like a snowball that grows as it rolls. With regular contributions and an average return of 7% a year (a common historical benchmark for diversified equity portfolios, not a promise):" },
        { t: "table", head: ["Monthly contribution", "Years", "Capital contributed", "Approximate final value"], rows: [
          ["€100", "10", "€12,000", "≈ €17,300"],
          ["€100", "25", "€30,000", "≈ €81,000"],
          ["€300", "25", "€90,000", "≈ €243,000"]
        ] },
        { t: "callout", html: "Figures with monthly compounding, before fees, taxes and inflation. They help you understand the effect of time; they are not a forecast. Try your own numbers in the <b>Simulator</b>." },
        { t: "balance", h: "Invest: yes or no?", pros: [
          "Idle money loses purchasing power year after year because of inflation.",
          "Over the long term, diversified equities have historically beaten inflation and traditional savings.",
          "Compound interest rewards starting early, even with small amounts."
        ], cons: [
          "You can lose part or all of the money you invest.",
          "Past returns don't guarantee future returns.",
          "If you invest money you'll need soon, you may be forced to sell at a loss."
        ] },
        { t: "callout", html: "The regulators' golden rule: <b>don't invest in what you don't understand</b>. If you can't explain in two sentences what you've bought and what risk it carries, it isn't the right time yet." },
        { t: "deep", h: "Real return, the rule of 72 and opportunity cost", blocks: [
          { t: "p", html: "Your <b>real return</b> is roughly your nominal return minus inflation. A 5% nominal return with 3% inflation is only 2% in real terms: that's what actually increases your purchasing power." },
          { t: "p", html: "The <b>rule of 72</b> estimates how many years it takes for capital to double: divide 72 by the annual return. At 6% it takes about 12 years; at 9%, about 8." },
          { t: "p", html: "<b>Opportunity cost</b> matters too: paying off a debt at 8% APR is equivalent to a guaranteed 8% return, something no investment can promise. That's why it usually makes sense to clear expensive debts before investing." }
        ] }
      ],
      quiz: [
        { q: "What is it recommended to have before you start investing?", o: ["An emergency fund covering 3 to 6 months of expenses", "A personal loan to invest more", "Nothing: the sooner you invest, the better", "A credit card with a high limit"], a: 0, e: "An emergency fund means you never have to sell investments at the worst moment because of an unexpected expense." },
        { q: "According to regulators, what should guide your investment decisions?", o: ["What's recommended on social media", "Your investor profile: goals, time horizon and risk tolerance", "Always investing in whatever rose most that month", "Copying a relative's portfolio"], a: 1, e: "Your financial situation, time horizon and risk tolerance determine which products suit you." },
        { q: "What role does compound interest play?", o: ["It has no significant effect", "The returns you earn also generate returns over time", "It only applies to loans, not investments", "It reduces returns the longer time goes on"], a: 1, e: "Compound interest makes growth accelerate the longer the capital stays invested." },
        { q: "What does “don't invest in what you don't understand” mean?", o: ["That you should only invest in complex products", "That if you can't explain what you've bought and its risk, it isn't the time to buy it", "That it's a phrase with no practical importance", "That it only applies to cryptocurrencies"], a: 1, e: "It's a basic investor protection principle repeated by every regulator." },
        { q: "Which of these is NOT one of the three pillars of an investor profile?", o: ["Time horizon", "Financial capacity to absorb losses", "The broker's brand colour", "Emotional risk tolerance"], a: 2, e: "The three pillars are time horizon, financial capacity to absorb losses and emotional risk tolerance." },
        { q: "How many months of expenses should your emergency fund cover before you invest?", o: ["3 to 6 months", "One week", "At least 5 years", "You don't need any safety net"], a: 0, e: "The usual guideline is 3 to 6 months of expenses in something liquid and accessible." },
        { q: "Contributing €100 a month for 25 years at 7% a year, how does the final value compare with the amount contributed?", o: ["The final value is lower than the amount contributed", "The final value is practically the same as the amount contributed", "The final value is several times higher thanks to compound interest", "It's impossible to calculate"], a: 2, e: "With €30,000 contributed, the final value is around €81,000: time multiplies the effect of every contribution." },
        { q: "According to the rule of 72, roughly how many years does it take for capital to double at 8% a year?", o: ["3 years", "9 years", "20 years", "72 years"], a: 1, e: "72 ÷ 8 = 9. It's a handy quick approximation to get a feel for the effect of time." }
      ]
    },

    {
      title: "Basic vocabulary",
      subtitle: "The terms you'll hear again and again, explained without jargon.",
      minutes: 10,
      essentials: [
        "A share is a small part of a company; a bond is a loan you make in exchange for interest.",
        "An ETF or an index fund lets you buy hundreds of companies in one go.",
        "Market orders prioritise speed; limit orders prioritise price."
      ],
      blocks: [
        { t: "p", html: "Tap each card to see its definition. There's no need to memorise them all at once: come back here whenever you need to." },
        { t: "glossary", items: [
          { t: "Share", d: "A small part of the ownership of a company. If the company does well, your part tends to be worth more." },
          { t: "Bond", d: "A loan you make to a government or a company in exchange for interest agreed in advance." },
          { t: "Dividend", d: "The part of its profit a company distributes to its shareholders, usually in cash." },
          { t: "ETF", d: "A fund that trades on the stock exchange like a share and usually tracks a whole index." },
          { t: "Index fund", d: "A fund that passively copies an index with low fees. Unlike an ETF, it isn't traded in real time." },
          { t: "Stock market index", d: "A basket of companies that summarises how a market is performing, such as the FTSE 100 or the MSCI World." },
          { t: "Broker", d: "The regulated firm through which you buy and sell assets." },
          { t: "Market capitalisation", d: "A company's total stock market value: share price multiplied by the number of shares." },
          { t: "Volatility", d: "How much and how quickly an asset's price moves. More volatility means more uncertainty." },
          { t: "Diversification", d: "Spreading your money across many assets so that no single stumble sinks you." },
          { t: "Spread", d: "The difference between the price at which you can buy and the price at which you can sell at a given moment." },
          { t: "Market order", d: "An immediate purchase or sale at the best price available at that moment." },
          { t: "Limit order", d: "A purchase or sale that only goes through if the price you set is reached." },
          { t: "Annualised return", d: "The average gain or loss per year. It lets you compare investments of different lengths." },
          { t: "Liquidity", d: "How easily an investment can be turned into cash quickly and without losing value." },
          { t: "Capital gain and loss", d: "The profit (gain) or loss when you sell something for more or less than it cost you." }
        ] },
        { t: "p", h: "How the pieces fit together", html: "When you buy an ETF through your broker, you send an order (market or limit) that is executed at the available price, with a small spread between buying and selling. The ETF rises or falls with the index it tracks and, if you hold it for several years, your result is measured as an annualised return." },
        { t: "cards", h: "The three big families", items: [
          { icon: "pie", h: "Equities", p: "Shares and equity funds. More potential gain and bigger swings." },
          { icon: "lock", h: "Fixed income", p: "Bonds and bills. Smaller swings and a more predictable return." },
          { icon: "drop", h: "Cash", p: "Accounts and money market funds. Available immediately, with a low return." }
        ] },
        { t: "deep", h: "Terms the professionals use", blocks: [
          { t: "list", items: [
            "<b>Bid and ask:</b> the best price at which someone is willing to buy (bid) and to sell (ask). The difference between them is the spread.",
            "<b>TER:</b> the total annual cost of a fund or ETF, expressed as a percentage. It's usually very low for index funds.",
            "<b>Accumulating or distributing:</b> accumulating funds reinvest dividends; distributing funds pay them out.",
            "<b>Tracking error:</b> how far an index fund deviates from the index it tries to copy.",
            "<b>Benchmark:</b> the reference index an investment is compared against.",
            "<b>Blue chip:</b> a large, well-established company with high trading volume."
          ] }
        ] }
      ],
      quiz: [
        { q: "What is an ETF?", o: ["A type of individual share", "A listed fund that usually tracks an index and is bought like a share", "A loan to a company", "A tax on stock market gains"], a: 1, e: "An ETF combines the diversification of a fund with the ease of trading of a share." },
        { q: "What's the difference between a market order and a limit order?", o: ["There's no real difference", "A market order executes immediately at the best price; a limit order only if the price you set is reached", "A limit order is always more expensive", "A market order can only be used to sell"], a: 1, e: "A market order prioritises immediate execution; a limit order prioritises price control." },
        { q: "What does an asset's volatility measure?", o: ["Its guaranteed return", "How much and how quickly its price moves", "How many shareholders it has", "The fee the broker charges"], a: 1, e: "Volatility reflects the size and speed of price movements; it guarantees no return." },
        { q: "What is diversification?", o: ["Putting everything into one promising company", "Spreading your investment across different assets to reduce the risk of a single bet", "Selling all your shares every month", "A type of stock market order"], a: 1, e: "Diversifying reduces the impact of any single asset going wrong on your portfolio as a whole." },
        { q: "What is the spread?", o: ["The annual dividend paid", "The difference between the buying and selling price at a given moment", "A tax on capital gains", "The number of shares in circulation"], a: 1, e: "It's the difference between the asking price (ask) and the bid price (bid) at that moment." },
        { q: "What does a company's market capitalisation measure?", o: ["Its total debt", "The share price multiplied by the number of shares", "Its annual net profit", "Its number of employees"], a: 1, e: "Market capitalisation is the company's total value on the stock market." },
        { q: "What is a broker?", o: ["A very volatile type of share", "The regulated firm through which you buy and sell assets", "A tax on dividends", "A stock market index"], a: 1, e: "The broker, supervised by the relevant authority, executes your buy and sell orders." },
        { q: "What does annualised return show?", o: ["The total gain, regardless of how much time has passed", "The average yearly gain or loss if the result were spread evenly", "The asset's current price", "The broker's annual fee"], a: 1, e: "It converts the result into an average yearly figure so you can compare investments of different lengths." }
      ]
    },

    {
      title: "How to read a chart",
      subtitle: "Lines, candles, trends and volume: what a chart really tells you.",
      minutes: 12,
      essentials: [
        "A line chart shows the trend; candles show what happened within each period.",
        "Support and resistance are areas where the price tends to stall, not impenetrable walls.",
        "Volume and moving averages help separate the signal from the noise."
      ],
      blocks: [
        { t: "p", h: "The line chart", html: "It joins the closing price of each period with a line. It's the simplest way to see the overall trend at a glance, although it doesn't show what happened within each day." },
        { t: "chart", id: "line", caption: "An uptrend with its key levels: resistance, where the price tends to stall on the way up, and support, where it tends to bounce on the way down." },
        { t: "p", h: "Candlestick charts", html: "Each candle sums up a period with four figures: open, close, high and low. The body runs from the open to the close; the wicks mark the extremes." },
        { t: "chart", id: "candle", caption: "Green: it closed above its open (bullish). Red: it closed below (bearish). On the right, a sequence of candles forming an uptrend." },
        { t: "list", h: "Trends, support and resistance", items: [
          "<b>Uptrend:</b> higher highs and higher lows.",
          "<b>Downtrend:</b> lower highs and lower lows.",
          "<b>Sideways:</b> the price moves within a band, with no clear direction.",
          "<b>Support:</b> an area where there have historically been enough buyers to halt a fall.",
          "<b>Resistance:</b> an area where there have historically been enough sellers to halt a rise."
        ] },
        { t: "p", h: "Volume and moving averages", html: [
          "Below the price you'll usually see <b>volume</b>: how many units were traded. A move with high volume carries more “conviction” than one with little.",
          "The <b>moving average</b> (for example, over 50 or 200 sessions) is the average price over recent periods, drawn as a smooth line that reveals the underlying trend."
        ] },
        { t: "chart", id: "ma", caption: "The daily price fluctuates around its moving average. While the price stays above it, many analysts read it as a sign of strength." },
        { t: "balance", h: "Is looking at charts any use?", pros: [
          "It helps you choose when to buy or sell.",
          "Volume and trend add context that the price alone doesn't give."
        ], cons: [
          "No pattern guarantees what will happen next.",
          "Checking the chart every day can cause anxiety and impulsive decisions if your horizon is long."
        ] },
        { t: "deep", h: "Scales, timeframes and common traps", blocks: [
          { t: "p", html: "Use a <b>logarithmic scale</b> for long periods: a rise from €10 to €20 and one from €100 to €200 are both 100% and will look equally large. On a linear scale, the second would look huge." },
          { t: "p", html: "Change the <b>timeframe</b> (daily, weekly, monthly) before drawing conclusions: a fall that looks scary on the daily chart may be a simple correction on the weekly one." },
          { t: "p", html: "Watch out for <b>confirmation bias</b>: it's easy to “see” the pattern you already wanted to find. Always check it against the company's figures." }
        ] }
      ],
      quiz: [
        { q: "On a candlestick chart, what does the body of the candle represent?", o: ["The volume traded", "The distance between the open and the close of the period", "The company's name", "The broker's fee"], a: 1, e: "The body runs from the open to the close; the wicks mark the high and the low." },
        { q: "What is resistance?", o: ["A price level where rises have tended to stall", "A type of compulsory sell order", "A company's minimum dividend", "A bank fee"], a: 0, e: "It's an area where, historically, there have been enough sellers to hold the price back." },
        { q: "What does an uptrend show?", o: ["Lower highs and lower lows", "That the price always moves in a straight line", "Higher highs and higher lows", "That volume drops to zero"], a: 2, e: "An uptrend is defined by a succession of rising highs and lows." },
        { q: "What is a moving average used for?", o: ["To calculate taxes on dividends", "To smooth out the price and see the underlying trend more clearly", "To set a share's official price", "To replace fundamental analysis completely"], a: 1, e: "A moving average filters out daily noise and helps you see the general trend." },
        { q: "What does volume show on a chart?", o: ["The historical average price", "How many units were traded in that period", "The dividend paid that day", "The fee charged by the broker"], a: 1, e: "Volume shows how many units changed hands and gives “conviction” to a price move." },
        { q: "What characterises a sideways trend?", o: ["Constantly rising highs and lows", "The price moves within a band, with no clear direction", "The price can only fall", "It's the same as an uptrend"], a: 1, e: "In a sideways trend the price oscillates within a range, without a clear direction." },
        { q: "On a candlestick, what do the wicks represent?", o: ["The opening and closing prices", "The high and the low reached during the period", "The volume traded", "The asset's name"], a: 1, e: "The wicks mark the extremes the price touched during that period." },
        { q: "What distinguishes a bullish candle from a bearish one?", o: ["The colour is always the same", "In a bullish candle the close is above the open; in a bearish one, below", "A bullish candle has no wicks", "Bearish candles only appear on Mondays"], a: 1, e: "Bullish: it closed higher than it opened. Bearish: it closed lower." }
      ]
    },

    {
      title: "What you can buy",
      subtitle: "Shares, funds, bonds, commodities and more: what each one offers and what risks it carries.",
      minutes: 12,
      essentials: [
        "Each product combines risk, effort and potential gain in a different way.",
        "To start with, broad index funds and ETFs offer diversification and low costs.",
        "Commodities and crypto-assets can complement a portfolio, but they shouldn't be its foundation."
      ],
      blocks: [
        { t: "chart", id: "risk", caption: "An illustrative map of risk and expected return. The more potential return, the bigger the swings: a very profitable, risk-free investment doesn't exist." },
        { t: "balance", h: "Individual shares", intro: "Buying shares in a specific company is a bet on that company, not on the market as a whole.", pros: [
          "Greater potential gain if you pick the right company.",
          "Voting rights at the general meeting and possible dividends.",
          "No annual management fees."
        ], cons: [
          "Concentrated risk: one piece of bad news can sink the share price.",
          "It takes time to analyse and follow each company.",
          "It's easy to get carried away by emotions or fads."
        ] },
        { t: "balance", h: "Index funds and ETFs", intro: "They track a whole index: with a single purchase you own hundreds or thousands of companies. Communities such as Bogleheads and many regulators point to them as a good starting point.", pros: [
          "Instant diversification.",
          "Very low fees compared with active management.",
          "Little effort: no need to pick companies."
        ], cons: [
          "You'll never beat the market: you get its return, minus costs.",
          "They fall when the market falls, with no protection.",
          "The sheer variety of indices can be confusing at first."
        ] },
        { t: "balance", h: "Bonds and fixed income", intro: "You lend money to a government or a company in exchange for agreed interest.", pros: [
          "Smaller swings than shares.",
          "Predictable income.",
          "They cushion stock market falls in a mixed portfolio."
        ], cons: [
          "Lower expected return over the long term.",
          "Their price falls when interest rates rise.",
          "Risk of default if the issuer runs into trouble."
        ] },
        { t: "balance", h: "Commodities and natural resources", intro: "Gold, oil, gas or metals, usually through ETFs or through shares in companies in the sector (energy, mining, agriculture).", pros: [
          "They diversify away from shares and bonds.",
          "Gold has often acted as a safe haven in times of crisis.",
          "They can offer partial protection against inflation."
        ], cons: [
          "Highly sensitive to geopolitics, the weather and decisions by producing countries.",
          "They don't generate profits or dividends by themselves.",
          "Some products that track them have hidden costs."
        ] },
        { t: "p", h: "Listed real estate (REITs)", html: "These are companies that own and manage property (offices, logistics centres, rental housing) and pay out much of their profit as dividends. They give you exposure to real estate without buying a flat, but they suffer when interest rates rise." },
        { t: "p", h: "Crypto-assets, with great caution", html: "These are highly volatile digital assets with more limited investor protection than traditional products. If you decide to invest, keep it to a small part of your wealth and only use money you can afford to lose entirely." },
        { t: "table", h: "Quick comparison", head: ["Vehicle", "Typical risk", "Effort", "Suitable for"], rows: [
          ["Deposits and money market", "Very low", "Minimal", "Emergency fund and the short term"],
          ["Bonds", "Low to medium", "Low", "Stabilising a portfolio"],
          ["Global index fund or ETF", "Medium", "Low", "The core of almost any long-term portfolio"],
          ["Individual shares", "High", "High", "People who want to analyse companies"],
          ["Commodities", "High", "Medium", "A diversification add-on"],
          ["Crypto-assets", "Very high", "Medium", "A small slice, only if you understand it"]
        ] },
        { t: "deep", h: "What to check before buying a fund or ETF", blocks: [
          { t: "list", items: [
            "<b>Index tracked:</b> the global market, one country, one sector? The broader it is, the more diversified.",
            "<b>TER:</b> the annual cost. A 1% difference looks small, but over 30 years it's huge.",
            "<b>Replication method:</b> physical (it buys the securities in the index) or synthetic (it uses derivatives).",
            "<b>Currency and domicile:</b> these affect taxation and exchange rate risk.",
            "<b>Size and liquidity:</b> very small funds may close, and thinly traded ETFs have wide spreads."
          ] }
        ] }
      ],
      quiz: [
        { q: "What mainly characterises an index fund?", o: ["Active management that tries to beat the market every month", "It passively tracks an index with low fees", "It only invests in one company", "It guarantees a fixed return"], a: 1, e: "Index funds passively follow a benchmark index, at low cost." },
        { q: "Which risk is typical of commodities?", o: ["None: they're always a safe haven", "High sensitivity to geopolitics, the weather and decisions by producing countries", "They can only go up in price", "They're guaranteed by the government"], a: 1, e: "Their prices depend on many external factors that are hard to predict." },
        { q: "What are bonds or fixed income?", o: ["Shares in tech companies", "A loan to a government or a company in exchange for agreed interest", "A type of crypto-asset", "A fund that only invests in gold"], a: 1, e: "Buying a bond means lending money in exchange for interest set in advance." },
        { q: "What is recommended for beginners regarding crypto-assets?", o: ["Putting most of the portfolio into them", "Avoiding them always, without exception", "If you invest, keep it small and only use money you can afford to lose", "Taking out a loan to invest more"], a: 2, e: "Because of their high volatility and weaker regulatory protection, maximum caution and limited exposure are advisable." },
        { q: "What are REITs?", o: ["Bonds issued by central banks", "Companies that own and manage property and pay out much of their profit as dividends", "A type of crypto-asset", "Funds that only invest in physical gold"], a: 1, e: "They give exposure to listed real estate without having to buy property." },
        { q: "What is a typical advantage of individual shares over an index fund?", o: ["A guaranteed lower risk", "More potential gain if you pick the right company, plus voting rights and possible dividends", "Always lower fees", "Automatic diversification"], a: 1, e: "They concentrate the risk in one company, but also the potential gain if you get it right." },
        { q: "Why do many regulators and communities such as Bogleheads recommend index funds to beginners?", o: ["Because they guarantee you'll make money", "Because of their automatic diversification and low fees compared with active management", "Because they carry no risk", "Because they only invest in commodities"], a: 1, e: "They spread the risk across many companies and cost far less than active management." },
        { q: "What distinguishes a bond from a share?", o: ["A bond is a loan with agreed interest; a share is part-ownership of the company", "They're exactly the same", "A bond always returns more than a share", "A share guarantees the capital invested"], a: 0, e: "With a bond you lend money; with a share you become a part-owner." }
      ]
    },

    {
      title: "How trading works in practice",
      subtitle: "From opening an account to placing your first order, with the protections you're entitled to.",
      minutes: 12,
      essentials: [
        "Only use brokers registered with your country's regulator.",
        "Learn the order types: market, limit, stop-loss and take-profit.",
        "Automating regular contributions removes the temptation to guess the best moment."
      ],
      blocks: [
        { t: "steps", h: "Your first steps, in order", items: [
          "<b>Choose a regulated broker.</b> Check on the regulator's website (in Spain, the CNMV) that it's registered and authorised.",
          "<b>Open the account and verify your identity.</b> You'll be asked for documents: it's a legal requirement against money laundering.",
          "<b>Complete the appropriateness test.</b> The EU's MiFID rules require your knowledge and financial situation to be assessed in order to protect you.",
          "<b>Transfer the money</b> from your bank account to your broker account.",
          "<b>Find the product</b> by name or ISIN code and read its key information document.",
          "<b>Place the order</b>, choosing the type, the quantity and, if applicable, the limit price."
        ] },
        { t: "chart", id: "orders", caption: "Where orders sit relative to the current price: a limit buy waits for a lower price, a stop-loss caps losses and a take-profit locks in gains." },
        { t: "list", h: "Order types", items: [
          "<b>Market:</b> executes immediately at the best available price. It's fast, but you don't control the exact price.",
          "<b>Limit:</b> only executes at the price you set or better. You control the price, but it may never execute.",
          "<b>Stop-loss:</b> sells automatically if the price falls to the level you set, to limit losses.",
          "<b>Take-profit:</b> sells automatically when the target gain you set in advance is reached."
        ] },
        { t: "callout", html: "<b>Tax:</b> in Spain, switching money between investment funds isn't taxed at the time of the switch, unlike selling shares or ETFs. That's why many long-term investors there use index funds for their core portfolio. Other countries have tax-advantaged accounts (such as the ISA in the UK or the PEA in France): check the rules in your country of residence." },
        { t: "balance", h: "Regular contributions (DCA)", intro: "This means investing the same amount every month, whatever happens in the market.", pros: [
          "It removes the temptation to guess the best moment.",
          "You buy more units when the price is low and fewer when it's high.",
          "It creates an automatic, stress-free habit."
        ], cons: [
          "If the market rises steadily, investing everything at once would have returned a little more on average.",
          "Each purchase may carry a fee: check your broker's terms.",
          "It requires consistency over many years."
        ] },
        { t: "deep", h: "Hidden costs and investor protection", blocks: [
          { t: "list", items: [
            "<b>Currency conversion:</b> buying shares in dollars can cost 0.5% or more on each conversion.",
            "<b>Custody:</b> some brokers charge to hold your securities; others don't.",
            "<b>Compensation scheme:</b> if a broker goes bust, your securities are still yours. Cash and unrecoverable securities also have limited cover: the EU minimum is €20,000, and some countries go further (Spain's FOGAIN covers up to €100,000).",
            "<b>Securities lending:</b> some brokers lend your shares to third parties. Check the terms and who keeps the income.",
            "<b>Slippage:</b> the difference between the expected price and the price actually executed, common with market orders in illiquid assets."
          ] }
        ] }
      ],
      quiz: [
        { q: "What should you check before choosing a broker?", o: ["That it has lots of adverts on social media", "That it's registered with and supervised by the relevant regulator", "That it's the newest on the market", "That it doesn't ask for any personal details"], a: 1, e: "Only registered, supervised firms give you the legal protection you need to trade safely." },
        { q: "What is a stop-loss order?", o: ["An order that automatically increases your investment", "An automatic sale triggered if the price falls to the level you set", "An order that can only be used to buy", "A tax on losses"], a: 1, e: "A stop-loss limits losses by selling automatically at the price level you choose." },
        { q: "What tax advantage do switches between investment funds have in Spain?", o: ["They aren't taxed at the time of the switch", "They're tax-free forever", "They automatically reduce the income tax on your salary", "There's no such advantage"], a: 0, e: "Unlike selling shares or ETFs, switching between funds doesn't trigger immediate tax in Spain." },
        { q: "What are regular contributions (DCA)?", o: ["Investing all your capital at once", "Contributing the same amount at regular intervals, without trying to guess the perfect moment", "A type of tax on dividends", "Selling at the first sign of a fall"], a: 1, e: "Automating contributions smooths out your average purchase price over time." },
        { q: "What is a take-profit order?", o: ["An automatic sale when the target gain you set in advance is reached", "A type of tax on gains", "An order that can only be used to buy", "An account maintenance fee"], a: 0, e: "It closes the position automatically when the price reaches your target." },
        { q: "What do the MiFID rules assess when you open a broker account?", o: ["Your knowledge and financial situation, to protect you", "Only your name and address", "Nothing relevant: it's a mere formality", "Your political affiliation"], a: 0, e: "MiFID requires your knowledge and situation to be assessed before you trade, as a protective measure." },
        { q: "What kind of tax-advantaged accounts for long-term saving exist in some European countries?", o: ["None: they don't exist in Europe", "Accounts such as the ISA or the PEA, or pension plans", "Only crypto-asset accounts", "An ordinary current account"], a: 1, e: "Several countries offer tax-advantaged vehicles; it's worth finding out about the ones in yours." },
        { q: "How do limit and market orders differ in terms of guarantees?", o: ["A limit order guarantees the price but may not execute; a market order executes immediately but without exact price control", "Both always guarantee the same price", "A market order never executes", "A limit order is always faster"], a: 0, e: "A limit order prioritises price control; a market order prioritises immediate execution." }
      ]
    },

    {
      title: "Analysing a company",
      subtitle: "Key ratios, fundamental and technical analysis, and how to combine them with common sense.",
      minutes: 14,
      essentials: [
        "Fundamental analysis studies the business; technical analysis studies how the price behaves.",
        "Ratios such as P/E, ROE or debt help you compare, but should never be used on their own.",
        "No method predicts the future: each provides different information."
      ],
      blocks: [
        { t: "p", h: "Fundamental analysis", html: "It asks how much a company is really worth: how much it earns, how fast it grows, how much it owes and what advantages it has over its competitors. If the stock market price is below that estimated value, the share could be cheap." },
        { t: "cards", h: "The most widely used ratios", items: [
          { icon: "calc", h: "P/E", p: "Price ÷ earnings per share. It shows how many years of current earnings you're paying for the company." },
          { icon: "chart", h: "PEG", p: "P/E ÷ expected annual earnings growth. It lets you compare companies growing at different rates." },
          { icon: "target", h: "ROE", p: "Profit ÷ shareholders' equity. It measures how efficiently the company uses its shareholders' money." },
          { icon: "drop", h: "Dividend yield", p: "Annual dividend ÷ price. Careful: a very high figure can signal a coming cut." },
          { icon: "alert", h: "Net debt / EBITDA", p: "How many years of operating profit it would take to repay the debt. Above 3 or 4, take a closer look." }
        ] },
        { t: "p", h: "A practical example", html: "A company trades at €50 and earns €2.50 per share: its <b>P/E is 20</b>, meaning you pay for 20 years of current earnings. If its earnings grow 10% a year, its <b>PEG is 2</b> (20 ÷ 10). Another company with a P/E of 15 growing at 15% would have a PEG of 1: it's “cheaper” relative to its growth, although you'd need to check whether that growth is sustainable." },
        { t: "list", h: "Technical analysis", items: [
          "<b>Moving averages:</b> they show the underlying trend. A short average crossing above a long one is often read as a bullish signal.",
          "<b>RSI:</b> an indicator from 0 to 100 that helps spot whether an asset is overbought (above 70) or oversold (below 30) in the short term.",
          "<b>Patterns:</b> triangles, flags or double tops that some analysts use to anticipate moves, with no guarantee they'll play out."
        ] },
        { t: "balance", h: "Fundamental versus technical", neutral: true, prosLabel: "Fundamental analysis", consLabel: "Technical analysis", pros: [
          "Focuses on the real business and its long-term value.",
          "Useful for deciding what to buy and hold for years.",
          "Requires reading accounts and understanding the sector."
        ], cons: [
          "Focuses on price, volume and market behaviour.",
          "Useful for deciding when to buy or sell.",
          "Very exposed to noise and subjective interpretation."
        ] },
        { t: "callout", html: "The honest conclusion: <b>neither method guarantees results</b>. They provide different, complementary information, and most long-term investors give far more weight to fundamentals." },
        { t: "deep", h: "Reading a company's accounts", blocks: [
          { t: "list", items: [
            "<b>Income statement:</b> revenue, costs and profit for a period.",
            "<b>Balance sheet:</b> what the company owns (assets) and what it owes (liabilities) at a given moment.",
            "<b>Cash flow statement:</b> the money that actually comes in and goes out. Profit that doesn't turn into cash is a warning sign.",
            "<b>Competitive advantage:</b> brand, patents, low costs or network effects that protect the business from competitors.",
            "<b>Where to find it:</b> in the annual and quarterly reports in each company's investor relations section and in the regulator's filings."
          ] }
        ] }
      ],
      quiz: [
        { q: "What does a company's P/E ratio measure?", o: ["Its total debt in euros", "How many years of current earnings you're paying for the company", "Its number of employees", "The guaranteed dividend return"], a: 1, e: "The P/E ratio relates the share price to earnings per share." },
        { q: "What does fundamental analysis mainly assess?", o: ["Only the price movement on charts", "The company's real business: profits, debt and growth", "Only daily volume", "The opinion of a single analyst"], a: 1, e: "It studies the real health and prospects of the business, not just the price." },
        { q: "What is the RSI used for in technical analysis?", o: ["To calculate taxes", "To gauge whether an asset is overbought or oversold in the short term", "To set the price of a stock market listing", "To replace financial statements"], a: 1, e: "It's a momentum indicator that helps spot possible excesses in buying or selling." },
        { q: "What honest conclusion can be drawn about technical versus fundamental analysis?", o: ["Technical analysis predicts the future with complete certainty", "Fundamental analysis is always useless", "Neither guarantees results: they provide different, complementary information", "Only fundamental analysis works in the short term"], a: 2, e: "Both offer different perspectives, but neither removes market uncertainty." },
        { q: "What does ROE measure?", o: ["How much profit the company generates with its shareholders' capital", "The share price", "The number of shares in circulation", "Total debt"], a: 0, e: "It relates net profit to shareholders' equity: it measures efficiency." },
        { q: "What is the PEG ratio used for?", o: ["To measure the dividend paid", "To compare companies growing at different rates by relating P/E to expected growth", "To calculate taxes", "To set the price of a stock market listing"], a: 1, e: "It divides the P/E by the expected growth in earnings." },
        { q: "What are the price patterns of technical analysis (triangles, flags, double tops…)?", o: ["Mathematical guarantees of what will happen", "Shapes some analysts use to anticipate moves, with no guarantee they'll play out", "A type of buy order", "A tax on capital gains"], a: 1, e: "They're supporting tools; no pattern guarantees the future price move." },
        { q: "What does the debt / EBITDA ratio measure?", o: ["How much debt the company has relative to what its business generates", "The share price", "The number of shareholders", "The dividend yield"], a: 0, e: "It helps judge whether the level of debt is reasonable relative to the ability to generate profit." }
      ]
    },

    {
      title: "Strategy and risk management",
      subtitle: "How to build a sensible portfolio and protect it from the most expensive mistakes.",
      minutes: 14,
      essentials: [
        "Diversify across asset types, sectors and countries.",
        "Write down your target allocation and rebalance regularly.",
        "The retail investor's worst enemies are usually fees and their own emotions."
      ],
      blocks: [
        { t: "chart", id: "donut", caption: "An illustrative example of a diversified portfolio for a moderate long-term profile. It isn't a recommendation: the right allocation depends on your profile." },
        { t: "list", h: "Common strategies", items: [
          "<b>Passive indexing:</b> buying the whole market with index funds and holding for decades.",
          "<b>Value investing:</b> looking for companies trading below their estimated value according to fundamental analysis.",
          "<b>Growth:</b> betting on companies growing much faster than average, accepting higher valuations.",
          "<b>Dividends:</b> favouring companies with stable or rising dividends to generate recurring income."
        ] },
        { t: "p", h: "Position sizing and rebalancing", html: [
          "<b>Position size</b> is how much of your total capital you put into a single idea. A common rule among retail investors is not to put more than 5-10% of the portfolio into any one share.",
          "<b>Rebalancing</b> means returning to your target percentages every so often (for example, once a year): you sell part of what has risen most and buy what has lagged behind. It forces you, in a disciplined way, to buy low and sell high."
        ] },
        { t: "list", h: "The five most expensive mistakes", items: [
          "<b>FOMO:</b> the fear of missing out, which leads you to buy because of hype or social pressure.",
          "<b>Leverage you don't understand:</b> it multiplies gains, but also losses, even beyond what you invested.",
          "<b>Ignoring fees:</b> an extra 1-2% a year can mean tens of thousands of euros less over 20 or 30 years.",
          "<b>Concentrating too much:</b> betting almost everything on one company, sector or country.",
          "<b>Trying to time the market:</b> jumping in and out on the news usually ends in buying high and selling low."
        ] },
        { t: "quote", text: "The stock market is a device for transferring money from the impatient to the patient." },
        { t: "balance", h: "Long term versus trading", prosLabel: "For the long term", consLabel: "What the evidence says about trading", pros: [
          "Lower fees and taxes.",
          "Less stress and fewer impulsive decisions.",
          "It gets the most out of compound interest."
        ], cons: [
          "On average, and after fees, retail investors who trade frequently do worse than the market itself.",
          "It demands a lot of time, training and emotional control.",
          "With leverage, one mistake can cost more than the capital invested."
        ] },
        { t: "deep", h: "Measuring risk like a professional", blocks: [
          { t: "list", items: [
            "<b>Maximum drawdown:</b> the largest fall from a peak to a trough. Ask yourself whether you could stomach your portfolio's worst historical fall.",
            "<b>Volatility (standard deviation):</b> how far returns stray from their average. More volatility means more uncertainty.",
            "<b>Sharpe ratio:</b> the extra return earned per unit of risk taken. It lets you compare strategies with different levels of risk.",
            "<b>Correlation:</b> how two assets move relative to each other. True diversification means combining assets with low correlation.",
            "<b>Sequence risk:</b> suffering a big fall just as you start withdrawing money hurts far more than suffering it at the start."
          ] }
        ] }
      ],
      quiz: [
        { q: "What is portfolio rebalancing?", o: ["Selling the whole portfolio once a year", "Periodically returning to the target percentage for each asset type", "A type of urgent buy order", "Always increasing risk over time"], a: 1, e: "It brings the portfolio back to its target mix by selling what has risen most and buying what has lagged." },
        { q: "What is FOMO in investing?", o: ["A technical trend indicator", "The fear of missing out, which leads you to buy because of hype or social pressure", "A type of regulated fund", "A bank fee"], a: 1, e: "FOMO pushes you into impulsive decisions based on noise rather than your own analysis." },
        { q: "What is the risk of leverage if you don't fully understand it?", o: ["None: it always improves results", "It can multiply both gains and losses, even beyond the capital invested", "It only affects taxes", "It removes portfolio volatility"], a: 1, e: "Leverage amplifies results in both directions." },
        { q: "What does research usually show about active trading by retail investors?", o: ["That they almost always beat the market easily", "That, on average and after fees, they tend to do worse than the market", "That there's no difference at all", "That it only works with cryptocurrencies"], a: 1, e: "Empirical evidence suggests that frequent trading tends to hurt the average retail investor's return." },
        { q: "What is position size?", o: ["The number of brokers you use", "How much of your total capital you put into a single investment idea", "The size of the company you invest in", "A type of stock market order"], a: 1, e: "A common rule is not to put more than 5-10% of the portfolio into any single share." },
        { q: "What characterises value investing?", o: ["Buying only crypto-assets", "Looking for companies trading below their estimated value according to fundamental analysis", "Always selling in less than a day", "Ignoring fundamentals completely"], a: 1, e: "It looks for companies the market undervalues relative to their estimated worth." },
        { q: "What does dividend investing prioritise?", o: ["Companies with stable or rising dividends that generate recurring income", "Only loss-making companies", "Commodities exclusively", "Highly volatile crypto-assets"], a: 0, e: "It seeks recurring income through sustainable dividends." },
        { q: "Why is ignoring fees an expensive mistake in the long run?", o: ["Fees never affect the final result", "An extra 1-2% a year can mean tens of thousands of euros less over 20 or 30 years because of compounding", "Fees only exist on commodities", "They only matter if you invest less than €100"], a: 1, e: "Small cost differences are hugely amplified over time." }
      ]
    },

    {
      title: "Macroeconomics, cycles and psychology",
      subtitle: "Why markets move and how to stop your emotions from deciding for you.",
      minutes: 15,
      essentials: [
        "Interest rates, inflation and economic growth move the markets.",
        "Markets go through cycles: rises are followed by falls, and vice versa.",
        "Knowing your psychological biases is as important as knowing the products."
      ],
      blocks: [
        { t: "p", h: "Central banks and interest rates", html: "The European Central Bank or the US Federal Reserve raise interest rates to curb inflation and cut them to stimulate the economy. Higher rates make borrowing more expensive, usually push down the price of bonds already issued and can cool the valuations of growth companies." },
        { t: "cards", h: "Three indicators worth following", items: [
          { icon: "percent", h: "Inflation", p: "If it rises sharply, central banks raise rates. It erodes the value of cash and fixed-rate bonds." },
          { icon: "factory", h: "Growth (GDP)", p: "A growing economy boosts company profits; a recession shrinks them." },
          { icon: "currency", h: "Currencies", p: "If you invest in another currency, its movement against yours adds to or subtracts from your return." }
        ] },
        { t: "chart", id: "cycle", caption: "The phases of the economic cycle. Each phase tends to favour different sectors, but nobody can predict precisely when it will turn." },
        { t: "p", h: "Market cycles", html: "Markets alternate between rising and falling periods. A <b>correction</b> is when an index falls more than 10% from its peak, and a <b>bear market</b> is when the fall exceeds 20%. Historically, diversified markets have recovered from all their falls, although sometimes it has taken years." },
        { t: "chart", id: "emotion", caption: "The investor's emotional cycle: euphoria tends to coincide with maximum risk, and panic with the greatest opportunity. Recognising which phase your emotions are in protects you from buying high and selling low." },
        { t: "list", h: "Biases that will cost you money", items: [
          "<b>Loss aversion:</b> losing €100 hurts more than gaining it pleases, and that pushes you to sell in a panic.",
          "<b>Overconfidence:</b> after a few good calls, believing you can predict the market.",
          "<b>Herd behaviour:</b> buying because everyone else is buying.",
          "<b>Anchoring:</b> clinging to the price you paid, as if the market remembered it.",
          "<b>Recency bias:</b> assuming that what has happened in recent months will keep happening."
        ] },
        { t: "balance", h: "Should you follow the economic news?", pros: [
          "You understand why markets move, so falls don't catch you by surprise.",
          "It helps you spot risks in your portfolio (currency, interest rates, sectors)."
        ], cons: [
          "Too much news encourages you to trade more than you should.",
          "Headlines seek attention: they amplify both fear and euphoria."
        ] },
        { t: "callout", html: "For long-term investors, the best defence against emotions is a <b>written plan</b>: what you buy, in what proportion, how often you contribute and when you rebalance. Decide when you're calm; follow the plan when you're not." },
        { t: "deep", h: "Tax and advanced planning", blocks: [
          { t: "list", items: [
            "<b>Offsetting losses:</b> in many countries, capital losses can be deducted from gains in the same year or later years (in Spain, for up to four years).",
            "<b>The two-month rule:</b> in Spain, if you sell listed securities at a loss and buy back equivalent securities in the two months before or after, you can't claim that loss until you sell the ones you bought back. Other countries have similar rules, such as the 30-day rule in the UK.",
            "<b>Double taxation of dividends:</b> foreign dividends may be taxed both at source and at home; part of it can often be reclaimed.",
            "<b>Tax-advantaged vehicles:</b> pension plans, the ISA in the UK, the PEA in France… every country has its own.",
            "Tax rules change: always check with your country's tax authority or a tax adviser."
          ] }
        ] }
      ],
      quiz: [
        { q: "What do central banks usually do when inflation is very high?", o: ["Cut interest rates", "Raise interest rates", "Buy shares in every company", "Close the stock exchange"], a: 1, e: "Raising rates makes borrowing more expensive and cools demand, which helps curb inflation." },
        { q: "What effect does a rate rise usually have on bonds already issued?", o: ["Their price tends to rise", "Their price tends to fall", "It doesn't affect them", "They turn into shares"], a: 1, e: "New bonds pay more, so older ones with a lower interest rate become less attractive and their price falls." },
        { q: "What is a market correction?", o: ["A fall of more than 10% from the peak", "A broker's mistake", "A 50% rise", "A change in the law"], a: 0, e: "It's a fall of more than 10%; if it exceeds 20%, it's called a bear market." },
        { q: "From what fall from the peak do people usually speak of a bear market?", o: ["5%", "10%", "20%", "60%"], a: 2, e: "The usual threshold is a fall of more than 20% from the peak." },
        { q: "What is loss aversion?", o: ["Never investing", "Losing an amount hurts more than gaining the same amount pleases", "A type of insurance", "A technical indicator"], a: 1, e: "This bias pushes you to sell in a panic or never to sell losing investments." },
        { q: "In the investor's emotional cycle, which phase usually coincides with maximum risk?", o: ["Panic", "Despondency", "Euphoria", "Hope"], a: 2, e: "When everyone is euphoric, prices tend to be higher and so is the risk." },
        { q: "How does currency affect an investment in another currency?", o: ["It never has any effect", "Its movement against your currency adds to or subtracts from the return", "It only affects bonds", "It always improves the return"], a: 1, e: "If the dollar falls against the euro, a dollar investment is worth less in euros, even if it hasn't moved." },
        { q: "What is the best defence against emotional decisions?", o: ["Checking the price every hour", "Following influencers", "A written investment plan decided when you're calm", "Trading with leverage"], a: 2, e: "A written plan reminds you what you had decided when emotions run high." }
      ]
    }
  ]
};
