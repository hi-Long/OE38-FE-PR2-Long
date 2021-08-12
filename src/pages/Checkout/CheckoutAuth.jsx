import { CircularProgress, makeStyles } from "@material-ui/core"
import { Box, Button } from "@material-ui/core"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Auth from "../../components/Auth/Auth"
import useAuth from "../../firebase/useAuth"

const useStyles = makeStyles({
    button: {
        width: "50%",
        margin: "auto",
        marginBottom: "2rem"
    }
})

const CheckoutAuth = props => {
    const { handleNextStep } = props
    const { logout } = useAuth()
    const history = useHistory()
    const isAuth = useSelector(state => state.auth.isAuth)
    const userFetching = useSelector(state => state.ui.userFetching)
    const classes = useStyles()

    const onContinueClicked = () => {
        handleNextStep()
        history.push('/checkout/delivery')
    }

    if (userFetching) {
        return <Box width="100%" display="flex" justifyContent="center" mt={10}>
            <CircularProgress />
        </Box>
    }

    const authOptions = <Box display="flex" flexDirection="column">
        {/* If the user choose to checkout by other account, log him out*/}
        <Button
            className={classes.button} variant="contained"
            color="primary" size="large" disableElevation
            onClick={async () => await logout()}>Đăng nhập bằng tài khoản khác</Button>
        {/* If the user choose to checkout by his current account, continue*/}
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
