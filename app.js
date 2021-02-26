consoleText(['Magic', 'Software Engineering'], 'text', ['#6900ec', '#6900ec']);

function consoleText(words, id, colors) {
	if (colors === undefined) colors = ['#fff'];
	let letterCount = 1;
	let x = 1;
	let waiting = false;
	let target = document.getElementById(id);
	target.setAttribute('style', 'color:' + colors[0]);
	window.setInterval(function () {
		if (letterCount === 0 && waiting === false) {
			waiting = true;
			target.innerHTML = words[0].substring(0, letterCount);
			window.setTimeout(function () {
				let usedColor = colors.shift();
				colors.push(usedColor);
				let usedWord = words.shift();
				words.push(usedWord);
				x = 1;
				target.setAttribute('style', 'color:' + colors[0]);
				letterCount += x;
				waiting = false;
			}, 1000);
		} else if (letterCount === words[0].length + 1 && waiting === false) {
			waiting = true;
			window.setTimeout(function () {
				x = -1;
				letterCount += x;
				waiting = false;
			}, 1000);
		} else if (waiting === false) {
			target.innerHTML = words[0].substring(0, letterCount);
			letterCount += x;
		}
	}, 120);
}

function myFunction() {
	let gif = document.getElementById('gif');
	gif.classList.remove('d-none');
}

setInterval(myFunction, 8000);
