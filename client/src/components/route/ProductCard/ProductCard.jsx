import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { backend_url } from '../../../server';
import styles from "../../../styles/styles";
import { 
    AiFillHeart, 
    AiFillStar, 
    AiOutlineEye, 
    AiOutlineHeart, 
    AiOutlineShoppingCart, 
    AiOutlineStar 
} from "react-icons/ai";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";

const ProductCard = ({ data }) => {
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    
    const d = data.name;
    const product_name = d.replace(/\s+/g, "-");

    return (
        <>
            <div className='z-2 w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
                <div className="flex justify-end">
                </div>
                <Link to={`/product/${data.id}`}>
                    <img src={`${backend_url}/${data.images&&data.images[0]}`} alt="" className='w-full h-[170px] object-contain' />
                </Link>
                <Link to="/">
                    <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
                </Link>
                <Link to={`/product/${data.id}`}>
                    <h4 className="pb-3 font-[500]">
                        {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
                    </h4>

                    <div className="flex">
                        <AiFillStar className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                        <AiFillStar className="mr-2 cursor-pointer" color="F6BA00" size={20} />
                        <AiFillStar className="mr-2 cursor-pointer" color="F6BA00" size={20} />
                        <AiFillStar className="mr-2 cursor-pointer" color="F6BA00" size={20} />
                        <AiOutlineStar className="mr-2 cursor-pointer" color="F6BA00" size={20} />
                    </div>

                    <div className="py-2 flex items-center justify-between">
                        <div className="flex">
                            <h5 className={`${styles.productDiscountPrice}`}>
                                {data.originalPrice === 0 ? data.originalPrice : data.discountPrice}$
                            </h5>
                            <h4 className={`${styles.price}`}>
                                {data.originalPrice ? data.originalPrice + "$" : null}
                            </h4>
                        </div>
                        <span className="font-[400] text-[17px] text-[#68d284]">
                            {data.sold_out} sold
                        </span>
                    </div>
                </Link>
                {/* side options */}
                <div>
                    {click ? (
                        <AiFillHeart
                            size={22}
                            className="cursor-pointer absolute right-0 top-4"
                            onClick={() => setClick(!click)}
                            color={click ? "red" : "#333"}
                            title="Remove from Wishlist"
                        />
                    ) : (
                        <AiOutlineHeart
                            size={22}
                            className="cursor-pointer absolute right-0 top-4"
                            onClick={() => setClick(!click)}
                            color={click ? "red" : "#333"}
                            title="Add to Wishlist"
                        />
                    )}
                    <AiOutlineEye
                        size={22}
                        className="cursor-pointer absolute right-0 top-14"
                        onClick={() => setOpen(!open)}
                        color="#333"
                        title="Quick view"
                    />
                    <AiOutlineShoppingCart
                        size={25}
                        className="cursor-pointer absolute right-0 top-24"
                        onClick={() => setOpen(!open)}
                        color="#333"
                        title="Add to cart"
                    />
                    {
                        open ? (
                            <ProductDetailsCard open={open} setOpen={setOpen} data={data} />
                        ) : null
                    }
                </div>
            </div>
        </>
    );
};

export default ProductCard;