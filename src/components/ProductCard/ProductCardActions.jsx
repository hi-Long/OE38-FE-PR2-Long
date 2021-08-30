import { faRuler } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, CardActions, makeStyles, Menu, MenuItem, Box, IconButton } from "@material-ui/core"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { SERVER_ROUTE_PRODUCTS } from "../../constants";
import { cartActions } from "../../store/cart-slice";

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
    const { product, setSizeSnackbarShowing, localStorageCart, setLocalStorageCart, onHover } = props
    const dispatch = useDispatch()
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const [size, setSize] = useState(null)

    const onAddToCart = async event => {
        event.stopPropagation()
        if (size) {
            let itemExist = false
            let { products, total } = localStorageCart
            // Check if item exist
            for (let storedProduct of products) {
                if (storedProduct.item.id === product.id && storedProduct.item.size === size) {
                    // If existed, increase its quantity
                    storedProduct.quantity++
                    total += product.price
                    itemExist = true
                    break
                }
            }
            // If item does not exist, add it.
            if (!itemExist) {
                products.push({ item: { ...product, size }, quantity: 1 })
                total += product.price

                // Update the number of added to cart for the product
                const updatedProduct = { ...product, added: product.added + 1 }
                try {
                    await axios.put(`${SERVER_ROUTE_PRODUCTS}/${product.id}`, updatedProduct)
                } catch (err) {
                    console.log(err)
                }
            }
            // Save to local cart
            setLocalStorageCart({ products, total })

            // Show added success snackbar
            dispatch(cartActions.setJustAdded({ ...product, size }))
            setTimeout(() => {
                dispatch(cartActions.setJustAdded(null))
            }, 3000)
        }
        else {
            setSizeSnackbarShowing(true)
        }
    }

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
            <FavoriteBorderIcon
                className={classes.button} fontSize="small"
                onClick={event => onAddToCart(event)} />
        </IconButton>
    </CardActions>
}

export default ProductCardActions