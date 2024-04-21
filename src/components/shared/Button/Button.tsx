import { ButtonProps } from "../../../models/interfaces/ButtonProps/ButtonProps";
import { ButtonComponent } from "./ButtonStyle";

const Button = ({ title, priority, action, disable, type }: ButtonProps) => {
  return (
    <ButtonComponent
      onClick={action}
      type={type ? type : "button"}
      disabled={disable ? disable : false}
      priority={priority}
    >
      {title}
    </ButtonComponent>
  );
};

export default Button;
