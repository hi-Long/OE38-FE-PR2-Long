import { Box, Card, CardActionArea } from "@material-ui/core"
import ProductImage from "./CardMedia"

const ProductCardImageOnly = () => {
    return <Box p={.5}>
        <Card>
            <CardActionArea>
                <ProductImage
                    image="https://cdn.boo.vn/products/4618/ao-phong-pattern-boolaab-yz5fw-0.jpg"
                    height={400} />
            </CardActionArea>
        </Card>
    </Box>
}

export default ProductCardImageOnly