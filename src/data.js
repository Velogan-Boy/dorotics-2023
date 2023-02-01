const about = [
   'Anna university was established in 1978 as a unitary type of University. Anna University is \
    one of the largest state-run universities in the country with[more than 571]affiliated colleges. It offers \
    high education in engineering, technology and allied Sciences relevant to the current and projected \
    needs of the society. Besides promoting research and disseminating knowledge gained there from, it \
    fosters cooperation between the academic and industrial communities.',
   'First National Symposium on Emerging Technologies in DOROTICS (Drones &amp; Robotics) \
    will be held in College of Engineering Guindy, Anna University, Chennai - 25 from March 30th to \
    April 1st 2023. This event is organized in view with the DOROTICS summit in association with the \
    Board of International Aviation Games(BIAG), CTF and Robotics Club, CEG and Robotics Club, \
    MIT, sponsored by CED, Anna University.',
];

const committee_titles = ['Chief Patron', 'Patron', 'Co-patron', 'Organizing chairs', 'Organizing committee', 'Technical committee'];

const committee_members = {
   'Chief Patron': ['Dr.R.Velraj, Vice Chancellor, Anna University, Chennai'],

   Patron: ['Dr. G.Ravikumar, Registrar, Anna University, Chennai'],

   'Co-patron': ['Dr.L.Suganthi, Dean, College of Engineering, Guindy, Anna University, Chennai'],

   'Organizing chairs': ['Dr. S. Chitrakala, Professor, DCSE, CEG, Anna University', 'Dr. T.Mala, Associate Professor, DIST, CEG, Anna University'],

   'Organizing committee': [
      'Dr.Selvi Ravindran, Asst. Prof, DIST, CEG, Anna University',
      'Dr.E.Shanmuga Priya, Asst. Prof, DCSE, CEG, Anna University',
      'Ms.M.S.Karthika Devi, Asst. Prof, DCSE, CEG, Anna University',
      'Dr.A.Saravana Kumar, Deputy Director, CASR, MIT',
      'Dr. D. Narashiman, Teaching Fellow, DIST, CEG, Anna University',
   ],

   'Technical committee': [
      'Venkatraman Narayanan, Principal Tech Lead Manager - Motion Planning at Aurora, San Francisco Bay Area',
      'Asokan Thondiyath, Professor, Indian Institute of Technology Madras',
      'Dr.Pradip K.Das, Professor, CSE Department, IIT Guwahati, Assam',
      'Dr.R.Balasubramanian, Professor, CSE Department, IIT Roorkee',
      'Dr.Leena Vachhani, Professor, IIT Bombay, Powai, Mumbai',
      'Dr.P.Suresh kumar, Scientist G, Aeronautical Development Agency, Ministry of Defense, Bangalore',
      'Arpita Sinha, Professor, Systems and Control Engineering, IIT Bombay',
      'Dr. Sriparna Saha, Associate Professor, CSE Department, Indian Institute of Technology Patna',
      'Dr. S D Madhu Kumar, Professor, CSE Department, National Institute of Technology Calicut',
      'Prof. Sreekumar M, Professor, IIIT kanchipuram',
      'Dr. Veena Thenkanidiyoor, Associate Professor, National Institute of Technology Goa',
      'Dinesh Manoharan, CTO Aerospace & Defence Systems, UCAL Technologies, Chennai',
      'Dr. K. Srinivasan, Associate Professor, IC, NIT- trichy',
      'Dr. V. Sankaranarayanan, Professor, EEE, NIT- trichy',
      'Dr. S.Moorthi, Associate Professor, EEE, NIT- trichy',
      'Dr. Devpriya soni, Associate Professor, Department of Computer Science & Engineering and Information Technology',
      'Dr. Suganya Devi, Assistant Professor Grade-I, CSE Department, National Institute of Technology Silchar',
      'Subash S, System Engineer, Honeywell Technology Solutions, Bangalore',
      'Dr. P. Hariharan, Professor (DoME), Director (Centre for Constituent Colleges (CCC)),Anna University, Chennai',
      'Dr. K. Udayakumar, Professor,Department of EEE,Anna University , Chennai',
      'Dr B. Vinod, Professor, Department of Robotics and Automation, PSG',
   ],
};

