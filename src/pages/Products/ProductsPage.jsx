import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import CartItemAddedSnackbar from '../../components/Cart/CartItemAddedSnackbar'
import PageContentLayout from '../../components/Layout/PageContentLayout'
import PageLayout from '../../components/Layout/PageLayout'
import { fetchConcepts } from '../../store/product-action'
import { fetchProductsByParams } from '../../store/search-action'
import Filters from './Filters'
import Products from './Products'

const useStyles = makeStyles({
    products: { transition: ".2s" },

    filters: {
        gap: "1rem",
        transition: ".2s"
    }
})

const ProductsPage = props => {
    const { localStorageCart, setLocalStorageCart } = props

    const dispatch = useDispatch()
    const { products, params } = useSelector(state => state.search)
    const { justAddded } = useSelector(state => state.cart)

    const [filtersIsShown, setFiltersIsShown] = useState(false)
    const [productsLayout, setProductsLayout] = useState(4)

    const subcategory = new URLSearchParams(useLocation().search).get('subcategory')
    const classes = useStyles()

    // FETCH PRODUCTS WHEN PARAMS CHANGED
    useEffect(() => {
        if (subcategory) {
            dispatch(fetchProductsByParams({ subcategory, ...params }))
        }
    }, [dispatch, params, subcategory])

    // GET CONCEPTS AVAILABLE
    useEffect(() => {
        dispatch(fetchConcepts())
    }, [dispatch])

    // TOGGLE FILTER  VISIBILITY
    const onToggleFilters = () => {
        setFiltersIsShown(prevState => !prevState)
    }

    // SET LAYOUT OF PRODUCTS DIV - SHOW 2 OR 4 ITEMS PER ROW
    const onToggleProductsLayout = () => {
        if (productsLayout === 2) {
            setProductsLayout(4)
        }
        else {
            setProductsLayout(2)
        }
    }

    return <Fragment>
        <Grid container>
            <Grid className={classes.products} item sm={filtersIsShown ? 9 : 12}>
                <PageLayout>
                    <PageContentLayout extra={{ "mt": 20 }}>
                        {/* HEADER */}
                        <Box mb={5}>
                            <Box mb={3} textAlign="center">
                                <Typography component="h2" variant="h5">{subcategory}</Typography>
                            </Box>
                            <Box className={classes.filters} display="flex" justifyContent="flex-end">
                                <Box fontWeight="fontWeightLight" fontSize={12}>
                                    <Button
                                        variant="outlined" size="large"
                                        onClick={onToggleProductsLayout}>See {productsLayout}</Button>
                                </Box>
                                <Box fontWeight="fontWeightLight" fontSize={12}>
                                    <Button
                                        variant="outlined" size="large"
                                        onClick={onToggleFilters}>Filters</Button>
                                </Box>
                            </Box>
                        </Box>
                        {/* MAIN */}
                        {products &&
                            <Products
                                localStorageCart={localStorageCart}
                                setLocalStorageCart={setLocalStorageCart}
                                productsLayout={productsLayout}
                                products={products}></Products>
                        }
                    </PageContentLayout>
                </PageLayout >
            </Grid>
            <Grid
                className={classes.filters} item
                sm={filtersIsShown ? 3 : "auto"}>
                <Filters
                    onToggleFilters={onToggleFilters}
                    show={filtersIsShown} />
            </Grid>
        </Grid>
        {/* ADD SUCCESS SNACKBAR */}
        <CartItemAddedSnackbar product={justAddded} />
    </Fragment >
}

export default ProductsPage
