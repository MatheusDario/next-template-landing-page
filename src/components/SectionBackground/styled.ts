/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

type Background = {
  $background?: boolean;
};

const backgroundactivate = (theme) => css`
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
${({ theme, $background }) => css`
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  ${$background && backgroundactivate(theme)}
  min-height: 100vh;
  display: flex;
  align-items: center;
`}
`;
