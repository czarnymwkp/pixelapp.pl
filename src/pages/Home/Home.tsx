import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen">
      <div></div>
      <h1 className="text-white">{t("welcome")}</h1>
    </div>
  );
};
