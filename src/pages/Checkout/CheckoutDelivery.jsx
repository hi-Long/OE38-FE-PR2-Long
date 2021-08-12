import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Confirmation from "../../components/Confirmation/Confirmation"
import CustomizedSnackbar from "../../components/CustomizedSnackbar/CustomizedSnackbar"
import DeliveryAddresses from "../../components/DeliveryAddress/DeliveryAddress"

const CheckoutDelivery = props => {
    const { handleNextStep, handleBackStep } = props
    const history = useHistory()
    const [snackbarShowing, setSnackbarShowing] = useState(false)
    const [deleteConfirmShowing, setDeleteConfirmShowing] = useState(false)

    const onBackButtonClicked = () => {
        handleBackStep()
        history.replace('/checkout/auth')
    }

    const onNextButtonClicked = () => {
        handleNextStep()
        history.push('/checkout/summary')
    }

    const paymentMethods = [
        "Thanh toán qua thẻ ATM nội địa, Visa, Master card",
        "Thanh toán qua MOMO",
        "Thanh toán khi nhận hàng"
    ]

    return <Box mb={5}>
        {/* DELIVERY ADDRESSES */}
        <DeliveryAddresses
            setSnackbarShowing={setSnackbarShowing}
            setDeleteConfirmShowing={setDeleteConfirmShowing} />

        {/* DELIVERY METHOD */}
        <FormControl component="fieldset">
            <Typography variant="h6" component="h3">
                <Box fontWeight="fontWeightRegular" mt={4} mb={2}> Hình thức thanh toán:</Box>
            </Typography>
            <Box border={1} width="186.5%" p={2}>
                <RadioGroup aria-label="payment-method" name="payment-method">
                    {paymentMethods.map(pm => (
                        <FormControlLabel value={pm} control={<Radio />} label={pm} />
                    ))}
                </RadioGroup>
            </Box>
        </FormControl>

        {/* ACTION BUTTONS */}
        <Box width="100%" mt={3} display="flex" justifyContent="space-evenly">
            <Button
                variant="contained" color="primary"
                onClick={onBackButtonClicked}>Quay lại</Button>
            <Button
                variant="contained" color="secondary"
                onClick={onNextButtonClicked}>Tiếp tục</Button>
        </Box>

        {/* SNACKBARS FOR SUCCESSFUL CHANGE*/}
        <CustomizedSnackbar
            showing={snackbarShowing}
            message="Thay đổi thành công"
            severity="success"
            setShowing={setSnackbarShowing} />
        {/* DELETE CONFIRMATION */}
        <Confirmation
            title="Xóa địa chỉ"
            content="Bạn chắc chắn muốn xóa chứ"
            confirm="Xác nhận"
            cancel="Hủy"
            confirmActions={() => { console.log("CONFIRM") }}
            confirmationShowing={deleteConfirmShowing}
            setConfirmationShowing={setDeleteConfirmShowing} />
    </Box>
}

export default CheckoutDelivery
