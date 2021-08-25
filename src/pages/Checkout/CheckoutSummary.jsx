import { Box, Typography } from "@material-ui/core"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Confirmation from "../../components/Confirmation/Confirmation"
import OrderDetails from "../../components/OrderDetails/OrderDetails"

const CheckoutSummary = props => {
    const { localStorageCart, setLocalStorageCart, handleBackStep } = props
    const [confirmationShowing, setConfirmationShowing] = useState(false)
    const [checkoutComplete, setCheckoutComplete] = useState(false)

    if (checkoutComplete) {
        return <Box>
            <Typography>Đơn hàng của bạn đã hoàn thành</Typography>
            <Link to="#">Theo dõi đơn hàng của bạn</Link>
            <img src="https://cdn.dribbble.com/users/1017716/screenshots/14404808/media/e731fb54b71c807a67e031e8bd9cd48e.gif" alt="Shipping" width="100%" />
        </Box>
    }

    return <Box mb={5}>
        <OrderDetails
            handleBackStep={handleBackStep}
            onCheckout
            setConfirmationShowing={setConfirmationShowing}
            localStorageCart={localStorageCart} />

        <Confirmation
            title="Xác nhận đơn hàng"
            content="Bạn chắc chắn muốn mua hàng chứ"
            confirm="Xác nhận"
            cancel="Hủy"
            confirmActions={() => { console.log("CONFRIM") }}
            confirmationShowing={confirmationShowing}
            setConfirmationShowing={setConfirmationShowing} />
    </Box>
}

export default CheckoutSummary
