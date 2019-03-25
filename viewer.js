function prevPict() {
	var nextButton = document.getElementById('next_button');
	nextButton.disabled = '';
	var prevButton = document.getElementById('prev_button');
	prevButton.disabled = '';

	var num = document.getElementById('number').innerHTML;
	num = parseInt(num, 10);
	num = num - 1;

	var photo = document.getElementById('pict');
	photo.src = `images/${num}.jpg`;
	document.getElementById('number').innerHTML = num;

	if (num == 1) {
		prevButton.disabled = "disabled";
	}
}
function nextPict() {
	var nextButton = document.getElementById('next_button');
	nextButton.disabled = '';
	var prevButton = document.getElementById('prev_button');
	prevButton.disabled = '';

	var num = document.getElementById('number').innerHTML;
	num = parseInt(num, 10);
	num = num + 1;

	var photo = document.getElementById('pict');
	photo.src = `images/${num}.jpg`;
	document.getElementById('number').innerHTML = num;
	
	if (num == 4) {
		nextButton.disabled = "disabled";
	}
}
