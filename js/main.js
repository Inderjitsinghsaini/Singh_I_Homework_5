(() => {
	 console.log("fired")

	 let mobileNav = document.querySelector('.nav'),
	 navPanel =document.querySelector('#burgerCon'),
	 navLinks = navPanel.querySelector('a');
	 function toggleNav(event){
	 	event.preventDefault();


	 	console.log('should show nav dropdown');
	 
	 	if (this.nodeName == "A"){
	 		debugger;
	 		//we clicked on an anchor tag, so do some navigation
	 		
	 		//window.scrollTo({
	 			//top: this.offsetTop,
	 			//behavior: 'smooth'
	 		//})
	 	//}
	 	}
	 	navPanel.classList.toggle('show-mobile-nav');
	 }

	 mobileNav.addEventListener('click', toggleNav);
	 navLinks.forEach(link => link.addEventListener('click', toggleNav));







})();