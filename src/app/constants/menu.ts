import { ROUTES } from '@/app/constants/routes';
import { t } from 'i18next';
import { LayersIcon, MessageSquareIcon, RefreshCwIcon, type LucideIcon } from 'lucide-react';

type MenuItem = {
  title: string;
  icon?: LucideIcon;
  path: string;
};

export const MENU_SETTINGS: MenuItem[] = [
  {
    title: t('routes.invites'),
    icon: LayersIcon,
    path: ROUTES.dashboard.invites,
  },
  {
    title: t('routes.wa'),
    icon: RefreshCwIcon,
    path: ROUTES.dashboard.wa,
  },
  {
    title: t('routes.messages'),
    icon: MessageSquareIcon,
    path: ROUTES.dashboard.messages,
  },
];
