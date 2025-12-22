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

    const products = [
        { name: 'PecoBond', url: '/product/pecobond' },
        { name: 'PecoFlex', url: '/product/pecoflex' },
        { name: 'PecoGrip', url: '/product/pecogrip' },
        { name: 'PecoPrime', url: '/product/pecoprime' },
        { name: 'PecoExtreme', url: '/product/pecoextreme' },
        { name: 'Epoxy Grout (Bucket)', url: '/product/epoxy-grout-bucket' },
        { name: 'Epoxy Grout', url: '/product/epoxy-grout' },
        { name: 'Polymer Tile Grout', url: '/product/polymer-tile-grout' },
        { name: 'PecoShield 2K', url: '/product/pecoshield-2k' },
        { name: 'PecoFlex Coat', url: '/product/pecoflex-coat' },
        { name: 'PecoAcrylic', url: '/product/pecoacrylic' },
        { name: 'Block Jointing Mortar', url: '/product/block-jointing-mortar' },
        { name: 'AAC Block Adhesive', url: '/product/aac-block-adhesive' },
        { name: 'Smooth Putty', url: '/product/smooth-putty' }
    ];

    const lowerQuery = query.toLowerCase();

    const filteredPages = pages.filter(page =>
        page.name.toLowerCase().includes(lowerQuery)
    );

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery)
    );

    return {
        pages: filteredPages,
        products: filteredProducts
    };
};
