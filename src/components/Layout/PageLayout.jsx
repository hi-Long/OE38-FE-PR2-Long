import { Box } from "@material-ui/core"
import NavigationBar from "../NavigationBar/NavigationBar"

const PageLayout = props => {
    const { localStorageCart, setLocalStorageCart, width } = props

    return <Box>
        <NavigationBar
            width={width}
            localStorageCart={localStorageCart}
            setLocalStorageCart={setLocalStorageCart}
            {...props.extra} />
        {props.children}
    </Box>
}

export default PageLayout