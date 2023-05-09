import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import backgroundImg from "@/public/background.jpg";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";

const Hero = () => {
  // 스크롤 이벤트 트래킹
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
  };

  useEffect(() => {
    if (typeof window !== "object") return;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // setTimeout loading
  const [loading, setLoading] = useState(false);
  // useEffect unmount를 위해 기명함수 정의
  const handleLoading = () => {
    setLoading(true);
  };

  useEffect(() => {
    setTimeout(handleLoading, 700);

    return () => {
      clearTimeout(handleLoading, 700);
    };
  }, []);

  // background Image 관련

  /* const [size, setSize] = useState(110);

  useEffect(() => {
    const handlePosition = setInterval(() => {
      if (size > 100 && loading) {
        setSize((prev) => prev - 0.5);
      }
      document.querySelector("#wrapper").style.backgroundSize = `${size}%`;
    }, 100);

    return () => {
      clearInterval(handlePosition);
    };
  }, [size, loading]); */

  return (
    <Base scaledown={scrollTop > 0 ? "true" : "false"}>
      <TypeItWrapper id="wrapper" /* size={size} */ loading={loading} scaledown={scrollTop > 0 ? "true" : "false"}>
        <Wrapper scaledown={scrollTop > 0 ? "true" : "false"}>
          <TypeIt
            options={{
              speed: 30,
              waitUntilVisible: true,
              cursor: false,
              breakLines: true,
            }}
            getBeforeInit={(instance) => {
              instance.type("YOUR BEST PATNER");

              // Remember to return it!
              return instance;
            }}
          />
          <TypeIt
            options={{
              speed: 30,
              waitUntilVisible: true,
              cursor: false,
              breakLines: true,
            }}
            getBeforeInit={(instance) => {
              instance.pause(1200).type("WIN-WIN");

              // Remember to return it!
              return instance;
            }}
          />
        </Wrapper>
        <Scroll loading={loading} scaledown={scrollTop > 0 ? "true" : "false"}>
          scroll
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Scroll>
      </TypeItWrapper>
    </Base>
  );
};

const Base = styled(motion.div)`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    transition: all 0.3s;

    ${({ scaledown }) =>
      scaledown === "true"
        ? css`
            height: 80vh;
          `
        : css``}
  }
`;

const TypeItWrapper = styled.div`
  color: #fff;
  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    width: 50%;
    height: 20%;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    transition: all 0.5s;
    background-image: url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");
    background-repeat: no-repeat;
    background-size: cover;

    ${({ scaledown }) =>
      scaledown === "true"
        ? css`
            transform: translate(-50%, -50%) scale(0.5);
            margin-top: 5rem;
          `
        : undefined}

    ${({ loading }) =>
      loading
        ? css`
            width: 100vw;
            height: 100vh;
          `
        : css``}
  }

  @media (max-width: 768px) {
    background-image: url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    height: 300px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  padding: 1rem;
  ${({ scaledown }) =>
    scaledown === "true"
      ? css`
          opacity: 0;
        `
      : undefined}

  text-shadow: 1px 1px 5px black;

  @media (max-width: 768px) {
    font-size: 16px;
    height: 100%;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
`;

const Scroll = styled.div`
  position: absolute;
  bottom: 30px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  animation: ${bounce} 0.5s alternate infinite;

  @media (max-width: 768px) {
    display: none;
  }

  ${({ loading, scaledown }) =>
    loading && scaledown === "false"
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}

  svg {
    width: 20px;
    color: tomato;
  }
`;

export default Hero;
