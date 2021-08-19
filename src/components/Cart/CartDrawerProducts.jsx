import { Box, List, makeStyles } from "@material-ui/core"
import CardItem from "./CartItem/CartItem"

const useStyles = makeStyles({
    root: { backgroundColor: "#fcfcfca8" }
})

const CartDrawerProducts = props => {
    const classes = useStyles()

    return <Box className={classes.root} px={2} pt={2} overflow="auto">
        <List>
            {[1, 2, 3, 4].map(i => (
                <CardItem key={i} />
            ))}
        </List>
    </Box>
}

export default CartDrawerProducts
