import React from "react";
import styled from "styled-components";

const TextInput = ({
  error,
  valid,
  value,
  onChange,
  type = "text",
  width,
  required,
}) => {
  return (
    <TextInputWrapper width={width}>
      <InputWrapper>
        <Input
          valid={valid}
          error={error}
          value={value}
          onChange={onChange}
          type={type}
          width={width}
          required={required}
        />
      </InputWrapper>
    </TextInputWrapper>
  );
};

const TextInputWrapper = styled.div`
  margin: 1rem 0;
  width: ${(props) => props.width};
  border-bottom: 3px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-family: inherit;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.01em;
  color: white;
  border: none;
  background-color: transparent;
  width: ${(props) => props.width};
  outline: none;
  }
`;

export default TextInput;
