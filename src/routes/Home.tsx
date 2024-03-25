import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 1280px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(p) => p.theme.accentColor};
`;
function Home() {
  return (
    <>
      <Container>
        <Header>
          <Title>FCGG</Title>
        </Header>
        <form>
          <input type="text" placeholder="Enter user ID" required />
          <button type="submit">Fetch User Data</button>
        </form>
      </Container>
    </>
  );
}

export default Home;
