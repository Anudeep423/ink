import React, { Fragment } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import colorCodes from '../common/colors'
import BoardContent from './screen/Dashboard/BoardContent'
import WorkInProgress from './common/WorkInProgress'

const { APP_COLOR, WHITE_1 } = colorCodes

const AntTabs = withStyles({
  indicator: {
    backgroundColor: APP_COLOR,
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
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
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabHolder: {
    backgroundColor: WHITE_1,
  },
  tabInput: {
    padding: 0
  }
}))

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Fragment>
          {children}
        </Fragment>
      )}
    </div>
  );
}


const CustomizedTabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(1)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) =>
    setValue(newValue)

  return (
    <div className={classes.root}>
      <div className={classes.tabHolder}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab className={classes.tabInput} label="Dashboard" />
          <AntTab className={classes.tabInput} label="Task Manager" />
          <AntTab className={classes.tabInput} label="Glossary" />
          <AntTab className={classes.tabInput} label="Reports" />
        </AntTabs>
      </div>
      <TabPanel value={value} index={0}>
        <WorkInProgress />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BoardContent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WorkInProgress />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WorkInProgress />
      </TabPanel>
    </div>
  )
}

export default CustomizedTabs