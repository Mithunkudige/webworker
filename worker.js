onmessage = function(e) {
	console.log('post message', e);
	var result = 0;
	for(var i=0;i<=1000000;i++) {
		result += i;
	}
	postMessage(result);
}