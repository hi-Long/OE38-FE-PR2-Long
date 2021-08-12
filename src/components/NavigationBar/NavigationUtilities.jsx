import { Badge, Box, IconButton, InputAdornment, makeStyles, TextField } from "@material-ui/core"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import SearchDrawer from "../SearchDrawer/SearchDrawer";
import AccountManagementDrawer from "./NavigationAccount/AccountDrawer.jsx";
import CartDrawer from "../Cart/CartDrawer"

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1.5rem"
    },
    toggleButton: {
        color: "black"
    }
})

const Utilities = props => {
    const { localStorageCart, setLocalStorageCart } = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return <Box className={classes.root} display="flex">
        {/* SEARCHING */}
        <TextField
            id="input-with-icon-textfield"
            placeholder="Tìm kiếm"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon></SearchIcon>
                    </InputAdornment>
                ),
            }}
            onClick={() => dispatch(uiActions.setSearchDrawerShowing(true))}
        />
        <SearchDrawer />

        {/* ACCOUNT */}
        <IconButton
            className={classes.toggleButton}
            onClick={() => dispatch(uiActions.setAuthDrawerShowing(true))}>
            <PermIdentityIcon />
        </IconButton>
        <AccountManagementDrawer />

        {/* CART */}
        <IconButton
            className={classes.toggleButton}
            onClick={() => dispatch(uiActions.setCartDrawerShowing(true))}>
            <Badge badgeContent={localStorageCart.products.length} color="primary">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </IconButton>

        <CartDrawer
            localStorageCart={localStorageCart}
            setLocalStorageCart={setLocalStorageCart} />
    </Box>
}

export default Utilities