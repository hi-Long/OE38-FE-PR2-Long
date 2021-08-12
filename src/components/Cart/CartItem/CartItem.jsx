import { Box, Card, CardContent, CardMedia, Chip, IconButton, InputAdornment, makeStyles, TextField, Typography } from "@material-ui/core"
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        borderRadius: 0,
        marginBlock: "1rem"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        display: "flex",
        flexDirection: "column",
        gap: ".2rem"
    },
    cover: { width: 100, },
    chip: {
        height: "1.5rem",
        flexBasis: "40%",
        marginRight: "1rem",
        borderRadius: 2
    },
    deleteIcon: {
        padding: 0,
        "&:hover": { color: "green" }
    }
})

const CardItem = props => {
    const classes = useStyles()

    return <Card className={classes.root}>
        <CardMedia
            component="img"
            className={classes.cover}
            image="https://cdn.boo.vn/products/864/ao-so-mi-nam-loose-nt-ombre-patten-hoa-tietden-blackdentrang-1-350.jpg"
            title="Product" />
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="body2">
                    <Box fontWeight="fontWeightMedium">
                        ÁO SƠ MI NAM LOOSE NT OMBRE
                    </Box>
                </Typography>
                <Typography variant="body2" component="h6" color="textSecondary">
                    Mã: 1.2.17.2.04.006.120.23
                </Typography>
                {/* COLOR + SIZE + AMOUNT */}
                <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                    <Chip className={classes.chip} style={{ backgroundColor: "black" }} />
                    <Chip className={classes.chip} label="S" />
                    <TextField
                        id="standard-number"
                        type="number"
                        defaultValue={1}
                        InputLabelProps={{ shrink: true }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AddShoppingCartOutlinedIcon style={{ fontSize: 16 }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                {/* DELETE BUTTON + TOTAL */}
                <Box display="flex" justifyContent="space-between" alignItems="center" pt={2}>
                    <IconButton className={classes.deleteIcon} aria-label="delete" >
                        <DeleteIcon />
                    </IconButton>
                    <Typography variant="body1" component="span">400.000đ</Typography>
                </Box>
            </CardContent>
        </div>
    </Card>
}

export default CardItem
