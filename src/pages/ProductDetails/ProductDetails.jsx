import { Box } from "@material-ui/core"
import ProductDetailsDelivery from "./components/Details/ProductDetailsDelivery"
import ProductDetailsOverview from "./components/Details/ProductDetailsOverview"
import ProductDetailsSpecs from "./components/Details/ProductDetailsSpecs"

const ProductDetails = props => {
    return <Box>
        <ProductDetailsOverview />
        <ProductDetailsSpecs />
        <ProductDetailsDelivery />
    </Box>
}

export default ProductDetails