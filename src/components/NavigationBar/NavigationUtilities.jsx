import { Badge, Box, IconButton, InputAdornment, makeStyles, TextField } from "@material-ui/core"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import SearchDrawer from "../SearchDrawer/SearchDrawer";

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

const Utilities = () => {
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
        <SearchDrawer></SearchDrawer>

        {/* ACCOUNT */}
        <IconButton className={classes.toggleButton}>
            <PermIdentityIcon></PermIdentityIcon>
        </IconButton>

        {/* CART */}
        <IconButton className={classes.toggleButton}>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </IconButton>
    </Box>
}

export default Utilities