window.onload = () => {
	let input = document.querySelector('#input');
	input.oninput = function () {
		let value = this.value.trim();
		let list = document.querySelectorAll('.ul li');


		if(value){

			list.forEach(elem=>{
				if(elem.innerText.search(value) == -1){
					elem.classList.add('hide');
				}
			});
		} else {
			list.forEach(elem => {
				elem.classList.remove('hide');
			})
		}

	console.log(this.value);
	}

}

const scrollElem = document.querySelector('.scroll');

 window.onscroll = () => {
 	scrollIndicator();
 };
 
 function scrollIndicator() {
	const top = document.documentElement.scrollTop;
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	const scrollYCounter = (top / height) * 100;

	scrollElem.style.width = scrollYCounter +  '%';
 }
 $(document).ready(function () {

		$('.block__title').click(function(event) {
			if($('.block').hasClass('one')){
				$('.block__title').not($(this)).removeClass('active');
				$('.block__text').not($(this).next()).slideUp(300);
			}
			$(this).toggleClass('active').next().slideToggle(300);
		});
 });

 const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
 const tabsItem = document.querySelectorAll(".tabs__item");


	tabsBtn.forEach( function (item) {
		item.addEventListener("click", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute('data-tab');
			let currentTab = document.querySelector(tabId);

			if (! currentBtn.classList.contains('active')){
				tabsBtn.forEach(function (item) {
					item.classList.remove("active");
				})
				tabsItem.forEach(function (item) {
					item.classList.remove("active");
				})

				currentBtn.classList.add("active");
				currentTab.classList.add('active');
			}
		});
	});

	document.querySelector(".tabs__nav-btn").click();