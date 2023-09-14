import { AnyAction, Dispatch } from "redux";
import { setSettings } from "../storage/settings-slice";

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
}

export function handleSettingsForm({
  data,
  settings,
  dispatch,
}: handleSettingsFormProps) {
  const theme = data.theme.length > 0 ? data.theme : settings.theme;
  const language = data.language.length > 0 ? data.language : settings.language;

  dispatch(
    setSettings({
      settings: {
        theme, language
      }
    })
  )
}
