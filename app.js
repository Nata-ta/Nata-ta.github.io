
	// add to cart
	let productCountEl = document.getElementById("product-count");

	let addToCartButtons = document.querySelectorAll(".add-to-cart");

	for(i = 0; i < addToCartButtons.length; i++) {
		addToCartButtons[i].addEventListener("click", function() {
			productCountEl.textContent = +productCountEl.textContent + 1;
		})
	}

	// slik slider
	$('.slick').slick({
		dots:true,
	})


	// liked buttons
	let likeButtons = document.querySelectorAll(".heart");
	
	for(let i = 0; i < likeButtons.length; i++) {
		likeButtons[i].addEventListener("click", function() {
			if(likeButtons[i].classList.contains('liked')){
				likeButtons[i].classList.remove("liked")
			} else {
				likeButtons[i].classList.add("liked")
			}
		})
	}


	// product-quantity

	function disabledDecrement(count,[i]) {
		if (count<=1) {
			decrementButtons[i].disabled = true;
		} else {
			decrementButtons[i].disabled = false;
		}
	}
	function disabledIncrement(count,[i]) {
		if (count>=10) {
			incrementButtons[i].disabled = true;
		} else {
			incrementButtons[i].disabled = false;
		}
	}

	let decrementButtons = document.querySelectorAll(".decrement-button");
	let incrementButtons = document.querySelectorAll(".increment-button");
	let productQuantityInput = document.querySelectorAll(".product-quantity-input");
	
	
	for(let i = 0; i < incrementButtons.length; i++) {
	incrementButtons[i].addEventListener("click", function(){
		let currentValue = +productQuantityInput[i].value;
		let nextValue = currentValue + 1;
		productQuantityInput[i].value = nextValue;
		
		disabledDecrement(nextValue,[i]);
		disabledIncrement(nextValue,[i]);
	})
	}

	for(let i = 0; i < decrementButtons.length; i++) {
	decrementButtons[i].addEventListener("click", function(){
		let currentValue = +productQuantityInput[i].value;
		let nextValue = currentValue - 1;
		productQuantityInput[i].value = nextValue;

		disabledDecrement(nextValue,[i]);
		disabledIncrement(nextValue,[i]);
	})
	}
