import styled from "@emotion/styled";
import Header from "./Header";
import Hero from "./Hero";
import { useEffect } from "react";
import Introduce from "./Introduce";
import CompanyInfo from "../home/CompanyInfo";

const Layout = () => {
  return (
    <Base>
      <Header />
      <Hero />
      <Introduce />
      <CompanyInfo />
    </Base>
  );
};

const Base = styled.div`
  overflow: hidden;
`;

const Intro = styled.div``;

export default Layout;
