import { products as productsData } from '../product-section/ProductDetail';

export const initHeaderFunctionality = () => {
    console.log('Header functionality initialized');
};

export const getSearchSuggestions = (query) => {
    if (!query) return { pages: [], products: [] };

    const pages = [
        { name: "About Us", url: "/about" },
        { name: "Products", url: "/products" },
        { name: "Download", url: "/download" },
        { name: "Contact", url: "/contact" }
    ];

    const products = Object.entries(productsData).map(([slug, product]) => ({
        name: product.name,
        url: `/product/${slug}`,
        title: product.title
    }));

    const lowerQuery = query.toLowerCase();

    const filteredPages = pages.filter(page =>
        page.name.toLowerCase().includes(lowerQuery)
    );

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        (product.title && product.title.toLowerCase().includes(lowerQuery))
    );

    return {
        pages: filteredPages,
        products: filteredProducts
    };
};
