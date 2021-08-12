import { Box, Button, Divider, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        boxShadow: "0px -1px 5px lightgray",
        zIndex: 2,
        backgroundColor: "#fcfcfc"
    }
})

const CartDrawerSummary = props => {
    const { noButtons } = props
    const classes = useStyles()

    return <Box className={classes.root}>
        <Divider />
        <Box px={2} mb={3} pt={3}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography variant="subtitle1" component="span">
                    <Box fontWeight="fontWeightMedium"> Tổng cộng </Box>
                </Typography>
                <Typography variant="subtitle1" component="span">
                    <Box fontWeight="fontWeightMedium" fontSize={24} color="red"> 499.000đ </Box>
                </Typography>
            </Box>
            {!noButtons && <Button variant="outlined" color="primary" fullWidth size="large">TIẾN HÀNH ĐẶT HÀNG</Button>}
        </Box>
    </Box>
}

export default CartDrawerSummary
