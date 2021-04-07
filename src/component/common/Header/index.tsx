import { Fragment } from 'react'
import styled from 'styled-components'
import AppInput from '../AppInput'
import PrimaryButton from '../PrimaryButton'

const Container = styled.div`
width: 100%;
display: flex;
padding: 24px 32px;
box-sizing: border-box;
justify-content: space-between;
`;

const Logo = styled.h1`
font-weight: bold;
font-size: 26px;
line-height: 33px;
margin: 0;
color: ${({ theme: { color } }) => color.BLACK_1};

`;

const RightSection = styled.div`
display: flex;
&&{
    .MuiTextField-root {
        width: 388px;
        margin: 0px;
        height: 32px;
    }
}
`;

const SaveButton = styled(PrimaryButton)`
margin-left: 20px;
`;

const Header = () => (
    <Fragment>
        <Container>
            <Logo className="d-flex ai-center bold"></Logo>
            <RightSection>
                <AppInput placeholder="Search" type="search" />
                <SaveButton label='Save query' />
            </RightSection>
        </Container>
    </Fragment>
)

export default Header