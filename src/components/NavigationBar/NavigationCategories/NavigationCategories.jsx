import { Box } from "@material-ui/core"
import CategoryDrawerToggler from "./CategoryDrawerToggler"

const Categories = () => {
    return <Box display="flex" justifyContent="flex-start">
        {/* CATEGORIES TOGGLER */}
        <CategoryDrawerToggler />
    </Box >
}

export default Categories