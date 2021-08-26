import { Box, Grid, IconButton, makeStyles } from "@material-ui/core"
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import { Fragment } from "react"
import { Route, Switch } from "react-router-dom"
import ChangePassword from "./components/Account/ChangePassword"
import OrderHistory from "./components/Account/OrderHistory"
import PersonalInfo from "./components/PersonalInfo"
import DeliveryAddress from "./DeliveryAddress/DeliveryAddress"
import Logo from '../../components/Logo/Logo'
import AccountPageNav from "./AccountPageNav"
import { ACCOUNT_PAGE_NESTED_DELIVERY, ACCOUNT_PAGE_NESTED_ORDERS, ACCOUNT_PAGE_NESTED_PASSWORD, ACCOUNT_PAGE_NESTED_PERSONAL_INFO } from "../../constants"

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        height: "92vh"
    }
})

const AccountPage = props => {
    const classes = useStyles()

    return <Fragment>
        <Grid container className={classes.root}>
            <Grid item sm={9}>
                <Box component="nav" display="flex" alignItems="center" pt={2} pb={5}>
                    <IconButton>
                        <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
                    </IconButton>
                    <Box width="100%" justifySelf="center">
                        <Logo></Logo>
                    </Box>
                </Box>
                <Box width="75%" m="auto">
                    <Switch>
                        <Route path={ACCOUNT_PAGE_NESTED_PERSONAL_INFO} render={() => <PersonalInfo />} />
                        <Route path={ACCOUNT_PAGE_NESTED_ORDERS} render={() => <OrderHistory />} />
                        <Route path={ACCOUNT_PAGE_NESTED_DELIVERY} render={() => <DeliveryAddress />} />
                        <Route path={ACCOUNT_PAGE_NESTED_PASSWORD} render={() => <ChangePassword />} />
                    </Switch>
                </Box>
            </Grid>
            <Grid item sm={3}>
                <AccountPageNav />
            </Grid>

        </Grid>
    </Fragment>
}

export default AccountPage
