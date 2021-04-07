import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import colorCodes from '../../../../../common/colors'
import DDButton from '../../../../common/DDButton'
import Icon from '../../../../icons'
import ContentTabs from './ContentTabs'
import AddButtonSec from './AddButtonSec'
import TextAreaAndInfo from './TextAreaAndInfo'

const { WHITE_1, PINK_3, WHITE_5, BLACK_2, BLUE_1 } = colorCodes
const Container = styled.div`
width: 100%;
`;

const Header = styled.div`
height: 74px;
padding: 14px 20px;
box-sizing: border-box;
background-color: ${({ theme: { color } }) => color.PURPLE_2};
`;

const PartOne = styled.div`
flex-direction: row;
display: flex;
align-items: center;
`;

const WithSelect = styled.div`
flex-direction: column;
display: flex;
`;

const PostTitle = styled.div`
font-size: 24px;
line-height: 30px;
text-transform: capitalize;
color: ${WHITE_5};
`;

const PartTwo = styled.div`

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
height: 28px;
width: 28px;
border-radius: 50%;
position: relative;
margin-left: -10px;
`;

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    selectBoxContainer: {
        margin: '0px 4px',
        border: `none`,
        backgroundColor: 'transparent',
        '& .MuiFormControl-root': {
            padding: '0px',
            fontSize: 14,
            lineHeight: '20px'
        }
    },
    selectDomain: {
        color: WHITE_5,
        fontFamily: 'Mulish ExtraLight Italic',
        '& svg.MuiSvgIcon-root': {
            color: WHITE_5,
        }
    },
    dotIcon: {
        color: BLACK_2
    },
    approveBtn: {
        height: 24,
        background: WHITE_1,
        border: '1px solid #9B44B9',
        fontSize: 14,
        padding: '0px 8px',
        lineHeight: '20px',
        color: PINK_3,
        '& span': {
            color: PINK_3
        },
        '&:hover': {
            background: WHITE_1
        }
    },
    certifyBtn: {
        height: 24,
        background: BLACK_2,
        fontSize: 14,
        padding: '0px 8px',
        lineHeight: '20px',
        color: WHITE_1,
        '& span': {
            color: WHITE_1
        },
        '&:hover': {
            background: BLACK_2
        }
    }
});

const IconWraper = styled.div.attrs({ className: 'center-flex' })`
box-sizing: border-box;
border-radius: 4px;
width: 24px;
height: 24px;
margin: 0px 2px 0px 32px;
`;

const users = ["A", "B", "C", "D"]
const Content: FC<{}> = () => {
    const classes = useStyles()
    return (
        <Container>
            <Header className="between-flex">
                <PartOne>
                    <Icon name="circle-hash" viewBox="9 7 23 23" height={28} width={28} fill={BLUE_1} />
                    <WithSelect>
                        <PostTitle className="regular">Customer</PostTitle>
                        <DDButton label='Select Domain' defaultIcon={true}
                            className={`center-flex ${classes.selectBoxContainer}`}
                            selectBoxClass={classes.selectDomain}
                        />
                    </WithSelect>
                </PartOne>
                <PartTwo className="d-flex ai-center">
                    {
                        !!users && !!users.length &&
                        <AuthorSec className="regular">
                            {
                                users.map((u, i) => <AuthorCard key={i}>
                                    {u}
                                </AuthorCard>)
                            }
                            <AuthorCard>+</AuthorCard>
                        </AuthorSec>
                    }
                    <IconWraper>
                        <Icon name="vertical-dot" className={classes.dotIcon} />
                    </IconWraper>
                </PartTwo>
            </Header>
            <ContentTabs />
            <AddButtonSec />
            <TextAreaAndInfo />
        </Container>
    )
}

export default Content