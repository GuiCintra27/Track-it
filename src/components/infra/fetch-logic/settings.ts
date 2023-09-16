import { AnyAction, Dispatch } from "redux";
import { setSettings } from "../storage/settings-slice";
import { i18n } from "i18next";

interface handleSettingsFormProps {
  data: {
    theme: string;
    language: string;
  };
  settings: {
    theme: string;
    language: string;
  };
  dispatch: Dispatch<AnyAction>;
  i18n: i18n;
}

export function handleSettingsForm({
  data,
  settings,
  dispatch,
  i18n
}: handleSettingsFormProps) {
  const theme = data.theme.length > 0 ? data.theme : settings.theme;
  const language = data.language.length > 0 ? data.language : settings.language;

  language.length > 0 && i18n.changeLanguage(language)
  dispatch(
    setSettings({
      settings: {
        theme,
        language,
      },
    })
  );
}
