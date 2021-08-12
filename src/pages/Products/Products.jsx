import { Box, Grid, Typography } from "@material-ui/core"
import { Fragment, useState } from "react"
import { useSelector } from "react-redux"
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductsLoadingCarousel from "../../components/ProductCarousel/ProductsLoadingCarousel"
import CustomizedSnackbar from "../../components/CustomizedSnackbar/CustomizedSnackbar"

const Products = props => {
    const { products, productsLayout, localStorageCart, setLocalStorageCart } = props
    const productsFetching = useSelector(state => state.ui.productsFetching)
    const [sizeSnackbarShowing, setSizeSnackbarShowing] = useState(false)

    // If products are fetching, show spinner
    if (productsFetching) {
        return <ProductsLoadingCarousel productsLayout={productsLayout} noProducts={12} />
    }

    // If the products fetching is done, show results
    return <Fragment>
        <Grid container spacing={2}>
            {(products && products.length > 0)
                // If there are products, render them
                ? products.map((product, i) => (
                    <Grid item sm={12 / productsLayout} key={i}>
                        <ProductCard
                            productsLayout={productsLayout}
                            product={product}
                            localStorageCart={localStorageCart}
                            setLocalStorageCart={setLocalStorageCart}
                            setSizeSnackbarShowing={setSizeSnackbarShowing}></ProductCard>
                    </Grid>
                ))
                // If there aren't ant products, so "No products"
                : <Box width="100%" textAlign="center" mt={10}>
                    <Typography>Không tìm thấy sản phẩm nào!</Typography>
                </Box>
            }
        </Grid>
        {/* SIZE SNACKBAR */}
        <CustomizedSnackbar
            message="Chưa lựa chọn kích cỡ"
            severity="error"
            showing={sizeSnackbarShowing}
            setShowing={setSizeSnackbarShowing} />
    </Fragment>
}

export default Products
