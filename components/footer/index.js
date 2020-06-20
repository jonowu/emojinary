import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 74px;
  display: flex;
`;

const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 0 2.5rem;
  max-width: calc(1280px + 2rem);
`;

const Footer = ({ children }) => {
  if (!children) {
    return null;
  }

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Footer;
