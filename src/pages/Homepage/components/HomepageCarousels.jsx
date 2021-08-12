import { Box, Typography } from "@material-ui/core"
import PageContentLayout from "../../../components/Layout/PageContentLayout"
import ProductCard from "../../../components/ProductCard/ProductCard"
import ProductCarousel from "../../../components/ProductCarousel/ProductCarousel"

const HomepageCarousels = props => {
    const carousels = [
        {
            name: 'SẢN PHẨM BÁN CHẠY',
            product: <ProductCard />
        },
        {
            name: 'SẢN PHẨM ĐÃ XEM',
            product: <ProductCard />
        }
    ]

    return <PageContentLayout>
        {carousels.map(carousel => (
            <Box mt={10}>
                <Typography variant="h4" component="h2">
                    <Box mb={5}>{carousel.name}</Box>
                </Typography>
                <ProductCarousel>
                    {[1, 2, 3, 4, 5, 6].map(i => {
                        return carousel.product
                    })}
                </ProductCarousel>
            </Box>
        ))}
    </PageContentLayout>
}

export default HomepageCarousels
