import { useContext,useEffect,useState } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { StoreContext } from '../../../context/StoreContext'
import DDButton from '../../common/DDButton'
import PrimaryButton from '../../common/PrimaryButton'
import Icon from '../../icons'

const Container = styled.div`
display: flex;
padding-top: 28px;
background: ${({ theme: { color } }) => color.WHITE_3};
`;

const Combo = styled.div`
width: 180px;
display: flex;
border: 1px solid ${({ theme: { color } }) => color.GREY_4};
button {
  border: none;
} 
margin-right: 24px;
border-radius: 4px;
button { 
  border-radius: 0px;
  &:focus, &.is-active {
    ${({ theme: { color: { PURPLE_1 } } }) => `
    border: 1px solid ${PURPLE_1};
    color: ${PURPLE_1};
    background-color: #F5E8FA;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    `}
  }
}
`;

const useStyles = makeStyles(() => ({
  selectCont: {
    margin: '0px',
  },
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
  }
}))

const ComboButton = styled(PrimaryButton) 
  
`
${({ active, theme: { color: { PURPLE_1 } } }) =>
    !!active ? `
    border: 1px solid ${PURPLE_1};
    color: ${PURPLE_1};
    background-color: #F5E8FA;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    
    ` : ``}
`;

const IconButton = styled(PrimaryButton)`
padding: 0px;
height: 32px;
width: 32px;
margin: 0px 4px;
`;

const DDList = styled.div`
margin: 0px 22px;
display: flex;
`;

const Filters = ({filterIt}) => {
  const  [item,setItem] = useState("");
  const { state, actions, dispatch } = useContext(StoreContext)
  const { universal: { relatedTo } } = state
  const classes = useStyles()


  const dummyOptions = [
    { title: 'all', value: 1 },
    { title: 'Undefined', value: 2 },
    { title: 'In Progress', value: 3 },
    { title: 'Pending Approval', value: 4 },
    { title: 'Approved', value: 5 },
    { title: 'Certified', value: 6 }
  ]

  return (
    <Container className="between-flex">
      <div className="d-flex">
        <Combo>
          <ComboButton active={relatedTo === 'mine'} label='My tasks'
            onClick={() => dispatch(actions.universal.setTaskRelatedTo('mine'))} />
          <ComboButton active={relatedTo === 'all'} label='All tasks'
            onClick={() => dispatch(actions.universal.setTaskRelatedTo('all'))} />
        </Combo>
        <IconButton onClick={() => alert('Hash')}>
          <Icon name="hash" />
        </IconButton>
        <IconButton onClick={() => alert('Quote')}>
          <Icon name="quote" />
        </IconButton>
      </div>

      <DDList>
        <DDButton label='Column view' filterIt = {filterIt} options = {dummyOptions} />
        <DDButton label='Filter by' />
        <DDButton label='Sort by' />
        <DDButton label='Group by status' />
        <DDButton label='Customize cards' />
      </DDList>
      <div className="d-flex">
        {/* <DDList>
          <DDButton label='Sort by' />
          <DDButton label='Group by status' />
          <DDButton label='Customize cards' />
        </DDList> */}

        <DDButton  className={classes.selectCont} selectBoxClass={classes.selectBox}>
          <Icon name="row-view" borderFill="transparent" />
        </DDButton>
      </div>

    </Container>
  )
}

export default Filters