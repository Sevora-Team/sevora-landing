// Material Symbols Outlined (weight 300, optical size 20), Apache-2.0, by Google.
// Add an icon: drop its SVG into src/assets/icons/ and register it here.
import type { SvgComponent } from 'astro/types';
import ArrowBack from '@/assets/icons/arrow-back.svg';
import ArrowForward from '@/assets/icons/arrow-forward.svg';
import CalendarMonth from '@/assets/icons/calendar-month.svg';
import CallSplit from '@/assets/icons/call-split.svg';
import Check from '@/assets/icons/check.svg';
import CheckCircle from '@/assets/icons/check-circle.svg';
import Close from '@/assets/icons/close.svg';
import EventNote from '@/assets/icons/event-note.svg';
import ExpandMore from '@/assets/icons/expand-more.svg';
import Forum from '@/assets/icons/forum.svg';
import Handshake from '@/assets/icons/handshake.svg';
import Info from '@/assets/icons/info.svg';
import Insights from '@/assets/icons/insights.svg';
import Mail from '@/assets/icons/mail.svg';
import Menu from '@/assets/icons/menu.svg';
import MenuBook from '@/assets/icons/menu-book.svg';
import NorthEast from '@/assets/icons/north-east.svg';
import Notifications from '@/assets/icons/notifications.svg';
import Psychology from '@/assets/icons/psychology.svg';
import Schedule from '@/assets/icons/schedule.svg';
import School from '@/assets/icons/school.svg';
import SmartToy from '@/assets/icons/smart-toy.svg';
import StackedLineChart from '@/assets/icons/stacked-line-chart.svg';
import Storefront from '@/assets/icons/storefront.svg';
import VerifiedUser from '@/assets/icons/verified-user.svg';

export const icons = {
  'arrow-back': ArrowBack,
  'arrow-forward': ArrowForward,
  'calendar-month': CalendarMonth,
  'call-split': CallSplit,
  check: Check,
  'check-circle': CheckCircle,
  close: Close,
  'event-note': EventNote,
  'expand-more': ExpandMore,
  forum: Forum,
  handshake: Handshake,
  info: Info,
  insights: Insights,
  mail: Mail,
  menu: Menu,
  'menu-book': MenuBook,
  'north-east': NorthEast,
  notifications: Notifications,
  psychology: Psychology,
  schedule: Schedule,
  school: School,
  'smart-toy': SmartToy,
  'stacked-line-chart': StackedLineChart,
  storefront: Storefront,
  'verified-user': VerifiedUser,
} as const satisfies Record<string, SvgComponent>;

export type IconName = keyof typeof icons;
