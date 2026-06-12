import {
    SiJavascript, SiTailwindcss, SiNodedotjs,
    SiReact, SiTypescript, SiGit, SiGithub, SiNestjs,
    SiAngular, SiNextdotjs, SiRailway, SiIonic, SiFlutter
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import React from 'react';

const ClaudeCodeIcon = (props: any) => 
    React.createElement('img', {
        src: '/assets/claudecode-color.svg',
        alt: 'Claude Code',
        className: props.className,
        style: { width: '1.2em', height: '1.2em', ...props.style }
    });

export const techStack = [
    { name: 'React', Icon: SiReact, color: '#61DAFB', bgColor: 'transparent' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#000000', bgColor: '#ffffff', sizeClass: 'text-5xl' },
    { name: 'Angular', Icon: SiAngular, color: '#DD0031', bgColor: '#0e0e0eff' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', bgColor: 'transparent' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', bgColor: 'transparent' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', bgColor: 'transparent' },
    { name: 'NestJS', Icon: SiNestjs, color: '#E0234E', bgColor: 'transparent' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', bgColor: 'transparent' },
    { name: 'Git', Icon: SiGit, color: '#F05032', bgColor: 'transparent' },
    { name: 'GitHub', Icon: SiGithub, color: '#ffffff', bgColor: 'transparent' },
    { name: 'Java', Icon: FaJava, color: '#007396', bgColor: 'transparent' },
    { name: 'Railway', Icon: SiRailway, color: '#ffffff', bgColor: 'transparent' },
    { name: 'Ionic', Icon: SiIonic, color: '#3880ff', bgColor: 'transparent' },
    { name: 'Flutter', Icon: SiFlutter, color: '#02569B', bgColor: 'transparent' },
    { name: 'Claude Code', Icon: ClaudeCodeIcon, color: '#CC9B7A', bgColor: 'transparent' },
];
