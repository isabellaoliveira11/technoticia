import { HTMLAttributes } from "react";
<<<<<<< HEAD
import Image, { StaticImageData } from "next/image"; // 👈 aqui importa o tipo certo
import { Container } from "./styles";

// 👇 altera o tipo de "icon" para StaticImageData
interface ShortButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: StaticImageData;
=======
import Image from "next/image";
import { Container } from "./styles";

interface ShortButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370
  selected?: boolean;
  onClick?: () => void;
}

<<<<<<< HEAD
const ShortButton = ({ icon, selected, onClick, ...rest }: ShortButtonProps) => {
  return (
    <Container $isSelected={selected} onClick={onClick} {...rest}>
=======
const ShortButton = ({ icon, selected, onClick }: ShortButtonProps) => {
  return (
    <Container $isSelected={selected} onClick={onClick}>
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370
      <Image src={icon} width={20} height={20} alt="" />
    </Container>
  );
};

export default ShortButton;
