import { makeStyles } from "@material-ui/core"
import HomepageBanners from "./HomepageBanners"
import HomepageCarousels from "./HomepageCarousels"
import HomepageCategories from "./HomepageCategories"
import HomepageSignUpForm from "./HomepageSignUpForm"

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
        <HomepageCarousels />
        <HomepageSignUpForm />
    </main>
}

export default HomepageMain
