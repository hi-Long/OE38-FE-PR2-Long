import { Box, Button, makeStyles } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useState } from "react";
import { useSelector } from "react-redux";
import AccountComponentLayout from "../Account/AccountComponentLayout";
import Address from "./Address";
import AddressForm from "./AddressForm";

const useStyles = makeStyles({
    button: { padding: "1rem" }
})

const DeliveryAddresses = props => {
    const { setSnackbarShowing, setDeleteConfirmShowing } = props
    const delivery = useSelector(state => state.auth.user.delivery)
    const [newFormShowing, setNewFormShowing] = useState(false)
    const [updateFormShowing, setUpdateFormShowing] = useState(false)
    const classes = useStyles()

    return <AccountComponentLayout header="Địa chỉ giao hàng">
        {!newFormShowing
            // Show button by default
            ? <Box width="100%" border={1} >
                <Button
                    className={classes.button} fullWidth
                    onClick={() => setNewFormShowing(prevState => !prevState)}>
                    <AddCircleOutlineOutlinedIcon />
                    Thêm địa chỉ mới
                </Button>
            </Box>
            // If user choose to create new address show form
            : <AddressForm type="new"
                setNewFormShowing={setNewFormShowing}
                setSnackbarShowing={setSnackbarShowing} />
        }
        <Box>
            {delivery.map(d => (
                <Address delivery={d}
                    setDeleteConfirmShowing={setDeleteConfirmShowing}
                    setUpdateFormShowing={setUpdateFormShowing}
                    setSnackbarShowing={setSnackbarShowing} />
            ))}
        </Box>
    </AccountComponentLayout>
}

export default DeliveryAddresses
