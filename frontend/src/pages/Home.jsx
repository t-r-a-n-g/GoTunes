import { useTranslation } from "react-i18next";
import Authentification from "./Authentification";
import UserProfil from "./UserProfil";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* <button type="button" onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>
      <button type="button" onClick={() => i18n.changeLanguage("de")}>
        DE
      </button>
      <p>{t("welcome-text")}</p> */}
      <Authentification />
      <UserProfil />
    </div>
  );
}
