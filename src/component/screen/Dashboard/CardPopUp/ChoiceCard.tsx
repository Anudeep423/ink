import { FC } from 'react'
import styled from 'styled-components'
import colorCodes from '../../../../common/colors'
import Icon from '../../../icons'

const Title = styled.div`
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
`;

const SubTitle = styled.div`
font-size: 11px;
line-height: 20px;
`;


const Container = styled.div`
width: 250px;
height: 97px;
flex-direction: column;
box-sizing: border-box;
border-radius: 7px;
box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
${({ theme: { color } }) => `
background: ${color.PURPLE_2};
`}
`;

const PartOne = styled.div`
height: 55px;
width: 100%;
border-bottom: 1px solid ${({ theme: { color } }) => color.GREY_4};
`;

const PartTwo = styled.div`
height: 40px;
width: 100%;
`;

const DomainInfo = styled.div.attrs({ className: 'regular' })`
font-size: 12px;
line-height: 18px;
padding: 0px 14px;
color ${({ theme: { color } }) => color.WHITE_1};
`;

const ProjectTitle = styled.div`
font-size: 10px;
line-height: 16px;
padding: 3px 6px;
border-radius: 4px;
border: solid 1px ${({ theme: { color } }) => color.WHITE_1};
`;

type ChoiceCardProps = {
    title?: string,
    domain?: string,
    sub_domain?: string
}

const ChoiceCard: FC<ChoiceCardProps> = ({ title, domain, sub_domain }) => (
    <Container>
        <PartOne className="between-flex">
            <DomainInfo>
                <Title className="bold">{title}</Title>
                <SubTitle className="regular">{`${domain} > ${sub_domain}`}</SubTitle>
            </DomainInfo>
            <div className="center-flex">
                <Icon name="circle-hash" fill={colorCodes.BLUE_1} />
            </div>
        </PartOne>

        <PartTwo className="between-flex">
            <DomainInfo>
                <ProjectTitle className="regular">{`Project name`}</ProjectTitle>
            </DomainInfo>
        </PartTwo>
    </Container>
)

export default ChoiceCard