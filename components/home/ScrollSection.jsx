import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

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

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "100vw",
      },
      {
        translateX: "-410vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  });

  return (
    <ScrollSectionOuter>
      <Container ref={triggerRef}>
        <ScrollSectionInner ref={sectionRef}>
          {services.map((v, i) => {
            return (
              <ScrollSectionItem
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: false }}
              >
                <ServiceImg src={v.img}></ServiceImg>
                <TextWrapper>
                  <ServiceName>{v.name}</ServiceName>
                  {v.text.map((v1, i1) => {
                    return <ServiceText key={i1}>{v1}</ServiceText>;
                  })}
                </TextWrapper>
              </ScrollSectionItem>
            );
          })}
        </ScrollSectionInner>
      </Container>
    </ScrollSectionOuter>
  );
};

export default ScrollSection;

const ScrollSectionOuter = styled.section`
  overflow: hidden;
`;

const Container = styled.div``;

const ScrollSectionInner = styled.div`
  height: 100vh;
  width: 400vw;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const ScrollSectionItem = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  > h3 {
  }
`;

const ServiceItem = styled(motion.div)`
  width: 48%;
  min-width: 200px;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex: 1 1 auto;
  }
`;

const ServiceImg = styled.img`
  height: 300px;
  width: 20%;
  border-radius: 5px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceName = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bolder;
  font-size: 18px;
`;
const ServiceText = styled.div`
  position: relative;
  &:before {
    content: "🔸";
    position: absolute;
    right: 100%;
  }
  word-break: keep-all;
  line-height: 20px;
`;
