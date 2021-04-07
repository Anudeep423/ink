import { FC } from 'react'
import styled from 'styled-components'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Icon from '../../../icons'
import colorCodes from '../../../../common/colors'
import CardProfile from './CardProfile'

const Container = styled.div`
width: 260px;
min-height: 190px;
background: ${({ theme: { color } }) => color.WHITE_1};
border-radius: 4px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.05);
:hover {
opacity: 0.5;
box-sizing: border-box;
filter: drop-shadow(0px 3px 20px rgba(0, 0, 0, 0.14));
border-radius: 7px;
}
`;

const PrimaryHeader = styled.div.attrs<{
    className?: string
}>(() => ({
    className: 'd-flex ai-center'
}))`
height: 51px;
padding: 0 12px;
background: ${({ theme: { color } }) => color.WHITE_4};
`;

const SeconaryHeader = styled(PrimaryHeader)`
width: 260px;
box-sizing: border-box;
${({ theme: { color } }) => `
background: ${color.WHITE_1};
border-bottom: 1px solid ${color.GREY_4};
`}
`;

const PrimaryFooter = styled.div.attrs<{
    className?: string
}>(() => ({
    className: 'd-flex ai-center'
}))`
height: 45px;
padding: 0 12px;
background: ${({ theme: { color } }) => color.WHITE_4};
`;

const Recommended = styled.div`
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
color: ${({ theme: { color } }) => color.GREY_6};
`;

const RecommendedTitle = styled.div`
font-size: 12px;
line-height: 18px;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const SeconaryFooter = styled(PrimaryFooter)`
width: 260px;
box-sizing: border-box;
${({ theme: { color } }) => `
background: ${color.WHITE_5};
`}
`;

const Title = styled.div.attrs<{
    className?: string
}>(() => ({
    className: 'bold'
}))`
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: ${({ theme: { color } }) => color.BLACK_2};
  `;

const DomainInfo = styled.div.attrs({ className: 'regular' })`
font-size: 12px;
line-height: 18px;
`;

const Description = styled.div.attrs({ className: 'regular' })`
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
padding: 4px 12px;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const Dot = styled.span`
width: 10px;
height: 10px;
margin-left: 10px;
border-radius: 50%;
background: ${({ theme: { color } }) => color.GREY_8};
`;

type CardInfoProps = {
    title: string,
    description: string,
    domain: string,
    sub_domain: string,
    recomended_actions?: any
}


const PCardHeader: FC<{ title: string }> = ({ title }) => (
    <PrimaryHeader>
        <Icon name="random-elipse" />
        <Title className="ml-7">{title}</Title>
    </PrimaryHeader>
)

const setHashColor = (type: string) => {
    switch (type) {
        case 'in-undefined':
            return colorCodes.GREY_7
        case 'in-progress':
            return colorCodes.YELLOW_1
        case 'in-pending':
            return colorCodes.BLUE_1
        case 'in-approved':
            return colorCodes.GREEN_1
        case 'in-certified':
            return colorCodes.BLUE_2
        default:
            return colorCodes.WHITE_1
    }
}


type SCardProps = {
    info: CardInfoProps,
    className: string
}

const SCardHeader: FC<SCardProps> = ({ info: { title, domain, sub_domain }, className }) => (
    <SeconaryHeader className="between-flex">
        <DomainInfo>
            <Title>{title}</Title>
            <div>{`${domain} > ${sub_domain}`}</div>
        </DomainInfo>
        <div className="center-flex">
            <Icon name="circle-hash" fill={setHashColor(className)} />
            <NotificationsNoneIcon />
        </div>
    </SeconaryHeader>
)


const PCardFooter: FC<{ recomended?: any }> = ({ recomended }) => (
    <PrimaryFooter className="regular between-flex">
        <div>
            <Recommended>Recommended Action <Dot /></Recommended>
            <RecommendedTitle>{recomended}</RecommendedTitle>
        </div>
        <div className="d-flex ai-center">
            <Icon name="circle-cross" />
            <Icon name="circle-check" />
        </div>
    </PrimaryFooter>
)

const IconTitle = styled.div.attrs({ className: 'regular' })`
font-size: 10px;
line-height: 16px;
`;

const IconTitleHolder = styled.div`
display: flex;
align-items: center;
`;

const SCardFooter: FC<{}> = () => (
    <SeconaryFooter className="between-flex">
        <IconTitleHolder>
            <Icon name="circle-check" />
            <IconTitle>Defination</IconTitle>
        </IconTitleHolder>
        <IconTitleHolder>
            <Icon name="circle" />
            <IconTitle>Attributes</IconTitle>
        </IconTitleHolder>
        <IconTitleHolder>
            <Icon name="circle" />
            <IconTitle>IT Assets</IconTitle>
        </IconTitleHolder>
    </SeconaryFooter>
)

type Props = {
    info: CardInfoProps,
    type: string,
    className: string
}

const Card: FC<Props> = ({
    info, type, className
}) => (
    <Container>
        {
            !!type && type === 'primary' ?
                <PCardHeader title={info.title} /> :
                <SCardHeader info={info} className={className} />
        }
        <Description>
            {info.description}
        </Description>
        {!!type && type !== 'primary' && <CardProfile />}
        {
            !!type && type === 'primary' ?
                <PCardFooter recomended={info.recomended_actions} /> :
                <SCardFooter />
        }
    </Container>
)

export default Card