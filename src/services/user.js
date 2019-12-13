import axios from 'axios';


export async function getUserInfo(){
    return axios.get('https://randomuser.me/api');
}
