import { Container } from "./styles";

interface SectionTitleProps {
  icon: any;
  title: string;
}

const SectionTitle = ({ icon, title }: SectionTitleProps) => {
  return (
    <Container>
      {icon}
      <h2>{title}</h2>
    </Container>
  );
};

export default SectionTitle;