export type ProjectId = 'kti' | 'python' | 'basis' | 'mpk';

export type ProjectFilter = 'all' | 'research' | 'engineering' | 'leadership';

export interface ProjectDossier {
  id: ProjectId;
  number: string;
  filterGroup: Exclude<ProjectFilter, 'all'>;
  category: string;
  code: string;
  shortTitle: string;
  shortDesc: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeClass: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  thumbGradient: string;
  thumbBorder: string;
  thumbTopLabel: string;
  thumbTopLabelClass: string;
  thumbIcon: string;
  thumbCenterTitle: string;
  thumbCenterSubtitle: string;
  thumbFooter: string;
  tiltClass: string;
  cornerStickerEmoji: string;
  cornerStickerBg: string;
  bottomStickerEmoji: string;
  bottomStickerLabel?: string;
  bottomStickerColor?: string;
  sideStickerLabel: string;
  sideStickerBg: string;
}

export const PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCdtZc8koijpgnRiw82xqUgZEDWm-BCx13XgX6QaeIrVBC4FHMGChICvZs7prdU_9rK14A1zYOi6vg9cVPO0pY2k2vdlVguQMqyZG7Js2XRXi5MK91PesUiDpEv0bq9C-cw0RXQNI58ytDW1u6oMa5Tc90zxCHKjxmvs46KsNLKHmtAIF3vgfTkhd3wZdUNLSbVKnbhdqKPKwMy5wKRCOJZZMxsW9Lk1aLKn2waIIq64OYXHjbwb43Iww';

export const PROFILE = {
  name: 'Indah Permatasari',
  displayName: 'INDAH PERMATASARI',
  handle: 'INDAH.EXE',
  edition: '2026 EDITION',
  university: 'Institut Teknologi PLN',
  universityRange: 'Institut Teknologi PLN (2026–Present)',
  degree: 'B.Sc. in Information Technology',
  highSchool: "SMAS Terpadu Wira Bhakti Gorontalo ('26)",
  location: 'Cengkareng, West Jakarta, ID',
  shortLocation: 'Cengkareng, Jakarta Barat',
  phone: '0821-3808-5260',
  whatsappUrl: 'https://wa.me/6282138085260',
  email: 'chaniagokimberly24@gmail.com',
  linkedinUrl: 'https://linkedin.com',
  studentId: '2026-ITPLN',
  rollNumber: 'IT-2026',
  summary:
    'Undergraduate IT student at Institut Teknologi PLN combining structured analytical thinking, algorithmic problem solving in Python, scientific writing, and collaborative student organization governance.',
};

export const HERO_INDEX_ITEMS = [
  { color: 'text-blue-600', label: 'Software & Python Logic' },
  { color: 'text-pink-600', label: '1st Place KTI Research' },
  { color: 'text-amber-600', label: 'Event & Org Leadership' },
  { color: 'text-emerald-600', label: 'Visual Arts & Design' },
];

export const EXPERIENCES = [
  {
    year: '2025',
    badge: 'MPK OVERSIGHT',
    title: 'MPK (Majelis Perwakilan Kelas)',
    description:
      'Work Program Monitoring Division. Evaluated student council activities, formulated accountability metrics, and managed inter-class policy deliberations.',
    accentBorder: 'border-blue-500',
    yearColor: 'text-blue-800',
    badgeClass: 'bg-blue-100 text-blue-800',
  },
  {
    year: '2024',
    badge: 'BASIS CAMP',
    title: 'BASIS Leadership Training',
    description:
      'Event Division Committee. Coordinated field drills, leadership run-downs, logistics, and mentored high-school cohorts in discipline and teamwork.',
    accentBorder: 'border-pink-500',
    yearColor: 'text-pink-700',
    badgeClass: 'bg-pink-100 text-pink-800',
  },
  {
    year: '2025',
    badge: 'CULTURE & ARTS',
    title: 'GSMS Kemendikbud & Bengkel Sastra',
    description:
      'Represented school in literary workshop creation and national school artist residency performances.',
    accentBorder: 'border-amber-500',
    yearColor: 'text-amber-700',
    badgeClass: 'bg-amber-100 text-amber-800',
  },
];

