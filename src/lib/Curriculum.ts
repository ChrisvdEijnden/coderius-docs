export type Activity = {
	title: string;
	labels: string[];
	level: "Beginner" | "Medium" | "Advanced";
	link: string;
	order: {
		vwo: number;
		havo: number;
	};
	ownMaterials: boolean;
};

export let curriculum: Activity[] = [
	{
		title: "Python Play",
		labels: ["Python", "Game Development", "2D"],
		level: "Beginner",
		link: "https://play.coderius.nl/",
		order: {
			vwo: 2,
			havo: 2,
		},
		ownMaterials: true,
	},
	{
		title: "Robotica",
		labels: ["Robotics", "Python"],
		level: "Beginner",
		link: "https://robotica.coderius.nl/",
		order: {
			vwo: 3,
			havo: 3,
		},
		ownMaterials: true,
	},
	{
		title: "Vulnerable Web Application",
		labels: ["Security", "Web"],
		level: "Advanced",
		link: "https://dvwa.coderius.nl/",
		order: {
			vwo: 5,
			havo: 5,
		},
		ownMaterials: true,
	},
	{
		title: "Godot Tutorial",
		labels: ["Game Development", "Godot", "2D", "3D", "GDScript"],
		level: "Medium",
		link: "https://godot.coderius.nl/",
		order: {
			vwo: 6,
			havo: 6,
		},
		ownMaterials: true,
	},
];

export let ownCurriculum: Activity[] = curriculum.filter(
	(activity) => activity.ownMaterials,
);

export let levelColors: { [key in Activity["level"]]: string } = {
	Beginner: "green",
	Medium: "orange",
	Advanced: "red",
};
