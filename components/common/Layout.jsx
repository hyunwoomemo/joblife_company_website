import styled from "@emotion/styled";
import Header from "./Header";
import Hero from "./Hero";
import { useEffect } from "react";

const Layout = () => {
  return (
    <Base>
      <Header />
      <Hero />
    </Base>
  );
};

const Base = styled.div`
  height: 3000px;
`;

const Intro = styled.div``;

export default Layout;
