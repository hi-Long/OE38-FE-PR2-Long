import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        height: 40,
        width: "auto"
    }
})

const Logo = () => {
    const classes = useStyles()
    return <img className={classes.root} src={process.env.PUBLIC_URL + '/images/Logo.svg'} alt="Logo"></img>
}

export default Logo