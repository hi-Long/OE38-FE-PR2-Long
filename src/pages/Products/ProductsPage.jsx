import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { Fragment, useState } from 'react'
import PageContentLayout from '../../components/Layout/PageContentLayout'
import PageLayout from '../../components/Layout/PageLayout'
import Products from './Products'

const useStyles = makeStyles({
    products: { transition: ".2s" },

    filters: {
        gap: "1rem",
        transition: ".2s"
    }
})

const ProductsPage = props => {
    const [filtersIsShown, setFiltersIsShown] = useState(false)
    const [productsLayout, setProductsLayout] = useState(4)

    const classes = useStyles()

    return <Fragment>
        <Grid container>
            <Grid className={classes.products} item sm={filtersIsShown ? 9 : 12}>
                <PageLayout>
                    <PageContentLayout extra={{ "mt": 20 }}>
                        {/* HEADER */}
                        <Box mb={5}>
                            <Box mb={3} textAlign="center">
                                <Typography component="h2" variant="h5"> ÁO PHÔNG </Typography>
                            </Box>
                            <Box className={classes.filters} display="flex" justifyContent="flex-end">
                                <Box fontWeight="fontWeightLight" fontSize={12}>
                                    <Button variant="outlined" size="large">See {productsLayout}</Button>
                                </Box>
                                <Box fontWeight="fontWeightLight" fontSize={12}>
                                    <Button variant="outlined" size="large">Filters</Button>
                                </Box>
                            </Box>
                        </Box>
                        {/* MAIN */}
                        <Products productsLayout={productsLayout} />
                    </PageContentLayout>
                </PageLayout >
            </Grid>
        </Grid>
    </Fragment>
}

export default ProductsPage
