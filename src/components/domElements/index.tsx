import styled from "styled-components";
import { colors, fonts, align, deviceSizes } from "../../themeVariables";

export const PlayerSurround = styled.div`
  width: 20rem;
  padding: 1.6rem 1.6rem 0.5rem;
  border: 0.25rem ${colors.primary} solid;
  background: ${colors.white};
  border-radius: 1rem;
`;

export const BoardSurround = styled.div`
  text-align: ${align.center};
  width: 60rem;
  height: 46rem;
  padding: 1.6rem 1.6rem 0.5rem;
  margin: 0 auto;
  background: ${colors.grey};
  @media (max-width: ${deviceSizes.mobile}) {
    flex-direction: column;
    width: 90%;
    height: 46rem;
  }
`;

export const ActionButton = styled.button`
  background: ${colors.white};
  border: 0.2rem ${colors.primary} solid;
  color: ${colors.primary};
  cursor: pointer;
  font: 900 0.8rem/1rem ${fonts.header};
  margin: 1rem auto;
  outline: none;
  padding: 0.5rem;
  :hover {
    border: 0.2rem ${colors.orange} solid;
    color: ${colors.orange};
    opacity: 0.85;
    transition: 0.3s;
  }
  @media (max-width: ${deviceSizes.mobile}) {
    width: 6.4rem;
    left: 13.6rem;
    position: absolute;
    top: 4.7rem;
  }
`;
