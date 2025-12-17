import { socialLinks } from "./socialLinks";

export const siteConfig = {
	name: "Byway Fit",
	description: "Track your exercises, monitor progress, and save it safely",
	keywords: ["mobile app", "landing page", "astro", "react", "typescript"],
	logo: "/assets/logo.png",
	storeLinks: {
		apple: "#",
		google: "#",
	},
	socialLinks,
} as const;