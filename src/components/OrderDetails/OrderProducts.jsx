
import { Box, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useState } from "react";
import FormattedPrice from "../FormattedPrice/FormattedPrice";

const useStyles = makeStyles({
    table: { minWidth: 650 },

    product: {
        display: "flex",
        gap: "1rem"
    }
});

const OrderProducts = props => {
    const classes = useStyles()
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(49999)

    return <Box mt={4}>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: "9rem" }}>Sản phẩm</TableCell>
                        <TableCell align="center">Giá</TableCell>
                        <TableCell align="center">Số lượng</TableCell>
                        <TableCell align="center" style={{ width: "13rem" }}>Tổng</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products
                        // If there are products, show them
                        ? products.map(product => (
                            <TableRow key={product.item.id}>
                                {/* code, date, receiver, address, total */}
                                <TableCell className={classes.product} size="medium" align="left">
                                    <img
                                        src={product.item.images[0].url}
                                        alt="Product"
                                        width="50%" />
                                    <Box>
                                        <Typography variant="subtitle2" component="h6" gutterBottom>
                                            <Box fontSize={12}>{product.item.name}</Box>
                                        </Typography>
                                        <Typography variant="body2" component="h6">S</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <FormattedPrice price={product.item.price} />
                                </TableCell>
                                <TableCell align="center">{product.quantity}</TableCell>
                                <TableCell align="center">
                                    <FormattedPrice price={product.item.price * product.quantity} />
                                </TableCell>
                            </TableRow>
                        ))
                        // If there isn't any products, show "no products"
                        : <Box>Không có sản phẩm nào</Box>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
}

export default OrderProducts
