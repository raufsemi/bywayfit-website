import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "Byway Fit",
	description: "Track your workouts, monitor your progress, and back up your data to the cloud with ease.",
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],
	logo: "/assets/byway.png",
	storeLinks: {
		apple: "#",
		google: "#",
	},
	socialLinks,
} as const;