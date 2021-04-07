import { FC } from 'react'
import styled from 'styled-components'
import PrimaryTextArea from '../../../../common/PrimaryTextArea'
import AdditionalInfo from './AdditionalInfo'
import Hierarchy from './Hierarchy'

const Container = styled.div.attrs({ className: 'd-flex ai-center' })`
flex-direction: row;
align-items: baseline;
box-sizing: border-box;
border-radius: 4px;
padding-left: 20px;
.info-holder {
  width: 70%;
}
.info-holder {
  width: 70%;
}
.hierarchy-holder {
  width: 30%;
}
`;

const TextAreaAndInfo: FC<{}> = () => (
  <Container>
    <div className="info-holder">
      <PrimaryTextArea label="Definition"
      placeholder="Define the new term or use our suggestion..."
       className="mb-16" markButton={true} />
      <PrimaryTextArea label="Description"
      placeholder="Describe the new term or use our suggestion..."
      height={189}
      className="mb-16" />
      <AdditionalInfo />
    </div>
    <Hierarchy className="hierarchy-holder" />

  </Container>
)

export default TextAreaAndInfo