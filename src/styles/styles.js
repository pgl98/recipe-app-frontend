import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    media: {
        height: 500,
        width: "100%",
    },
    container: {
        padding: theme.spacing(10, 0, 6)
    },
    searchBar: {
        padding: theme.spacing(10, 0, 6),
    }
}))


export default useStyles