import { ROUTES } from "@/app/constants/routes";
import { t } from "i18next";
import { matchPath, useLocation } from "react-router-dom";
import { LanguageSelector } from "../language-selector";

type MenuItem = {
  name: string;
  route: string;
  isActive: (pathname: string) => boolean;
};

// @ts-ignore
const MENU_ITEMS = [
  {
    name: t("routes.listing"),
    route: ROUTES.home,
    isActive: (pathname) =>
      !!matchPath(ROUTES.listing, pathname) || pathname === ROUTES.home,
  },
] satisfies MenuItem[];

export function Menu() {
  // @ts-ignore
  const location = useLocation();

  return (
    <div className="w-full bg-accent px-3">
      <div className="w-full flex gap-3 py-1 max-w-[580px] mx-auto">
        <div className="flex-1 justify-center items-center">
          {/* {MENU_ITEMS.map((menuItem) => (
        <Link
        key={menuItem.name}
        to={menuItem.route}
        className={cn(
          "px-6 py-2 rounded-xs",
          "text-xs md:text-sm font-medium text-gray-700 hover:text-gray-900",
          "hover:bg-gray-700/90 hover:text-white",
          "transition-colors duration-200 ease-in-out",
          menuItem.isActive(location.pathname) && "bg-gray-700 text-white"
          )}
          >
          {menuItem.name}
          </Link>
          ))} */}
        </div>

        <LanguageSelector />
      </div>
    </div>
  );
}
