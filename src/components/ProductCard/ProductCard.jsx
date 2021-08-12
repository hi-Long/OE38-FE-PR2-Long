import { Box, Card, CardActionArea, makeStyles } from "@material-ui/core"
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
    const classes = useStyles()

    return <Box p={.5}>
        <Card className={classes.root}>
            <CardActionArea>
                <ProductImage
                    image="https://cdn.boo.vn/products/4618/ao-phong-pattern-boolaab-yz5fw-0.jpg"
                    height={400} />
                <ProductCardContent name="AO PHONG OVERSIZE" price="499000"></ProductCardContent>
            </CardActionArea>
            <ProductCardActions className={classes.actions}></ProductCardActions>
        </Card>
    </Box>
}

export default ProductCard
