import { Drawer, makeStyles } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import CartDrawerHeader from "./CartDrawerHeader"
import CartDrawerProducts from "./CartDrawerProducts"
import CartDrawerSummary from "./CartDrawerSummary"

const useStyles = makeStyles({
    root: {
        "& .MuiDrawer-paper": {
            width: "28%",
            padding: "0"
        }
    }
})

const CartDrawer = props => {
    const dispatch = useDispatch()
    const cartDrawerShowing = useSelector(state => state.ui.cartDrawerShowing)
    const classes = useStyles()

    return <Drawer
        className={classes.root}
        display="flex"
        anchor="right"
        open={cartDrawerShowing}
        onClose={() => dispatch(uiActions.setCartDrawerShowing(false))}>
        <CartDrawerHeader></CartDrawerHeader>
        <CartDrawerProducts></CartDrawerProducts>
        <CartDrawerSummary></CartDrawerSummary>
    </Drawer>
}

export default CartDrawer
