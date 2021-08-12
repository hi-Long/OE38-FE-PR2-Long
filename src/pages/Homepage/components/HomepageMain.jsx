import { makeStyles } from "@material-ui/core"
import HomepageBanners from "./HomepageBanners"
import HomepageCategories from "./HomepageCategories"

const useStyles = makeStyles({
    root: {
        overflowX: "hidden"
    }
})

const HomepageMain = props => {
    const classes = useStyles()
    return <main className={classes.root}>
        <HomepageBanners />
        <HomepageCategories />
    </main>
}

export default HomepageMain
