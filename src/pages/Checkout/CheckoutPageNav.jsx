import { Box, IconButton } from "@material-ui/core"
import Logo from "../../components/Logo/Logo"
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

const CheckoutPageNav = props => {
    return <Box component="nav" display="flex" alignItems="center" pt={2} pb={5}>
        <IconButton>
            <KeyboardArrowLeftIcon />
        </IconButton>
        <Box justifySelf="center">
            <Logo />
        </Box>
    </Box>
}

export default CheckoutPageNav
