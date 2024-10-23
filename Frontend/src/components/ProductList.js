import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Spinner from './Spinner';
import NotFound from './NotFound';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/page');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <Spinner/>;
    if (error) return <NotFound/>;

    return (
        <div className="bg-slate-200">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className="text-center text-5xl mb-10 font-extrabold text-black-400">IOT Solutions</h1>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Link key={product.id} to={`page/${product._id}`} className=" border-black border-1 rounded-lg p-3 row-span-9 col-span-1 bg-slate-200 cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-white  hover:-translate-y-4 duration-300">
                            <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    alt="Product"
                                    src={product.image}
                                    className="h-60 w-80 object-fill object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
