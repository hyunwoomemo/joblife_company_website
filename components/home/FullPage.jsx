import styled from "@emotion/styled";
import { useScroll, motion } from "framer-motion";

const Fullpage = () => {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  return (
    <>
      <Page style={{ y: scrollYProgress.current * -100 + "%" }}>
        <h1>Page 1</h1>
      </Page>
      <Page style={{ y: (scrollYProgress.current - 0.33) * -100 + "%" }}>
        <h1>Page 2</h1>
      </Page>
      <Page style={{ y: (scrollYProgress.current - 0.66) * -100 + "%" }}>
        <h1>Page 3</h1>
      </Page>
    </>
  );
};

const Page = styled(motion.div)`
  height: 100vh;
`;

export default Fullpage;