export const TECH_TOOLS = [
  { code: 'Py', name: 'Python', wrapper: 'bg-slate-900', badge: 'bg-yellow-400 text-slate-950' },
  { code: 'VS', name: 'VS Code', wrapper: 'bg-blue-900', badge: 'bg-sky-500 text-white' },
  { code: 'W', name: 'Word', wrapper: 'bg-blue-800', badge: 'bg-blue-600 text-white' },
  { code: 'P', name: 'PowerPoint', wrapper: 'bg-orange-700', badge: 'bg-orange-500 text-white' },
  { code: 'Cv', name: 'Canva', wrapper: 'bg-teal-800', badge: 'bg-teal-400 text-teal-950' },
];

export const SOFT_SKILLS = [
  { label: 'Scientific Research', style: 'bg-blue-50 text-blue-800 border-blue-200' },
  { label: 'Public Speaking', style: 'bg-pink-50 text-pink-800 border-pink-200' },
  { label: 'Team Leadership', style: 'bg-amber-50 text-amber-800 border-amber-200' },
  { label: 'Indonesian (Native)', style: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { label: 'English (Intermediate)', style: 'bg-purple-50 text-purple-800 border-purple-200' },
];

export const PROFILE_TAGS = [
  { label: '#InformationTechnology', style: 'bg-blue-100 text-blue-700' },
  { label: '#KTIPenelitian', style: 'bg-pink-100 text-pink-700' },
  { label: '#StudentCouncil', style: 'bg-amber-100 text-amber-700' },
  { label: '#ITPLN2026', style: 'bg-emerald-100 text-emerald-700' },
];

export const PROJECT_DOSSIERS: ProjectDossier[] = [
  {
    id: 'kti',
    number: '01',
    filterGroup: 'research',
    category: 'ACADEMIC RESEARCH',
    code: 'KTI-UMG-2025-01',
    shortTitle: 'Regional KTI Research',
    shortDesc:
      'First Place Winner at Universitas Muhammadiyah Gorontalo. Authored research paper on regional socio-technological empowerment.',
    title: '1st Place Winner: Regional KTI Research Paper',
    subtitle: 'Universitas Muhammadiyah Gorontalo (UMG) Competition',
    badge: '🥇 First Place Award',
    badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
    description:
      'Authored and presented a rigorous scientific research paper addressing regional technological implementation and student empowerment. Defended the research methodology before the faculty jury board and was awarded 1st Place across all regional submissions.',
    deliverables: [
      'Hypothesis formulation and comprehensive literature review',
      'Data collection protocols and quantitative analysis',
      'Public defense presentation with slide deck visuals',
      'Full research dossier published in event conference archives',
    ],
    technologies: ['Scientific Methodology', 'PowerPoint', 'Academic Writing', 'Statistical Synthesis'],
    thumbGradient: 'from-blue-600 to-indigo-800',
    thumbBorder: 'border-blue-400',
    thumbTopLabel: '🥇 1st PLACE',
    thumbTopLabelClass: 'bg-yellow-400 text-slate-900 font-black',
    thumbIcon: '🏆',
    thumbCenterTitle: 'KTI',
    thumbCenterSubtitle: 'UMG Research 2025',
    thumbFooter: 'Regional Scientific Writing',
    tiltClass: '-rotate-2',
    cornerStickerEmoji: '🏆✨',
    cornerStickerBg: 'bg-yellow-100 border-yellow-300 text-amber-800 rotate-6',
    bottomStickerEmoji: '🐣',
    sideStickerLabel: 'GOOD JOB! ★',
    sideStickerBg: 'bg-yellow-300 text-amber-950 -rotate-12',
  },
  {
    id: 'python',
    number: '02',
    filterGroup: 'engineering',
    category: 'SOFTWARE & LOGIC',
    code: 'ITPLN-CS-2026-PY',
    shortTitle: 'Python CLI & Logic Labs',
    shortDesc:
      'Academic programming suite at ITPLN. Implemented data structures, linear search, logic systems, and automation scripts.',
    title: 'Python CLI & Algorithm Problem-Solving Suite',
    subtitle: 'Institut Teknologi PLN Coursework & Projects',
    badge: '💻 Core ITPLN Coursework',
    badgeClass: 'bg-blue-100 text-blue-900 border-blue-300',
    description:
      'A repository of algorithmic solutions and command-line programs developed during the Information Technology degree program at ITPLN. Focused on clean syntax, algorithmic time-complexity, sorting techniques, and automated logic processing.',
    deliverables: [
      'Interactive Command-Line Interface (CLI) tools',
      'Linear and binary search demonstrations',
      'Data structures implementation (stacks, queues, associative arrays)',
      'Automated file I/O operations and input sanitation',
    ],
    technologies: ['Python 3', 'VS Code', 'Git', 'Modular Architecture'],
    thumbGradient: 'from-slate-900 to-blue-950',
    thumbBorder: 'border-blue-400/50',
    thumbTopLabel: 'IT·PLN 2026',
    thumbTopLabelClass: 'bg-blue-500 text-white font-bold',
    thumbIcon: '>_',
    thumbCenterTitle: '<Python/>',
    thumbCenterSubtitle: 'CLI & Algorithms',
    thumbFooter: 'Coursework Repository',
    tiltClass: 'rotate-2',
    cornerStickerEmoji: '💻♡',
    cornerStickerBg: 'bg-sky-100 border-sky-300 text-sky-800 -rotate-6',
    bottomStickerEmoji: '🪐',
    bottomStickerLabel: 'GALAXY',
    bottomStickerColor: 'bg-purple-50 text-purple-800 -rotate-6',
    sideStickerLabel: '★ CODE ♡',
    sideStickerBg: 'bg-sky-400 text-white rotate-6',
  },
  {
    id: 'basis',
    number: '03',
    filterGroup: 'leadership',
    category: 'EVENT LEADERSHIP',
    code: 'WBG-BASIS-2024-EV',
    shortTitle: 'BASIS Leadership Camp',
    shortDesc:
      'Directing event logistics, participant discipline drills, and leadership development simulations for high school cadres.',
    title: 'BASIS Leadership Training Committee (Event Division)',
    subtitle: 'SMAS Terpadu Wira Bhakti Gorontalo',
    badge: '⛺ Event Organizing Lead',
    badgeClass: 'bg-orange-100 text-orange-900 border-orange-300',
    description:
      'Served on the executive steering committee for the BASIS Leadership Camp. Designed field agendas, coordinated safety protocols, directed time-management run-downs, and guided cadet cohorts through collaborative leadership simulations.',
    deliverables: [
      'Full 3-day minute-by-minute operational run-down',
      'Coordination of camp instructors and mentor allocations',
      'Emergency response routing and event logistical planning',
      'Post-camp evaluation reports and attendee feedback analysis',
    ],
    technologies: ['Team Leadership', 'Logistics Operations', 'Public Speaking', 'Crisis Management'],
    thumbGradient: 'from-amber-500 to-orange-700',
    thumbBorder: 'border-amber-300',
    thumbTopLabel: 'COMMITTEE',
    thumbTopLabelClass: 'bg-white text-orange-800 font-bold',
    thumbIcon: '⛺',
    thumbCenterTitle: "BASIS '24",
    thumbCenterSubtitle: 'Event Division Leadership',
    thumbFooter: 'Wira Bhakti Gorontalo',
    tiltClass: '-rotate-1',
    cornerStickerEmoji: '📣⭐',
    cornerStickerBg: 'bg-amber-100 border-amber-300 text-amber-800 rotate-6',
    bottomStickerEmoji: '☕◡̈',
    sideStickerLabel: 'LEAD! ⛺',
    sideStickerBg: 'bg-orange-500 text-white -rotate-6',
  },
  {
    id: 'mpk',
    number: '04',
    filterGroup: 'leadership',
    category: 'STUDENT GOVERNANCE',
    code: 'MPK-OVERSIGHT-2025',
    shortTitle: 'MPK Program Monitoring',
    shortDesc:
      'Legislative oversight of student council activities, conducting program accountability assessments, and student advocacy.',
    title: 'MPK (Student Representative Council) Program Monitoring',
    subtitle: 'Majelis Perwakilan Kelas Legislative Oversight',
    badge: '🏛️ Council Oversight Division',
    badgeClass: 'bg-pink-100 text-pink-900 border-pink-300',
    description:
      'Acted as key commissioner within the MPK Work Program Monitoring Division. Evaluated accountability reports from executive student bodies (OSIS), analyzed student interest surveys, and represented high-school community initiatives.',
    deliverables: [
      'Program Key Performance Indicator (KPI) monitoring checklists',
      'Quarterly review sessions between MPK and student executives',
      'Drafting official council resolutions and policy briefs',
      'Student representation advocacy to school leadership',
    ],
    technologies: ['Policy Review', 'Inter-Division Governance', 'Negotiation', 'Accountability Audits'],
    thumbGradient: 'from-pink-600 to-rose-800',
    thumbBorder: 'border-pink-400',
    thumbTopLabel: 'GOVERNANCE',
    thumbTopLabelClass: 'bg-white text-pink-700 font-bold',
    thumbIcon: '🏛️',
    thumbCenterTitle: "MPK '25",
    thumbCenterSubtitle: 'Program Monitoring',
    thumbFooter: 'Council Supervision',
    tiltClass: 'rotate-2',
    cornerStickerEmoji: '📝◡̈',
    cornerStickerBg: 'bg-pink-100 border-pink-300 text-pink-800 -rotate-6',
    bottomStickerEmoji: '📼',
    bottomStickerLabel: 'RETRO',
    bottomStickerColor: 'bg-pink-50 text-pink-700 rotate-12',
    sideStickerLabel: 'SUPER! ♡',
    sideStickerBg: 'bg-pink-600 text-white -rotate-12',
  },
];

export const HONORS_MILESTONES = [
  {
    icon: '🥇',
    title: '1st Place Winner — Regional KTI Research (2025)',
    detail:
      'Universitas Muhammadiyah Gorontalo. Evaluated by academic board on technological impact and paper rigor.',
  },
  {
    icon: '🏛️',
    title: 'MPK Student Representative Council — Work Program Monitoring (2025)',
    detail:
      'Selected to supervise executive school council divisions and chair parliamentary review sessions.',
  },
  {
    icon: '🎨',
    title: 'GSMS Kemendikbudristek Participant (2025)',
    detail:
      'Gerakan Seniman Masuk Sekolah national ministry program, advancing performing & visual artistic creation.',
  },
  {
    icon: '📚',
    title: 'Bengkel Sastra Regional Delegate (2025)',
    detail: 'Selected representative for specialized creative writing and literary analysis symposium.',
  },
  {
    icon: '⛺',
    title: 'BASIS Leadership Camp Organizing Committee (2024)',
    detail: 'Event division officer overseeing 150+ cadets during intensive 3-day leadership training.',
  },
];

export const COURSEWORK_ITEMS = [
  '■ Algorithms & Python',
  '■ Logic Systems & Discretes',
  '■ Linear Algebra',
  '■ Calculus for Computing',
];

export const INTEREST_ITEMS = [
  { arrowColor: 'text-blue-500', text: 'AI & Scientific Computing with Python' },
  { arrowColor: 'text-pink-500', text: 'Technological Research & Academic Paper Writing' },
  { arrowColor: 'text-emerald-500', text: 'Human-Centered Visual Design & Tactile UI' },
  { arrowColor: 'text-amber-500', text: 'Public Discourse, Theater, & Event Coordination' },
];
