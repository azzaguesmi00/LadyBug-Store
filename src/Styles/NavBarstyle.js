import styled from "styled-components";

export const Nav = styled.nav`
  background-color:rgb(231, 171, 171);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const NavItem = styled.li`
  font-size: 1.2rem;
  font-weight: 500;

  a {
    text-decoration: none;
    color: white;
    transition: 0.3s;

    &:hover {
      color: black;
    }
  }
`;
