export type EventItem = {
    title: string;
    image: string; // path under public/images
    slug: string;
    location: string;
    date: string; // human-friendly date
    time: string; // local time range
};

export const events: EventItem[] = [
    {
        title: "AWS re:Invent 2025",
        image: "/images/event1.png",
        slug: "aws-reinvent-2025",
        location: "Las Vegas, NV, USA",
        date: "Dec 1–5, 2025",
        time: "08:00–18:00 PST",
    },
    {
        title: "Google I/O 2025",
        image: "/images/event2.png",
        slug: "google-io-2025",
        location: "Shoreline Amphitheatre, Mountain View, CA, USA + Online",
        date: "May 2025",
        time: "09:00–17:00 PDT",
    },
    {
        title: "Apple WWDC 2025",
        image: "/images/event3.png",
        slug: "apple-wwdc-2025",
        location: "Cupertino, CA, USA + Online",
        date: "Jun 2025",
        time: "10:00–17:00 PDT",
    },
    {
        title: "Microsoft Build 2025",
        image: "/images/event4.png",
        slug: "microsoft-build-2025",
        location: "Seattle, WA, USA + Online",
        date: "May 2025",
        time: "09:00–17:00 PDT",
    },
    {
        title: "React Conf 2025",
        image: "/images/event5.png",
        slug: "react-conf-2025",
        location: "USA (TBA) + Online",
        date: "Fall 2025",
        time: "09:00–17:00 local",
    },
    {
        title: "DEF CON 33",
        image: "/images/event6.png",
        slug: "defcon-33",
        location: "Las Vegas, NV, USA",
        date: "Aug 2025",
        time: "24/7 tracks",
    },
];

export default events;


