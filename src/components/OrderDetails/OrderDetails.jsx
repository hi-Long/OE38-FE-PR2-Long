import { Box } from "@material-ui/core"
import { useSelector } from "react-redux"
import AccountComponentLayout from "../Account/AccountComponentLayout"
import OrderInfo from "./OrderInfo"
import OrderProducts from "./OrderProducts"
import OrderStepper from "./OrderStepper"

const OrderDetails = props => {
    const selectedOrder = useSelector(state => state.account.orderSelected)

    return <Box mt={8} mb={8} component="section">
        <AccountComponentLayout header="Thông tin đơn hàng">
            {/* TOP */}
            <OrderInfo />
            {/* STEPPER */}
            <OrderStepper status={selectedOrder.status} />
            {/* PRODUCTS */}
            <OrderProducts />
            {/* BACK BUTTON */}
        </AccountComponentLayout>
    </Box>
}

export default OrderDetails
