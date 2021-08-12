import { Box, Card, CardContent, CardMedia, Chip, IconButton, InputAdornment, makeStyles, TextField, Typography } from "@material-ui/core"
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import { useState } from "react"
import FormattedPrice from "../../FormattedPrice/FormattedPrice"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        borderRadius: 0,
        marginBlock: "1rem"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        display: "flex",
        flexDirection: "column",
        gap: ".2rem"
    },
    cover: { width: 100, },
    chip: {
        height: "1.5rem",
        flexBasis: "40%",
        marginRight: "1rem",
        borderRadius: 2
    },
    deleteIcon: {
        padding: 0,
        "&:hover": { color: "green" }
    }
})

const CartItem = props => {
    const { justAdded, product, setLocalStorageCart, localStorageCart, onDeleteIconClicked } = props
    const { item, quantity } = product
    const [inputQuantity, setInputQuantity] = useState(quantity)
    const classes = useStyles()

    const onProductQuantityChanged = event => {
        const newQuantity = event.target.value
        let { products, total } = localStorageCart

        // Search for the updated one then change it.
        products.every(storedProduct => {
            if (storedProduct.item.id === item.id && storedProduct.item.size === item.size) {
                storedProduct.quantity = newQuantity
                total -= +quantity * item.price
                total += +newQuantity * item.price
                return false
            }
            return true
        })

        setLocalStorageCart({ products, total: +total })
        setInputQuantity(newQuantity)
    }

    return <Card className={classes.root}>
        {/* IMAGE */}
        <CardMedia
            component="img"
            className={classes.cover}
            image={item.images[0].url}
            title="Product" />
        {/* CONTENT */}
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="body2">
                    <Box fontWeight="fontWeightMedium">
                        <Typography component="h5" variant="subtitle1">{item.name}</Typography>
                    </Box>
                </Typography>
                <Typography variant="body2" component="h6" color="textSecondary">
                    Mã: 1.2.17.2.04.006.120.23
                </Typography>
                {/* COLOR + SIZE + AMOUNT */}
                <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                    <Chip className={classes.chip} style={{ backgroundColor: "black" }} />
                    <Chip className={classes.chip} label={item.size} />
                    {!justAdded &&
                        <TextField
                            id="standard-number"
                            type="number"
                            defaultValue={inputQuantity}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{ min: 1, max: 1000 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AddShoppingCartOutlinedIcon style={{ fontSize: 16 }} />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={event => onProductQuantityChanged(event)}
                        />
                    }
                </Box>
                {/* DELETE BUTTON + TOTAL */}
                <Box display="flex" justifyContent="space-between" alignItems="center" pt={2}>
                    {!justAdded &&
                        <IconButton
                            className={classes.deleteIcon} aria-label="delete"
                            onClick={() => onDeleteIconClicked(product)}>
                            <DeleteIcon />
                        </IconButton>
                    }
                    <Typography variant="body1" component="span">
                        <FormattedPrice price={item.price} />
                    </Typography>
                </Box>
            </CardContent>
        </div>
    </Card>
}

export default CartItem
