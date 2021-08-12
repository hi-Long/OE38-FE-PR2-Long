import { Box, Breadcrumbs, Grid, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import PageContentLayout from "../../components/Layout/PageContentLayout"
import PageLayout from "../../components/Layout/PageLayout"
import ProductDetails from "./ProductDetails"
import ProductDetailsCarousel from "./ProductDetailsCarousels"
import ProductDetailsImages from "./ProductDetailsImages"

const ProductDetailsPage = props => {
    return <PageLayout>
        <main>
            <PageContentLayout>
                {/* BREADCRUMBS */}
                <Box my={3} boxSizing="border-box">
                    <Breadcrumbs>
                        <Link color="inherit" href="/"> Trang chủ </Link>
                        <Typography color="textPrimary">ÁO PHÔNG</Typography>
                    </Breadcrumbs>
                </Box>
                {/* MAIN */}
                <Grid container>
                    <Grid item sm={9}>
                        <ProductDetailsImages />
                    </Grid>
                    <Grid item sm={3}>
                        <ProductDetails />
                    </Grid>
                </Grid>
                <ProductDetailsCarousel />
            </PageContentLayout>
        </main>
    </PageLayout >
}

export default ProductDetailsPage
