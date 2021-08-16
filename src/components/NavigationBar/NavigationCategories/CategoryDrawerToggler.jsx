import { IconButton } from "@material-ui/core"
import DehazeIcon from '@material-ui/icons/Dehaze'
import { useDispatch } from "react-redux"
import { uiActions } from "../../../store/ui-slice"

const CategoryDrawerToggler = props => {
    const dispatch = useDispatch()

    return <IconButton
        onMouseOver={() => dispatch(uiActions.setCategoryDrawerShowing(true))}
        aria-label="navbar-toggler">
        <DehazeIcon></DehazeIcon>
    </IconButton>
}

export default CategoryDrawerToggler