import styled from "styled-components";
import { colors, fonts, align, deviceSizes } from "../../themeVariables";

export const H1Tag = styled.h1`
  font: 900 1.4em/1.4rem ${fonts.header};
  color: ${colors.primary};
  text-align: ${align.center};
  border-bottom: 0.2rem ${colors.primary} solid;
  padding-bottom: 0.2rem;
  @media (max-width: ${deviceSizes.mobile}) {
    font: 900 1.4em/1.4rem ${fonts.header};
  }
`;

export const H1TagGreen = styled.h1`
  font: 900 3em/1rem ${fonts.header};
  color: #0f0;
  @media (max-width: ${deviceSizes.mobile}) {
    font: 900 1.4em/1.4rem ${fonts.header};
  }
`;

export const H1TagRed = styled.h1`
  font: 900 3em/1rem ${fonts.header};
  color: #f00;
  @media (max-width: ${deviceSizes.mobile}) {
    font: 900 1.4em/1.4rem ${fonts.header};
  }
`;

export const H2Tag = styled.h2`
  font: 900 1.1em/1.1rem ${fonts.header};
  color: ${colors.secondary};
  line-height: 1rem;
`;

export const H3Tag = styled.h3`
  font: 900 1.8em/1.8rem ${fonts.header};
  color: ${colors.ternary};
  line-height: 1rem;
`;

export const H4Tag = styled.h4`
  font: 900 0.8em/0.8rem ${fonts.header};
  color: ${colors.secondary};
  line-height: 1rem;
`;
