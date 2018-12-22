;(function() {
	"use strict";

	const xhr = new XMLHttpRequest();
	const cardList = document.querySelector('.ba-card-list'),
		  cardTmpl = document.getElementById('card-tmpl').innerHTML,
		//   sixTmpl = document.getElementById('six-tmpl').innerHTML,
		//   cardSuitImage = document.querySelectorAll('.icon'),
		  url = './data/card.json';
		  
	let cardListHTML = '';
	// let 

    xhr.onload = function (){
        let ajax = this;
		// console.log(ajax);

		const data = JSON.parse(ajax.response),
			  imgObj = (data[0].jsonImg)[0],
			  dataObj = (data[0].jsonData);

			// console.log(typeof(data[0]));
			// console.log(data[0].jsonImg);
			// console.log(dataObj);

		for (const key in imgObj) {
			const suitImg = imgObj[key];

			// console.log(suitImg);
			dataObj.forEach(element => {
				console.log(element);
				for (const key in element) {
				// console.log(typeof(dataObj[key]));
				// console.log(dataObj[key]);
				
					console.log(key);
					const centerTmpl = document.getElementById(element[key]).innerHTML.replace(/{{suit-img}}/ig, suitImg);
					// console.log(centerTmpl);
					
					cardListHTML += cardTmpl
							.replace(/{{center-template}}/ig, centerTmpl)
							.replace(/{{number}}/ig, key)
							.replace(/{{suit}}/ig, suitImg);
				}
			});
			// console.log(key, imgObj[key]);
			// console.log(key);
		}
		
        // const liTmpl = document.querySelector('#list-tmpl').innerHTML;
        // data.forEach(employee => {
        //     listHTML += liTmpl
        //             .replace(/{{name}}/ig, employee.name)
        //             .replace(/{{class}}/ig, employee.inoffice ? 'in' : 'out');
        // });
		for (let i = 0; i < 4; i++) {

			// console.log();
			// cardListHTML += cardTmpl
			// 		.replace(/{{center-template}}/ig, sixTmpl);
		};
		
        cardList.innerHTML = cardListHTML;

    };

    xhr.open('GET', url);
	xhr.send();
	

	// const cardList = document.querySelector('.ba-card-list'),
	// 	  cardTmpl = document.getElementById('card-tmpl').innerHTML,
	// 	  sixTmpl = document.getElementById('six-tmpl').innerHTML;

	// let cardListHTML = '';

	// for (let i = 0; i < 36; i++) {
	// 	cardListHTML += cardTmpl
	// 			.replace(/{{center-template}}/ig, sixTmpl);
	// };

	// cardList.innerHTML = cardListHTML;
})();