const track_titles = ['AI and Data Science', 'UAV Technology', 'Robotics and its Applications', 'Drone and Robotics', 'ICT Support systems for Drones and Robotics'];

const track_description =
   'Papers related to all aspects of techniques and applications offering insights \
for Drones and Robotics are welcome. Accepted and registered papers will be published in conference proceedings. \
Best Paper from each track will be awarded a cash prize of ₹5000 (per Track). Symposium topics include (but are not limited to) the following:';

const track_topics = {
   'AI and Data Science': [
      'ML/DL/Reinforcement/Soft Computing',
      'Explainable AI',
      'AI Conversational Systems',
      'AI for smart city',
      'AI & Creativity',
      'AR/ VR',
      'Image and Video Analytics',
      'Speech Recognition Systems',
      'Cognitive Science and AI',
      'IoT/ Cloud Computing',
      'Network Security/ Cyber Security',
      'Social Network Analysis',
      'Ontology and Semantic Web',
   ],
   'UAV Technology': [
      'UAV system design',
      'UAV sensor Technology',
      'Modelling and Simulation of UAVs',
      'Swarm UAVs',
      'UAV fault tolerant control',
      'Stealth UAV',
      'UAV Data processing',
      'Obstacle sense and Avoidance',
      'Simultaneous localization and mapping',
      'Biomimicry Drones',
   ],
   'Robotics and its Applications': [
      'Cobot',
      'Robotics and automation for Industry 5.0',
      'Socially-assistive Robotics',
      'Multi-agent Robotics',
      'Evolutionary Modular Robotics',
      'Cooperative Robotics',
      'Agricultural Robotics',
      'Disaster relief Robotics',
      'Entertainment Robotics',
      'Industrial Robotics',
      'Medical Robotics',
      'Military Robotics',
      'Space Robotics',
      'Underwater Robotics',
      'Robots for Bore Well Rescue operation',
      'Robotic scavenger',
      'Machine Learning for Autonomous Robots',
      'Legged Robot',
      'Autonomous Vehicles',
   ],
   'Drone and Robotics': [
      'Intelligent flight path planning',
      'Aerial robotics and UAV application',
      'UAS for precision agriculture',
      'UAS for digital humanity and cultural heritage preservation',
      'Aerial robotics',
      'Aerial robotics and engineering applications',
      'Problems and challenges in aerial robotics',
      'Autonomous aerial robot',
      'ICT Supporting systems',
      'HILS for UAS',
      'SILS for UAS',
      'Network centric UAS operations',
      'RF communication for UAS',
      'Antennas for UAS',
   ],
   'ICT Support systems for Drones and Robotics': [
      'Drone AI technology (Object Detection, Object Counting, Image Segmentation, Image Classification, Change Detection)',
      'Computer Vision for Drone and Robots',
      'Machine Learning /Deep Learning for Drones and Robots',
      'Planning/ Learning/Reasoning for Robots',
      'Data Privacy and Security',
      'AI, Robotics and Automation',
      'Quantum Drones',
      'Autonomous Navigation',
      'AI solutions for mapping of Drones',
      'Speech Recognition for Drone and Robots control',
      'AI-Powered Drones',
      'Real-Time systems for Drone Swarm',
      'Communication Systems for Drone and Robotics',
      'AI Drones applications in various sectors',
      'AI solutions for damage assessment by drones',
      'Role of AI for intelligent robots in Agriculture, Disaster Relief, Entertainment, Industry and thrust sectors',
      'Recent Trends in Robotics and Computer Integrated Manufacturing',
      'Co-operative Robotics',
   ],
};

