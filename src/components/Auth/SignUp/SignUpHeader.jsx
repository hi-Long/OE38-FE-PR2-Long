import { Box, IconButton, Typography } from "@material-ui/core"
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { uiActions } from "../../../store/ui-slice";
import { useDispatch } from "react-redux";

const SignUpHeader = props => {
    const dispatch = useDispatch()
    const { handleTabChange } = props

    return <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <IconButton
                aria-label="close" color="default"
                id="close-modal"
                aria-controls="close-modal"
                variant="outlined"
                onClick={() => handleTabChange(0)}>
                <ArrowBackIosOutlinedIcon />
            </IconButton>
            <Typography variant="h5" component="h2">
                <Box fontWeight="fontWeightMedium">TẠO TÀI KHOẢN</Box>
            </Typography>
        </Box>
        {/* CLOSE BUTTON */}
        <IconButton
            aria-label="close" color="default"
            onClick={() => dispatch(uiActions.setAuthDrawerShowing(false))}>
            <CloseOutlinedIcon fontSize="medium" />
        </IconButton>
    </Box >
}

export default SignUpHeader
