import { Box, Button, Divider, makeStyles, Typography } from "@material-ui/core";
import StraightenIcon from '@material-ui/icons/Straighten';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";
import SizeDrawer from "../SizeDrawer";

const useStyles = makeStyles((theme) => ({
    root: {
        gap: theme.spacing(3)
    },
    "size-table": {
        width: "fit-content"
    },
}));

const ProductDetailsOverview = props => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [size, setSize] = useState("S")

    const toggleSizeDrawer = value => {
        dispatch(uiActions.setSizeDrawerShowing(value))
    }

    return <Box className={classes.root} display="flex" flexDirection="column">
        {/* NAME + PRICE */}
        <Box>
            <Typography variant="h5" component="h1">ÁO SƠ MI NAM SQUARE NT CỔ TRÒN</Typography>
            <Typography variant="h6" component="span">
                <Box fontWeight="fontWeightLight">295.000 đ</Box>
            </Typography>
        </Box>
        {/* SIZE DRAWER TRIGGER */}
        <Button
            className={classes["size-table"]}
            variant="contained"
            color="primary"
            onClick={() => toggleSizeDrawer(true)}
            startIcon={<StraightenIcon />}>
            Kích cỡ
        </Button>
        {/* SIZE DRAWER */}
        <SizeDrawer></SizeDrawer>
        {/* SIZES */}
        <Box display="flex" justifyContent="space-between">
            {['XS', 'S', 'M', 'L', 'XL'].map(s => (
                <Button
                    className={classes.s}
                    key={s}
                    color="primary"
                    variant={size === s ? "contained" : "outline"}
                    size="medium"
                    onClick={() => setSize(s)}>{s}</Button>
            ))}
        </Box>
        <Button variant="outlined" color="primary" size="large">THÊM VÀO GIỎ</Button>
        <Divider />
    </Box>
}

export default ProductDetailsOverview
