// Event listener for "Add to Cart" button
document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    // Get item information (name, price, image URL)
    var item = {
        name: 'Example Item',
        price: 9.99,
        imageUrl: 'example-image.jpg'
    };
    var srchText = document.getElementById("srchText");
    if (srchText) {
        srchText.addEventListener("click", function(e) {
            window.location.href = "./search.html";
        });
    }

    var groupContainer3 = document.getElementById("groupContainer3");
    if (groupContainer3) {
        groupContainer3.addEventListener("click", function(e) {
            window.location.href = "./menu1.html";
        });
    }

    var icons8Back901 = document.getElementById("icons8Back901");
    if (icons8Back901) {
        icons8Back901.addEventListener("click", function(e) {
            window.location.href = "./item.html";
        });
    }

    var imageRemovebgPreview13 = document.getElementById("imageRemovebgPreview13");
    if (imageRemovebgPreview13) {
        imageRemovebgPreview13.addEventListener("click", function(e) {
            window.location.href = "./index.html";
        });
    }
  
    // Retrieve existing cart items from local storage or initialize an empty array
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Add the new item to the cart
    cartItems.push(item);
  
    // Store the updated cart items in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
});
