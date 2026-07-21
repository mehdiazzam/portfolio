import { Mail } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

export const social = {
  email: "mehdiazzam81@gmail.com",
  emailHref: "mailto:mehdiazzam81@gmail.com",
  github: "https://github.com/mehdiazzam",
  githubHandle: "mehdiazzam",
  linkedin: "https://www.linkedin.com/in/mehdi-azzam-eng/",
  linkedinHandle: "mehdi-azzam-eng",
  whatsapp: "+963945279568",
  whatsappHref: "https://wa.me/963945279568",
} as const;

export type SocialLink = {
  id: "email" | "github" | "linkedin" | "whatsapp";
  href: string;
  label: string;
  handle: string;
  icon: IconType | typeof Mail;
  external: boolean;
};

/** Used in Contact section: email + WhatsApp only */
export const contactLinks: SocialLink[] = [
  {
    id: "email",
    href: `${social.emailHref}?subject=${encodeURIComponent("Project inquiry")}`,
    label: "Email",
    handle: social.email,
    icon: Mail,
    external: false,
  },
  {
    id: "whatsapp",
    href: social.whatsappHref,
    label: "WhatsApp",
    handle: social.whatsapp,
    icon: SiWhatsapp,
    external: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    href: social.emailHref,
    label: "Email",
    handle: social.email,
    icon: Mail,
    external: false,
  },
  {
    id: "github",
    href: social.github,
    label: "GitHub",
    handle: social.githubHandle,
    icon: SiGithub,
    external: true,
  },
  {
    id: "linkedin",
    href: social.linkedin,
    label: "LinkedIn",
    handle: social.linkedinHandle,
    icon: FaLinkedinIn,
    external: true,
  },
];
