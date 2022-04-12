import { useTranslation } from "react-i18next";
import i18n from "../i18nextConfig";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <button type="button" onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>
      <button type="button" onClick={() => i18n.changeLanguage("de")}>
        DE
      </button>
      <p>{t("welcome-text")}</p>
    </div>
  );
}
