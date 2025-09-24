import { cn } from "@/app/lib/utils/styles";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Menu } from "../components/menu";

export default function MainLayout() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-full flex flex-col gap-2 pt-4">
        <div
          className={cn(
            "w-full max-w-[580px] mx-auto px-3 sm:px-0",
            "flex flex-row items-center justify-between gap-3"
          )}
        >
          <h1 className="text-xl w-full flex-1 text-center sm:text-left uppercase font-extrabold text-gray-700 tracking-wide">
            {t("generic.app_title")}
          </h1>
        </div>

        <Menu />
      </div>

      <div className="w-full px-2 py-3">
        <Outlet />
      </div>
    </div>
  );
}
