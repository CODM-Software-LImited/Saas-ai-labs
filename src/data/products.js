// Single source of truth for the Products section.
// Edit names / copy here - /products and /products/:slug render from this list.
import {
  FiBarChart2,
  FiBookOpen,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGitBranch,
  FiLock,
  FiMessageSquare,
  FiPieChart,
  FiRefreshCw,
  FiShield,
  FiUserCheck,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/71a37cc7c044476886855ad82dec046b@Codmsoftware.co.uk/meetingtype/34H18u9wAEmmNJJ8gBVpmg2?anonymous&ismsaljsauthenabled&ep=mCardFromTile";

const products = [
  /* ------------------------------------------------------------------ */
  /* FUTURA - AI Chatbot for Education                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "futura",
    name: "FUTURA",
    icon: FiCpu,
    category: "Education · AI Chatbot",
    tagline: "AI Chatbot for Education",
    short:
      "An AI chatbot for education that answers students' questions and helps staff understand their student numbers. Students get instant answers about courses, entry requirements, fees and how to apply. Staff simply type a question in everyday English and get the facts and figures they need, with no technical skills required.",
    intro:
      "FUTURA works for two groups of people from one simple chat window. Students ask about courses, entry requirements, fees and how to apply, and get clear answers straight away. Staff ask questions about their applicants and enrolments, such as totals, top countries or trends over time, and get exact answers in seconds without waiting for a report or building a spreadsheet.",
    audience: "Built for schools, colleges, universities and every kind of education provider",
    // Where FUTURA is used. Rendered as a chip row on the product card and detail hero.
    sectors: [
      "Universities",
      "Colleges",
      "Schools",
      "Academies",
      "Tuition centres",
      "Coaching institutes",
      "Online learning platforms",
      "Training providers",
    ],
    highlights: [
      "Students get instant, accurate answers any time of day",
      "Staff get facts and figures by simply asking in plain English",
      "Every number comes straight from your own records, so it is always correct",
    ],
    techStrip: ["Works with your existing records", "Answers from your own documents", "Secure logins for staff and students", "Answers appear instantly"],
    heroStats: [
      { value: 112, suffix: "k+", label: "Student records staff can ask questions about" },
      { value: 39, suffix: "k+", label: "Pieces of your own information used to answer students" },
      { value: 100, suffix: "%", label: "Of figures taken directly from your records, never guessed" },
    ],
    video: {
      src: "/videos/futura-demo.mp4",
      poster: "/videos/futura-demo-poster.jpg",
      duration: "1:55",
      teaser: "A student asking a question, then a staff member checking the numbers",
      caption:
        "A short walkthrough of FUTURA: a prospective student asking about courses, then a member of staff asking questions about applicants in everyday English.",
    },
    // Hero visual: leave heroImage empty to use the built-in SVG illustration,
    // or point it at an image in /public (e.g. "/images/futura-hero.png").
    heroImage: "",
    heroImageAlt: "",
    features: [
      {
        icon: FiDatabase,
        title: "Ask questions about your students",
        copy: "Totals, top lists, breakdowns, percentages and year-on-year trends across all your applicants. Ask in everyday language and get a clear, exact table back.",
      },
      {
        icon: FiBookOpen,
        title: "Answers based on your own information",
        copy: "Questions about courses, entry requirements, fees and how to apply are answered from your own documents, such as your prospectus and website pages, so students always get your official answer.",
      },
      {
        icon: FiGitBranch,
        title: "One chat for every kind of question",
        copy: "FUTURA works out what each question is about and finds the answer in the right place: your records for numbers, your documents for information, or both. Simple questions such as contact details are answered straight away.",
      },
      {
        icon: FiShield,
        title: "Numbers you can trust",
        copy: "The AI never guesses or makes up a figure. Every count and percentage is taken directly from your records, so what you see is always accurate.",
      },
      {
        icon: FiRefreshCw,
        title: "Ask follow-up questions naturally",
        copy: "Ask for a total, then ask to see the list, then narrow it to one year, then ask for it as a percentage. FUTURA remembers what you asked before, so each question builds on the last.",
      },
      {
        icon: FiPieChart,
        title: "Live overview dashboard",
        copy: "Staff see the key figures at a glance: enrolment trends, top countries, popular courses, study levels and application outcomes, all kept up to date automatically.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Ask a question in plain English",
        copy: "A student or staff member types a question into the chat, just like sending a message. FUTURA works out whether it needs your records, your documents, or both.",
      },
      {
        number: "02",
        title: "FUTURA finds the answer safely",
        copy: "For questions about numbers, FUTURA looks them up directly in your records, only ever reading the information it is allowed to see. For information questions, it finds the right passage in your documents.",
      },
      {
        number: "03",
        title: "The answer appears",
        copy: "The answer appears on screen as it is written, followed by suggested follow-up questions. Large results can be downloaded as an Excel file, and every conversation is saved for later.",
      },
    ],
    outcomes: [
      "A familiar chat experience, with every conversation saved for each person.",
      "Helpful follow-up suggestions after every answer.",
      "Download results as an Excel file with clear, readable headings.",
      "Thumbs up or down on any answer, with comments, so quality keeps improving.",
      "A library of ready-made questions, plus the ability to save your own.",
      "Light and dark modes, and works just as well on phones and tablets.",
    ],
    useCases: [
      {
        icon: FiUsers,
        title: "Prospective students",
        copy: "Answers on courses, entry requirements, fees, deadlines and how to apply, any time of day, based on your official information.",
      },
      {
        icon: FiUserCheck,
        title: "Admissions and admin staff",
        copy: "Ask a question such as 'How many applicants from Asian countries this year?' and get an exact answer in seconds. No reports to request, no spreadsheets to build.",
      },
      {
        icon: FiBarChart2,
        title: "Leadership teams",
        copy: "A live overview of enrolment trends, international numbers, top markets and application outcomes, ready whenever you need it.",
      },
    ],
    security: [
      {
        icon: FiLock,
        title: "Secure sign-in",
        copy: "Staff and students sign in with your organisation's existing Microsoft accounts, or with an email login. Every session is checked and expires automatically.",
      },
      {
        icon: FiShield,
        title: "The AI can only read, never change",
        copy: "FUTURA can only look at the information you have approved. It cannot edit, delete or add records, and it cannot be tricked into showing data it should not.",
      },
      {
        icon: FiUserCheck,
        title: "The right access for each person",
        copy: "Staff see the figures and dashboard; students see course information and their own application only. These rules are enforced behind the scenes, not just hidden on screen.",
      },
      {
        icon: FiMessageSquare,
        title: "Stays on topic",
        copy: "Off-topic requests are politely declined, answers are limited to your own information, and all conversations and downloads are stored securely against the signed-in user.",
      },
    ],
    specs: [
      { label: "Users", value: "Prospective students (knowledge assistant) and admissions administrators (analytics + knowledge), role-based" },
      { label: "Data engines", value: "PostgreSQL for applicant records and analytics; vector store with hybrid dense + BM25 retrieval for documents" },
      { label: "AI", value: "LLM reasoning query planner over a safety whitelist; grounded retrieval-augmented generation; works with hosted or on-premise models via an OpenAI-compatible API" },
      { label: "Interface", value: "Streaming chat web app, dynamic suggestions, prompt library, Excel exports, feedback capture, light/dark theme, admin statistics dashboard" },
      { label: "Authentication", value: "Microsoft Azure AD OAuth single sign-on, email login, short-lived session tokens, role-based access control" },
      { label: "Security", value: "TLS edge, server-side authorisation, parameterised queries, result limits, topic guarding, server-side persistence of chats and exports" },
      { label: "Deployment", value: "Hosted and managed by CODM, or deployed on your own infrastructure with your data and models" },
    ],
    faqs: [
      {
        number: 1,
        title: "Can the AI make up numbers about our students?",
        content:
          "No. FUTURA never lets the AI count or calculate. It only works out what you are asking; every total, percentage and ranking is taken directly from your records and shown exactly as it is.",
      },
      {
        number: 2,
        title: "Do staff need any technical skills?",
        content:
          "No. Staff just type a question in everyday English, for example 'top 10 countries for postgraduate applicants this year', and FUTURA finds the answer for them.",
      },
      {
        number: 3,
        title: "Where do the answers for students come from?",
        content:
          "From your own documents. Your course pages, entry requirements, fee lists and application guides are loaded into FUTURA, and it answers only from that information, quoting details such as email addresses, phone numbers and links exactly.",
      },
      {
        number: 4,
        title: "How do people sign in?",
        content:
          "With your organisation's existing Microsoft accounts, or with an email login. Staff and students each see only what they are meant to.",
      },
      {
        number: 5,
        title: "Can it run on our own systems?",
        content:
          "Yes. FUTURA can be hosted and looked after by CODM, or set up on your own systems so your data never leaves your organisation.",
      },
      {
        number: 6,
        title: "Is FUTURA only for universities?",
        content:
          "No. It was built for university admissions, but the same chatbot works anywhere students enquire and staff manage applications: colleges, schools, academies, tuition centres, coaching institutes, online learning platforms and training providers. The student side answers from your prospectus, course pages and fee documents; the staff side answers from your enrolment or admissions records.",
      },
      {
        number: 7,
        title: "Does it suit a small tuition centre or school as well as a large university?",
        content:
          "Yes. FUTURA scales in both directions. A tuition centre or school can start with a handful of course documents and a simple enrolment list, while a university can connect its full applicant records for over 100,000 people. The setup, sign-in and reporting stay the same; only the information you connect changes.",
      },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export default products;
