import axios from 'axios'
axios.defaults.baseURL = 'https://eurosportdigital.github.io/eurosport-web-developer-recruitment';

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