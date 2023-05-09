import styled from "@emotion/styled";
import Header from "./Header";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import Introduce from "./Introduce";
import CompanyInfo from "../home/CompanyInfo";
import { css } from "@emotion/react";
import CompanyHistory from "../home/CompanyHistory";
import Fullpage from "../home/FullPage";
import ScrollSection from "../home/ScrollSection";

const Layout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <Base loading={loading}>
      <Header />
      <Hero />
      <Introduce />
      {/* <ScrollSection /> */}
      <CompanyInfo />
      {/* <CompanyHistory /> */}
    </Base>
  );
};

const Base = styled.div`
  overflow: hidden;

  ${({ loading }) =>
    loading
      ? css``
      : css`
          position: fixed;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        `}
`;

const Intro = styled.div``;

export default Layout;
