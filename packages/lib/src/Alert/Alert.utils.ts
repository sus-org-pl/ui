import type { ButtonAsComponent, ButtonColor } from "../Button/Button.types";
import type { AlertColor, AlertCtaAction } from "./Alert.types";

interface GetAlertButtonConfigProps {
  color: AlertColor;
  ctaAction: AlertCtaAction;
}

export const getAlertButtonConfig = ({
  color,
  ctaAction,
}: GetAlertButtonConfigProps) => {
  const btnComponent: ButtonAsComponent =
    typeof ctaAction === "string" ? "a" : "button";
  const btnColor: ButtonColor = color === "yellow" ? "black" : "white";

  return {
    btnColor,
    btnComponent,
  };
};
