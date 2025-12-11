import {
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
} from "react-icons/ri";
import type { SocialLink } from "@/types/app";

export const socialLinks: SocialLink[] = [
	{
		url: "https://instagram.com/raufsemi",
		icon: RiInstagramFill,
		label: "Instagram",
	},
	{
		url: "https://telegram.com",
		icon: RiTelegram2Fill,
		label: "Telegram",
	},
	{
		url: "https://x.com/bywayfit",
		icon: RiTwitterXFill,
		label: "Twitter",
	},
];
