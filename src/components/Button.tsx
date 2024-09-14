import { ReactNode } from "react";

interface ButtonProp {
  children: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ children, color = "primary", onPress }: ButtonProp) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onPress();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
