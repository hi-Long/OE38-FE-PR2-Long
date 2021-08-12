import { Box, Typography, makeStyles, Button, Divider } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { uiActions } from "../../../../store/ui-slice"
import ProductDetailsModal from "./ProductDetailsModal"

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        gap: "1rem"
    },
    desc: { whiteSpace: "pre" },
    button: { paddingLeft: 0 }
})

const ProductDetailsSpecs = props => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const toggleDetailsModal = value => {
        dispatch(uiActions.setDetailsModalShowing(value))
    }

    return <Box className={classes.root} mt={3}>
        <Box>
            <Typography variant="body1" component="h2" gutterBottom>
                <Box fontWeight="fontWeightMedium">Mô tả sản phẩm</Box>
            </Typography>
            <Typography variant="body2" component="span">Mã sản phẩm: 123456 </Typography>
        </Box>
        <Typography className={classes.desc}>
            • Là item không thể thiếu trong tủ đồ vì sự thoải mái, dễ chịu, lại rất dễ phối đồ.
            • Sản phẩm 100% cotton, đường may tinh tế chắc chắn với bề mặt vải mềm mại, thấm hút mồ hôi tốt tạo cảm giác thoáng mát cho người mặc.
            • Form áo cơ bản, vừa vặn cơ thể, thoải mái theo từng cử động.
            • Không ra màu, không bai, không xù, không bám dính
            • Họa tiết được in lên áo, có độ bền cao.
        </Typography>
        <Button className={classes.button} onClick={() => toggleDetailsModal(true)}>Thông tin chi tiết & Bảo quản</Button>
        <Divider />
    </Box>
}

export default ProductDetailsSpecs
