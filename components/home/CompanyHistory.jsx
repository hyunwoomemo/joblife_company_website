import useIntersectionObsever from "@/hook/useIntersectionObserver";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const CompanyHistory = () => {
  return (
    <Base
      initial={{ transform: "translateX(100vw)" }}
      whileInView={{
        transform: "translateX(0)",
      }}
      viewport={{ once: false }}
    >
      <Wrapper>
        <Title>회사 연혁</Title>
      </Wrapper>
    </Base>
  );
};

const Base = styled(motion.div)`
  background-color: gray;
  position: relative;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  padding: 2rem 0;
  font-weight: bolder;
  font-size: 20px;
`;

export default CompanyHistory;
