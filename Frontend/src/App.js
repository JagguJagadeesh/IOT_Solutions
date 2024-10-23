import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
    return (
        <Router className=' m-0'>
            <header className='m-0'><Header/></header>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/page/:id" element={<ProductDetail />} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <footer className='mb-0'><Footer/></footer>
        </Router>
    );
}

export default App;
