import { FC, Fragment } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import AppCheckBox from '../../../common/AppCheckBox'
import Icon from '../../../icons'
import ChoiceCard from './ChoiceCard'
import DDButton from '../../../common/DDButton'

const Container = styled.div`
padding: 4px 12px;
background: ${({ theme: { color } }) => color.GREY_9};
`;

const ApprovalDiv = styled.div`
margin: 2px 0px;
flex-direction: column;
background: ${({ theme: { color } }) => color.WHITE_1};
border-radius: 4px;
padding: 12px 16px;
box-sizing: border-box;
display: flex;
height: 236px;
justify-content: space-between;
svg {
    cursor: pointer;
}
`;

const Content = styled.div`
flex-direction: column;
`;

const T1 = styled.div`
font-size: 12px;
line-height: 18px;
margin-bottom: 2px;
display: flex;
width: 100%;
color: ${({ theme: { color } }) => color.GRE_6};
`;

const RList = styled(T1)`
margin: 0px;
display: flex;
width: 100%;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const ApprovalSec: FC<{ count?: number, title?: string }> = (
    { count = 2, title }
) => {
    const classes = useStyles()
    return (
        <ApprovalDiv>
            <Content className="regular d-flex">
                <T1>Reason for duplication</T1>
                <RList>Reason 1</RList>
                <RList>Reason 2</RList>
            </Content>

            <Content className="regular d-flex">
                <T1>Recommended Action</T1>
                <RList>The following term should be approved & certified</RList>
            </Content>

            <div className="d-flex ai-center">
                <DDButton className={classes.selectBoxCont} selectBoxClass={classes.selectBox} label='Filter by' />
            </div>
            <div className="d-flex ai-center">
                <Icon name="circle-cross" />
                <Icon name="circle-check" />
            </div>
        </ApprovalDiv>
    )
}

const Divider = styled.div`
opacity: 0.1;
border: 1px solid ${({ theme: { color } }) => color.BLACK};
margin: 14px 0;
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

const IncludedTerms = styled.div`
font-size: 12px;
line-height: 18px;
${({ theme: { color } }) => `
color: ${color.GREY_6};
`};
`;


const AllSelect = styled.label`
height: 27px;
font-size: 13px;
line-height: 18px;
display: flex;
align-items: center;
text-transform: capitalize;
margin-left: 8px;
cursor: pointer;
color: ${({ theme: { color } }) => color.BLACK_2};
`;

const useStyles = makeStyles(() => ({
    checkBox: {
        alignItems: 'baseline'
    },
    selectBoxCont: {
        width: '100%',
        padding: '0px',
        // WIP
        '.MuiFormControl-root': {
            width: '100%',
            padding: '0px'
        }
    },
    selectBox: {
        width: '100%',
        padding: '0px 16px'
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
                <ApprovalSec title="term to reject" />
                <Divider />
                <OptionsList>
                    <div className="between-flex">
                        <IncludedTerms className="light">Included Terms</IncludedTerms>
                        <AppCheckBox id="all-select">
                            <AllSelect htmlFor="all-select" className="light">Select All</AllSelect>
                        </AppCheckBox>
                    </div>

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