import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { useState } from "react"
import { useSelector } from "react-redux"

const OrderInfo = props => {
    const { accountPageOrder } = props
    const selectedDelivery = useSelector(state => state.checkout.delivery.selected)
    const paymentMethod = useSelector(state => state.checkout.paymentMethod)
    const [delivery, setDelivery] = useState([])

    return <Grid container>
        {delivery &&
            <Grid item sm={12}>
                <Typography variant="subtitle1" component="h3" gutterBottom>
                    <Box fontWeight="fontWeightRegular">THÔNG TIN ĐƠN HÀNG</Box>
                </Typography>
                <Typography>
                    <Box fontWeight="fontWeightBold">Tên người nhận: {delivery.name}</Box>
                </Typography>
                <Typography>Địa chỉ: {delivery.address}</Typography>
                <Typography>Số điện thoại: {delivery.phone}</Typography>
                <Typography>Phương thức: {delivery.paymentMethod} </Typography>
            </Grid>
        }
    </Grid>
}

export default OrderInfo
