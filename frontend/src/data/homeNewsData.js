/**
 * ==============================================================================
 * BRAIN HEALTH AWARENESS FOUNDATION - NEWS & STORIES DATA
 * ==============================================================================
 * Edit or add news stories here anytime without touching the main UI code.
 * 
 * Each article supports:
 * - id: Unique string identifier (e.g. "my-new-story")
 * - title: Headline of the article
 * - category: Category name (e.g. "Field Notes", "Caregivers", "Partnerships", etc.)
 * - date: Publication date label (e.g. "November 2026")
 * - readTime: Estimated reading time (e.g. "4 min read")
 * - author: Author name or department
 * - excerpt: Short preview text shown on cards
 * - thumbVariant: Color accent for thumbnail ("" | "thumb-b" | "thumb-c")
 * - featured: true if you want it highlighted in the top banner of the /news page
 * - showOnHome: true to display it in the 3-card grid on the Homepage
 * - keyTakeaway: Key highlight shown in a callout box in the full reader modal
 * - content: Array of paragraph strings for the full story
 * ==============================================================================
 */

export const NEWS_CATEGORIES = [
  "All Updates",
  "Field Notes",
  "Partnerships",
  "Caregivers",
  "Clinical & Research",
  "Community Outreach"
];

export const HOME_NEWS_ARTICLES = [
  {
    id: "introducing-brainhealth-awareness-foundation",
    title: "Introducing BrainHealth Awareness Foundation: Championing Better Brain Health for All",
    category: "Community Outreach",
    date: "July 2026",
    readTime: "3 min read",
    author: "Brain Health Awareness Foundation",
    thumbVariant: "",
    image: "/images/news-1.jpg",
    featured: false,
    showOnHome: true,
    excerpt: "The BrainHealth Awareness Foundation is a nonprofit organization committed to advancing brain health, promoting cognitive well-being, and raising awareness about dementia and Alzheimer's disease.",
    keyTakeaway: "Our mission is to build a future where brain health is prioritized, misconceptions about dementia are challenged, and everyone has the opportunity to access the information and support they need.",
    content: [
      "The BrainHealth Awareness Foundation is a nonprofit organization committed to advancing brain health, promoting cognitive well-being, and raising awareness about dementia and Alzheimer's disease.",
      "Through community-based education, awareness campaigns, cognitive screenings, caregiver support, research, and advocacy, the Foundation works to empower individuals and communities with the knowledge and resources needed to protect brain health throughout life.",
      "We place particular emphasis on underserved communities, advocating for improved access to reliable brain health information, early identification of cognitive concerns, preventive services, and appropriate support for individuals and families affected by cognitive decline.",
      "Our mission is to build a future where brain health is prioritized, misconceptions about dementia are challenged, and everyone has the opportunity to access the information and support they need.",
      "Together, we can create a world where brain health matters, awareness inspires action, and no one is left behind."
    ]
  },
  {
    id: "eleme-dementia-awareness-outreach",
    title: "BrainHealth Awareness Foundation Reaches Over 1,000 People Through Dementia Awareness Outreach in Eleme",
    category: "Community Outreach",
    date: "August 2026",
    readTime: "3 min read",
    author: "Brain Health Awareness Foundation",
    thumbVariant: "thumb-b",
    image: "/images/news-2.jpg",
    featured: false,
    showOnHome: true,
    excerpt: "The BrainHealth Awareness Foundation, in collaboration with the Alzheimer's Disease Association of Nigeria (ADAN), conducted a cognitive screening and dementia awareness outreach in Eleme Local Government Area, Rivers State, reaching over 1,000 participants aged 50 and above.",
    keyTakeaway: "Together, we are building healthier communities where brain health is understood, cognitive concerns are recognized early, and no one is left behind.",
    content: [
      "The BrainHealth Awareness Foundation, in collaboration with the Alzheimer's Disease Association of Nigeria (ADAN), conducted a cognitive screening and dementia awareness outreach in Eleme Local Government Area, Rivers State, reaching over 1,000 participants aged 50 and above.",
      "The community-based initiative aimed to promote early identification of cognitive impairment and assess selected modifiable risk factors associated with dementia. Through screening and education, the programme encouraged greater awareness, early action, and informed decisions about brain health.",
      "As a nonprofit committed to advancing cognitive health, the Foundation prioritizes underserved communities through awareness campaigns, screenings, education, and research to improve access to reliable information and preventive support.",
      "The Foundation extends its sincere appreciation to ADAN, community leaders, health workers, volunteers, partners, and everyone who contributed to the success of the outreach. Special thanks go to the over 1,000 participants who took part in the programme.",
      "Together, we are building healthier communities where brain health is understood, cognitive concerns are recognized early, and no one is left behind."
    ]
  },
  {
    id: "world-alzheimers-day-cwo",
    title: "BrainHealth Awareness Foundation Celebrates World Alzheimer's Day with Catholic Women Organization in Port Harcourt",
    category: "Community Outreach",
    date: "October 2026",
    readTime: "3 min read",
    author: "Brain Health Awareness Foundation",
    thumbVariant: "thumb-c",
    image: "/images/news-3.jpg",
    featured: true,
    showOnHome: true,
    excerpt: "Port Harcourt, Rivers State, Nigeria — BrainHealth Awareness Foundation marked World Alzheimer's Day with an engaging and educational awareness session with the Catholic Women Organization of the Church of the Resurrection, Port Harcourt.",
    keyTakeaway: "Together, we can promote awareness, challenge stigma, encourage early action, and build healthier communities through better brain health.",
    content: [
      "Port Harcourt, Rivers State, Nigeria — BrainHealth Awareness Foundation marked World Alzheimer's Day with an engaging and educational awareness session with the Catholic Women Organization of the Church of the Resurrection, Port Harcourt.",
      "The session focused on the importance of prioritizing brain health, understanding dementia and Alzheimer's disease, and adopting healthier habits to support cognitive well-being throughout life.",
      "Participants took part in thought-provoking discussions designed to challenge common misconceptions about dementia and Alzheimer's disease while encouraging greater awareness, reflection, and proactive steps towards brain health.",
      "The engagement provided an opportunity to educate participants on the importance of prevention, early action, and making informed lifestyle choices that promote a healthier brain.",
      "Through initiatives like this, BrainHealth Awareness Foundation continues to champion brain health education, encourage open conversations about cognitive health, and inspire individuals and communities to take brain health seriously at every stage of life.",
      "Together, we can promote awareness, challenge stigma, encourage early action, and build healthier communities through better brain health."
    ]
  }
];
