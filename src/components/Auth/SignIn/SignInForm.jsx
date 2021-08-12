import { Button, makeStyles, TextField, Typography } from "@material-ui/core"
import PasswordInput from "../../UI/InputPassword";
import { FORM_EMAIL_INPUT, FORM_PASSWORD_INPUT } from "../authConstants";

const useStyles = makeStyles({
    "form--sign-in": {
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    },
    button: {
        padding: ".8rem .5rem",
        marginBottom: "2rem",
        borderRadius: 0
    }
})

const SignInForm = props => {
    const classes = useStyles()
    const { formState, formDispatch } = props

    return <form className={classes["form--sign-in"]} id="#sign-in">
        {/* PHONE */}
        <TextField
            className={classes.input}
            id="sign-in__email"
            label="Email/Số điện thoại"
            value={formState.email.value}
            onChange={event => formDispatch({ type: FORM_EMAIL_INPUT, payload: event.target.value })}
            error={formState.email.error}
        />
        {/* PASSWORD */}
        <PasswordInput
            value={formState.password.value}
            error={formState.password.error}
            onPasswordInput={event => formDispatch({ type: FORM_PASSWORD_INPUT, payload: event.target.value })}
            label="Password"></PasswordInput>
        {/* RESET PASSWORD */}
        <Typography variant="body1" color="textSecondary">Quên mật khẩu ?</Typography>
        {/* SUBMIT BUTTON */}
        <Button
            type="submit" variant="contained"
            className={classes.button}
            color="primary" size="large" disableElevation>ĐĂNG NHẬP</Button>
    </form>
}

export default SignInForm
