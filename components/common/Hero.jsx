import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import backgroundImg from "@/public/background.jpg";
import TypeIt from "typeit-react";

const Hero = () => {
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

  const [loading, setLoading] = useState(false);
  const [boxAnimation, setBoxAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBoxAnimation(true);
    }, 1000);
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <Base scaledown={scrollTop > 0 ? "true" : "false"}>
      <TypeItWrapper boxAnimation={boxAnimation} loading={loading} scaledown={scrollTop > 0 ? "true" : "false"}>
        <TypeIt
          options={{
            strings: ["YOUR BEST PATNER"],
            speed: 50,
            waitUntilVisible: true,
            cursor: false,
          }}
        />
      </TypeItWrapper>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;

const TypeItWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  width: 50%;
  height: 20%;
  padding: 2rem 4rem;
  color: #fff;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  transition: all 0.3s;
  background-image: url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");

  ${({ scaledown }) =>
    scaledown === "true"
      ? css`
          @media (max-width: 768px) {
            transform: translate(-50%, -50%) scale(0.3);
          }
          transform: translate(-50%, -50%) scale(0.5);
        `
      : undefined}

  ${({ boxAnimation }) =>
    boxAnimation
      ? css`
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
        `
      : css`
          background-position: 50% 0;
          background-repeat: no-repeat;
        `}

  ${({ loading }) =>
    loading
      ? css`
          width: 100vw;
          height: 100vh;
        `
      : css``}
`;

export default Hero;
