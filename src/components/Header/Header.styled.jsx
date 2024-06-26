import styled from '@emotion/styled';

export const NavBar = styled.header`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.aqua};

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-bottom-left-radius: ${({ theme }) => theme.spacing(3.5)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing(3.5)};
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  /* background-color: aqua; */
`;

export const NavText = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  text-transform: uppercase;
  /*  */

  margin-bottom: 0;
`;

export const Logo = styled.img`
  width: 100px;
`;
