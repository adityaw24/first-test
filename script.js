const txtElement = [
    '"Photograph is the pause button on life"',
    '"Photography is the beauty of life, captured"',
    '"Photograph Is All About Light, Composition and Most Importantly Emotion"', 
    '"Photography is the only language that can be understood anywhere in the world"' 
    ];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.quotes').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 200);

})();
