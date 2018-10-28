import axios from 'axios'
axios.defaults.baseURL = 'https://gist.githubusercontent.com/ldabiralai/cf1588cd80fed41661adecb2e3ca9704/raw/8df6831c33c1b0c178a533e8953a61d11434f220';

/*
* @name getPlayers
* @return players with stats
*/
function getPlayers() {
	return axios.get('/headtohead.json');
}

/*
* API EXPORTS
*/
var api = {
	getPlayers: getPlayers
};

export default api;