import Image from "next/image";

import LinkBreak from "../../../../shared/assets/icons/LinkBreak.svg";
import logo from "../../../../shared/assets/logos/nanoticia-logo.svg";

import Footer from "../../../../shared/components/Footer";

import { Container } from "./styles";

const ErrorWarning = () => {
  return (
    <Container>
      <Image src={logo} height={24} alt="" />

      <div className="warning">
        <Image src={LinkBreak} width={80} height={80} alt="" />

        <h2>
          <strong>Ops...</strong> algo deu errado! <br /> Voltaremos em breve.
        </h2>
      </div>

      <div className="footer-content">
        <Footer errorWarningLayout />
      </div>
    </Container>
  );
};

export default ErrorWarning;