const about = [
    "Anna university was established in 1978 as a unitary type of University. Anna University is \
    one of the largest state-run universities in the country with[more than 571]affiliated colleges. It offers \
    high education in engineering, technology and allied Sciences relevant to the current and projected \
    needs of the society. Besides promoting research and disseminating knowledge gained there from, it \
    fosters cooperation between the academic and industrial communities."
    ,
    "First National Symposium on Emerging Technologies in DOROTICS (Drones &amp; Robotics) \
    will be held in College of Engineering Guindy, Anna University, Chennai - 25 from March 30th to \
    April 1st 2023. This event is organized in view with the DOROTICS summit in association with the \
    Board of International Aviation Games(BIAG), CTF and Robotics Club, CEG and Robotics Club, \
    MIT, sponsored by CED, Anna University."
];

const committee_titles = [
    "Chief Patron", "Patron", "Co-patron", "Organizing chairs", "Organizing committee"
]

const committee_members = {
    "Chief Patron": ["Dr.R.Velraj, Vice Chancellor, Anna University, Chennai"],

    "Patron": ["Dr. G.Ravikumar, Registrar, Anna University, Chennai"],

    "Co-patron": ["Dr.L.Suganthi, Dean, College of Engineering, Guindy, Anna University, Chennai"],

    "Organizing chairs": [
        "Dr. S. Chitrakala, Professor, DCSE, CEG, Anna University",
        "Dr. T.Mala, Associate Professor, DIST, CEG, Anna University"
    ],

    "Organizing committee": [
        "Dr.Selvi Ravindran, Asst. Prof, DIST, CEG, Anna University",
        "Dr.E.Shanmuga Priya, Asst. Prof, DCSE, CEG, Anna University",
        "Ms.M.S.Karthika Devi, Asst. Prof, DCSE, CEG, Anna University",
        "Dr.A.Saravana Kumar, Deputy Director, CASR, MIT",
        "Dr. D. Narashiman, Teaching Fellow, DIST, CEG, Anna University"
    ],

};

const track_titles = [
    "UAV Technology", "Robotics and its Applications", "Drone and Robotics",
    "ICT Support systems for Drones and Robotics"
];

const track_description = "Papers related to all aspects of techniques and applications offering insights \
for Drones and Robotics are welcome. Accepted and registered papers will be published in conference proceedings. \
Best Paper from each track will be awarded a cash prize of ₹5000 (per Track). Conference topics include (but are not limited to) the following:";

const track_topics = {
    "UAV Technology": [
        "UAV system design",
        "UAV sensor Technology",
        "Modelling and Simulation of UAVs",
        "Swarm UAVs",
        "UAV fault tolerant control",
        "Stealth UAV",
        "UAV Data processing",
        "Obstacle sense and Avoidance",
        "Simultaneous localization and mapping",
        "Biomimicry Drones"
    ],
    "Robotics and its Applications": [
        "Cobot", "Robotics and automation for Industry 5.0", "Socially-assistive Robotics",
        "Multi-agent Robotics", "Evolutionary Modular Robotics", "Cooperative Robotics", "Agricultural Robotics",
        "Disaster relief Robotics", "Entertainment Robotics", "Industrial Robotics", "Medical Robotics",
        "Military Robotics", "Space Robotics", "Underwater Robotics", "Robots for Bore Well Rescue operation",
        "Robotic scavenger", "Machine Learning for Autonomous Robots", "Legged Robot", "Autonomous Vehicles"
    ],
    "Drone and Robotics": [
        "Intelligent flight path planning",
        "Aerial robotics and UAV application",
        "UAS for precision agriculture",
        "UAS for digital humanity and cultural heritage preservation",
        "Aerial robotics",
        "Aerial robotics and engineering applications",
        "Problems and challenges in aerial robotics",
        "Autonomous aerial robot",
        "ICT Supporting systems",
        "HILS for UAS",
        "SILS for UAS",
        "Network centric UAS operations",
        "RF communication for UAS",
        "Antennas for UAS"
    ],
    "ICT Support systems for Drones and Robotics": [
        "Drone AI technology (Object Detection, Object Counting, Image Segmentation, Image Classification, Change Detection)",
        "Computer Vision for Drone and Robots",
        "Machine Learning /Deep Learning for Drones and Robots",
        "Planning/ Learning/Reasoning for Robots",
        "Data Modelling and Analytics/ Data Visualization",
        "Data Privacy and Security",
        "AI, Robotics and Automation",
        "Big Data Analytics/IoT/NLP/ Cloud Computing",
        "Quantum Drones",
        "Autonomous Navigation",
        "AI solutions for mapping of Drones",
        "Speech Recognition for Drone and Robots control",
        "AI-Powered Drones",
        "Real-Time systems for Drone Swarm",
        "Communication Systems for Drone and Robotics",
        "AI Drones applications in various sectors",
        "AI solutions for damage assessment by drones",
        "Role of AI for intelligent robots in Agriculture, Disaster Relief, Entertainment, Industry and thrust sectors",
        "Recent Trends in Robotics and Computer Integrated Manufacturing",
        "Block Chain Technology and Co-operative Robotics"
    ]
};

const submissionGuidelines = {
    desc: [
        "Prospective authors are encouraged to submit their papers through ",
        "Easy chair",
        ". All the submissions sent must be original and should not have been published or under consideration for publication in any other journal."
    ],
    link: "https://easychair.org/conferences/?conf=dorotics2023"
};


const dates = [
    {
        "event": "Paper Submission Due",
        "date": ["31", "st", " Jan 2023"]
    },
    {
        "event": "Notification of Acceptance",
        "date": ["20", "th", " Feb 2023"]
    },
    {
        "event": "Final camera-ready paper submission",
        "date": ["2", "nd", " Mar 2023"]
    },
    {
        "event": "Registration",
        "date": ["16", "th", " Mar 2023"]
    }
]

const register_details = [

    {

        "category": "Students",
        "presentation": "INR 3000/-",
        "participation": "INR 2000/-",
        "link": " ",
        "link_status": "opening soon"
    },

    {

        "category": "Academicians",
        "presentation": "INR 5000/-",
        "participation": "INR 3000/-",
        "link": " ",
        "link_status": "opening soon"
    },

    {

        "category": "Industry",
        "presentation": "INR 7000/-",
        "participation": "INR 4000/-",
        "link": " ",
        "link_status": "opening soon"
    }
]

const register_description = "Registered participants will be provided with kit, food and refreshments.";

export {
    about, committee_titles, committee_members, track_titles, track_description,
    track_topics, submissionGuidelines, dates, register_details, register_description
};