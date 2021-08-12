import { Typography } from "@material-ui/core"
import DetailsModalTabLayout from "./DetailsModalTabLayout"

const DetailModalTabPreservation = props => {
    const { product } = props

    return <DetailsModalTabLayout
        image={product.images[0].url}
        price={product.price}
        name={product.name}
    >
        <Typography variant="body2">
            Để quần áo bền hơn, bạn lưu ý:
            - Không ngâm trong chất tẩy rửa quá 10 phút.
            - Giặt ở nhiệt độ nước không quá 30°C.
            - Ủi ở nhiệt độ không quá 150°C.
            - Không dùng thuốc tẩy.
            - Không phơi trực tiếp dưới ánh sáng mặt trời.
        </Typography>
    </DetailsModalTabLayout>
}

export default DetailModalTabPreservation
