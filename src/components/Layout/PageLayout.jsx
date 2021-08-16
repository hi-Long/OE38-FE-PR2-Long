import { Box } from "@material-ui/core"
import NavigationBar from "../NavigationBar/NavigationBar"

const PageLayout = props => {
    return <Box>
        <NavigationBar {...props.extra}></NavigationBar>
        {props.children}
    </Box>
}

export default PageLayout