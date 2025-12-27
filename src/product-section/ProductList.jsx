import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import all images
import productImage from '../assets/pecoshield-2k.webp';
import pecobondImage from '../assets/pecobond.webp';
import pecoflexImage from '../assets/pecoFlex.webp';
import pecogripImage from '../assets/pecogrip.webp';
import pecoPrime from '../assets/pecoprime.webp';
import epoxyGroutBucket from '../assets/epoxy-grout-bucket.webp';
import epoxyAdmixure from '../assets/grout-admixure.webp';
import polumerTileGrout from '../assets/polumer-tile-grout.webp';
import smoothPutty from '../assets/smooth-putty.webp';
import pecoExtreme from '../assets/peco-extreme.webp';
import lwImage from '../assets/lw+.webp';
import sbrImage from '../assets/SBR.webp';

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('TILE ADHESIVE');
    const navigate = useNavigate();

    const categories = [
        'TILE ADHESIVE',
        'GROUT & SEALANTS',
        'WATER PROOFING',
        'BLOCK JOINTING MORTAR',
        'WALL PUTTY'
    ];

    // Products with URL added exactly as you wanted
    const adhesives = [
        { id: 1, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: pecogripImage, url: '/product/pecogrip' },
        { id: 2, name: 'PecoPrime', type: 'Type 2T :- C2TE', image: pecoPrime, url: '/product/pecoprime' },
        { id: 3, name: 'PecoBond', type: 'Type 3TS1 :- C2TES1', image: pecobondImage, url: '/product/pecobond' },
        { id: 4, name: 'PecoFlex', type: 'Type 4TS1 :- C2TES1', image: pecoflexImage, url: '/product/pecoflex' },
        { id: 5, name: 'PecoExtreme', type: `Type V :- 'T' S2`, image: pecoExtreme, url: '/product/pecoextreme' }
    ];

    const grouts = [
        { id: 1, name: 'Polymer Tile Grout', type: 'Anti-Fungal Grout', image: polumerTileGrout, url: '/product/polymer-tile-grout' },
        { id: 2, name: 'Epoxy Grout (Bucket)', type: '3-Part Epoxy Grout', image: epoxyGroutBucket, url: '/product/epoxy-grout-bucket' }
    ];

    const waterproofing = [
        { id: 1, name: 'PecoShield 2K', type: 'Two Component Waterproofing', image: productImage, url: '/product/pecoshield-2k' },
        { id: 2, name: 'LW+', type: 'Integral Waterproofing Liquid Admixture', image: lwImage, url: '/product/lw+' },
        { id: 3, name: 'SBR', type: 'Late Bond', image: sbrImage, url: '/product/sbr-latex-bond' },
        { id: 4, name: 'Grout Admixture', type: 'Milky White Tile Grout Admixture', image: epoxyAdmixure, url: '/product/grout-admix' }
    ];

    const mortar = [
        { id: 1, name: 'Block Jointing Mortar', type: 'Thin Bed Mortar', image: productImage, url: '/product/block-jointing-mortar' }
    ];

    const putty = [
        { id: 1, name: 'Smooth Putty', type: 'White Cement Based', image: smoothPutty, url: '/product/smooth-putty' }
    ];

    // Get products based on active tab
    const getCurrentProducts = () => {
        switch (activeTab) {
            case 'TILE ADHESIVE': return adhesives;
            case 'GROUT & SEALANTS': return grouts;
            case 'WATER PROOFING': return waterproofing;
            case 'BLOCK JOINTING MORTAR': return mortar;
            case 'WALL PUTTY': return putty;
            default: return [];
        }
    };

    const currentProducts = getCurrentProducts();

    // Handle click - redirect to product.url
    const handleProductClick = (product) => {
        window.open(product.url, '_blank');
    };

    return (
        <div className="product-list-page">
            <div className="product-list-container container">
                {/* Category Tabs */}
                <div className="product-category-heading">
                    <div className="product-category-tabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-tab f-22 f-m-18 l-h-1 w-500 white-color first-font ${activeTab === category ? 'active' : ''}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="product-card"
                            onClick={() => handleProductClick(product)}
                            style={{ cursor: 'pointer' }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleProductClick(product)}
                        >
                            <h3 className="product-title f-48 f-m-32 l-h-1 w-500 white-color first-font">
                                {product.name}
                            </h3>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-card-image" />
                            </div>
                            <p className="product-subtitle f-28 f-m-18 l-h-1 w-500 white-color second-font">
                                {product.type}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;