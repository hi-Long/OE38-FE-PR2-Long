import { Box, makeStyles, Slider, Typography } from "@material-ui/core"
import { useState } from "react"

const useStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "right",
        boxSizing: "border-box"
    }
})

const FilterItemPrice = props => {
    const classes = useStyles()
    const [price, setPrice] = useState([0, 200000000]);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    return <Box>
        <Box className={classes.root} my={3} px={3}>
            {/* PRICE VALUE */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography id="price-slider" component="span" gutterBottom>
                    MỨC GIÁ
                </Typography>
                <Typography gutterBottom component="span" variant="h5">
                    {price[0]}đ - {price[1]}đ
                </Typography>
            </Box>
            {/* PRICE SLIDER */}
            <Slider
                value={price}
                onChange={handleChange}
                valueLabelDisplay="off"
                aria-labelledby="price-slider"
                min={0}
                max={2000000}
            />
        </Box>
    </Box>
}

export default FilterItemPrice
