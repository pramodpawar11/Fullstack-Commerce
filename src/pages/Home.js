import ProductList from "../features/product-list/components/ProductList.js"
import NavBar from "../navBar/NavBar.js"
const Home = () => {
  return (
    <NavBar>
        <ProductList></ProductList>
    </NavBar>
  )
}

export default Home