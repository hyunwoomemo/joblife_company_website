import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

function centerElement(elementId) {
  const element = document.getElementById(elementId);
  const parent = element.parentElement;

  if (window.scrollY > parent.offsetTop - (document.documentElement.clientHeight - element.offsetHeight) / 2) {
    element.style.position = "fixed";
    element.style.top = "50%";
    element.style.left = "50%";
    element.style.transform = "translate(-50%, -50%)";
  } else {
    element.style.position = "relative";
    element.style.top = "initial";
    element.style.left = "initial";
    element.style.transform = "initial";
  }
}

const Introduce = () => {
  useEffect(() => {
    if (typeof window !== "object") return;

    window.addEventListener("scroll", () => {
      centerElement("introduce");
    });
  }, []);

  const [scrollTop, setScrollTop] = useState(0);
  const [dotWidth, setDotWidth] = useState(0);

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
    if (1500 - scrollTop * 1.5 < 1) {
      setDotWidth(5);
    }
    setDotWidth(1500 - scrollTop * 1.5);
  }, [scrollTop]);

  return (
    <Base>
      <Wrapper id="introduce">
        <MainText>YOUR BEST PATNER</MainText>
        <SubText>
          차별화된 서비스를 위하여 끊임없는 노력과 열정으로 <br />더 큰 만족을 드릴 수 있는 최고의 파트너가 될 것을 약속드립니다
          <RedLine dotWidth={dotWidth}></RedLine>
        </SubText>
      </Wrapper>
    </Base>
  );
};

const Base = styled.div`
  width: 100%;
  margin: 5rem auto;
  text-align: center;

  height: 1500px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainText = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const SubText = styled.div`
  line-height: 30px;
  font-size: 18px;
  position: relative;
`;

const RedLine = styled.div`
  position: fixed;
  right: -5px;
  bottom: 5px;
  background-color: #ee4b57;
  height: 5px;
  display: block;
  transform: translateX(100%);

  ${({ dotWidth }) =>
    dotWidth > 0
      ? css`
          width: ${dotWidth}px;
        `
      : css`
          width: 5px;
        `}
`;

export default Introduce;
