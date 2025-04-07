import { HTMLAttributes } from "react";
import Image from "next/image";
import { Container } from "./styles";

interface ShortButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  selected?: boolean;
  onClick?: () => void;
}

const ShortButton = ({ icon, selected, onClick }: ShortButtonProps) => {
  return (
    <Container $isSelected={selected} onClick={onClick}>
      <Image src={icon} width={20} height={20} alt="" />
    </Container>
  );
};

export default ShortButton;
