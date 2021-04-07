import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import CustomizedTabs from '../../tabs'
import DDButton from '../../common/DDButton'
import colorCodes from '../../../common/colors'

const { BLACK_2, WHITE_1 } = colorCodes

const Container = styled.div`
background: ${({ theme: { color } }) => color.WHITE_1};
overflow: hidden;
`;

const SubHeader = styled.div`
padding: 0 32px;
align-items: baseline;
`;

const BellIcon = styled.div`
min-width: 33px;
border: solid 1px ${({ theme: { color } }) => color.BLACK_2};
border-radius: 3px;
height: 32px;
cursor: pointer;
margin: auto 0px auto 10px;
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
    background: BLACK_2,
  },
  createNew: {
    color: WHITE_1,
    fontFamily: "Mulish Regular"
  }
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <SubHeader className="d-flex">
          <CustomizedTabs />
          <div className="d-flex">
            <DDButton label='Create New'
              className={`center-flex ${classes.selectBoxContainer}`}
              selectBoxClass={classes.createNew}
            />
            <BellIcon className="center-flex">
              <NotificationsNoneIcon />
            </BellIcon>
          </div>
        </SubHeader>
      </Container>
    </>
  )
}

export default Dashboard