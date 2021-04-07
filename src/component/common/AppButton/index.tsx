import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import './index.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  button: {
    padding: '2px 15px'
  }
}))

type Props = {
  label?: string,
  children?: any,
  className?: string,
  buttonClass?: string
  onClick?: () => void,
  disabled?: boolean
}

const AppButton: FC<Props> = ({
  label, className = '', buttonClass = '', children, onClick, disabled = false
}) => {
  const classes = useStyles()
  return (
    <div className={`${classes.root} ${className}`}>
      <Button variant="outlined" disabled={disabled}
        className={`${buttonClass} ${classes.button}`}
        onClick={() => {
          !!onClick && onClick()
        }}>{!!children ? children : label}</Button>
    </div>
  )
}

export default AppButton