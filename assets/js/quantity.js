function minus(e) {
	let input = e.nextElementSibling;
	let value = ParseInt(input.value, 10);
	if (value > 1) {
		value = isNaN(value) ? 0 : value;
		value--;
		input.value = value;
	}
}

function plus(e) {
	let input = e.nextElementSibling;
	let value = ParseInt(input.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	input.value = value;
}

export default { minus, plus };
