import { Drawer, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import Auth from "../../Auth/Auth";
import AccountManagement from "./AccountManagement/AccountManagement"

const useStyles = makeStyles({
    root: {
        "& .MuiDrawer-paper": {
            width: "28%",
            padding: "1rem 2rem"
        }
    }
})

const AccountDrawer = props => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const authDrawerShowing = useSelector(state => state.ui.authDrawerShowing)
    const { isAuth } = useSelector(state => state.auth)

    return <Drawer
        className={classes.root}
        display="flex"
        anchor="right"
        open={authDrawerShowing}
        onClose={() => dispatch(uiActions.setAuthDrawerShowing(false))}>
        {isAuth
            ? <AccountManagement />
            : <Auth />}
    </Drawer>
}

export default AccountDrawer

