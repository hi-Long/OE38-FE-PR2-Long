import { Box, Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core"
import { useReducer } from "react"
import { useSelector } from "react-redux"
import { CHECKOUT_PAGE_DELIVERY_ADDRESS_INPUT, CHECKOUT_PAGE_DELIVERY_NAME_INPUT, CHECKOUT_PAGE_DELIVERY_PHONE_INPUT } from "../../constants"
import { formInitialState, formReducer } from './AddressReducer'

const formElements = [
    { id: "name", label: "Họ tên", actionType: CHECKOUT_PAGE_DELIVERY_NAME_INPUT, grid: 6 },
    { id: "phone", label: "Số điện thoại", actionType: CHECKOUT_PAGE_DELIVERY_PHONE_INPUT, grid: 6 },
    { id: "address", label: "Địa chỉ", actionType: CHECKOUT_PAGE_DELIVERY_ADDRESS_INPUT, grid: 12 }
]

const useStyles = makeStyles({
    root: {
        width: "96.3%",
        marginTop: "1rem",
        padding: "1rem",
        gap: "2rem"
    }
})

const AddressForm = props => {
    const { initialState, setNewFormShowing, setUpdateFormShowing, type, setSnackbarShowing } = props
    const [formState, formDispatch] = useReducer(formReducer, formInitialState, () => {
        if (initialState) {
            return initialState
        } else {
            return formInitialState
        }
    })
    const classes = useStyles()

    let setShowing, title, confirmButton
    switch (type) {
        case 'new':
            title = "Địa chỉ mới"
            setShowing = setNewFormShowing
            confirmButton = "THÊM MỚI"
            break
        case 'update':
            title = 'Thay đổi địa chỉ'
            setShowing = setUpdateFormShowing
            confirmButton = "THAY ĐỔI"
            break
        default: break
    }

    return <Box className={classes.root} border={1}>
        <header>
            <Box my={2} color="gray">
                <Typography variant="h5" component="h3">{title}</Typography>
            </Box>
        </header>
        <form
            id="delivery-form"
            width="100%" display="flex" border={1} mt={2}>
            <Grid container spacing={4}>
                {/* NAME */}
                {formElements.map(el => (
                    <Grid item sm={el.grid}>
                        <TextField
                            required id={el.id} label={el.label}
                            defaultValue={formState[el.id].value}
                            onChange={event => formDispatch({ type: el.actionType, payload: event.target.value })}
                            fullWidth />
                    </Grid>
                ))}
                <Grid item sm={6}>
                    <Button
                        variant="outlined" fullWidth disableElevation
                        onClick={() => setShowing(false)}>HỦY BỎ</Button>
                </Grid>
                <Grid item sm={6}>
                    <Button type="submit" variant="contained" color="secondary" fullWidth disableElevation>{confirmButton}</Button>
                </Grid>
            </Grid>
            {/* BUTTON */}
        </form >
    </Box>
}

export default AddressForm
