import { Box, Divider } from "@material-ui/core"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import FilterField from "./FilterField"
import FilterItemPrice from "./FilterItemPrice"

const FiltersBody = props => {
    const concepts = useSelector(state => state.product.concepts)

    const filterFields = [
        {
            field: {
                name: "SẮP XẾP THEO",
                value: 'order'
            },
            items: [
                { name: "Mới nhất", value: "date" },
                { name: "Giá tăng dần", value: "asc" },
                { name: "Giá giảm dần", value: "desc" }
            ]
        },
        {
            field: {
                name: "BỘ SƯU TẬP",
                value: 'concepts'
            },
            items: concepts.map(c => {
                return { name: c.name, value: c.id }
            })
        },
        {
            field: {
                name: "MÀU SẮC",
                value: 'colors'
            },
            items: [
                { name: "Đen", value: "000000" },
                { name: "Trắng", value: "FFFFFF" },
                { name: "Xanh nước biển", value: "5DADE2" },
                { name: "Vàng", value: "F7DC6F" },
                { name: "Ghi", value: "BFC9CA" },
                { name: "Xanh rêu", value: "48C9B0" },
                { name: "Xanh lục", value: "239B56" },
                { name: "Cam", value: "E59866" },
                { name: "Tím", value: "884EA0" }
            ]
        },
        {
            field: {
                name: "CHẤT LIỆU",
                value: 'materials'
            },
            items: [
                { value: "1", name: "Kaki" },
                { value: "2", name: "Cotton" },
                { value: "3", name: "Nỉ" },
                { value: "4", name: "Bò" },
                { value: "5", name: "Lông cùn" },
                { value: "6", name: "Lụa" }
            ]
        }
    ]

    return <Box flexGrow={1} overflow="auto">
        {filterFields.map(field => (
            <Fragment key={field.field.name}>
                <FilterField field={field} ></FilterField>
                <Divider></Divider>
            </Fragment>
        ))}
        <FilterItemPrice />
    </Box>
}

export default FiltersBody
