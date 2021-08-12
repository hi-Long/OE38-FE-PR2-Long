import { FormattedNumber } from "react-intl"

const FormattedPrice = props => {
    const { price } = props

    return <FormattedNumber
        value={price}
        style="currency"
        currency="VND" />
}

export default FormattedPrice
