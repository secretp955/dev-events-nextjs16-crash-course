export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string; // e.g., "2025-11-07"
    time: string; // e.g., "09:00 AM"
    description: string;
    overview: string;
    mode: 'online' | 'offline' | 'hybrid';
    audience: string;
    agenda: string[];
    organizer: string;
    tags: string[];
};

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React Summit US 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "09:00 AM",
        description: "Join the largest React community conference in the United States. Learn from industry leaders, network with peers, and discover the latest trends in React development.",
        overview: "React Summit US 2025 brings together developers, engineers, and tech enthusiasts for an immersive experience in React ecosystem. This conference features keynote speeches from React core team members, hands-on workshops, and networking opportunities.",
        mode: "offline",
        audience: "React developers, Frontend engineers, JavaScript enthusiasts",
        agenda: [
            "09:00 AM - Welcome & Keynote",
            "10:30 AM - Advanced React Patterns",
            "12:00 PM - Lunch Break",
            "01:30 PM - State Management Workshop",
            "03:00 PM - React Performance Optimization",
            "04:30 PM - Networking Session"
        ],
        organizer: "React Summit Organization",
        tags: ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
        image: "/images/event2.png",
        title: "KubeCon + CloudNativeCon Europe 2026",
        slug: "kubecon-cloudnativecon-eu-2026",
        location: "Vienna, Austria",
        date: "2026-03-18",
        time: "10:00 AM",
        description: "The premier conference for Kubernetes and cloud-native technologies in Europe. Connect with the community driving cloud-native innovation.",
        overview: "KubeCon + CloudNativeCon Europe is the flagship event for Kubernetes and cloud-native technologies. Join thousands of developers, operators, and technical leaders to explore the latest in container orchestration, microservices, and cloud infrastructure.",
        mode: "hybrid",
        audience: "DevOps engineers, Cloud architects, SREs, Kubernetes users",
        agenda: [
            "10:00 AM - Opening Keynote",
            "11:30 AM - Kubernetes Deep Dive",
            "01:00 PM - Lunch",
            "02:30 PM - Cloud-Native Security",
            "04:00 PM - Service Mesh Workshop",
            "05:30 PM - Community Meetup"
        ],
        organizer: "Cloud Native Computing Foundation",
        tags: ["Kubernetes", "Cloud Native", "DevOps", "Containers"]
    },
    {
        image: "/images/event3.png",
        title: "AWS re:Invent 2025",
        slug: "aws-reinvent-2025",
        location: "Las Vegas, NV, USA",
        date: "2025-12-01",
        time: "08:30 AM",
        description: "The world's largest cloud computing conference. Learn about AWS services, get hands-on training, and network with cloud professionals from around the globe.",
        overview: "AWS re:Invent is the premier cloud computing event featuring thousands of technical sessions, hands-on labs, and certification opportunities. Discover new AWS services, learn best practices, and connect with the global AWS community.",
        mode: "offline",
        audience: "Cloud engineers, Solutions architects, AWS users, IT professionals",
        agenda: [
            "08:30 AM - Keynote Address",
            "10:00 AM - AWS Service Deep Dives",
            "12:00 PM - Lunch Break",
            "01:30 PM - Hands-on Labs",
            "03:30 PM - Architecture Patterns",
            "05:00 PM - Certification Prep Sessions"
        ],
        organizer: "Amazon Web Services",
        tags: ["AWS", "Cloud Computing", "Infrastructure", "DevOps"]
    },
    {
        image: "/images/event4.png",
        title: "Next.js Conf 2025",
        slug: "nextjs-conf-2025",
        location: "Los Angeles, CA, USA (Hybrid)",
        date: "2025-11-12",
        time: "09:30 AM",
        description: "The official Next.js conference featuring the latest updates, best practices, and community insights on the React framework for production.",
        overview: "Next.js Conf brings together the Next.js community to share knowledge, learn about new features, and explore the future of full-stack React development. Join us for talks, workshops, and networking.",
        mode: "hybrid",
        audience: "Next.js developers, Full-stack engineers, React developers",
        agenda: [
            "09:30 AM - Opening Keynote",
            "11:00 AM - Next.js 15 Features",
            "12:30 PM - Lunch",
            "02:00 PM - Server Components Workshop",
            "03:30 PM - Performance Optimization",
            "05:00 PM - Community Showcase"
        ],
        organizer: "Vercel",
        tags: ["Next.js", "React", "Full-Stack", "Web Development"]
    },
    {
        image: "/images/event5.png",
        title: "Google Cloud Next 2026",
        slug: "google-cloud-next-2026",
        location: "San Jose, CA, USA",
        date: "2026-04-07",
        time: "09:00 AM",
        description: "Explore the future of cloud computing with Google Cloud. Learn about AI, data analytics, security, and infrastructure solutions.",
        overview: "Google Cloud Next is the premier event for Google Cloud Platform users. Discover new products, learn from experts, and get hands-on experience with cutting-edge cloud technologies including AI, machine learning, and data analytics.",
        mode: "offline",
        audience: "Cloud architects, Data engineers, ML engineers, GCP users",
        agenda: [
            "09:00 AM - Keynote Presentation",
            "10:30 AM - AI & ML Sessions",
            "12:00 PM - Networking Lunch",
            "01:30 PM - Data Analytics Workshop",
            "03:00 PM - Security Best Practices",
            "04:30 PM - Platform Updates"
        ],
        organizer: "Google Cloud",
        tags: ["Google Cloud", "AI", "Machine Learning", "Cloud Computing"]
    },
    {
        image: "/images/event6.png",
        title: "ETHGlobal Hackathon: Paris 2026",
        slug: "ethglobal-paris-2026",
        location: "Paris, France",
        date: "2026-07-10",
        time: "10:00 AM",
        description: "Join the premier Ethereum hackathon in Paris. Build innovative dApps, compete for prizes, and collaborate with the best Web3 developers.",
        overview: "ETHGlobal Paris brings together developers, designers, and entrepreneurs to build the future of Web3. This hackathon features workshops, mentorship, and the opportunity to showcase your project to industry leaders and investors.",
        mode: "offline",
        audience: "Blockchain developers, Web3 enthusiasts, Smart contract developers",
        agenda: [
            "10:00 AM - Opening Ceremony",
            "11:00 AM - Workshops & Mentorship",
            "12:00 PM - Hacking Begins",
            "02:00 PM - Lunch",
            "06:00 PM - Dinner Break",
            "10:00 PM - Late Night Coding"
        ],
        organizer: "ETHGlobal",
        tags: ["Ethereum", "Web3", "Blockchain", "Smart Contracts"]
    },
    {
        image: "/images/event-full.png",
        title: "Open Source Summit North America 2026",
        slug: "oss-na-2026",
        location: "Vancouver, Canada",
        date: "2026-06-22",
        time: "09:00 AM",
        description: "The leading conference for open source developers, technologists, and community leaders. Explore the latest in open source innovation.",
        overview: "Open Source Summit North America is the premier event for open source professionals. Learn about new projects, contribute to communities, and network with open source leaders from around the world.",
        mode: "hybrid",
        audience: "Open source contributors, Developers, Community leaders",
        agenda: [
            "09:00 AM - Keynote Address",
            "10:30 AM - Community Talks",
            "12:00 PM - Lunch",
            "01:30 PM - Technical Workshops",
            "03:30 PM - Project Showcases",
            "05:00 PM - Networking Reception"
        ],
        organizer: "The Linux Foundation",
        tags: ["Open Source", "Linux", "Community", "Software Development"]
    },
];

export default events;