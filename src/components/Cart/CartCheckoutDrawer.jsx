import { Drawer, makeStyles } from "@material-ui/core"
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

const CartCheckoutDrawer = props => {
    const classes = useStyles()

    return <Drawer
        className={classes.root}
        display="flex"
        anchor="right"
        variant="permanent">
        <CartDrawerHeader noButtons></CartDrawerHeader>
        <CartDrawerProducts></CartDrawerProducts>
        <CartDrawerSummary noButtons></CartDrawerSummary>
    </Drawer>
}

export default CartCheckoutDrawer
