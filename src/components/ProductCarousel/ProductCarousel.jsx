import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";

const useStyles = makeStyles({
    root: {
        width: "100%"
    }
})

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                initialSlide: 1
            }
        }
    ],
    arrows: true,
    autoplay: true
};

const ProductCarousel = props => {
    const classes = useStyles()

    return <Slider className={classes.root} {...settings}>
        {props.children}
    </Slider >
}

export default ProductCarousel