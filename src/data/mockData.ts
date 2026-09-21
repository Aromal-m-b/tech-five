import { StudentProject, SoftwareService, Testimonial, FaqItem } from '../types';

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 't5-ai-1',
    title: 'Autonomous Drone Surveillance & Anomaly Detection',
    tagline: 'Deep learning pipeline with YOLOv8 & edge telemetry for restricted zone monitoring.',
    level: 'main',
    domain: 'ai_ml',
    domainLabel: 'AI & Computer Vision',
    techStack: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'Flask', 'FastAPI'],
    description: 'A comprehensive IEEE-aligned final year project implementing real-time human intrusion and weapon detection in aerial video streams with automated alert dispatching.',
    deliverables: [
      'Complete tested source code + model weights (.pt)',
      'Plagiarism-free 80+ page project report (IEEE format)',
      'Detailed PowerPoint presentation (PPT) with system architecture',
      '1-on-1 Viva rehearsal & examiner Q&A preparation guide'
    ],
    durationWeeks: 4,
    highlight: 'IEEE 2025 Standard Architecture',
    idealFor: ['B.E / B.Tech CSE', 'AI & Data Science', 'Information Science']
  },
  {
    id: 't5-iot-1',
    title: 'Smart Health Monitoring Wearable with Cloud Analytics',
    tagline: 'IoT ECG, SpO2 & body temperature streaming with threshold emergency SMS alerts.',
    level: 'main',
    domain: 'iot_embedded',
    domainLabel: 'IoT & Embedded Systems',
    techStack: ['ESP32', 'MAX30102', 'C++', 'Node.js', 'MQTT', 'React Dashboard'],
    description: 'Full-stack hardware-software major project integrating biometric sensors with an ESP32 microcontroller, streaming telemetry via MQTT to a live doctor triage web portal.',
    deliverables: [
      'Firmware code (.ino/C++) + React Doctor Portal',
      'Circuit schematic diagrams & component wiring guide',
      'Complete IEEE standard documentation & synopses',
      'Video demonstration + AnyDesk remote setup support'
    ],
    durationWeeks: 3,
    highlight: 'Hardware + Cloud Integration',
    idealFor: ['ECE / Electronics', 'Biomedical Engineering', 'CSE IoT']
  },
  {
    id: 't5-web-1',
    title: 'Decentralized Academic Credential Verification System',
    tagline: 'Tamper-proof degree and marksheet issuance using Ethereum smart contracts & IPFS.',
    level: 'main',
    domain: 'blockchain',
    domainLabel: 'Blockchain & Web3',
    techStack: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'IPFS / Pinata'],
    description: 'A cutting-edge university major project preventing fake certificates by anchoring hashed transcripts into the Ethereum testnet with QR-based instant public verification.',
    deliverables: [
      'Verified Solidity Smart Contracts & React front-end',
      'Gas optimization benchmarks & security audit chapter',
      'Complete 90-page black-book binding ready report',
      'Mock viva session addressing cryptography & blockchain mechanics'
    ],
    durationWeeks: 4,
    highlight: 'High Viva Scoring Topic',
    idealFor: ['B.Tech CSE', 'Information Technology', 'MCA / M.Tech']
  },
  {
    id: 't5-web-2',
    title: 'AI Multi-Tenant Hospital Management & Appointment System',
    tagline: 'Full-stack microservices portal with automated doctor slot booking and prescription PDF generation.',
    level: 'main',
    domain: 'web_fullstack',
    domainLabel: 'Full-Stack Web',
    techStack: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Razorpay'],
    description: 'A production-grade major project featuring role-based access control (Admin, Doctor, Patient, Pharmacist), automated invoice generation, and telehealth video consultations.',
    deliverables: [
      'Clean modular MERN/PERN codebase with README instructions',
      'ER Diagrams, DFD diagrams & database migration scripts',
      'Full project report with literature survey & methodology',
      'Slide deck for preliminary & final project reviews'
    ],
    durationWeeks: 3,
    highlight: 'Production-Grade Architecture',
    idealFor: ['CSE', 'ISE', 'MCA', 'BCA Final Year']
  },
  {
    id: 't5-mini-1',
    title: 'Smart Expense Tracker with Receipt OCR Scanner',
    tagline: 'Lightweight semester mini project extracting line items and categories from invoice photos.',
    level: 'mini',
    domain: 'ai_ml',
    domainLabel: 'AI & Data Science',
    techStack: ['Python', 'Tesseract OCR', 'Streamlit', 'SQLite', 'Pandas'],
    description: 'An engaging 4th/5th semester mini project that takes receipt pictures, parses expense totals using regex OCR, and visualizes monthly spending trends with interactive charts.',
    deliverables: [
      'Executable Python Streamlit app with sample dataset',
      '25-30 page mini-project documentation & flowcharts',
      'Ready-to-present 12-slide PPT',
      'Viva questions cheat sheet with answers'
    ],
    durationWeeks: 1,
    highlight: 'Quick 3-Day Turnaround',
    idealFor: ['3rd / 5th Semester CSE', 'BCA / BSc CS']
  },
  {
    id: 't5-mini-2',
    title: 'Real-Time Chat Application with End-to-End Encryption',
    tagline: 'Modern instant messaging app with WebSocket rooms, typing indicators and AES-256 chat.',
    level: 'mini',
    domain: 'web_fullstack',
    domainLabel: 'Full-Stack Web',
    techStack: ['React', 'Socket.io', 'Node.js', 'Tailwind CSS', 'CryptoJS'],
    description: 'A snappy web development mini project demonstrating bi-directional WebSocket communication, client-side encryption, and clean UI components.',
    deliverables: [
      'Full frontend & backend source code',
      'Mini project report compliant with college guidelines',
      'Presentation slides with system sequence diagrams',
      'Live demonstration setup guide'
    ],
    durationWeeks: 1,
    highlight: 'Easy Viva Explanations',
    idealFor: ['Web Technologies Lab', 'Semester 5/6 CSE', 'BCA']
  },
  {
    id: 't5-mini-3',
    title: 'IoT Home Automation via Bluetooth & Mobile App',
    tagline: 'Microcontroller relay controller enabling phone control of home appliances.',
    level: 'mini',
    domain: 'iot_embedded',
    domainLabel: 'IoT & Embedded',
    techStack: ['Arduino UNO', 'HC-05 Bluetooth', 'Embedded C', 'MIT App Inventor'],
    description: 'A classic hardware mini-project controlling 4 AC relays with mobile Bluetooth signals, designed for easy presentation in college laboratories.',
    deliverables: [
      'Arduino code (.ino) & Android APK installer',
      'Breadboard / Proteus simulation schematic',
      'Printable mini project synopsis and final report',
      'Hardware connection video walkthrough'
    ],
    durationWeeks: 1,
    highlight: 'Zero Coding Struggle',
    idealFor: ['ECE / EEE', 'Mechanical Mechatronics', 'Diploma Students']
  },
  {
    id: 't5-mob-1',
    title: 'Campus Lost & Found Mobile App with Image Matching',
    tagline: 'Cross-platform Flutter application connecting students with lost items across campus.',
    level: 'mini',
    domain: 'mobile_apps',
    domainLabel: 'Mobile Application',
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Storage', 'Cloud Functions'],
    description: 'An intuitive mobile application mini-project featuring student college ID verification, push notifications, and categorized search filters for lost valuables.',
    deliverables: [
      'Cross-platform Flutter code (runs on Android & iOS)',
      'Firebase backend setup guide and JSON configuration',
      'Complete mini-project report with UI wireframes',
      'PowerPoint slides with demo screen recordings'
    ],
    durationWeeks: 2,
    highlight: 'Clean Mobile UI',
    idealFor: ['Mobile App Lab', 'Semester 6 CSE / ISE']
  },
  {
    id: 't5-cyber-1',
    title: 'Phishing URL Detection Engine using Random Forest & XGBoost',
    tagline: 'Cybersecurity project analyzing 16 lexical and DNS features to block scam websites.',
    level: 'main',
    domain: 'cloud_cyber',
    domainLabel: 'Cybersecurity & Cloud',
    techStack: ['Python', 'Scikit-Learn', 'Flask', 'Chrome Extension API', 'Pandas'],
    description: 'An industry-relevant final year project training machine learning classifiers on 50,000+ verified URLs, bundled with a functional browser extension that blocks malicious links in real-time.',
    deliverables: [
      'Trained model pipelines + Flask API + Chrome Extension',
      'Comprehensive 75+ page research report & ROC curves',
      'Viva preparation manual covering network protocols & ML',
      'Presentation deck with live demo scripting'
    ],
    durationWeeks: 3,
    highlight: 'Includes Chrome Extension',
    idealFor: ['Cybersecurity Specialization', 'CSE', 'M.Sc CS']
  }
];

