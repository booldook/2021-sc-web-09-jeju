/****************** Array.sort() ********************/
function sortAsc(key) {
	return function(a, b) {
		return key ? a[key] - b[key] : a - b
	}
}

function sortDesc(key) {
	return function(a, b) {
		return key ? b[key] - a[key] : b - a
	}
}