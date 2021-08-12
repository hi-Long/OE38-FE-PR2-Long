import { CardMedia, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        height: props => props.height
    }
})

const ProductImage = props => {
    const classes = useStyles(props)
    const { image } = props
    return <CardMedia
        className={classes.root}
        image={image}
        title="Contemplative Reptile"
    />
}

export default ProductImage