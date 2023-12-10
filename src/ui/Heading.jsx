import styled, { css } from "styled-components";

// const test = css`
//   background-color: yellow;
//   ${10 > 15 && " text-align: center;"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 20px;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 16px;
      font-weight: 400;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 30px;
      font-weight: 600;
      text-align: center;
    `}
`;

export default Heading;
