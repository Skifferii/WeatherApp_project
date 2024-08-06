import styled from '@emotion/styled'

interface StyledButtonProps {
  disabled: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  outline: none;
  border: 10p;
  padding: 10px;
  /* background: #1f27f5; */
  background: ${({ disabled }) => disabled ? '#AEAEAE' : '#565656'};
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`

/* .button:disabled {
  background-color: grey;
  cursor: auto;
} */
