import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import DDButton from '../../common/DDButton'
import PrimaryButton from '../../common/PrimaryButton'
import Icon from '../../icons'
import AppInput from '../../common/AppInput'

const Container = styled.div`
display: flex;
padding-top: 28px;
background: ${({ theme: { color } }) => color.WHITE_3};
`;

const useStyles = makeStyles(() => ({
  selectBox: {
    padding: '0px 16px',
    '& .MuiSelect-select': {
      paddingTop: '0px',
      paddingBottom: '0px',

      '&:focus': {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    },
  },
  filterSelectBox: {
    fontFamily: "Mulish Light",
    border: '1px solid #C7C7C7',
    borderRadius: 4,
    color: '#C7C7C7'
  },
  inputClass: {
    maxWidth: 217
  }
}))

const DDList = styled.div`
display: flex;
`;

const Label = styled.div`
display: flex;
align-items: center;
margin-right: 8px;
font-size: 12px;
line-height: 18px;
`;

const IconButton = styled(PrimaryButton)`
padding: 0px;
height: 32px;
width: 32px;
border: none;
margin: 0px;
`;

const Badge = styled.div.attrs({ className: 'd-flex ai-center regular'})`
font-size: 13px;
line-height: 18px;
color: ${({ theme: { color } }) => color.BLACK_2};
background: ${({ theme: { color } }) => color.GREY_9};
border-radius: 40px;
padding: 3px 12px;
text-transform: capitalize;
margin: 0px 4px;
`;

const SubFilters = () => {
  const classes = useStyles()

  return (
    <Container className="between-flex">

      <DDList>
        <Label className="regular">Filter By</Label>
        <DDButton label='Add Filter' selectBoxClass={classes.filterSelectBox} />
        <Badge>Lorem Ipsum</Badge>
        <Badge>Lorem Ipsum</Badge>
        <Label className="bold c-pointer">Clear All</Label>
      </DDList>

      <div className="d-flex">
        <AppInput inputClass={classes.inputClass} placeholder="Search" type="search" />
        <IconButton onClick={() => alert('Setting')}>
          <Icon name="setting" />
        </IconButton>
      </div>

    </Container>
  )
}

export default SubFilters