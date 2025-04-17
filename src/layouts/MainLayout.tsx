import styled from "@emotion/styled";
import Link from "next/link";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <header>
        <h1>휴런 - 문혜민 과제</h1>
        <nav>
          <StyledLink href="/">과제 1</StyledLink>
          <StyledLink href="/assignment2">과제 2</StyledLink>
          <StyledLink href="/assignment3">과제 3</StyledLink>
        </nav>
      </header>
      <main>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  > header {
    padding: 1.6rem 2.4rem;
    background: #1e1e1e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.white};
    }
    > nav {
      display: flex;
      gap: 1.6rem;
    }
    > main {
      padding: 2.4rem;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.size14};
  &:hover {
    text-decoration: underline;
  }
`;
