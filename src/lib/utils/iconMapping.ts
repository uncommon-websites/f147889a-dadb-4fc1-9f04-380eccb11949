// Icon mapping utility to convert string icon names to components
import type { ComponentType } from 'svelte';

// Import all the icons we need from local icon components
import IconUsers from '$lib/icons/Users.svelte';
import IconClock from '$lib/icons/Clock.svelte';
import IconLaptop from '$lib/icons/Laptop.svelte';
import IconBuilding from '$lib/icons/Building.svelte';
import IconBriefcase from '$lib/icons/Briefcase.svelte';
import IconHeart from '$lib/icons/Heart.svelte';
import IconGlobe from '$lib/icons/Globe.svelte';
import IconCheck from '$lib/icons/Check.svelte';
import IconX from '$lib/icons/X.svelte';
import IconArrowUpRight from '$lib/icons/ArrowUpRight.svelte';
import IconChevronRight from '$lib/icons/ChevronRight.svelte';
import IconChevronDown from '$lib/icons/ChevronDown.svelte';
import IconMenu from '$lib/icons/Menu.svelte';

// Create the mapping object
const iconMap: Record<string, ComponentType> = {
  'users': IconUsers,
  'clipboard-list': IconClipboardList,
  'chart-bar': IconChartBar,
  'shield-check': IconShieldCheck,
  'chart-line': IconChartLine,
  'shield-alert': IconShieldAlert,
  'presentation-chart': IconPresentationChart,
  'document-check': IconDocumentCheck,
  'code-bracket': IconCodeBracket,
  'cpu-chip': IconCpuChip,
  'user-group': IconUserGroup,
  'chart-bar-square': IconChartBarSquare,
  'academic-cap': IconAcademicCap,
  'clipboard-document-check': IconClipboardDocumentCheck,
  'chart-pie': IconChartPie,
  'cog': IconCog,
};

export function getIconComponent(iconName: string): ComponentType | undefined {
  return iconMap[iconName];
}

export default iconMap;