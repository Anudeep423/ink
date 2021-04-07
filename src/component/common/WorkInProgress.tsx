import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        minHeight: 300,
        fontSize: 20
    }
}))

const WorkInProgress = () => {
    const classes = useStyles()
    return <div className={`center-flex bold ${classes.root}`}>
        Work In Progress...
    </div>
}

export default WorkInProgress