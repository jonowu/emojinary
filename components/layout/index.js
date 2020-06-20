import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background: #fffff3;
`;

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
