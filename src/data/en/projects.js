const projects = {
  projects: [
    {
      title: "Diamond Base",
      description: "Booking site for furnished stays in Riyadh, in Arabic and English, with live availability, booking holds, OTP sign-in, online payment and an admin dashboard.",
      image: "/images/projects/diamond-base.jpg",
      link: "https://diamondbase.sa",
      tech: "React 19,Vite,Hono,PostgreSQL,MinIO,Moyasar,Playwright",
      period: "Oct 2026",
      story: "I rebuilt a static site as a React 19 app with a Hono API. Guests pick dates against live availability, the dates are held while they pay, and the booking is confirmed only after the server re-reads the payment from Moyasar and checks the booking id, amount and currency. Card fields stay inside Moyasar's iframe, so card data never reaches the app. OTP codes go out by SMS, with an email fallback, a 10-minute expiry and a limit of five attempts.",
      future_note: "Staff manage units, images, prices, bookings and payment settings from the admin dashboard, without a code change."
    },
    {
      title: "ajq",
      description: "A jobs-queue daemon for AI coding agents. Agents submit builds and tests instead of running them, and the daemon runs them under concurrency, memory and CPU caps.",
      image: "/images/projects/ajq.png",
      link: "https://github.com/assawalhy/agents-jobs-queue",
      tech: "Python,systemd,launchd,cgroups",
      period: "Oct 2026",
      story: "Parallel agents start builds, tests and typechecks at the same time, and the machine runs out of memory. ajq puts one daemon in front of them: a command is queued and gets a job id, the daemon starts it when a slot and enough RAM are free, and the agent reads the output when it finishes. It uses the Python standard library only, starts at boot through systemd or launchd, and ships a skill and hooks for Claude Code, OpenCode, Codex, Kiro and Pi.",
      future_note: "It is covered by 328 tests and runs on Linux and macOS."
    },
    {
      title: "Arabi.js",
      description: "JavaScript Arabization based on Babel.js parser. Write JavaScript code using Arabic keywords and identifiers.",
      image: "/images/projects/arabi-js.png",
      link: "https://github.com/arabi-js/arabi",
      tech: "JavaScript,PEG.js,Babel",
      period: "Oct 10, 2020 to May 13, 2021",
      story: "Arabi.js started as a question about language, tooling, and who gets to feel at home while programming. I used Babel's parser ecosystem to translate Arabic keywords and identifiers into valid JavaScript, turning a language experiment into a working developer tool.",
      future_note: "The project is quiet publicly for now, but there are pending development plans. Expect stronger language support and a more polished writing experience when the next update lands."
    },
    {
      title: "Rasm",
      description: "Graphing calculator to plot math functions, draw geometric shapes, and animate them with a powerful expression language.",
      image: "/images/projects/rasm.png",
      link: "https://github.com/assawalhy/rasm",
      tech: "JavaScript,HTML,Sass,PEG.js,Webpack",
      period: "Feb 11, 2020 to Jan 2, 2021",
      story: "Rasm was my early attempt to make mathematical ideas visible and programmable. It combines function plotting, geometric drawing, animation, and a custom expression language, which made it a serious exercise in parsing, rendering, and interface design.",
      future_note: "There are still pending development plans for Rasm. The next chapter is meant to make the expression system and visual output feel much more capable."
    },
    {
      title: "Da7ee7 Bots",
      description: "Dashboard built with Django to automate sending messages to multiple Telegram bots for student services, with the scheduled sends automated in Make.com.",
      image: "/images/projects/da7ee7.jpg",
      link: "https://github.com/assawalhy/da7ee7-bot-dashboard",
      tech: "Python,Django,JavaScript,Bootstrap,Make.com"
    },
    {
      title: "TDCO Projects Map",
      description: "Bilingual (EN/AR) interactive map of TDCO's construction projects across all 13 Saudi regions, with region, city, and project navigation, POI layers, search, and shareable deep links.",
      image: "/images/projects/tdco-interactive-map.png",
      link: "https://tdco-interactive-map.pages.dev/",
      tech: "Leaflet,MapLibre GL,Vanilla JS,Vite",
      period: "Aug 2026",
      story: "For TDCO (Technical Dimensions), I built an interactive map that turns a long list of construction project locations into a three-level experience: an overview of the kingdom, a region view with markers and a sidebar, and a project-focused detail state. A bilingual EN/AR layer (with full RTL support) and shareable URL state let users jump straight to a region or a single project. I handled a data pipeline sourcing points of interest from OpenStreetMap, plus search and POI toggles over a custom dark theme.",
      future_note: "The map data is regenerated from a documented pipeline, so adding or correcting project locations stays quick and reliable as TDCO's portfolio grows."
    }
  ]
};
export default projects;
