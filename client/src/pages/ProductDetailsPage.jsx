import React, { useEffect, useState } from 'react';
import { useParams ,useSearchParams} from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import { useSelector } from 'react-redux';



const ProductDetailsPage = () => {
    const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
    const {allProducts}=useSelector((state)=>state.products)
    
    useEffect(() => {
        const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
    }, [allProducts])

    return (
        <div>
            <Header />
            <ProductDetails data={data} />
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;