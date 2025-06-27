import { translations } from "./translations";
import { useSelector } from "react-redux";

export function useT() {
  const lang = useSelector((state) => state.language.current);
  return translations[lang] || translations.en;
}
