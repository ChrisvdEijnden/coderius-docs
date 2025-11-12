export type Activity = {
    title: string;
    labels: string[];
    level: "Beginner" | "Medium" | "Advanced";
    link: string;
    order: number;
}

export let curriculum: Activity[] = [
    {
        title: "Python Play",
        labels: ["Python", "Game Development", "2D"],
        level: "Beginner",
        link: "https://play.coderius.nl/",
        order: 1
    },
    {
        title: "Robotica",
        labels: ["Robotics", "Python", "Building"],
        level: "Beginner",
        link: "https://robotica.coderius.nl/",
        order: 2
    },
    {
        title: "Damn Vulnerable Web Application",
        labels: ["Security", "Web"],
        level: "Medium",
        link: "https://dvwa.coderius.nl/",
        order: 5
    }
];

export let levelColors: { [key in Activity["level"]]: string } = {
    "Beginner": "green",
    "Medium": "orange",
    "Advanced": "red"
}