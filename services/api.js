import axios from 'axios';

const BASE_URL='http://52.41.54.41:3001/';

axios.interceptors.request.use((config) => {
    const authValue = JSON.parse(localStorage.getItem('authdata'));
    console.log(authValue);
	if( authValue ) {
		// let authToken = 'Bearer ' + userDetails.user_token;
		config.headers['Auth'] = authValue;
	
		return config;
	}
	else {
	
		return config;
	}
});

export function getCall(url,params=null){
    return axios.get(BASE_URL+url,{params:params});
    }

    export function putCall(url,body){
        return axios.put(BASE_URL+url,body);
    }
    
    export function postCall(url,body){
        return axios.post(BASE_URL+url,body);
    }
    
    export function deleteCall(url,params=null){
        return axios.delete(BASE_URL+url,{params : params});

}