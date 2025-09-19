import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-screen">
      <h1 className="text-white">{t("welcome")}</h1>
      <button
        className="p-3 border-2 border-white rounded m-4 "
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
      <button
        className="p-3 border-2 border-white rounded m-4 "
        onClick={() => i18n.changeLanguage("pl")}
      >
        PL
      </button>
    </div>
  );
};
