import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Confirmation = props => {
    const {
        title, content, confirm, cancel,
        confirmActions, confirmationShowing, setConfirmationShowing } = props

    const handleClose = () => {
        setConfirmationShowing(false)
    }

    const onConfirmHandler = () => {
        confirmActions()
        handleClose();
    };

    return (
        <div>
            <Dialog
                open={confirmationShowing}
                onClose={handleClose}
                aria-labelledby="confirm-dialog-title"
                aria-describedby="confirm-dialog-description">
                {/* CONTENT */}
                <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="confirm-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                {/* ACTIONS */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary">{cancel}</Button>
                    <Button
                        variant="contained" color="primary" disableElevation autoFocus
                        onClick={onConfirmHandler}>{confirm}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Confirmation
