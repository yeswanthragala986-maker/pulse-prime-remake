export const CLUB_NAME = "Cybersecurity Club";
export const COLLEGE_NAME = "College Name";
export const CLUB_EMAIL = "cybersec@college.edu";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/teams", label: "Teams" },
  { to: "/events", label: "Events" },
  { to: "/partners", label: "Partners" },
  { to: "/achievements", label: "Achievements" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 500, label: "Students Reached" },
  { value: 30, label: "Events Conducted" },
  { value: 15, label: "Industry Collaborations" },
  { value: 100, label: "CTF Participants" },
];

export const DOMAIN_TAGS = [
  "Ethical Hacking",
  "Cyber Defense",
  "Digital Forensics",
  "AI Security",
  "CTF & Competitions",
  "Security Research",
];

export const DOMAINS = [
  {
    n: "01",
    title: "Ethical Hacking",
    desc: "Offensive security, penetration testing and responsible exploitation.",
  },
  {
    n: "02",
    title: "Digital Forensics",
    desc: "Reconstructing digital evidence from disks, memory and networks.",
  },
  {
    n: "03",
    title: "Network Security",
    desc: "Traffic analysis, intrusion detection and secure architecture.",
  },
  {
    n: "04",
    title: "Cloud Security",
    desc: "Hardening and auditing cloud-native infrastructure and IAM.",
  },
  {
    n: "05",
    title: "AI & ML Security",
    desc: "Adversarial machine learning and securing intelligent systems.",
  },
  {
    n: "06",
    title: "Cryptography",
    desc: "Applied crypto, protocols and post-quantum primitives.",
  },
];

export type Event = {
  slug: string;
  title: string;
  type: string;
  date: string;
  place: string;
  desc: string;
  image: string;
  featured?: boolean;
};

