import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { Feature } from "@/types/app";

export const features: Feature[] = [
	{
		title: "Track Workouts",
		description: "Log your exercises, monitor progress, and save data to the cloud?",
		icon: FiStar,
	},
	{
		title: "Quick Workouts",
		description: "Fast, effective exercises anytime.",
		icon: FiZap,
	},
	{
		title: "Progress Reports",
		description: "See your improvements over time with easy-to-read stats and charts.",
		icon: FiBox,
	},
];
