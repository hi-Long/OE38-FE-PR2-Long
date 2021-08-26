import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { Fragment, useState } from "react"
import { Link, Route, Switch } from "react-router-dom"
import CartCheckoutDrawer from "../../components/Cart/CartCheckoutDrawer"
import { CHECKOUT_PAGE_NESTED_AUTH, CHECKOUT_PAGE_NESTED_DELIVERY, CHECKOUT_PAGE_NESTED_SUMMARY } from "../../constants"
import CheckoutAuth from "./CheckoutAuth"
import CheckoutDelivery from "./CheckoutDelivery"
import CheckoutPageNav from "./CheckoutPageNav"
import CheckoutStepper from "./CheckoutStepper"
import CheckoutSummary from "./CheckoutSummary"

const useStyles = makeStyles({
    root: { height: "92vh" }
})

const Checkout = props => {
    const { localStorageCart, setLocalStorageCart } = props
    const [activeStep, setActiveStep] = useState(0);

    const classes = useStyles()

    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return <Grid container className={classes.root}>
        <Grid item sm={9}>
            {/* NAV */}
            <CheckoutPageNav />
            {/* MAIN */}
            <Box width="75%" m="auto">
                {!localStorageCart.products.length && activeStep === 0
                    // If the cart is empty, do not render checkout comps
                    ? <Box textAlign="center" mt={10}>
                        <Typography variant="h5" component="p" gutterBottom>
                            Giỏ hàng của bạn không có sản phẩm, không thể tiến hành thanh toán.
                        </Typography>
                        <Link href="/">
                            Quay lại trang chủ.
                        </Link>
                    </Box>
                    // If the cart is not empty, render checkout comps
                    : <Fragment>
                        <CheckoutStepper activeStep={activeStep} />
                        <Switch>
                            <Route
                                path={CHECKOUT_PAGE_NESTED_AUTH}
                                render={() => <CheckoutAuth handleNextStep={handleNextStep} />} />
                            {activeStep >= 1
                                && <Route
                                    path={CHECKOUT_PAGE_NESTED_DELIVERY}
                                    render={() => <CheckoutDelivery handleNextStep={handleNextStep} handleBackStep={handleBackStep} />} />
                            }
                            {activeStep >= 2
                                && <Route
                                    path={CHECKOUT_PAGE_NESTED_SUMMARY}
                                    render={() => <CheckoutSummary
                                        handleNextStep={handleNextStep}
                                        handleBackStep={handleBackStep}
                                        localStorageCart={localStorageCart}
                                        setLocalStorageCart={setLocalStorageCart} />} />
                            }
                        </Switch>
                    </Fragment>
                }
            </Box>
        </Grid>
        {/* CHECKOUT DRAWER */}
        <Grid item sm={3}>
            <CartCheckoutDrawer
                localStorageCart={localStorageCart}
                setLocalStorageCart={setLocalStorageCart} />
        </Grid>
    </Grid>
}

export default Checkout