export const EVENTS: Event[] = [
  {
    slug: "nullbyte-ctf-2026",
    title: "NullByte CTF 2026",
    type: "CTF",
    date: "Mar 13, 2026",
    place: "Main Auditorium",
    desc: "Our flagship 24-hour capture-the-flag competition with web, crypto, pwn and forensics tracks for all skill levels.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f232?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "web-exploitation-bootcamp",
    title: "Web Exploitation Bootcamp",
    type: "Workshop",
    date: "Feb 7, 2026",
    place: "Lab 204",
    desc: "A hands-on weekend covering OWASP Top 10, from XSS to SSRF, with live vulnerable targets.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ai-red-team-seminar",
    title: "AI Red Team Seminar",
    type: "Seminar",
    date: "Jan 21, 2026",
    place: "Online",
    desc: "Industry experts discuss prompt injection, model extraction and defending LLM-powered applications.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "defendthenet-hackathon",
    title: "DefendTheNet Hackathon",
    type: "Hackathon",
    date: "Nov 29, 2025",
    place: "Innovation Hall",
    desc: "48 hours to build defensive tooling — detection rules, honeypots and SOC dashboards.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcab5b1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "intro-to-digital-forensics",
    title: "Intro to Digital Forensics",
    type: "Workshop",
    date: "Oct 11, 2025",
    place: "Lab 204",
    desc: "Memory and disk analysis with Volatility and Autopsy — from image acquisition to evidence reporting.",
    image:
      "https://images.unsplash.com/photo-1614064548237-096f335f69bd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cryptography-deep-dive",
    title: "Cryptography Deep Dive",
    type: "Seminar",
    date: "Sep 4, 2025",
    place: "Online",
    desc: "From symmetric primitives to post-quantum schemes — the math that secures the internet.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7a8dce4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const EVENT_FILTERS = ["All", "CTF", "Workshop", "Hackathon", "Seminar"];

export const LAB_ITEMS = [
  { icon: "🔐", title: "Security Research", desc: "Original research on emerging threats and defensive techniques." },
  { icon: "⚔️", title: "CTF Training", desc: "Weekly capture-the-flag practice across all skill tiers." },
  { icon: "🕵️", title: "Digital Forensics", desc: "Disk, memory and network forensic investigation drills." },
  { icon: "🌐", title: "Network Defense", desc: "Blue-team simulations and intrusion detection labs." },
  { icon: "🤖", title: "AI Security", desc: "Adversarial ML, prompt-injection defense and model auditing." },
  { icon: "🔎", title: "Vulnerability Research", desc: "Responsible disclosure and exploit-development studies." },
];

export const MONITOR_METRICS = [
  { tag: "cobalt", value: 1284, label: "Threats Analyzed" },
  { tag: "cyan", value: 96, label: "Labs Completed" },
  { tag: "indigo", value: 412, label: "CTF Challenges Solved" },
  { tag: "cobalt", value: 18, label: "Research Projects" },
  { tag: "cyan", value: 30, label: "Workshops Conducted" },
];

export const ACHIEVEMENTS = [
  { icon: "🏆", year: "2026", title: "National CTF Finalists", desc: "Placed among the top teams at the National Cyber Challenge finals." },
  { icon: "🥇", year: "2025", title: "Hackathon Champions", desc: "Won the inter-college DefendTheNet hackathon with a SOC automation toolkit." },
  { icon: "🏅", year: "2025", title: "Cybersecurity Awareness Initiative", desc: "Reached 2,000+ students across campus with security awareness drives." },
  { icon: "🥈", year: "2024", title: "Inter-College CTF Runner-Up", desc: "Finished second in a 36-hour multi-track capture-the-flag event." },
  { icon: "📜", year: "2024", title: "Published Research", desc: "Member-authored paper accepted at a student security symposium." },
  { icon: "🌱", year: "2023", title: "Club Founded", desc: "The Cybersecurity Club was established with 12 founding members." },
];

export const PARTNER_GROUPS = [
  { title: "Industry Partners", items: ["SecureCorp", "ThreatForge", "CipherLabs", "NetGuard"] },
  { title: "Academic Partners", items: ["Dept. of Computer Science", "Innovation Cell", "Research Foundation"] },
  { title: "Technology Communities", items: ["Null Community", "OWASP Chapter", "DefSec Society"] },
];

export const WHAT_WE_DO = [
  { icon: "🎓", title: "Workshops", desc: "Hands-on sessions from Linux basics to advanced exploitation." },
  { icon: "⚔️", title: "CTF Competitions", desc: "Regular internal and inter-college capture-the-flag events." },
  { icon: "🔬", title: "Security Research", desc: "Original research and responsible disclosure projects." },
  { icon: "📢", title: "Awareness Campaigns", desc: "Spreading security literacy across campus and beyond." },
  { icon: "🏢", title: "Industry Sessions", desc: "Talks and mentorship from working security professionals." },
  { icon: "🚀", title: "Hackathons", desc: "Build-to-ship security tooling under time pressure." },
  { icon: "🤝", title: "Peer Learning", desc: "A mentorship culture where seniors lift up juniors." },
];

export const TEAM = [
  { initials: "AS", name: "Aarav Sharma", role: "President", bio: "Cryptography enthusiast leading club strategy and industry outreach." },
  { initials: "DP", name: "Diya Patel", role: "Vice President", bio: "Drives operations, partnerships and the mentorship program." },
  { initials: "RM", name: "Rohan Mehta", role: "Technical Lead", bio: "Builds the CTF infrastructure and runs weekly training labs." },
  { initials: "AI", name: "Ananya Iyer", role: "Operations Lead", bio: "Keeps the club running — logistics, budgets and event execution." },
  { initials: "KN", name: "Kabir Nair", role: "Event Lead", bio: "Designs and runs our workshops, seminars and flagship CTF." },
  { initials: "SK", name: "Sara Khan", role: "Research Lead", bio: "Coordinates security research and responsible disclosure efforts." },
  { initials: "VR", name: "Vivaan Rao", role: "Design Lead", bio: "Shapes the club's visual identity and brand experience." },
  { initials: "IV", name: "Ishita Verma", role: "Community Lead", bio: "Grows membership and runs onboarding for new members." },
];

export const RESOURCE_FILTERS = [
  "All",
  "Fundamentals",
  "Ethical Hacking",
  "CTF",
  "Linux",
  "Networking",
  "Cryptography",
  "Digital Forensics",
  "Web Security",
  "Cloud Security",
  "AI Security",
];

export const RESOURCES = [
  { category: "Fundamentals", level: "Beginner", title: "Cybersecurity Fundamentals", desc: "Core concepts: CIA triad, threat models and basic defense." },
  { category: "Ethical Hacking", level: "Advanced", title: "The Web Application Hacker's Handbook", desc: "Definitive guide to web application penetration testing." },
  { category: "CTF", level: "Beginner", title: "picoCTF Practice Archive", desc: "Beginner-friendly CTF challenges across many categories." },
  { category: "Linux", level: "Beginner", title: "Linux Command Line Mastery", desc: "Essential shell skills every security practitioner needs." },
  { category: "Networking", level: "Intermediate", title: "Computer Networking: A Top-Down Approach", desc: "Network layers, protocols and packet-level understanding." },
  { category: "Cryptography", level: "Advanced", title: "Serious Cryptography", desc: "Applied modern cryptography from hashes to TLS and beyond." },
  { category: "Digital Forensics", level: "Advanced", title: "The Art of Memory Forensics", desc: "Memory analysis with Volatility for incident response." },
  { category: "Web Security", level: "Intermediate", title: "PortSwigger Web Security Academy", desc: "Free interactive labs covering the full OWASP spectrum." },
  { category: "Cloud Security", level: "Intermediate", title: "Cloud Security Engineering", desc: "Securing AWS, GCP and Azure workloads at scale." },
  { category: "AI Security", level: "Advanced", title: "Adversarial Machine Learning", desc: "Attacking and defending ML systems in production." },
];
