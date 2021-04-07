import { FC, Fragment } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import AppCheckBox from '../../../common/AppCheckBox'
import Icon from '../../../icons'
import ChoiceCard from './ChoiceCard'

const Container = styled.div`
padding: 4px 12px;
background: ${({ theme: { color } }) => color.GREY_9};
`;

const Title = styled.div`
font-size: 11px;
line-height: 20px;
display: flex;
align-items: center;
padding: 5px 0px;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const ApprovalDiv = styled.div`
margin: 4px 0px;
background: ${({ theme: { color } }) => color.WHITE_1};
box-shadow: 0px 1px 16px rgba(33, 43, 68, 0.12);
border-radius: 4px;
padding: 9px 12px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
svg {
    cursor: pointer;
}
`;

const ApprovalTitle = styled(Title)`
font-size: 14px;
line-height: 18px;
margin-left: 6px;
text-transform: capitalize;
`;

const ApprovalSec: FC<{ count?: number, title?: string }> = (
    { count = 2, title }
) => (
    <ApprovalDiv>
        <div className="d-flex ai-center">
            <Icon name="bulp" />
            <span className="bold ml-12">{count}</span>
            <ApprovalTitle className="light">{title}</ApprovalTitle>
        </div>
    </ApprovalDiv>
)

const Divider = styled.div`
opacity: 0.1;
border: 1px solid ${({ theme: { color } }) => color.BLACK};
margin: 14px;
`;

const FooterSec = styled.div`
background: ${({ theme: { color } }) => color.BLACK_2};
padding: 11px 15px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
position: absolute;
bottom: 0;
width: 100%;
max-width: 300px;
border-bottom-left-radius: 4px;
`;

const FooterTitle = styled.div`
font-size: 12px;
line-height: 20px;
display: flex;
align-items: center;
color: ${({ theme: { color } }) => color.WHITE_1};
`;

const IconWrapper = styled.div`
${({ theme: { color } }) => `
background: ${color.WHITE_1};
border: 1px solid ${color.GREY_4};
`};
align-items: center;
display: flex;
box-sizing: border-box;
border-radius: 4px;
margin: 0px 4px;
cursor: pointer;
`;

const OptionsList = styled.div`
margin-bottom: 48px;
`;

const AllSelect = styled.label`
height: 27px;
font-size: 13px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;
margin-left: 15px;
cursor: pointer;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const useStyles = makeStyles(() => ({
    checkBox: {
        alignItems: 'baseline'
    }
}))

const dummyObj = {
    title: 'Customer_1',
    domain: 'Domain',
    sub_domain: 'Subdomain'
}
const SidebarBody: FC<{}> = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Container>
                <Title className="regular">Filter by Insights 3/7</Title>
                <ApprovalSec title="term to reject" />
                <ApprovalSec title="terms to approve" />
                <Divider />
                <OptionsList>
                    <AppCheckBox id="all-select">
                        <AllSelect htmlFor="all-select" className="light">Select All</AllSelect>
                    </AppCheckBox>

                    <AppCheckBox id="all-select-1" className={classes.checkBox}>
                        <label className="ml-7" htmlFor="all-select-1">
                            <ChoiceCard {...dummyObj} />
                        </label>
                    </AppCheckBox>

                    <AppCheckBox id="all-select-2" className={classes.checkBox}>
                        <label className="ml-7" htmlFor="all-select-2">
                            <ChoiceCard {...dummyObj} />
                        </label>
                    </AppCheckBox>

                    <AppCheckBox id="all-select-3" className={classes.checkBox}>
                        <label className="ml-7" htmlFor="all-select-3">
                            <ChoiceCard {...dummyObj} />
                        </label>
                    </AppCheckBox>

                    <AppCheckBox id="all-select-4" className={classes.checkBox}>
                        <label className="ml-7" htmlFor="all-select-4">
                            <ChoiceCard {...dummyObj} />
                        </label>
                    </AppCheckBox>

                    <AppCheckBox id="all-select-4" className={classes.checkBox}>
                        <label className="ml-7" htmlFor="all-select-4">
                            <ChoiceCard {...dummyObj} />
                        </label>
                    </AppCheckBox>

                    <AppCheckBox id="all-select-4" className={classes.checkBox}>
                        <label className="ml-7" htmlFor="all-select-4">
                            <ChoiceCard {...dummyObj} />
                        </label>
                    </AppCheckBox>

                    <AppCheckBox id="all-select-4" className={classes.checkBox}>
                        <label className="ml-7" htmlFor="all-select-4">
                            <ChoiceCard {...dummyObj} />
                        </label>
                    </AppCheckBox>
                </OptionsList>
            </Container>
            <FooterSec>
                <FooterTitle className="bold">2 tasks selected</FooterTitle>
                <div className="d-flex ai-center">
                    <IconWrapper>
                        <Icon name="circle-cross" />
                    </IconWrapper>
                    <IconWrapper>
                        <Icon name="circle-check" />
                    </IconWrapper>
                    <IconWrapper>
                        <Icon name="stamp" height={24} width={24} />
                    </IconWrapper>
                </div>
            </FooterSec>
        </Fragment>
    )
}

export default SidebarBody