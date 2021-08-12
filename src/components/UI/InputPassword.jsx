import { FormControl, IconButton, Input, InputAdornment, InputLabel, makeStyles } from "@material-ui/core"
import { useState } from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    }
})

const PasswordInput = props => {
    const { value, error, onPasswordInput, label, actionType } = props
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return <FormControl className={classes.root}>
        <InputLabel color="secondary" htmlFor="password">{label}</InputLabel>
        <Input
            className={classes.input}
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={event => onPasswordInput(actionType, event.target.value)}
            error={error}
            color="secondary"
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword()}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>
}

export default PasswordInput
