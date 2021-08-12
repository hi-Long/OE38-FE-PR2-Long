import { List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core"
import { Fragment } from "react"

const trendingSearchTexts = ["Ap phong", "Quan", "Balo"]

const useStyles = makeStyles({
    root: {
        paddingInline: 0,
        transition: ".3s",
        "&:hover": {
            paddingLeft: "1rem"
        }
    }
})

const TrendingKeywords = props => {
    const classes = useStyles()

    return <Fragment>
        <Typography variant="subtitle1" component="h3">TRENDING</Typography>
        <List>
            {trendingSearchTexts.map(text => (
                <ListItem className={classes.root} key={text} button>
                    <ListItemText variant="caption" component="span">{text}</ListItemText>
                </ListItem>
            ))}
        </List>
    </Fragment>
}

export default TrendingKeywords