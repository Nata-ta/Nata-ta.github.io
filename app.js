
	// add to cart
	let productCountEl = document.getElementById("product-count");

	let addToCartButtons = document.querySelectorAll(".add-to-cart");

	for(i = 0; i < addToCartButtons.length; i++) {
		addToCartButtons[i].addEventListener("click", function() {
			productCountEl.textContent = +productCountEl.textContent + 1;
		})
	}

	$('.slick').slick({
		dots:true,
	})



	$(".btn").click(function(){
    $(this).toggleClass('active');
});