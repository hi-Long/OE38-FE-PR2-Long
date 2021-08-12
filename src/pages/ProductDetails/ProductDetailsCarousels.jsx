import { Box, Typography } from "@material-ui/core"
import { Fragment } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel"

const ProductDetailsCarousel = props => {
    const carousels = [
        { header: "SẢN PHẨM LIÊN QUAN" },
        { header: "BẠN ĐÃ XEM GẦN ĐÂY" }
    ]

    return <Box component="section" mt={5}>
        {carousels.map(carousel => (
            <Fragment>
                <Box mb={3} mt={5}>
                    <Typography variant="h5" component="h3">{carousel.header}</Typography>
                </Box>
                <ProductCarousel slidesToShow={5} autoplay={true}>
                    {[1, 2, 3, 4].map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ProductCarousel>
            </Fragment>
        ))}
    </Box>
}

export default ProductDetailsCarousel
