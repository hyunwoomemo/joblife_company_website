import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Header = () => {
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <Base loading={loading} scrollTop={scrollTop > 0 ? "true" : "false"}>
      <Wrapper>
        <Title>잡라이프</Title>
        <Nav onClick={() => scrollTo({ top: 3000, behavior: "smooth" })}>
          <NavItem>회사 소개</NavItem>
          <NavItem>회사 연혁</NavItem>
          <NavItem>주요 거래처</NavItem>
          <NavItem>조직도</NavItem>
        </Nav>
      </Wrapper>
    </Base>
  );
};

const Base = styled.div`
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  opacity: 0.7;
  z-index: 9;
  transition: all 0.3s;
  width: 100%;

  ${({ loading, scrollTop }) =>
    loading && scrollTop === "false"
      ? css`
          transform: translateY(0);
        `
      : css`
          transform: translateY(-100px);
        `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  background-image: url(https://www.joblife.co.kr:9161/joblife/img/main/logo.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  text-indent: -99rem;
  width: 150px;
  height: 100px;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Nav = styled.ul`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li``;

export default Header;
