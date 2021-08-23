import { Fragment } from "react";
import SignInFooter from "./SignInFooter";
import SignInForm from "./SignInForm";
import SignInHeader from "./SignInHeader";

const SignIn = props => {
    const { handleTabChange, formDispatch, formState } = props

    return <Fragment>
        <SignInHeader />
        <SignInForm formState={formState} formDispatch={formDispatch} />
        <SignInFooter handleTabChange={handleTabChange} />
    </Fragment>
}

export default SignIn
