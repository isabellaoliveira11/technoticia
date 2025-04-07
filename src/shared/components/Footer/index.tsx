import { useContext } from "react";
import Image from "next/image";

import { ArrowUp, CodeSimple } from "phosphor-react";

import logo from "../../../shared/assets/logos/nanoticia-logo.svg";
import logoWhite from "../../../shared/assets/logos/nanoticia-logo-white.svg";

import { Container } from "./styles";
import smoothScroll from "../../utils/smoothScroll";
import { GlobalContext } from "../../../pages/_app";

interface FooterProps {
  errorWarningLayout?: boolean;
}

const Footer = ({ errorWarningLayout }: FooterProps) => {
  const { isDarkTheme } = useContext(GlobalContext);

  return (
    <Container errorWarningLayout={errorWarningLayout}>
      <div className="logo-and-return-top">
        {!errorWarningLayout && (
          <>
            {isDarkTheme ? (
              <Image src={logoWhite} alt="Logo" width={128} />
            ) : (
              <Image src={logo} alt="Logo" width={128} />
            )}
          </>
        )}

        {!errorWarningLayout && (
          <div className="return-top">
            <button onClick={() => smoothScroll("top")}>
              <h4>Voltar ao topo</h4>
              <ArrowUp weight="thin" size={24} color="#828282" />
            </button>
          </div>
        )}
      </div>
      <div className="copyrights">
        <h4>Copyright © 2025 · Todos os direitos reservados. </h4>
        <h4>
          <CodeSimple weight="bold" size={24} color="#828282" />
          Desenvolvido por{" "}
          <strong>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Isabela Oliveira
            </a>
          </strong>
        </h4>
      </div>
    </Container>
  );
};

export default Footer;
