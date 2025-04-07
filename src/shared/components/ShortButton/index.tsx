import { HTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image"; // 👈 aqui importa o tipo certo
import { Container } from "./styles";

// 👇 altera o tipo de "icon" para StaticImageData
interface ShortButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: StaticImageData;
  selected?: boolean;
  onClick?: () => void;
}

const ShortButton = ({ icon, selected, onClick, ...rest }: ShortButtonProps) => {
  return (
    <Container $isSelected={selected} onClick={onClick} {...rest}>
      <Image src={icon} width={20} height={20} alt="" />
    </Container>
  );
};

export default ShortButton;
