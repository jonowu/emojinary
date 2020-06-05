import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-flex;
  position: relative;
`;

const StyledAnchor = styled.a`
  background-color: orange;
  color: white;
  padding: 10px 50px;
`;

const Button = ({ href, children }) => {
  return (
    <Wrapper>
      <Link href={href}>
        <StyledAnchor>{children}</StyledAnchor>
      </Link>
    </Wrapper>
  );
};

export default Button;
