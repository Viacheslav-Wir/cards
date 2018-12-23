;(function() {
	"use strict";

	const xhr = new XMLHttpRequest();
	const cardList = document.querySelector('.ba-card-list'),
		  url = './data/card.json';

	let cardTmpl = document.getElementById('card-tmpl').innerHTML,
		cardListHTML = '';

    xhr.onload = function (){
        let ajax = this;

		const data = JSON.parse(ajax.response),
			  imgObj = (data[0].jsonImg)[0],
			  dataObj = (data[0].jsonData);

		for (const keySuit in imgObj) {
			const suitImg = imgObj[keySuit];

			dataObj.forEach(element => {
				for (const key in element) {
					if (keySuit == 'diamonds' || keySuit == 'heart') {
						cardTmpl = cardTmpl.replace(/{{color}}/ig,'ba-red');
					}
					const centerTmpl = document.getElementById(element[key]).innerHTML.replace(/{{suit-img}}/ig, suitImg);
					
					cardListHTML += cardTmpl
							.replace(/{{center-template}}/ig, centerTmpl)
							.replace(/{{number}}/ig, key.toUpperCase())
							.replace(/{{suit}}/ig, suitImg);
				}
			});
		}
		
        cardList.innerHTML = cardListHTML;
    };

    xhr.open('GET', url);
	xhr.send();
})();

