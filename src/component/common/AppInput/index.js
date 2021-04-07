import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import './index.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '60ch',
      padding: '0px !important'
    }
  }
}))

const AppInput = ({
  type = 'text', placeholder = '',
  autoComplete = 'off', className = '',
}) => {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${className}`} noValidate autoComplete={autoComplete}>
      <TextField placeholder={placeholder} type={type} variant="outlined" />
    </div>
  )
}

export default AppInput