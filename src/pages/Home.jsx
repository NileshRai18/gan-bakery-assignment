import { HomePageBanner, ProductsCarousel, Product } from "../components/common";
import productsData from "../data/products"

function Home() {
  const trendingProducts = productsData.filter((item) => item.trending === true)
  return (
    <>
      <HomePageBanner />
      {productsData && productsData.length && <ProductsCarousel carouselData={productsData}/>}
      <div className="bg-red-100 py-6">
      <Product productsData={trendingProducts} showFilter={false} title="Trending Products"/>
      </div>
    </>
  )
}

export default Home