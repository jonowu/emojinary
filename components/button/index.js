import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-flex;
  position: relative;
`;

const StyledAnchor = styled.a`
  background-color: orange;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  max-width: 80px;
  padding: 12px 40px;
  text-align: center;
  width: 80px;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;

const StyledButton = styled.a`
  background-color: orange;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  max-width: 80px;
  padding: 12px 40px;
  text-align: center;
  width: 80px;
  :hover {
    transform: scale(1.1, 1.1);
  }
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
