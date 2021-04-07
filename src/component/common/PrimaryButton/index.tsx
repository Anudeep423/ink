import { FC } from 'react'
import styled from 'styled-components'

const Button = styled.button<{
  height?: any,
  width?: any,
}>`
box-sizing: border-box;
text-align: center;
align-self: center;
${({ height, width, theme: { color: { WHITE_1, GREY_1 } } }) => `
height: ${isNaN(height) ? height : height + 'px'};
width: ${isNaN(width) ? width : width + 'px'};
background: transparent;
border-radius: 4px;
border: 1px solid ${GREY_1};
padding: 6px 16px;
font-size: 14px;
line-height: 20px;
color: ${GREY_1};
margin: auto;
cursor: pointer;
outline: none;
&:hover {
  &:enabled {
    background: ${WHITE_1};
  }
}
&:focus-visible {
  box-shadow: 0 0 4px 1px ${GREY_1};
}
&:disabled {
  cursor: not-allowed;
}
`}
`;

type Props = {
  id?: string,
  className?: string,
  disabled?: boolean,
  label?: string,
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: any,
  height?: any,
  width?: any,
  tabIndex?: number,
  children?: any
}

const PrimaryButton: FC<Props> = ({
  id = '',
  className = '',
  disabled = false,
  label = 'Label',
  type = 'button',
  onClick,
  height = 32,
  width = 'auto',
  tabIndex,
  children
}) => (
  <Button
    id={id}
    type={type}
    height={height}
    width={width}
    disabled={disabled}
    tabIndex={tabIndex}
    onClick={onClick}
    className={`center-flex regular ${className}`}>{!!children ? children : label}</Button>
)

export default PrimaryButton