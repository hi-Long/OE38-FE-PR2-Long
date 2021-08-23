import { Box, Button, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { useState } from "react"

const useStyles = makeStyles({
    root: { border: "1px solid lightgray" },
    selected: {
        backgroundColor: "black",
        color: "white",
        "&:hover": {
            backgroundColor: "black",
            color: "white"
        }
    }
})

const FilterItem = props => {
    const [isSelected, setIsSelected] = useState(false)
    const classes = useStyles({ ...props, isSelected })

    return <Button
        variant="outlined"
        className={clsx(classes.root, isSelected && classes.selected)}>
        <Box fontWeight="fontWeightLight">
            {props.children}
        </Box>
    </Button >
}

export default FilterItem
