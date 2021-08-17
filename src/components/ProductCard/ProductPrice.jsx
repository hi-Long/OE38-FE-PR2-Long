import { CardContent, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        textAlign: 'center'
    }
})

const ProductCardContent = props => {
    const classes = useStyles()

    const { name, price } = props
    return <CardContent className={classes.root}>
        <Typography variant="body2" component="h2" gutterBottom>
            {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {price}d
        </Typography>
    </CardContent>
}

export default ProductCardContent