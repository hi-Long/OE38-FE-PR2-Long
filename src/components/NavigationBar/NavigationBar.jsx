import { Box, makeStyles } from "@material-ui/core"
import clsx from "clsx";
import { useEffect, useState } from "react";
import useOffsetPage from "../../hooks/useOffsetPage";
import Logo from "../Logo/Logo";
import Categories from "./NavigationCategories/NavigationCategories";
import Utilities from "./NavigationUtilities";

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 1000,
        transition: ".2s ease-in-out",

        "& > *": {
            flexBasis: "33%"
        }
    },
    navBgr: {
        backgroundColor: "white",
        boxShadow: "0 5px 6px lightgray",
    },
    logo: {
        height: 40,
        width: 'auto'
    }
})

const NavigationBar = props => {
    const { offsetX, offsetY } = useOffsetPage()
    const [navbarBgr, setNavbarBgr] = useState(false)
    const classes = useStyles()

    // TOGGLE NAVBAR BACKGROUND BASED ON PAGE OFFSET Y
    useEffect(() => {
        if (offsetY > 100) {
            setNavbarBgr(true)
        } else {
            setNavbarBgr(false)
        }
    }, [offsetX, offsetY])

    return <Box
        component='nav'
        className={clsx(classes.root, navbarBgr && classes.navBgr)}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        px={4} py={2}>
        <Categories></Categories>
        <Logo></Logo>
        <Utilities></Utilities>
    </Box >
}

export default NavigationBar