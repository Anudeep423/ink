import { Fragment, FC } from 'react'
import styled from 'styled-components'
import Header from '../Header'

const ContentHolder = styled.div`
box-sizing: border-box;
background: ${({ theme: { color } }) => color.WHITE_3};
`;

type Props = {
    loggedIn?: any,
    children: any
}
const Layout: FC<Props> = ({ loggedIn, children }) => (
    <Fragment>
        {!!loggedIn && <Header />}
        <ContentHolder>
            {children}
        </ContentHolder>
    </Fragment>
)

export default Layout