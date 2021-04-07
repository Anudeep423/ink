import { FC } from 'react'
import styled from 'styled-components'
import Icon from '../../../icons'
import SidebarBody from './SidebarBody'

const Container = styled.div`
max-width: 300px;
box-sizing: border-box;
box-shadow: -2px 0px 30px rgba(0, 0, 0, 0.05);
border-radius: 4px;
background: ${({ theme: { color } }) => color.WHITE_1};
`;

const Header = styled.div`
height: 86px;
padding: 18px 12px 12px 12px;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;

const Title = styled.div`
font-size: 11px;
line-height: 20px;
color: ${({ theme: { color } }) => color.BLACK_2};
margin-left: 10px;
`;

const TypeDot = styled.span`
width: 12px;
height: 12px;
border-radius: 50%;
margin-left: 5px;
background: ${({ theme: { color } }) => color.BLUE_1};
`;

const TypeTitle = styled.div`
font-size: 14px;
line-height: 20px;
text-transform: capitalize;
margin-left: 12px;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const Sidebar: FC<{}> = () => (
    <Container>
        <Header>
            <div className="d-flex">
                <Icon name="stack" />
                <Title className="regular d-flex ai-center">Stack</Title>
            </div>

            <div className="d-flex ai-center">
                <TypeDot />
                <div className="between-flex w-100">
                    <TypeTitle className="bold d-flex">Sent for approval (10)</TypeTitle>
                    <Icon name="calendar" />
                </div>
            </div>
        </Header>
        <SidebarBody />
    </Container>
)

export default Sidebar