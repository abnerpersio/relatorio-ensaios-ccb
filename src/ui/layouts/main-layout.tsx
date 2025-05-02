import { LanguageSelector } from '@/ui/components/language-selector';
import { Menu } from '@/ui/components/menu';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-start gap-2 py-2 px-0">
        <div className="w-full flex justify-end px-3">
          <LanguageSelector />
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-6">
          <div className="flex-1 w-full flex justify-center items-center px-3">
            <img className="w-32 md:w-44" src="/logo-ccb-light.png" alt="Logo Congregação Cristã no Brasil" />
          </div>

          <Menu />
        </div>
      </div>

      <div className="w-full px-2 py-3">
        <Outlet />
      </div>
    </div>
  );
}
