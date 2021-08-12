import { makeStyles } from "@material-ui/core"
import { useReducer } from "react"
import { useState } from "react"
import TabPanel from "./AuthTabs/TabPanel"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import { formInitialState, formReducer } from "./AuthFormReducer"

const useStyles = makeStyles({
    tab: {
        "& .MuiBox-root:first-child": { padding: 0 }
    }
});

const Auth = props => {
    const classes = useStyles();
    const { setAccountManagementDrawerIsOpen } = props
    const [tabValue, setTabValue] = useState(0);
    const [formState, formDispatch] = useReducer(formReducer, formInitialState)

    const handleTabChange = (newValue) => {
        setTabValue(newValue);
    };

    return <div className={classes.root}>
        <TabPanel className={classes.tab} value={tabValue} index={0}>
            <SignIn
                setAccountManagementDrawerIsOpen={setAccountManagementDrawerIsOpen}
                formState={formState}
                formDispatch={formDispatch}
                handleTabChange={handleTabChange}
            ></SignIn>
        </TabPanel>
        <TabPanel className={classes.tab} value={tabValue} index={1}>
            <SignUp
                setAccountManagementDrawerIsOpen={setAccountManagementDrawerIsOpen}
                formState={formState}
                formDispatch={formDispatch}
                handleTabChange={handleTabChange}
            ></SignUp>
        </TabPanel>
    </div >
}

export default Auth
