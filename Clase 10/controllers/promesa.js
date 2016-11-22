var request = require('request');

const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=WiFRlQS9yj47GHj1YXiPEZ3nYglmRlxWvo8ze18f2ws5gqSCYN7OHfHqcN776BN5iF45Y1QPSqNyv1Rw6xq17B8CIqyDBwSDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9GRkcRevgjTvo8Dc32iw_BLJPcPfRdVKhJT5HNzQuXEeN3QFwl2n0M6ZmO-h7C6eIqWsDnSrEd&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk";
const Promise = require('bluebird');

function myRequest(url){
	return new Promise(function(resolve, reject) {
		request(url, function(err, respondse, body) {
			if(err) {
				return reject(err);
			}
			resolve(JSON.parse(body));
		})
	});
}

var promesa = myRequest(API_URL);

Promise.all([promesa])
	.then(function(x) {
		console.log(x)
	});