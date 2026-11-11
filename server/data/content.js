// All editable website content lives here. The React app fetches it from GET /api/content.
// Replace the [PLACEHOLDERS] with real numbers, names and testimonials.

const content = {
  brand: { name: "Stemora", tagline: "Lighting Young Minds" },

  nav: [
    { label: "About", href: "#about" },
    { label: "Programmes", href: "#programmes" },
    { label: "Achievements", href: "#achievements" },
    { label: "Summer Champ", href: "#summer" },
    { label: "Online", href: "#learn" },
    { label: "Innovators", href: "#wall" },
    { label: "Contact", href: "#contact" },
  ],

  footerLinks: [
    { label: "About", href: "#about" },
    { label: "Programmes", href: "#programmes" },
    { label: "Summer Champ", href: "#summer" },
    { label: "Online", href: "#learn" },
    { label: "Contact", href: "#contact" },
  ],

  heroPhotos: ["Students building robots", "Classroom session", "Project showcase"],

  tape: [
    { title: "Hands-on", sub: "Learning by building" },
    { title: "School-ready", sub: "Grade-wise programmes" },
    { title: "Creative", sub: "Real problem solving" },
  ],

  about: {
    text: "Stemora is an innovation-driven STEM education company delivering hands-on robotics, electronics, AI and coding sessions at schools across Bangalore. We turn textbook ideas into things students can build, test and show off.",
    mission: "To make hands-on STEM learning accessible to every school child and build confident, creative problem solvers.",
    vision: "A generation of young innovators who imagine, build and lead the technology of tomorrow.",
    photo: "Founder / team with students",
  },

  programmes: [
    {
      id: "robotics",
      icon: "robot",
      color: "teal",
      title: "Robotics Course",
      description: "A structured, age-appropriate journey into robotics, sensors, motors and coding. Students assemble and program working models.",
      tag: "For schools · Grade-wise learning",
      href: "#contact",
    },
    {
      id: "robocircuit",
      icon: "chip",
      color: "gold",
      title: "RoboCircuit Course",
      description: "A deeper hands-on pathway from electronic circuits to microcontroller-based robotics and functional prototypes.",
      tag: "Circuits · Arduino · Robotics",
      href: "#contact",
    },
    {
      id: "festival",
      icon: "trophy",
      color: "white",
      title: "Robotics Festival",
      description: "A high-energy celebration of innovation with project showcases, challenges, demonstrations and student participation.",
      tag: "Showcase · Compete · Celebrate",
      href: "#festival",
    },
  ],

  why: [
    { title: "Hands-on by design", text: "Every concept is reinforced through building, testing and improving." },
    { title: "Age-wise curriculum", text: "Activities progress with students’ learning levels and abilities." },
    { title: "Real working models", text: "Learners see ideas come alive through functional projects." },
    { title: "Showcase opportunities", text: "Students present and celebrate what they create." },
  ],

  steps: [
    { title: "Connect", text: "Share your school’s goals" },
    { title: "Customise", text: "Choose the right programme" },
    { title: "Create", text: "Students build and explore" },
    { title: "Celebrate", text: "Showcase student projects" },
  ],

  stats: [
    { value: "[00]+", label: "Students trained" },
    { value: "[00]+", label: "Sessions delivered" },
    { value: "[00]+", label: "Projects built" },
    { value: "[00]+", label: "Partner schools" },
  ],

  gallery: [
    "Robotics festival moment",
    "Award / prize day",
    "Circuit workshop",
    "Team challenge",
    "School visit",
    "Student demo",
  ],

  summer: {
    kicker: "Summer 2027",
    text: "A high-energy summer camp where kids build robots, wire circuits, code games and compete as champions.",
    pills: ["Robotics", "Electronics", "AI & Coding", "Team challenges", "Grand showcase"],
    dates: "[DATES]",
    grades: "[GRADES]",
    venue: "[VENUE]",
    photos: ["Summer camp action shot", "Champions trophy moment"],
  },

  online: {
    text: "Stemora Online brings the classroom home with guided video lessons, build-along projects and quizzes that track every learner’s progress.",
    features: ["Live & recorded classes", "Build-along projects", "Quizzes & badges", "Parent progress reports"],
    grade: "[X]",
    courses: [
      { name: "Robotics Basics", percent: 80 },
      { name: "Circuits & Arduino", percent: 55 },
      { name: "Coding with AI", percent: 30 },
    ],
    badges: 4,
  },

  innovators: [
    { badge: "Innovator of the Month", name: "[Student name 1]", blurb: "Built a [project name] using sensors and Arduino.", meta: "Grade [X] · [School]" },
    { badge: "Top Builder", name: "[Student name 2]", blurb: "Designed a working robot that [what it does].", meta: "Grade [X] · [School]" },
    { badge: "Creative Thinker", name: "[Student name 3]", blurb: "Invented a [project] to solve a real problem at school.", meta: "Grade [X] · [School]" },
    { badge: "Circuit Star", name: "[Student name 4]", blurb: "Mastered circuits and built a [project].", meta: "Grade [X] · [School]" },
    { badge: "Team Leader", name: "[Student name 5]", blurb: "Led the team that won the [challenge name].", meta: "Grade [X] · [School]" },
    { badge: "Rising Coder", name: "[Student name 6]", blurb: "Programmed a [project] in just [X] sessions.", meta: "Grade [X] · [School]" },
  ],

  testimonials: [1, 2, 3].map(() => ({
    quote: "[Add a real testimonial here — what changed for the child or the school after Stemora sessions.]",
    name: "[Name]",
    role: "[Parent / Principal / Teacher], [School]",
  })),

  festival: [
    { title: "Student projects", text: "Showcase working models and creative solutions." },
    { title: "School partnerships", text: "Build a programme around your school’s needs." },
    { title: "Memorable experiences", text: "Turn learning into something students remember." },
  ],

  contact: { phone: "[PHONE]", email: "[EMAIL]", location: "[LOCATION]" },
};

export default content;
