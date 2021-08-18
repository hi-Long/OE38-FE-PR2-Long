import { Box, List, ListItemIcon, ListItemText, ListItem, makeStyles } from "@material-ui/core"
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import clsx from "clsx";
import { useSelector } from "react-redux";

const searchResultIcons = {
    subcategories: <CategoryOutlinedIcon></CategoryOutlinedIcon>,
    concepts: <CategoryOutlinedIcon></CategoryOutlinedIcon>,
    materials: <CategoryOutlinedIcon></CategoryOutlinedIcon>
}

const useStyles = makeStyles({
    root: {
        position: "absolute",
        marginTop: "1rem",
        width: "100%",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 4px 5px 0px lightslategrey",
        opacity: 0,
        transform: "translateY(-2rem)",
        zIndex: "-1",
        transition: '.2s'
    },
    active: {
        opacity: 1,
        transform: "translateY(0rem)",
        zIndex: 1
    }
})

const SearchDrawerResults = props => {
    const classes = useStyles(props)
    const { noResults, searchResults } = useSelector(state => state.search)

    return <Box className={clsx(classes.root, { [classes.active]: noResults !== 0 })} width="100%">
        <List>
            {Object.keys(searchResults).map(field => {
                const listItems = []
                searchResults[field].forEach(result => {
                    let listItem = <ListItem button key={result}>
                        <ListItemIcon>
                            {searchResultIcons[field]}
                        </ListItemIcon>
                        <ListItemText>{result}</ListItemText>
                    </ListItem>
                    listItems.push(listItem)
                })
                return listItems
            })}
        </List>
    </Box>
}

export default SearchDrawerResults