import PageLayout from "../../components/Layout/PageLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCardImageOnly from "../../components/ProductCard/ProductCardImageOnly"

const Homepage = () => {
    return <PageLayout>
        <ProductCard />
        <ProductCardImageOnly />
    </PageLayout>
}

export default Homepage