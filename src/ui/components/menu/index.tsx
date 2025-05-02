import { ROUTES } from '@/app/constants/routes';
import { cn } from '@/app/lib/utils/styles';
import { t } from 'i18next';
import { Link, matchPath, useLocation } from 'react-router-dom';

type MenuItem = {
  name: string;
  route: string;
  isActive: (pathname: string) => boolean;
};

const MENU_ITEMS = [
  {
    name: t('routes.listing'),
    route: ROUTES.home,
    isActive: (pathname) => !!matchPath(ROUTES.listing, pathname) || pathname === ROUTES.home,
  },
] satisfies MenuItem[];

export function Menu() {
  const location = useLocation();

  return (
    <div className="w-full flex justify-center items-center gap-3 px-4 bg-accent">
      {MENU_ITEMS.map((menuItem) => (
        <Link
          key={menuItem.name}
          to={menuItem.route}
          className={cn(
            'px-6 py-2 rounded-xs',
            'text-xs md:text-sm font-medium text-gray-700 hover:text-gray-900',
            'hover:bg-gray-700/90 hover:text-white',
            'transition-colors duration-200 ease-in-out',
            menuItem.isActive(location.pathname) && 'bg-gray-700 text-white',
          )}
        >
          {menuItem.name}
        </Link>
      ))}
    </div>
  );
}
