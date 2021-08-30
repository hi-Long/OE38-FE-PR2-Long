import { Box, Card, CardActionArea, makeStyles } from "@material-ui/core"
import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { SERVER_ROUTE_PRODUCTS } from "../../constants"
import useLocalStorage from "../../hooks/useLocalStorage"
import ProductImage from "./CardMedia"
import ProductCardActions from "./ProductCardActions"
import ProductCardContent from "./ProductPrice"

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "relative"
    },
    media: { height: 250 }
})

const ProductCard = props => {
    const {
        product,
        localStorageCart,
        setLocalStorageCart,
        setSizeSnackbarShowing,
        productsLayout } = props
    const history = useHistory()
    const [seenProducts, setSeenProducts] = useLocalStorage('seen', { seen: [] })
    const [onHover, setOnHover] = useState(false)
    const classes = useStyles()

    const onCardClicked = async () => {
        const updatedProduct = { ...product, click: product.click + 1 }
        try {
            await axios.put(`${SERVER_ROUTE_PRODUCTS}/${product.id}`, updatedProduct)
        } catch (err) {
            console.log(err)
        }
        if (!seenProducts.find(p => p.id === product.id)) {
            setSeenProducts([product, ...seenProducts])
        }
        history.push(`/products/${product.id}`)
    }

    return <Box p={.5}>
        <Card
            className={classes.root}
            onClick={onCardClicked}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}>
            <CardActionArea>
                {!onHover
                    // Change background image
                    ? <ProductImage
                        image={product && product.images[0].url}
                        height={productsLayout === 2 ? 800 : 500} />
                    : <ProductImage
                        image={product && product.images[1].url}
                        height={productsLayout === 2 ? 800 : 500} />
                }
                <ProductCardContent name={product.name} price={product.price} />
            </CardActionArea>
            <ProductCardActions
                className={classes.actions}
                onHover={onHover}
                product={product}
                localStorageCart={localStorageCart}
                setLocalStorageCart={setLocalStorageCart}
                setSizeSnackbarShowing={setSizeSnackbarShowing} />
        </Card>
    </Box>
}

export default ProductCard