const submissionGuidelines = [
   'Authors should submit original paper and should not have been published anywhere else or be under review for any journal or other conferences.',
   'The written manuscript should be thoroughly checked for grammatical or typographical errors before submission.',
   'The manuscripts should be at least four (4) pages long but not exceed eight (8) pages, should not use smaller than 10pt font size.',
   'Tables, figures and images should have appropriate captions and be of good quality.',
   'The full article must be submitted as a MS Word file in DOC or DOCX format or in PDF format.',
   'Upload the full paper through the EasyChair platform.',
   'Any paper which does not follow the guidelines may not be considered for publication in the conference proceedings.',
];

const submissionFormat = [
   'It is required that the manuscript follows the standard IEEE.',
   'Please click here to download the IEEE paper templates , IEEE - Manuscript Templates for Conference Proceedings',
];

const dates = [
   {
      event: 'Paper Submission Due',
      date: ['15', 'th', ' Feb 2023'],
   },
   {
      event: 'Notification of Acceptance',
      date: ['20', 'th', ' Feb 2023'],
   },
   {
      event: 'Final camera-ready paper submission',
      date: ['2', 'nd', ' Mar 2023'],
   },
   {
      event: 'Registration',
      date: ['16', 'th', ' Mar 2023'],
   },
];

const register_details = [
   {
      category: 'Students',
      presentation: 'INR 3000/-',
      coAuthor: 'INR 2000/-',
      participation: 'INR 2000/-',
   },
   {
      category: 'Academicians',
      presentation: 'INR 5000/-',
      coAuthor: 'INR 3000/-',
      participation: 'INR 3000/-',
   },

   {
      category: 'Industry',
      presentation: 'INR 7000/-',
      coAuthor: 'INR 4000/-',
      participation: 'INR 4000/-',
   },
];

const publications = [
   'Accepted and registered papers will be published in conference proceedings.',
   'Selected and extended best papers will be considered for possible publication in the \
following journals based on peer review process by the journals: ',
];
const journals = [
   'The best papers selected in the Symposium by the Judges / Reviewers will be \
    recommended for possible publication in the respective scopes of ICTACT Journals. \
    These papers would be selected for publication after the peer review process by ICT \
    Academy. ICT Academy currently publishes five International Journals:',
   'Selected papers presented will also be published in IMEKO ACTA open journal. (SCOPUS indexed)',
];
const subJournals = {
   one: [
      'ICTACT Journal on Communication Technology',
      'ICTACT Journal on Soft Computing',
      'ICTACT Journal on Image & Video Processing',
      'ICTACT Journal on Microelectronics',
      'ICTACT Journal on Management Studies',
   ],
   two: [],
};

const register_description =
   'At least one author for each accepted paper must register. If Co-Authors wish to participate in the \
symposium, need to register under the “co-author participant” category. Registered participants will be provided with kit, food and refreshments.';

const register_link = 'The registration link will be updated soon in the website.';

const keynote_speakers = [
   {
      photo: '/speakers/dinesh_manoharan.jpg',
      speaker: 'Venkatraman Narayanan',
      description: 'Principal Tech Lead Manager - Motion Planning',
      organisation: 'Aurora, San Francisco Bay Area',
   },
   {
      photo: '/speakers/sreekumar.png',
      speaker: 'Dinesh Manoharan',
      description: 'CTO, Aerospace & Defence Systems,',
      organisation: 'UCAL Technologies',
   },
   {
      photo: '/speakers/venkatraman_narayanan.jpg',
      speaker: 'Prof. Sreekumar M',
      description: 'Professor',
      organisation: 'IIIT Kanchipuram',
   },
   {
      photo: '/speakers/vinod_PSG.jpg',
      speaker: 'Dr B. Vinod',
      description: 'Professor',
      organisation: 'Department of Robotics and Automation, PSG',
   },
];

export {
   about,
   committee_titles,
   committee_members,
   track_titles,
   track_description,
   publications,
   journals,
   subJournals,
   keynote_speakers,
   track_topics,
   submissionGuidelines,
   dates,
   register_details,
   register_description,
   submissionFormat,
   register_link,
};
