import useIntersectionObsever from "@/hook/useIntersectionObserver";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const CompanyHistory = () => {
  return (
    <Base>
      <Wrapper>
        <Title>회사 연혁</Title>
      </Wrapper>
    </Base>
  );
};

const Base = styled.div`
  background-color: #fff;
  position: relative;
  margin: 3rem 0;
  padding: 2rem;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  padding: 2rem 0;
  font-weight: bolder;
  font-size: 20px;
`;

export default CompanyHistory;
