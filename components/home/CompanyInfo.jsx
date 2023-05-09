import useIntersectionObsever from "@/hook/useIntersectionObserver";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const CompanyInfo = () => {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "근로자 파견",
      text: [
        "일반사무 및 사무보조, 채권회수 (방문추심) 고객상담(인/아웃/심사/채권)",
        "운전원 업무, 컴퓨터 준전문가, 모니터링, 임원비서, 리셉션, 안내 데스크",
        "통번역, 문서관리 사무원, 전산직 및 유지보수, 제도기술 준전문가 등 다수 직종",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1641029956071-272caab5857a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
      name: "도급 운영",
      text: ["콜센터 도급 운영 및 전문 인력 보유", "잡라이프 본사 2층 여기어때 업무 도급", "판매/캐셔/물류 도급 운영", "보안/경비/미화 도급 운영"],
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "채용 대행",
      text: ["대규모 물류센터 채용 대행 전문", "내부 축적 DB 활용으로 속도있는 수급력", "전 업종 채용대행", "채용대행 전문팀 운영"],
    },
    {
      img: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      name: "HR 컨설팅",
      text: ["인재 확보 기획", "경력 개발", "업무 실적 분석"],
    },
  ];

  const targetRef = useRef(null);

  useIntersectionObsever(targetRef);

  const container = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Base /* ref={targetRef} */>
      <Wrapper>
        <Title>주요 서비스</Title>
        <ServiceWrapper variants={container} initial="hidden" whileInView="show">
          {services.map((v, i) => {
            return (
              <ServiceItem key={i} variants={item}>
                <ServiceImg src={v.img}></ServiceImg>
                <ServiceName>{v.name}</ServiceName>
                {v.text.map((v1, i1) => {
                  return <ServiceText key={i1}>{v1}</ServiceText>;
                })}
              </ServiceItem>
            );
          })}
        </ServiceWrapper>
      </Wrapper>
    </Base>
  );
};

const Base = styled(motion.div)`
  @media (min-width: 768px) {
    position: relative;
  }
  background-color: #fff;
  margin: 2rem auto;
`;

const Wrapper = styled.div`
  /* max-width: 900px;
  width: 100%;
  margin: 0 auto; */
`;

const Title = styled(motion.div)`
  padding: 2rem 1rem;
  font-weight: bolder;
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-size: 24px;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const ServiceWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  justify-content: center;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const ServiceItem = styled(motion.div)`
  width: 23%;
  min-width: 200px;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;

  @media (max-width: 769px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`;

const ServiceImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px;

  @media (max-width: 768px) {
    height: auto;
    width: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const ServiceName = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bolder;
  font-size: 18px;
`;
const ServiceText = styled.div`
  position: relative;
  margin-left: 1rem;

  &:before {
    content: "🔸";
    position: absolute;
    right: 100%;
  }

  word-break: keep-all;
  line-height: 20px;
`;

export default CompanyInfo;
