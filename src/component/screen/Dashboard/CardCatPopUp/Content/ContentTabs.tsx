import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import colorCodes from '../../../../../common/colors'

const { APP_COLOR, WHITE_3 } = colorCodes
const AntTabs = withStyles({
  indicator: {
    backgroundColor: APP_COLOR,
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 120,
    fontSize: 12,
    lineHeight: '20px',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: '10px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: APP_COLOR,
      opacity: 1,
    },
    '&$selected': {
      color: APP_COLOR,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: APP_COLOR,
    },
  },
  selected: {},
}))((props: any) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabHolder: {
    backgroundColor: WHITE_3,
  },
  tabInput: {
    padding: 0
  }

}));

const ContentTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) =>
    setValue(newValue)

  return (
    <div className={classes.root}>
      <div className={classes.tabHolder}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab className={classes.tabInput} label="Term Info" />
          <AntTab className={classes.tabInput} label="Business Attributes" />
          <AntTab className={classes.tabInput} label="Discovery terms" />
          <AntTab className={classes.tabInput} label="Associated Objects" />
          <AntTab className={classes.tabInput} label="Approvals" />
        </AntTabs>
      </div>

    </div>
  );
}


export default ContentTabs