import { Grid } from "@material-ui/core"
import { Fragment } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"

const Products = props => {
    const { productsLayout } = props

    return <Fragment>
        <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((product, i) => (
                <Grid item sm={12 / productsLayout} key={i}>
                    <ProductCard />
                </Grid>
            ))}
        </Grid>
    </Fragment>
}

export default Products
