import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({ className: 'd-flex ai-center' })`
width: 100%;
height: 180px;
${({ theme: { color: { WHITE_1, GREY_9 } } }) => `
background: ${WHITE_1};
border: 1px solid ${GREY_9};
`}
flex-direction: column;
align-items: baseline;
box-sizing: border-box;
border-radius: 4px;
padding: 20px 16px;
`;

const Title = styled.div`
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const Detail = styled.div`
display: flex;
margin: 6px 0px;
color: ${({ theme: { color } }) => color.GREY_6};
`;

const DetailTitle = styled.div`
min-width: 120px;
`;

const DetailVal = styled.div`
margin-left: 30px;
`;

const AdditionalInfo: FC<{}> = () => (
  <Container>
    <Title className="regular">Additional info</Title>

    <Detail>
      <DetailTitle className="light">Purpose of use</DetailTitle>
      <DetailVal className="italic">Enter...</DetailVal>
    </Detail>

    <Detail>
      <DetailTitle className="light">Risk level</DetailTitle>
      <DetailVal className="italic">Enter...</DetailVal>
    </Detail>

    <Detail>
      <DetailTitle className="light">Priority ranking</DetailTitle>
      <DetailVal className="italic">Enter...</DetailVal>
    </Detail>

    <Detail>
      <DetailTitle className="light">Line of business</DetailTitle>
      <DetailVal className="italic">Enter...</DetailVal>
    </Detail>

  </Container>
)

export default AdditionalInfo