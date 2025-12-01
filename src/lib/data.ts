export const personalInfo = {
    name: "Alexandre Madeira",
    location: "Lisbon, Portugal",
    email: "aa.madeira@outlook.com",
    github: "https://github.com/aamadeira",
    linkedin: "https://www.linkedin.com/in/alexandre-madeira-7143a2216/",
    blog: "https://aamadeira.github.io/blog",
};

export const workExperience = [
    {
        company: "Aptoide",
        location: "Lisbon, Portugal",
        position: "Full-Stack Developer",
        period: "Nov 2023 - Present",
        achievements: [
            "Contributing to the development of the backend and frontend of the Aptoide Connect platform, introducing new features and improving existing ones.",
            "Built Connectoide, an AI Customer Support Chatbot, from scratch and integrated it into the Aptoide Connect platform as a part of my master's thesis.",
        ],
    },
];

export const education = [
    {
        institution: "NOVA School of Science and Technology (NOVA FCT)",
        location: "Caparica, Portugal",
        degree: "MSc in Computer Science",
        period: "Sep 2023 - Present",
        achievements: [
            "Completed the degree entirely as a working student.",
            "Accomplished a final GPA of 16 (0-20).",
            'Delivered and defended my thesis titled "<i>Connectoide: A Case Study on the Effectiveness of AI Conversational Assistants in Aptoide Connect</i>" with Paulo Trezentos (Aptoide CEO) and João Magalhães (Professor) as my advisors and acheived a final grade of 18 (0-20)',
        ],
    },
    {
        institution: "Instituto Superior de Engenharia de Lisboa (ISEL)",
        location: "Lisbon, Portugal",
        degree: "BSc in Computer Science and Engineering",
        period: "Sep 2020 - Jul 2023",
        achievements: ["Accomplished a final GPA of 16 (0-20).", "1-week Game Jam contest winner.", "Mentored 4 first-year students."],
    },
];

export const skills = {
    programmingLanguages: ["TypeScript", "JavaScript", "Kotlin", "Java", "Python", "Dart"],
    frontendDevelopment: ["Angular.js", "React.js", "Flutter", "HTML", "CSS"],
    backendDevelopment: ["Node.js", "Express.js", "Spring Framework"],
    databaseAndStorage: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "AWS S3"],
    cloudAndDevOps: ["GCP", "AWS", "Azure", "Docker"],
    toolsAndServices: ["Git", "GitHub", "Jira", "Postman"],
};

export const projects = [
    {
        title: "Connectoide",
        github: undefined,
        description: [
            "An AI Customer Support Chatbot for the Aptoide Connect platform, built as part of my master's thesis.",
            "Developed as a retrieval-augmented generation (RAG) project that uses OpenAI's GPT-4o mini model, integrated with LangChain.",
            "Uses Aptoide Connect's documentation as source of truth to answer users' questions.",
            "Enhanced customer support effectiveness, efficiency and overall user experience.",
            "Became the first line of support for users on the platform.",
            "Covered the entire project lifecycle, including initial research, architectural design, technical decision-making, deployment, launch, and comprehensive evaluation of system performance.",
        ],
    },
    {
        title: "SyncUp",
        //github: "https://github.com/aamadeira/syncup",
        github: undefined,
        description: [
            "A book club app with a weekly book suggestions and chatting system.",
            "Developed a business model for an app idea.",
            "Implemented the backend portion of the project using Spring Framework.",
            "Implemented a mobile app for Android and iOS using Flutter.",
            "Built as the final project of my bachelor's degree.",
            "Achieved a final grade of 18/20.",
        ],
    },
    {
        title: "Exploding Battleships",
        //github: "https://github.com/aamadeira/exploding-battleships",
        github: undefined,
        description: [
            "A 2-player cross-platform battleships game.",
            "Implemented the backend portion of the project using Spring Framework.",
            "Implemented a native Android client application using Kotlin.",
            "Implemented a browser client app using React and Typescript.",
        ],
    },
    {
        title: "Garbage in Paradise",
        //github: "https://github.com/aamadeira/garbage-in-paradise",
        github: undefined,
        description: ["A high-score-based game built with the Godot game engine for a 5-day game jam.", "Winner of the LEIM Game Jam 2022 at ISEL."],
    },
];

export const awards = [
    {
        name: "LEIM Game Jam",
        issuer: "Diogo Lopes, ISEL",
        date: "Mar 2022",
        type: "University",
        position: "First Place",
    },
];
