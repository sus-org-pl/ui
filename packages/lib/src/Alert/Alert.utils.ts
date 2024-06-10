import type { ButtonColor } from "../Button/Button.types";
import type { AlertColor } from "./Alert.types";

interface GetAlertButtonConfigProps {
  color: AlertColor;
}

export const getAlertButtonConfig = ({ color }: GetAlertButtonConfigProps) => {
  const btnColor: ButtonColor = color === "yellow" ? "black" : "white";

  return {
    btnColor,
  };
};