export const SOFTWARE_SERVICES: SoftwareService[] = [
  {
    id: 'serv-mvp',
    title: 'Startup MVP in 2–4 Weeks',
    tagline: 'Transform your startup concept into a clickable, scalable product that secures initial users and seed funding.',
    category: 'startup_mvp',
    features: [
      'Rapid prototype to functional web/mobile MVP',
      'Authentication, role permissions & payment gateway',
      'Scalable cloud architecture (AWS / Vercel / GCP)',
      '100% full IP code ownership transfer with Git repo'
    ],
    technologies: ['React / Next.js', 'Node.js', 'PostgreSQL', 'Tailwind', 'Stripe / Razorpay'],
    turnaround: '2 - 4 Weeks Sprint',
    deliverables: ['Full Source Code', 'Architecture Diagram', 'CI/CD Pipeline', 'Post-Launch Support'],
    icon: 'Rocket'
  },
  {
    id: 'serv-custom',
    title: 'Custom Software & Enterprise Web Applications',
    tagline: 'Bespoke dashboards, operational CRM/ERP tools, and cloud portals tailored to your company workflow.',
    category: 'custom_software',
    features: [
      'Multi-role administrative back-offices and portals',
      'High-throughput RESTful and GraphQL API backends',
      'Automated background jobs and notification queues',
      'Database optimization and query caching'
    ],
    technologies: ['TypeScript', 'FastAPI', 'Express', 'Redis', 'Docker', 'Prisma'],
    turnaround: 'Flexible Milestones',
    deliverables: ['Production Docker Images', 'API Documentation', 'Automated Tests', 'SLA Support'],
    icon: 'Layers'
  },
  {
    id: 'serv-mnc',
    title: 'MNC & Corporate Module Outsourcing',
    tagline: 'Offload specialized modules, legacy system migrations, or sudden bandwidth spikes to our agile senior engineers.',
    category: 'enterprise_mnc',
    features: [
      'Strict non-disclosure agreements (NDA) & code confidentiality',
      'Seamless integration into your existing Git & Jira workflow',
      'Rigorous unit testing, TypeScript strict mode & static linting',
      'Daily standups and bi-weekly milestone demonstrations'
    ],
    technologies: ['React / Angular', 'Python', 'Go', 'Kubernetes', 'PostgreSQL', 'Kafka'],
    turnaround: 'Contract / Monthly Retainer',
    deliverables: ['Sprint Velocity Reports', 'Pull Requests with CI checks', 'Code Reviews'],
    icon: 'Building2'
  },
  {
    id: 'serv-mobile',
    title: 'Cross-Platform Mobile Apps (iOS & Android)',
    tagline: 'Fluid, high-performance native-feeling mobile applications built once and deployed to both app stores.',
    category: 'custom_software',
    features: [
      'Smooth 60fps animations and offline-first data sync',
      'Push notification integrations (OneSignal / FCM)',
      'App Store & Google Play Store submission assistance',
      'Integrated in-app analytics and crash reporting'
    ],
    technologies: ['Flutter', 'React Native', 'Firebase', 'Native Bridges', 'Tailwind'],
    turnaround: '3 - 6 Weeks',
    deliverables: ['Signed APK / IPA builds', 'Store Listing Graphics', 'Source Code Repository'],
    icon: 'Smartphone'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Kavya S.',
    role: 'B.E CSE Graduate (Placed at Infosys)',
    affiliation: 'VTU Affiliated College, Bengaluru',
    type: 'student',
    content: 'Tech Five saved my final year project! I was terrified of the external viva, but their team not only gave us flawless working code for our AI Surveillance project, but they also took a 1-hour live Meet call to drill viva questions with us. We scored 98/100!',
    rating: 5,
    projectOrService: 'Autonomous Drone Surveillance (Main Project)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'Rahul Varma',
    role: 'Co-Founder & CTO',
    affiliation: 'FleetPulse Logistics (Seed-funded Startup)',
    type: 'startup',
    content: 'We needed an operational dashboard and telemetry ingestion service built in 3 weeks for an investor showcase. Tech Five delivered the full Next.js + FastAPI stack ahead of schedule with spotless documentation. Highly recommended for any startup.',
    rating: 5,
    projectOrService: 'Custom IoT Fleet Dispatch MVP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Mohammed Riyas',
    role: 'Final Year ECE Student',
    affiliation: 'Anna University, Chennai',
    type: 'student',
    content: 'Finding someone who actually knows how to write both ESP32 firmware and a modern web dashboard is rare. Tech Five mailed us the tested schematic diagrams, video setup, and gave us a report that our project guide approved in the very first review without any re-corrections.',
    rating: 5,
    projectOrService: 'Smart Health Monitoring (IoT Main Project)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-4',
    name: 'Ananya Deshmukh',
    role: '3rd Year B.Tech IT',
    affiliation: 'Pune University',
    type: 'student',
    content: 'Needed a mini project on short notice within 3 days. Tech Five delivered the Expense Tracker with OCR, complete with a 28-page clean report and PPT. Their quick WhatsApp response made all the difference.',
    rating: 5,
    projectOrService: 'Expense OCR Tracker (Mini Project)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What is included in a Tech Five Student Project package?',
    answer: 'Every project comes with 100% complete executable source code, full setup guide, plagiarism-checked comprehensive project report (as per your university/college format guidelines e.g. IEEE, VTU, Anna Univ), high-impact PowerPoint presentation (PPT), system diagrams (ER, DFD, UML), and a 1-on-1 viva coaching session.',
    category: 'student'
  },
  {
    question: 'Can you install and run the project directly on my personal laptop?',
    answer: 'Yes! Our technical team provides hands-on remote setup via AnyDesk or Google Meet. We install all prerequisites (Python, Node.js, databases, virtual environments, or Arduino IDE) and demonstrate the working project live on your screen so there is zero guesswork.',
    category: 'student'
  },
  {
    question: 'What if our guide or college asks for changes or custom modifications?',
    answer: 'We provide free revisions to ensure your project guide is completely satisfied. Whether it is adjusting the report formatting, adding a specific database column, or tweaking the UI layout, we support you through your intermediate review phases.',
    category: 'student'
  },
  {
    question: 'Do you offer custom software development for startups and MNCs?',
    answer: 'Yes. Tech Five operates a dedicated software services division. We build production-ready MVPs, full-stack web platforms, mobile apps, and microservice APIs for early-stage startups and take on outsourced modules for enterprise/MNC clients under strict NDAs with 100% IP ownership handover.',
    category: 'company'
  },
  {
    question: 'How fast can you deliver a Mini Project vs a Main Project?',
    answer: 'Semester Mini Projects can be delivered within 24 to 72 hours for urgent submissions. Final Year Major Projects typically take 1 to 3 weeks depending on the complexity of hardware or AI model training. Express rush delivery is also available upon request.',
    category: 'student'
  },
  {
    question: 'How do we get started or request a quote?',
    answer: 'You can either use our instant interactive Project Estimator on this page, submit your inquiry through our booking modal, or tap the WhatsApp button for an immediate 1-on-1 chat with our technical coordinator.',
    category: 'general'
  }
];
