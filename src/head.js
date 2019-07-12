var endpoint = 'https://www.jsonstore.io/9838ecace5aa91b24edc030519a1e8bcf0cc291447a320122b38467583f8ef67'

function fetchJSON(a) {
	var f = new XMLHttpRequest()
	f.open('GET', a, false)
	f.send(null)
	return f.responseText
}

function isURL(a) {
	var f = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
	if (f.test(a)) {
		return true
	} else {
		return false
	}
}
var hashh = window.location.hash.substr(1)
if (window.location.hash != '') {
	var res = JSON.parse(fetchJSON(endpoint + '/' + hashh))
	var data = res.result
	if (data != null) {
		if (isURL(data)) {
			window.location.href = data
		}
	}
}
