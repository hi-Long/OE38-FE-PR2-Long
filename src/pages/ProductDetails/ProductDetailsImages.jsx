import { Box, Grid } from "@material-ui/core"

const ProductDetailsImages = props => {
    const images = [
        'https://cdn.boo.vn/products/751/ao-so-mi-nam-square-nt-co-tron-solidden-blackden-2-463.jpg',
        'https://cdn.boo.vn/products/751/ao-so-mi-nam-square-nt-co-tron-solidden-blackden-1.jpg',
        'https://cdn.boo.vn/products/751/ao-so-mi-nam-square-nt-co-tron-solidden-blackden-3.jpg',
        'https://cdn.boo.vn/products/751/ao-so-mi-nam-square-nt-co-tron-solidden-blackden-4.jpg'
    ]

    return <Box mr={5}>
        <Grid container spacing={1}>
            {images.map(img => (
                <Grid item sm={6} key={img}>
                    <img src={img} alt="Product" width="100%" height="auto" />
                </Grid>
            ))}
        </Grid>
    </Box>
}

export default ProductDetailsImages
