import { FC } from 'react'
import styled from 'styled-components'
import Icon from '../../../../icons'

const Container = styled.div.attrs({ className: 'd-flex ai-center' })`
width: 100%;
height: 50px;
`;

const Button = styled.div`
font-size: 12px;
line-height: 20px;
display: flex;
align-items: center;
margin: 0 26px;
cursor: pointer;
`;

const AddButtonSec: FC<{}> = () => (
  <Container>
    <Button onClick={() => alert('Project')}>
      <div className="mr-8 light">Project</div>
      <Icon name="circle-plus" />
    </Button>

    <Button onClick={() => alert('Category')}>
      <div className="mr-8 light">Category</div>
      <Icon name="circle-plus" />
    </Button>

    <Button onClick={() => alert('Tag')}>
      <div className="mr-8 light">Tag</div>
      <Icon name="circle-plus" />
    </Button>

  </Container>
)

export default AddButtonSec