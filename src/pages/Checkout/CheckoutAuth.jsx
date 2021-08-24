import { makeStyles } from "@material-ui/core"
import { Box, Button } from "@material-ui/core"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Auth from "../../components/Auth/Auth"

const useStyles = makeStyles({
    button: {
        width: "50%",
        margin: "auto",
        marginBottom: "2rem"
    }
})

const CheckoutAuth = props => {
    const { handleNextStep } = props
    const history = useHistory()
    const isAuth = useSelector(state => state.auth.isAuth)
    const classes = useStyles()

    const onContinueClicked = () => {
        handleNextStep()
        history.push('/checkout/delivery')
    }

    const authOptions = <Box display="flex" flexDirection="column">
        <Button
            className={classes.button} variant="contained"
            color="primary" size="large" disableElevation>Đăng nhập bằng tài khoản khác</Button>
        <Button
            className={classes.button} variant="contained"
            color="secondary" size="large" disableElevation
            onClick={onContinueClicked}>Tiếp tục</Button>
    </Box>

    return <Box mt={10}>
        {!isAuth
            // If the user is not authenticated, render auth component
            ? <Auth noButtons />
            // If the user is authenticated, render auth options component
            : { authOptions }
        }
    </Box>
}

export default CheckoutAuth
