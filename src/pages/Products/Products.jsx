import { useEffect, useState } from 'react';

import './Products.scss';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductListControls from './ProductListControls/ProductListControls';
import ProductList from './ProductList/ProductList';
import { highestMultipleOf10 } from "@/utils";
import { fetchProducts } from '@/services/productService';
import { addDiscountToProduct } from "./productUtil"
const ALL_CATEGORIES = "All Categories"
const SORT_ORDER = {
  "ASCENDING": "asc",
  "DESCENDING": "dsc"
}

function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([{ id: 'all', name: ALL_CATEGORIES, children: []}])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [maxRange, setMaxRange] = useState(0)
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 0])
  const [sortBy, setSortBy] = useState("")
  const [sortOrder, setSortOrder] = useState(SORT_ORDER["ASCENDING"])

  useEffect(() => {
    fetchProducts()
      .then(res => res?.data)
      .then((res)=> {
        setProducts(res)
        setFilteredProducts(res.map(prod => addDiscountToProduct(prod)))
        let updatedCategories = [...categories]
        updatedCategories[0].children = [...new Set(res.map(prod => prod.category))]
        setCategories([...updatedCategories])
        let maxPriceRange = highestMultipleOf10(Math.max(res.map(prod => prod.price)))
        setMaxRange(maxPriceRange)
        setSelectedPriceRange([0, maxPriceRange])
    })
  }, [])

  useEffect(() => {
    handleProductFiltering()
  }, [selectedCategory, maxRange, ...selectedPriceRange, sortBy, sortOrder])


  const handleProductFiltering = () => {
    let filterProds = [...products]
    if(!selectedCategory) {
      filterProds = filterProds
        .map(prod => addDiscountToProduct(prod))
        .filter(prod => prod.price >= selectedPriceRange[0] && prod.price <= selectedPriceRange[1])
    } else {
      filterProds = filterProds.map(prod => {prod["discount"] = 0; return prod;}).filter(prod => prod.category == selectedCategory)
        .filter(prod => prod.price >= selectedPriceRange[0] && prod.price <= selectedPriceRange[1])
    }
    sortBy && filterProds.sort((p1, p2) => {
      if(sortOrder == SORT_ORDER["ASCENDING"]) return p1[sortBy] >= p2[sortBy]? 1: -1
      else return p1[sortBy] >= p2[sortBy]? -1: 1
    })
    setFilteredProducts(filterProds)
  }

  return (
    <div className='Products'>
      <ProductCategory categories={categories} selectedCategory={selectedCategory} 
        handleCategoryChange={(val) => setSelectedCategory(val)}/>
      <div>
        <ProductListControls maxRange={maxRange} selectedPriceRange={selectedPriceRange}
          handlePriceRangeChange={(min, max) => setSelectedPriceRange([min, max])}
          sortBy={sortBy} sortOrder={sortOrder}
          handleSortByChange={(val) => setSortBy(val)}
          handleSortOrderChange={(val) => setSortOrder(val)}/>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default Products