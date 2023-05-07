import styled from "@emotion/styled";

const CompanyInfo = () => {
  return (
    <Base>
      <Wrapper>
        <Title>주요 서비스</Title>
      </Wrapper>
    </Base>
  );
};

const Base = styled.div`
  height: 2000px;
  background-color: #e4babd;
  position: relative;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 48px;
`;

export default CompanyInfo;
