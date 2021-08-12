import { Fragment } from "react"
import SignUpFooter from "./SignUpFooter"
import SignUpForm from "./SignUpForm"
import SignUpHeader from "./SignUpHeader"

const SignUp = props => {
    const {
        handleTabChange,
        formDispatch, formState } = props

    return <Fragment>
        <SignUpHeader handleTabChange={handleTabChange} />
        <SignUpForm formState={formState} formDispatch={formDispatch} />
        <SignUpFooter handleTabChange={handleTabChange}></SignUpFooter>
    </Fragment >
}

export default SignUp
