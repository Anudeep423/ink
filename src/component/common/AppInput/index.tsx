import { FC } from 'react'
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
  },
  inputClass: {
    '& .MuiInputBase-input': {
      fontFamily: "Mulish ExtraLight Italic"
    }
  }
}))

type Props = {
  type?: string,
  placeholder?: string,
  autoComplete?: string,
  className?: string,
  inputClass?: string,
}

const AppInput: FC<Props> = ({
  type = 'text', placeholder = '', inputClass = '',
  autoComplete = 'off', className = '',
}) => {
  const classes = useStyles()

  return (
    <div className={`${classes.root} ${className}`}>
      <TextField
        type={type}
        variant="outlined"
        className={`${classes.inputClass} ${inputClass}`}
        placeholder={placeholder}
        autoComplete={autoComplete} />
    </div>
  )
}

export default AppInput