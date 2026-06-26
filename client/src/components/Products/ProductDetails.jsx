import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMessage } from 'react-icons/ai';
import { backend_url } from '../../server';

const ProductDetails = ({ data }) => {
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(1);
    const navigate = useNavigate();

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    const handleMessageSubmit = () => {
        navigate("/inbox?conversation=507ebjver884ehfdjeriv84");
    };

    return (
        <div className="bg-white">
            {data ? (
                <div className={`${styles.section} w-[90%] md:w-[80%]`}>
                    <div className="w-full py-5">
                        <div className="block w-full md:flex">
                            <div className="w-full md:w-[50%]">
                                <img
                                    src={`${backend_url}/${data.images&&data.images[0]}`}
                                    alt=""
                                    className="w-[80%]"
                                />
                                <div className="w-full flex">

                                    <div
                                        className={`${select === 0 ? "border" : "null"
                                            } cursor-pointer`}
                                    >
                                        <img
                                            src={`${backend_url}/${data?.images[0]}`}
                                            alt=""
                                            className='h-[200px]'
                                            onClick={() => setSelect(0)}
                                        />
                                    </div>

                                    <div className={`${select === 1 ? "border" : "null"} cursor-pointer`}>
                                        <img
                                            src={`${backend_url}/${data?.images[1]}`}
                                            alt=""
                                            className='h-[200px]'
                                            onClick={() => setSelect(1)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[50%] pt-5">
                                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                                <p>{data.description}</p>
                                <div className="flex pt-3">
                                    <h4 className={`${styles.productDiscountPrice}`}>
                                        {data.discountPrice}$
                                    </h4>
                                    <h3 className={`${styles.price}`}>
                                        {data.originalPrice ? data.originalPrice + "$" : null}
                                    </h3>
                                </div>

                                <div className="flex items-center mt-12 justify-between pr-3">
                                    <div>
                                        <button
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                            onClick={decrementCount}
                                        >
                                            -
                                        </button>
                                        <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                                            {count}
                                        </span>
                                        <button
                                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                            onClick={incrementCount}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        {click ? (
                                            <AiFillHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                color={click ? "red" : "#333"}
                                                title="Remove from wishlist"
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setClick(!click)}
                                                color={click ? "red" : "#333"}
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}

                                >
                                    <span className="text-white flex items-center">
                                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                                    </span>
                                </div>
                                <div className="flex items-center pt-8">

                                    <img
                                        src={`${backend_url}/${data.shop.avatar}`}
                                        alt=""
                                        className="w-[50px] h-[50px] rounded-full mr-2"
                                    />

                                    <div className="pr-8">

                                        <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                                            {data.shop.name}
                                        </h3>

                                        <h5 className="pb-3 text-[15px]">
                                            ({data.shop.ratings}) Ratings
                                        </h5>
                                    </div>
                                    <div
                                        className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                                        onClick={handleMessageSubmit}
                                    >
                                        <span className="text-white flex items-center">
                                            Send Message <AiOutlineMessage className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductDetailsInfo data={data} />
                    <br />
                    <br />
                </div>
            ) : null}
        </div>
    );
};
const ProductDetailsInfo = ({data}) => {
    const [active, setActive] = useState(1);
    return (
        <div className="bg -[#f5f6fb] px-3 800px:px-10 py-2 rounded">
            <div className="w-full flex justify-between border-b pt-10 pb-2">
                <div className="relative">
                    <h5 className={"text-[#000] setActive(value: React.SetStateAction<number>): void md:text-[20px]"}
                        onClick={() => setActive(1)}
                    >
                        Product Details
                    </h5>
                    {
                        active === 1 ? (
                            <div className={`${styles.active_indicator}`} />
                        ) : null
                    }
                </div>
                <div className="relative">
                    <h5 className={"text-[#000] setActive(value: React.SetStateAction<number>): void md:text-[20px]"}
                        onClick={() => setActive(2)}
                    >
                        Product Reviews
                    </h5>
                    {
                        active === 2 ? (
                            <div className={`${styles.active_indicator}`} />
                        ) : null
                    }
                </div>
                <div className="relative">
                    <h5 className={"text-[#000] setActive(value: React.SetStateAction<number>): void md:text-[20px]"}
                        onClick={() => setActive(3)}
                    >
                        Seller Information
                    </h5>
                    {
                        active === 3 ? (
                            <div className={`${styles.active_indicator}`} />
                        ) : null
                    }
                </div>
            </div>
            {
                active === 1 ? (
                    <>
                        <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                            Product details are a crucial part of any eCommerce website or online marketplace.
                            These details help the potential customers to make an informed decision about the product they are
                            interested in buying. A well-written product description can also be a powerful marketing tool
                            that can help to increase sales.Product details typically include information about the product's
                            features, specifications, dimensions, weight, materials, and other relevant information that can help
                            customers to understand the product better. The product details section should also include high-quality
                            images and videos of the product, as well as customer reviews and ratings.
                        </p>
                        <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                            Product details are a crucial part of any eCommerce website or online marketplace.
                            These details help the potential customers to make an informed decision about the product they are
                            interested in buying. A well-written product description can also be a powerful marketing tool
                            that can help to increase sales.Product details typically include information about the product's
                            features, specifications, dimensions, weight, materials, and other relevant information that can help
                            customers to understand the product better. The product details section should also include high-quality
                            images and videos of the product, as well as customer reviews and ratings.
                        </p>

                    </>
                ) : null
            }
            {
                active === 2 ? (
                    <div className="w-full justify-center min-h-[40vh] flex items-center">
                        <p>No Reviews yet! </p>
                    </div>
                ) : null
            }
            {
                active === 3 && (
                    <div className="w-full block md:flex p-5">
                        <div className="w-full md:w-[50%]">
                            <div className="flex items-center">
                                <img
                                    src={`${backend_url}/${data.shop.avatar}`}
                                    alt=""
                                    className="w-[50px] h-[50px] rounded-full"
                                />
                                <div className="pl-3">
                                    <h3 className={`${styles.shop_name}`}>
                                        {data.shop.name}
                                    </h3>
                                    <h5 className="pb-3 text-[15px]">(4.5) Ratings</h5>

                                </div>

                            </div>
                            <p className="pt-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis
                                explicabo, ipsum quas qui molestiae? Perspiciatis illo cupiditate, saepe
                                ratione quae quibusdam nulla, totam doloribus dolores possimus dolor labore ducimus.
                            </p>
                        </div>
                        <div className="w-full md:w-[50%] mt-5 md:flex flex-col items-end">
                            <div className="text-right">
                                <h5 className="font-[600]">
                                    Joined on: <span className="font-[500]">9 June,2023</span>
                                </h5>
                                <h5 className="pt-3">
                                    Total Products: <span className="font-[500]">1,223</span>
                                </h5>
                                <h5 className="pt-3">
                                    Total Reviews: <span className="font-[500]">324</span>
                                </h5>
                                <Link to="/">
                                    <div
                                        className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                                    >
                                        <h4 className="text-white">Visit Shop</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
export default ProductDetails;