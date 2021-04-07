import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin: 10px 0;
padding: 0 12px;
display: flex;
`;

const ProjectName = styled.div.attrs({ className: 'light' })`
min-width: 74px;
padding: 3px 6.5px;
box-sizing: border-box;
border-radius: 4px;
margin-right: 4px;
border: 1px solid ${({ theme: { color } }) => color.PINK_3};
`;

const AuthorSec = styled.div`
margin-left: 20px;
display: flex;
align-items: center;
`;

const AuthorCard = styled.div.attrs({ className: 'center-flex' })`
background: ${({ theme: { color } }) => color.WHITE_1};
color: ${({ theme: { color } }) => color.PINK_3};
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
height: 24px;
width: 24px;
border-radius: 50%;
position: relative;
margin-left: -10px;
`;

const users = ["A", "B"]
const CardProfile: FC<{}> = () => (
    <Container>
        <ProjectName>Project Name</ProjectName>
        {
            !!users && !!users.length &&
            <AuthorSec className="regular">
                {
                    users.map((u, i) => <AuthorCard key={i}>
                        {u}
                    </AuthorCard>)
                }
            </AuthorSec>
        }
    </Container>
)

export default CardProfile