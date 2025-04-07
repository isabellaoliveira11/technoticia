import styled, { css } from "styled-components";

interface ContainerProps {
  design: string;
  $hasImage: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  :hover {
    .thumb-image {
      div {
        transition: all 0.5s;
        transform: scale(1.1);
      }
    }

    img {
      transition: all 0.5s;
      transform: scale(1.1);
    }

    .info {
      h2, h4 {
        transition: all 0.4s ease-in-out;
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
  }

  .thumb-image {
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      !props.$hasImage &&
      css`
        border: 1px solidrgb(210, 103, 101);
      `}

    > div {
      transition: all 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    width: 50%;

    .category {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;

      p {
        margin: 0;
      }

      svg {
        width: 40px;
        height: 40px;
      }
    }

    h2 {
      margin-bottom: 1.5rem;
      line-height: 2.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    h4 {
      transition: all 0.5s;
    }

    p.description {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-bottom: 2rem;
      line-height: 1rem;
      color: var(--GRAY);
    }

    p.publishedAt {
      margin-bottom: 0.5rem;
      color: var(--GRAY);
    }

    P {
      color: var(--GREEN);
    }
  }

  ${(props) =>
    props.design === "highlight" &&
    css`
      .thumb-image {
        width: 600px;
        height: 400px;
      }
      gap: 2.5rem;

      h4 {
        color: var(--GREEN);
        margin-bottom: 1.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    `};

  ${(props) =>
    props.design === "vertical" &&
    css`
      width: 300px;

      @media (min-width: 500px) {
        .info {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-direction: column;
          height: 180px;
        }
      }

      .thumb-image {
        width: 300px;
        height: 180px;
      }

      margin-top: 0;
      flex-direction: column;
      gap: 1.5rem;

      h4 {
        margin-bottom: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    `};

  ${(props) =>
    props.design === "horizontal" &&
    css`
      gap: 2rem;

      .info {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-direction: column;
        height: 180px;

        .info-content {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          width: 100%;
        }
      }

      h4 {
        margin-bottom: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      p {
        margin-bottom: 1rem;
      }

      .thumb-image {
        width: 300px;
        height: 180px;

        div {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
        }
      }
    `};

  @media (max-width: 500px) {
    width: 100%;

    .thumb-image {
      width: 100%;

      img {
        object-fit: cover;
      }
    }

    p {
      font-size: 12px;
    }

    h4 {
      font-size: 16px;
      margin-bottom: 0.5rem;
    }

    .info {
      max-width: 100%;

      p.publishedAt {
        margin-bottom: 0.25rem;
      }
    }
  }
`;
