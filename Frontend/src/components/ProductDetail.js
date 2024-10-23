import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';

function ProductDetail() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/page/${id}`); // Adjust the URL based on your API
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError(error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <Spinner/>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>No product found</div>;

    return (
        <div class="flex justify-center my-4">
        <div class="flex flex-col max-w-md bg-white shadow-2xl rounded-lg overflow-hidden ">
            <div class="flex-initial  w-96 h-72 bg-cover bg-center hover:brightness-125" style={{ backgroundImage: `url(${product.image})` }}></div> 
            <div class="w-96 p-4">
            <h1 class="text-gray-900 font-bold text-2xl">{product.name}</h1>
            <p class="mt-2 text-gray-600 text-sm">{product.description}</p>
            <div class="flex item-center mt-2">
                <svg class="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <svg class="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <svg class="w-5 h-5 fill-current text-yellow-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <svg class="w-5 h-5 fill-current text-yellow-200" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <svg class="w-5 h-5 fill-current text-yellow-100" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
            </div>
            <div class="flex item-center justify-between mt-3">
                <h1 class="text-gray-700 font-bold text-xl">${product.price}</h1>
                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ProductDetail;
