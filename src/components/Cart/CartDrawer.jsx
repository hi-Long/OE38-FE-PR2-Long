import { Drawer, makeStyles } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import CartDrawerHeader from "./CartDrawerHeader"
import CartDrawerProducts from "./CartDrawerProducts"
import CartDrawerSummary from "./CartDrawerSummary"
import Confirmation from "../Confirmation/Confirmation"
import CustomizedSnackbar from "../CustomizedSnackbar/CustomizedSnackbar"

const useStyles = makeStyles({
    root: {
        "& .MuiDrawer-paper": {
            width: "28%",
            padding: "0"
        }
    }
})

const CartDrawer = props => {
    const dispatch = useDispatch()
    const cartDrawerShowing = useSelector(state => state.ui.cartDrawerShowing)
    const { localStorageCart, setLocalStorageCart } = props
    const [deleteItemConfirmShowing, setDeleteItemConfirmShowing] = useState(false)
    const [deleteItemSnackbarShowing, setDeleteItemSnackbarShowing] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState()
    const classes = useStyles()

    const onDeleteIconClicked = product => {
        setDeleteItemConfirmShowing(true)
        setDeleteProduct(product)
        setTimeout(() => {
            setDeleteItemConfirmShowing(false)
        }, 2500)
    }

    const onItemDelete = () => {
        let { products, total } = localStorageCart
        // Delete item have same id and same size with the deleted one
        products = products.filter(p => {
            const pId = p.item.id
            const pSize = p.item.size
            const dId = deleteProduct.item.id
            const dSize = deleteProduct.item.size
            return ((pId !== dId) || (pId === dId && pSize !== dSize))
        })
        total -= deleteProduct.item.price * +deleteProduct.quantity

        setLocalStorageCart({ products, total })
        setDeleteItemSnackbarShowing(true)
    }

    return <Drawer
        className={classes.root}
        display="flex"
        anchor="right"
        open={cartDrawerShowing}
        onClose={() => dispatch(uiActions.setCartDrawerShowing(false))}>
        <CartDrawerHeader noItems={localStorageCart.products.length} />

        <CartDrawerProducts
            onDeleteIconClicked={onDeleteIconClicked}
            localStorageCart={localStorageCart}
            setLocalStorageCart={setLocalStorageCart} />

        <CartDrawerSummary total={localStorageCart.total} />

        {/* ADDITIONAL */}
        <Confirmation
            title="Xóa sản phẩm"
            content="Bạn chắc chắn muốn xóa sản phẩm khỏi giỏ chứ?"
            confirm="Tiếp tục"
            cancel="Hủy"
            confirmActions={onItemDelete}
            confirmationShowing={deleteItemConfirmShowing}
            setConfirmationShowing={setDeleteItemConfirmShowing}
        />
        <CustomizedSnackbar
            message="Xóa sản phẩm thành công"
            severity="success"
            showing={deleteItemSnackbarShowing}
            setShowing={setDeleteItemSnackbarShowing} />
    </Drawer >
}

export default CartDrawer
