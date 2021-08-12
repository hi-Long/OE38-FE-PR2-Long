import { makeStyles } from "@material-ui/core"
import { Fragment } from "react"
import SignInHeader from "./SignInHeader";
import SignInFooter from "./SignInFooter";
import SignInForm from "./SignInForm";

const useStyles = makeStyles({
    button: {
        padding: ".8rem .5rem",
        marginBottom: "2rem",
        borderRadius: 0
    }
})

const SignIn = props => {
    const classes = useStyles()
    const { handleTabChange, formDispatch, formState } = props

    return <Fragment>
        <SignInHeader />
        <SignInForm formState={formState} formDispatch={formDispatch} />
        <SignInFooter handleTabChange={handleTabChange} />
    </Fragment>
}

export default SignIn
