import { Box } from "@material-ui/core"
import CategoriesDrawer from "./CategoriesDrawer"
import CategoryDrawerToggler from "./CategoryDrawerToggler"

const Categories = () => {
    return <Box display="flex" justifyContent="flex-start">
        {/* CATEGORIES TOGGLER */}
        <CategoryDrawerToggler />
        {/* CATEGORIES DIV */}
        <CategoriesDrawer />
    </Box >
}

export default Categories