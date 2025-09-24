import { t } from "i18next";
import { useState } from "react";

import type { Language } from "@/app/types/language";
import { Button } from "../shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shared/dropdown-menu";

type LanguageItem = {
  code: Language;
  name: string;
  flag: string;
};

const languages = [
  {
    code: "ptBr",
    name: t("generic.language_names.pt_br"),
    flag: "🇧🇷",
  },
] satisfies LanguageItem[];

export function LanguageSelector() {
  const [selectedCode, setSelectedCode] = useState<Language>("ptBr");

  const handleSelectChange = (value: Language) => {
    setSelectedCode(value);
  };

  const selectedLanguage = languages.find(({ code }) => code === selectedCode);

  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 text-xs p-1 px-2 h-8">
            <img
              className="w-4 h-4 select-none"
              src={`/flags/${selectedCode}.svg`}
              alt={selectedLanguage?.flag}
            />

            <span>{selectedLanguage?.name}</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" sideOffset={4}>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleSelectChange(lang.code)}
            >
              <span className="flex items-center gap-2">
                <img
                  className="w-4 h-4 select-none"
                  src={`/flags/${lang.code}.svg`}
                  alt={lang.code}
                />
                {lang.name}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
