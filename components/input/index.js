import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.span`
  display: inline-flex;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 0 1rem;
  height: 50px;
  width: 100%;
  border-style: solid;
  font-weight: bold;
  border-color: ${(props) => (props.incorrect ? 'red' : null)};
  &:focus {
    outline: none;
  }
`;

const Input = ({ type, placeholder, value, onChange, onKeyPress, incorrect }) => {
  return (
    <StyledInput
      {...{
        type,
        placeholder,
        value,
        onChange,
        onKeyPress,
        incorrect,
      }}
    ></StyledInput>
  );
};

export default Input;
