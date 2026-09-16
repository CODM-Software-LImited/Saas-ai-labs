// Content for the SaaS AI Labs home page, sourced from the
// "Government AI Capability Statement" deck, written in plain everyday
// language. Edit copy here.
import {
  FiActivity,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiEye,
  FiFileText,
  FiGitBranch,
  FiGlobe,
  FiHeart,
  FiInbox,
  FiLayers,
  FiLock,
  FiMessageSquare,
  FiSearch,
  FiSettings,
  FiShield,
  FiSun,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export const hero = {
  eyebrow: "AI for Government",
  title: "AI Engineering for Government & Public Services",
  sub: "We build safe, reliable AI tools that help government teams work faster and serve people better, backed by 14+ years of building software for large organisations.",
  tags: ["AI helpers", "AI that writes and answers", "Less paperwork", "Safe and secure", "Built for government"],
  parent: "A company of CODM Software Limited, UK",
  panel: {
    years: 14,
    yearsLabel: "years of building software for big organisations",
    pillars: [
      { label: "What we want", copy: "To help India use AI in practical, safe ways that make a real difference." },
      { label: "What makes us different", copy: "We know AI, and we know how to build and run software in large organisations. We bring both." },
      { label: "Our promise", copy: "We don't just deliver software. We train your people so your team can run it themselves." },
    ],
    footer: ["UK", "India", "Global"],
  },
  chips: [
    { icon: FiShield, text: "Safe and responsible AI" },
    { icon: FiBookOpen, text: "We train your team too" },
  ],
};

export const stats = [
  { value: 14, suffix: "+", label: "Years of experience building software" },
  { value: 6, suffix: "", label: "Building blocks, from your information to safety rules" },
  { value: 10, suffix: "+", label: "Ready-to-try ideas for government teams" },
  { value: 4, suffix: "", label: "Training programmes for leaders, staff and IT" },
];

export const overview = {
  eyebrow: "Who we are",
  title: "A new AI company with years of real-world experience behind it",
  body: [
    "SaaS AI Labs helps organisations use AI to solve everyday problems: answering people's questions faster, cutting paperwork, finding information in large piles of documents, and automating repetitive work.",
    "The company is new, but our team is not. Our leaders and engineers have spent 14+ years building software, online systems and customer databases for large organisations, and connecting them so they work together.",
  ],
  contributeTitle: "How we can help",
  contribute: [
    { icon: FiCpu, title: "AI apps for your department", copy: "Assistants and helper tools built for your team's work, and for the public who use your services." },
    { icon: FiDatabase, title: "Connecting AI to what you already have", copy: "We link AI to the systems, records and documents you already use, safely." },
    { icon: FiGitBranch, title: "Building the AI properly", copy: "AI software that is solid and ready for real everyday use, not just a demo." },
    { icon: FiTrendingUp, title: "Modernising how you work", copy: "Improving processes and older systems around results you can measure." },
    { icon: FiBookOpen, title: "Training your people", copy: "Practical, hands-on programmes for leaders, staff and IT teams." },
    { icon: FiUsers, title: "Working together", copy: "Quick trials, innovation labs and joint projects with public bodies." },
  ],
};

export const vision = {
  eyebrow: "Our vision for India",
  title: "AI that makes public services faster, fairer and easier to use",
  sub: "AI that improves public services, supports government staff and helps every citizen get what they need.",
  items: [
    { icon: FiUsers, title: "Citizen services", copy: "Quicker, simpler ways for people to get information and access services." },
    { icon: FiUserCheck, title: "Government staff", copy: "AI helpers that take care of repetitive work so officers can focus on people." },
    { icon: FiBookOpen, title: "Knowledge", copy: "Turn thousands of documents into answers you can search and trust." },
    { icon: FiZap, title: "Automation", copy: "Cut manual work in high-volume, everyday processes." },
    { icon: FiGlobe, title: "Inclusion", copy: "AI that works in local languages, by voice, and for people with disabilities." },
    { icon: FiTrendingUp, title: "Skills", copy: "Practical AI skills built inside government teams, not just bought in." },
  ],
};

export const stack = {
  eyebrow: "How it fits together",
  title: "Six building blocks, from your data to results you can measure",
  layers: [
    { number: "01", title: "Data & connections", copy: "Your systems, databases and documents, connected safely so AI can use them." },
    { number: "02", title: "AI models", copy: "The AI 'brains', large and small language models, chosen to fit the job." },
    { number: "03", title: "Answers from your documents", copy: "AI that finds and quotes your own approved documents instead of guessing (also called RAG)." },
    { number: "04", title: "AI assistants", copy: "Helpers that can complete tasks step by step and hand over to a person when needed." },
    { number: "05", title: "Automation", copy: "Reading, sorting and routing forms, documents and cases automatically." },
    { number: "06", title: "Safety & control", copy: "Who can access what, a record of everything the AI does, and people always in charge." },
  ],
};

export const productsSection = {
  eyebrow: "Our products",
  title: "Ready-made products, built with the same care",
  sub: "Tools you can start using today: answers from your documents, plain-English questions to your data, and results you can trust.",
};

export const useCases = {
  eyebrow: "What AI can do for you",
  title: "Practical ways AI can help citizens, staff and public services",
  groups: [
    { label: "For citizens and daily administration", count: 6 },
    { label: "For specific sectors", count: 4 },
  ],
  items: [
    { icon: FiMessageSquare, title: "Help for citizens", copy: "AI assistants that answer questions about schemes, services, applications and common queries, any time of day." },
    { icon: FiUserCheck, title: "Helper for staff", copy: "A secure assistant that helps officers write, research and summarise documents." },
    { icon: FiSearch, title: "Find the right information", copy: "Ask a question and get the answer from policies, circulars, manuals and approved documents." },
    { icon: FiFileText, title: "Smart paperwork", copy: "Read forms and supporting documents automatically, check them and send them to the right place." },
    { icon: FiInbox, title: "Complaints and grievances", copy: "Sort complaints, summarise each case and suggest who should handle it." },
    { icon: FiBriefcase, title: "Policy and planning", copy: "Research, compare documents, prepare briefings and pull out the evidence." },
    { icon: FiHeart, title: "Healthcare", copy: "Understanding medical paperwork, helping patients with questions, and smoother workflows." },
    { icon: FiBookOpen, title: "Education", copy: "Student support, answers about the institution, and less admin for staff." },
    { icon: FiSun, title: "Agriculture", copy: "Advice for farmers, finding the right schemes, and help in local languages." },
    { icon: FiSettings, title: "Public sector companies", copy: "Customer service, field teams, reports and automating everyday processes." },
  ],
};

export const responsible = {
  eyebrow: "Safe and responsible AI",
  title: "Government AI must be secure, transparent and always under human control",
  items: [
    { icon: FiLock, title: "Secure from the start", copy: "Secure sign-in, the right access for each person, and safe connections to your systems." },
    { icon: FiUserCheck, title: "People stay in charge", copy: "AI helps officials do their work. Decisions are always made by an authorised person." },
    { icon: FiCheckCircle, title: "Answers you can trust", copy: "The AI answers from approved sources, so it doesn't make things up." },
    { icon: FiEye, title: "A record of everything", copy: "Every AI action is logged and can be checked later." },
    { icon: FiActivity, title: "Tested and controlled", copy: "We test the AI, check the risks and roll it out carefully." },
    { icon: FiShield, title: "Privacy protected", copy: "We only use the data that's needed, label it properly and keep it only as long as we should." },
  ],
};

export const delivery = {
  eyebrow: "How we work with you",
  title: "From a small trial to a solution that works at national scale",
  sub: "A step-by-step approach that keeps risk low and results clear.",
  steps: [
    { number: "1", title: "Discover", copy: "Find the problems where AI can help most, and the people involved." },
    { number: "2", title: "Assess", copy: "Check your information, security, how it fits with your systems and the value for the public." },
    { number: "3", title: "Prototype", copy: "Build a small working version with clear goals for success." },
    { number: "4", title: "Pilot", copy: "Try it with real users, with safety checks and feedback along the way." },
    { number: "5", title: "Scale", copy: "Roll it out into your real systems and everyday work." },
    { number: "6", title: "Hand over", copy: "Train your team so they can run and improve it without us." },
  ],
  measureLabel: "How we measure success",
  measure:
    "Every trial starts with a clear goal, such as time saved, faster service, more work done per officer, happier citizens, better accuracy or lower cost.",
};

export const skills = {
  eyebrow: "AI training for government",
  title: "Practical training for leaders, staff, IT teams and future AI experts",
  programmes: [
    { number: "01", title: "AI for leaders", copy: "What AI can do for you · where to use it · the risks · how to stay in control" },
    { number: "02", title: "AI for everyday work", copy: "Research · summarising · writing · working with figures · finding information" },
    { number: "03", title: "AI for IT teams", copy: "How to build AI tools · connecting them to your systems · finding information · testing · keeping it secure" },
    { number: "04", title: "Safe use of AI", copy: "Rules and governance · privacy · keeping people in charge · checking for risks" },
  ],
  modelLabel: "Our approach",
  model: ["Learn", "Try", "Build", "Launch", "Hand over"],
};

export const foundation = {
  eyebrow: "Our experience",
  title: "New AI skills, built on 14+ years of real software experience",
  years: 14,
  yearsLabel: "years building software for large organisations",
  columns: [
    { icon: FiCpu, title: "AI and new technology", items: ["AI that writes and answers questions", "The AI 'brains' behind it, big and small", "AI helpers", "Answers from your documents", "Smart automation"] },
    { icon: FiLayers, title: "Business systems", items: ["Salesforce and customer databases", "Online business applications", "Connecting systems together", "Organising and storing information", "Automating everyday processes"] },
    { icon: FiSettings, title: "Building software", items: ["Websites and mobile apps", "Modern, easy-to-use applications", "Smooth, reliable updates", "Keeping systems secure", "Planning how it all fits together"] },
    { icon: FiGlobe, title: "Sectors we've worked in", items: ["Government and public services", "Education", "Healthcare", "Financial services", "Energy and utilities"] },
  ],
  note: "Our strength is combining new AI ideas with the solid engineering needed to make them work inside real organisations.",
};

export const partnership = {
  eyebrow: "Working in partnership",
  title: "A way of working that focuses on results, training and long-term skills",
  steps: [
    { number: "1", title: "Identify", copy: "Your department's challenge" },
    { number: "2", title: "Design together", copy: "The AI idea and how it will work" },
    { number: "3", title: "Build together", copy: "A working prototype or trial" },
    { number: "4", title: "Check", copy: "Security and results" },
    { number: "5", title: "Scale", copy: "Used across the department" },
    { number: "6", title: "Hand over", copy: "Your team trained and in charge" },
  ],
  principleLabel: "Our principle",
  principle:
    "We don't want to simply sell AI to Government. We want to build AI skills with Government, safely, responsibly and with real benefits for the public.",
};

export const faqs = {
  eyebrow: "Common questions",
  title: "Simple answers to the questions we hear most",
  items: [
    {
      number: 1,
      title: "Where is our data kept, and who can see it?",
      content:
        "Wherever you decide. We follow your rules on how data is classified and how long it's kept, control who can see what, keep a record of access, and can run everything inside your own systems rather than ours.",
    },
    {
      number: 2,
      title: "Will the AI make decisions instead of our staff?",
      content:
        "No. The AI helps with writing, research, summarising and sorting. Decisions are always made by an authorised person, and every AI action is recorded so it can be checked.",
    },
    {
      number: 3,
      title: "How do you stop the AI from making things up?",
      content:
        "The AI answers only from your approved documents, and any numbers come from your database rather than from the AI itself. If someone asks about something unrelated, it politely declines.",
    },
    {
      number: 4,
      title: "How does a trial start, and how will we know it worked?",
      content:
        "We start by understanding the problem and checking the data and security. Then we build a small working version with goals agreed up front, such as time saved, faster service, better accuracy or lower cost.",
    },
    {
      number: 5,
      title: "Do you train our team as well?",
      content:
        "Yes. Training is part of every project, with programmes for leaders, everyday staff, IT teams and the people responsible for rules and safety, so your department can run and improve the solution itself.",
    },
  ],
};

export const cta = {
  eyebrow: "Let's build AI skills for Bharat",
  title: "Work with us to find, test and roll out AI that helps the public",
  sub: "For government, public services and businesses, done safely, responsibly and with benefits you can measure.",
  pillars: [
    { tag: "AI", copy: "Helpers that answer and write" },
    { tag: "Data", copy: "Information and less paperwork" },
    { tag: "Gov", copy: "Safe & Responsible AI" },
    { tag: "Skills", copy: "Training for Government Teams" },
  ],
  regions: "UK • India • Global",
};
