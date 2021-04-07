import React, { FC, useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import colorCodes from '../../../common/colors'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '4px 0',
    cursor: 'pointer',
    color: colorCodes.BLACK,
  },
  checkBox: {
    color: colorCodes.BLACK,
    borderRadius: 4,
    padding: '0px'
  }
}))

type Props = {
  id?: string,
  className?: string,
  checkBoxClass?: string,
  children: any
}

const AppCheckBox: FC<Props> = ({
  id, className = '', checkBoxClass = '', children
}) => {
  const [checked, setChecked] = useState(false)
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked)

  return (
    <div className={`${classes.root} ${className}`}>
      <Checkbox
        id={id}
        checked={checked}
        className={`${checkBoxClass} ${classes.checkBox}`}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {children}
    </div>
  )
}

export default AppCheckBox