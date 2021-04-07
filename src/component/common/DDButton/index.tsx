import { FC, useState , createContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import colorCodes from '../../../common/colors'
import fonts from '../../../common/fonts'

const dummyOptions = [
  { title: 'all', value: 1 },
  { title: 'undefined', value: 2 },
  { title: 'In progress', value: 3 },
  { title: 'Pending Approval', value: 4 },
  { title: 'Approved', value: 5 },
  { title: 'Certified', value: 6 }
]

const useStyles = makeStyles(() => ({
  formControl: {
    height: '100%',
  },
  selectBox: {
    height: '100%',
    padding: '0px 16px',
    fontFamily: fonts.EXTRA_LIGHT_ITALIC,
    '& .MuiSelect-select': {
      paddingTop: '0px',
      paddingBottom: '0px',
      backgroundColor: 'transparent'
    },
    '&:hover': {
      '&:before': {
        border: 'none !important',
      }
    },
    '&:before': {
      border: 'none'
    }
  },
  root: {
    margin: '0px 4px',
    border: `1px solid ${colorCodes.GREY_4}`,
    backgroundColor: colorCodes.WHITE_1,
    borderRadius: 4
  }
}))

const MoreIcon = () => <ExpandMoreIcon />

type Props = {
  label?: string,
  children?: any,
  className?: string,
  selectBoxClass?: string,
  options?: any
  defaultIcon?: boolean
  filterIt? : any
}

const DDButton: FC<Props> = ({
  defaultIcon , children,
  label, className , selectBoxClass , options ,filterIt
} : Props  ) => {
  const [selectBoxVal, setSelectBoxVal] = useState(false)
  const classes = useStyles()

  return (
    <div className={`${className} ${classes.root}`}>
      <FormControl className={classes.formControl}>
        <Select
          labelId="select-placeholder-label-label"
          id="select-placeholder-label"
          value={selectBoxVal}
          onChange={(event: any) => setSelectBoxVal(event.target.value)}
          className={`${selectBoxClass} ${classes.selectBox}`}
          renderValue={(value: any) => !!value ? value.title : (!!children ? children : label)}
          IconComponent={!!defaultIcon ? undefined : MoreIcon}
        >
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          {
            !!options && !!options.length &&
            options.map((o: any, i: number) =>
              <MenuItem onClick = { () => {filterIt( { title : o.title  }  , i   )}  } value={o} key={i}>{o.title}</MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default DDButton