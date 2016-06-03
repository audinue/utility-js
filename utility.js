
exports.forEach = function(array, callback) {
	for(var i = 0, length = array.length; i < length; i++) {
		if(callback(array[i], i, array) === false) {
			break;
		}
	}
	return array;
};
