import HeroSlider from '../components/Hero/HeroSlider'
import SlideProducts from '../components/SlideProducts/SlideProducts'

import { useEffect, useState } from 'react'

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
]


function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return { [category]: data.products };
          })
        )
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
        setLoading(false);
      }
      catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();

  }, []);

  return (
    <>
      <HeroSlider />

      {loading ? (
        <p>Loading...</p>
      ) :
        (
          categories.map((category) => (
            <SlideProducts key={category} title={category} data={products[category]} />
          ))
        )}
    </>
  )
}

export default Home