import { Fragment } from "react";
import SignInFooter from "./SignInFooter";
import SignInForm from "./SignInForm";
import SignInHeader from "./SignInHeader";

const SignIn = props => {
    const {
        noButtons,
        error,
        loading,
        onCheckout,
        handleTabChange,
        setAccountManagementDrawerIsOpen,
        onSignInWithEmailAndPassword,
        onSignInWithSocialMedia,
        formDispatch, formState } = props

    return <Fragment>
        <SignInHeader
            onCheckout={onCheckout}
            noButtons={noButtons}
            setAccountManagementDrawerIsOpen={setAccountManagementDrawerIsOpen} />

        <SignInForm
            error={error}
            loading={loading}
            formState={formState}
            formDispatch={formDispatch}
            onSignInWithEmailAndPassword={onSignInWithEmailAndPassword} />

        <SignInFooter
            handleTabChange={handleTabChange}
            onSignInWithSocialMedia={onSignInWithSocialMedia} />
    </Fragment>
}

export default SignIn
