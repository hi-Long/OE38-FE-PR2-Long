import { List, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core"
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ListItemLink from "../../../ListItemLink/ListItemLink";

const fields = [
    { name: 'Thông tin cá nhân', icon: <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon> },
    { name: 'Lịch sử đơn hàng', icon: <ShopOutlinedIcon></ShopOutlinedIcon> },
    { name: 'Địa chỉ giao hàng', icon: <RoomOutlinedIcon></RoomOutlinedIcon> },
    { name: 'Thay đổi mật khẩu', icon: <FingerprintIcon></FingerprintIcon> }
]

const useStyles = makeStyles({
    listItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        paddingInline: "0",
        "&:hover": {
            backgroundColor: "white",
            color: "green",

            "& .MuiListItemIcon-root": { color: "green" }
        }
    },
    icon: { justifyContent: "center" }
})

const AccountManagementBody = props => {
    const classes = useStyles()

    return <List>
        {fields.map(f => (
            <ListItemLink className={classes.listItem} href="#" key={f.name}>
                <ListItemText>{f.name}</ListItemText>
                <ListItemIcon className={classes.icon}>{f.icon}</ListItemIcon>
            </ListItemLink>
        ))}
    </List>
}

export default AccountManagementBody
