import { FC, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div<{
  height?: any,
  width?: any,
}>`
${({ height, width, theme: { color: { WHITE_1, GREY_1, GREY_9 } } }) => `
height: 100%;
width: 100%;
min-height: ${isNaN(height) ? height : height + 'px'};
max-width: ${isNaN(width) ? width : width + 'px'};
background: ${WHITE_1};
border-radius: 4px;
box-sizing: border-box;
border: 1px solid ${GREY_9};
padding: 20px 16px;
font-size: 14px;
line-height: 20px;
color: ${GREY_1};
cursor: pointer;
`}
flex-direction: column;
display: flex;
align-items: baseline;
justify-content: end;
position: relative;
`;

const LabelAndButton = styled.div`
width: 100%;
.mark-as-done {
  height: 20px;
  width: 20px;
  margin: 0px;
}
`;

const Lable = styled.label`
${({ theme: { color } }) => `
color: ${color.BLACK_2};
font-size: 16px;
line-height: 20px;
`}
`;

const Input = styled.textarea`
color: ${({ theme: { color } }) => color.GREY_10};
font-family: Mulish Italic;
font-size: 14px;
line-height: 20px;
border: none;
outline: none;
height: 100%;
width: 100%;
margin-top: 12px;
`;

const Counter = styled.span`
color: ${({ theme: { color } }) => color.GREY_10};
position: absolute;
right: 8px;
bottom: 2px;
font-size: 10px;
line-height: 20px;
`;

type Props = {
  id?: string,
  className?: string,
  label?: string,
  height?: any,
  width?: any,
  markButton?: boolean,
  placeholder?: string,
  value?: any
}

const PrimaryTextArea: FC<Props> = ({
  id = '',
  className = '',
  label = 'Label',
  height = 122,
  width = 587,
  markButton = false,
  placeholder = 'Placeholder',
  value = ''
}) => {
  const [inputVal, setInputVal] = useState(value)
  return (
    <Container height={height} width={width}
      className={`center-flex regular ${className}`}>
      {!!markButton && <LabelAndButton className="w-100 between-flex">
        <Lable htmlFor={id}>{label}</Lable>
        <div className="d-flex c-pointer">
          <input className="mark-as-done" type="radio" />
          <Lable className="ml-8">Mark as Done</Lable>
        </div>
      </LabelAndButton>}
      <Input id={id}
        placeholder={placeholder}
        value={inputVal}
        onChange={e => setInputVal(e.target.value)} />
      <Counter>{inputVal.length}/100</Counter>
    </Container>
  )
}

export default PrimaryTextArea