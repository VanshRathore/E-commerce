document.addEventListener("DOMContentLoaded" , async ()=> {
    async function populateProducts() {
        const queryParams = getQueryParams();
        console.log(queryParams['id']);
        if(queryParams['id']){
            const productId = queryParams['id'];
            const product = await fetchProductById(productId);
            
            const productName = document.getElementById('product-name');
            const productPrice = document.getElementById('product-price');
            const productDesc = document.getElementById('product-description-detail');
            const productImg = document.getElementById('product-img');
            
            productName.textContent = product.title;
            productDesc.textContent = product.description;
            productImg.src = product.image;
            productPrice.textContent = product.price;
            removeLoader();

        }
    }

    populateProducts();
});