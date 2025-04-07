import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  padding-top: 64px;

  strong {
    color: var(--GREEN);
  }

  .warning {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 64px;
  }

  .footer-content {
    max-width: 1320px;
    width: 100%;
  }
`;