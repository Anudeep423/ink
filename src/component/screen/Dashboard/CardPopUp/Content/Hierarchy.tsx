import { FC } from 'react'
import styled from 'styled-components'
import Icon from '../../../../icons';


const Container = styled.div.attrs<{
  className?: string
}>(() => ({
  className: 'd-flex ai-center'
}))`
border: 1px solid ${({ theme: { color } }) => color.GREY_9};
background: ${({ theme: { color } }) => color.WHITE_1};
flex-direction: column;
box-sizing: border-box;
border-radius: 4px;
margin-left: 16px;
margin-right: 19px;
`;

const Title = styled.div.attrs({
  className: 'regular'
})`
width: 100%;
box-sizing: border-box;
font-size: 16px;
line-height: 20px;
padding: 0px 16px;
margin: 12px 0px;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const Map = styled.div`
width: calc(100% - 30px);
height: 279px;
box-sizing: border-box;
padding: 0px 15px;
background-image: url(${require('./map.svg').default});
img {
  width: 100%;
  height: 100%;
}
`;

const TitleAndBtn = styled.div.attrs({ className: 'w-100' })`
`;

const Button = styled.div`
margin: 12px 16px;
cursor: pointer;
.italic {
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme: { color } }) => color.GREY_10};
}
`;

const Hierarchy: FC<{ className?: string }> = ({ className = '' }) => (
  <Container className={className}>
    <Title>Hierarchy</Title>
    <Map />
    {/* <Map><img src={require('./map.svg').default} alt="map" /></Map> */}

    <TitleAndBtn>
      <Title>Additional Domains</Title>

      <Button className="w-100 d-flex ai-center" onClick={() => alert('Add Donain')}>
        <Icon name="circle-plus" className="mr-8" />
        <div className="italic">Add Domain</div>
      </Button>
    </TitleAndBtn>

    <TitleAndBtn>
      <Title>Related Terms</Title>

      <Button className="w-100 d-flex ai-center" onClick={() => alert('Add Term')}>
        <Icon name="circle-plus" className="mr-8" />
        <div className="italic">Add Term</div>
      </Button>
    </TitleAndBtn>
  </Container>
)

export default Hierarchy