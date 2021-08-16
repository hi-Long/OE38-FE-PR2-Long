import { Badge, Box, IconButton, InputAdornment, makeStyles, TextField } from "@material-ui/core"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';

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
        />

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