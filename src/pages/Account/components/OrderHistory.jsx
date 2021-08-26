import { Box, Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import AccountComponentLayout from "../../../components/Account/AccountComponentLayout";
import { fetchOrders } from "../../store/account-actions";
import { accountActions } from "../../store/account-slice";
import CustomizedSnackbar from "../../../components/CustomizedSnackbar/CustomizedSnackbar";
import FormattedPrice from "../../../components/FormattedPrice/FormattedPrice";
import OrderDetails from "../../../components/OrderDetails/OrderDetails";

const useStyles = makeStyles({
    table: { minWidth: 650 }
});

const OrderHistory = props => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const orders = useSelector(state => state.account.orders)
    const history = useHistory()
    const [cancelOrderSuccessShowing, setCancelOrderSuccessShowing] = useState(false)
    const classes = useStyles();

    useEffect(() => {
        if (user) {
            dispatch(fetchOrders(user.id))
        }
    }, [dispatch, user])

    const onDetailsButtonClick = orderId => {
        dispatch(accountActions.setSelectedOrder(orders.find(order => order.id === orderId)))
        history.push('/account/orders/' + orderId)
    }

    if (!orders.length) {
        return <AccountComponentLayout header="Lịch sử đơn hàng">
            <Box textAlign="center" mt={10}>
                <Typography variant="h6" component="p">Bạn chưa có đơn hàng nào!</Typography>
            </Box>
        </AccountComponentLayout>
    }

    const tableHeadings = [
        { name: "TRẠNG THÁI", style: { width: "9rem" } },
        { name: "NGÀY TẠO" },
        { name: "NGƯỜI NHẬN" },
        { name: "ĐỊA CHỈ", style: { width: "13rem" } },
        { name: "SỐ TIỀN" },
        { name: "CHI TIẾT" }
    ]

    return <AccountComponentLayout header="Lịch sử đơn hàng">
        {/* ORDERS TABLE */}
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {/* TABLE HEADER */}
                <TableHead>
                    <TableRow>
                        {tableHeadings.map(h => (
                            <TableCell style={h.style}>{h.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                {/* TABLE BODY */}
                <TableBody>
                    {orders && orders.map(order => (
                        <TableRow key={order.id}>
                            <TableCell size="medium" align="left">
                                <span style={{ color: "green" }}>{order.status}</span>
                            </TableCell>
                            <TableCell align="left">{order.date}</TableCell>
                            <TableCell align="left">{order.delivery.name}</TableCell>
                            <TableCell align="left">{order.delivery.address}</TableCell>
                            <TableCell align="left">
                                <FormattedPrice price={order.total} />
                            </TableCell>
                            <TableCell align="left">
                                <Button
                                    variant="outlined"
                                    onClick={() => onDetailsButtonClick(order.id)}>Xem</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        {/* ORDER DETAILS */}
        <Route
            path="/account/orders/:id"
            render={() => <OrderDetails onAccount={true}
                setCancelOrderSuccessShowing={setCancelOrderSuccessShowing} />} />

        {/* SNACKBAR FOR CANCEL ORDERS */}
        <CustomizedSnackbar
            message="Hủy đơn hàng thành công"
            severity="success"
            showing={cancelOrderSuccessShowing}
            setShowing={setCancelOrderSuccessShowing} />
    </AccountComponentLayout>
}

export default OrderHistory
