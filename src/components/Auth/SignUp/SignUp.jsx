import { Fragment } from "react"
import SignUpFooter from "./SignUpFooter"
import SignUpForm from "./SignUpForm"
import SignUpHeader from "./SignUpHeader"

const SignUp = props => {
    const {
        error,
        loading,
        onCheckout,
        setAccountManagementDrawerIsOpen,
        handleTabChange,
        onSignUpFormSubmitHandler,
        formDispatch,
        formState } = props

    return <Fragment>
        {/* HEADER */}
        <SignUpHeader
            onCheckout={onCheckout}
            handleTabChange={handleTabChange}
            setAccountManagementDrawerIsOpen={setAccountManagementDrawerIsOpen} />
        {/* FORM */}
        <SignUpForm
            error={error}
            loading={loading}
            formState={formState}
            formDispatch={formDispatch}
            onSignUpFormSubmitHandler={onSignUpFormSubmitHandler} />
        {/* FOOTER */}
        <SignUpFooter handleTabChange={handleTabChange} />
    </Fragment >
}

export default SignUp
