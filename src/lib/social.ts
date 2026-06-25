import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

export const social = {
  email: "mehdiazzam81@gmail.com",
  emailHref: "mailto:mehdiazzam81@gmail.com",
  github: "https://github.com/mehdiazzam",
  githubHandle: "mehdiazzam",
  linkedin: "https://www.linkedin.com/in/mehdi-azzam-eng/",
  linkedinHandle: "mehdi-azzam-eng",
} as const;

export type SocialLink = {
  id: "email" | "github" | "linkedin";
  href: string;
  label: string;
  handle: string;
  icon: IconType | typeof Mail;
  external: boolean;
};

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
