import { Grid, List, Drawer, ListItem, makeStyles, Typography, Box } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PRODUCTS_URL } from "../../../constants"
import { uiActions } from "../../../store/ui-slice"
import ListItemLink from "../../ListItemLink/ListItemLink"

const categories = [
    { name: "HÀNG MỚI" },
    {
        name: "QUẦN ÁO",
        subcategories: ["ÁO PHÔNG", "ÁO BA LỖ", "ÁO SƠ MI", "ÁO THUN DÀI TAY", "ÁO LEN", "ÁO NỈ KHÔNG MŨ", "ÁO NỈ MŨ", "ÁO KHOÁC NỈ", "ÁO KHOÁC", "QUẦN SHORT", "QUẦN JEANS", "QUẦN DÀI", "QUẦN KAKI", "QUẦN JOGGER"]
    },
    {
        name: "PHỤ KIỆN",
        subcategories: ["TẤT CẢ PHỤ KIỆN", "KHẨU TRANG", "MŨ", "TÚI"]
    },
    {
        name: "BỘ SƯU TẬP",
        subcategories: ["BOO Y2K"]
    }
]

const useStyles = makeStyles({
    root: {
        "& .MuiDrawer-paper": { width: "50%" }
    }
})

const CategoriesDrawer = props => {
    const dispatch = useDispatch()
    const categoryDrawerShowing = useSelector(state => state.ui.categoryDrawerShowing)
    const classes = useStyles()
    const [selectedCategory, setSelectedCategory] = useState('')

    const categoriesOnMouseLeave = () => {
        setSelectedCategory('')
        dispatch(uiActions.setCategoryDrawerShowing(false))
    }

    return <Drawer
        className={classes.root}
        anchor='left'
        open={categoryDrawerShowing}
        onClose={event => setSelectedCategory(event.target.value)}>
        {/* HEADER */}
        <Box px={2} my={3} component="header">
            <Typography variant="h4" component="h2"> DANH MỤC </Typography>
        </Box>
        {/* MAIN */}
        <Grid
            container
            onMouseLeave={categoriesOnMouseLeave}>
            {/* CATEGORIES */}
            <Grid item sm={6}>
                <List>
                    {categories.map(c => (
                        <ListItem
                            key={c.name} button
                            onClick={() => setSelectedCategory(c.name)}>{c.name}</ListItem>
                    ))}
                </List>
            </Grid>
            {/* SUBCATEGORIES */}
            <Grid item sm={6}>
                {selectedCategory && <List>
                    {categories.find(c => c.name === selectedCategory).subcategories.map(subcategory => (
                        <ListItemLink href={PRODUCTS_URL} key={subcategory} button>{subcategory}</ListItemLink>
                    ))}
                </List>}
            </Grid>
        </Grid>
    </Drawer>
}

export default CategoriesDrawer