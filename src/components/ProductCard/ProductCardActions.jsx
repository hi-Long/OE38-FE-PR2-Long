import { faRuler } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, CardActions, makeStyles, Menu, MenuItem, Box, IconButton } from "@material-ui/core"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useState } from "react"

const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: "22%",
        right: 0,
        padding: 0,
        borderTopLeftRadius: "40px",
        borderBottomLeftRadius: "40px",
        backgroundColor: "white"
    },
    button: {
        borderRadius: "40px",
        "& .MuiIconButton-label": {
            width: "1.25rem",
            height: "1.25rem",
        }
    }
})

const ProductCardActions = props => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const [size, setSize] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = size => {
        setAnchorEl(null);
        setSize(size)
    };

    return <CardActions className={classes.root}>
        <Box className={classes.sizes}>
            {size ? <Button
                className={classes.button}
                onClick={handleClick}>{size}</Button>
                : <IconButton className={classes.button} aria-controls="size-menu"
                    aria-haspopup="true" onClick={handleClick}>
                    <FontAwesomeIcon icon={faRuler} width="1.25rem" height="1.25rem" />
                </IconButton>
            }
            <Menu
                id="size-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => handleClose(size)}>
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <MenuItem onClick={() => handleClose(size)}>{size}</MenuItem>
                ))}
            </Menu>
        </Box>
        <IconButton variant="contained">
            <FavoriteBorderIcon className={classes.button} fontSize="small" />
        </IconButton>
    </CardActions>
}

export default ProductCardActions