import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-flex;
  position: relative;
`;

const StyledAnchor = styled.a`
  background-color: orange;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
`;

const StyledButton = styled.a`
  background-color: orange;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
`;

const Button = ({ type, href, children, onClick }) => {
  return (
    <Wrapper>
      {type === 'link' && (
        <Link href={href}>
          <StyledAnchor>{children}</StyledAnchor>
        </Link>
      )}
      {type === 'button' && <StyledButton onClick={onClick}>{children}</StyledButton>}
    </Wrapper>
  );
};

export default Button;
