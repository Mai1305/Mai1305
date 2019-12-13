
import {getUserInfo} from '@/services/user'
const initiaState={
    "user":{
        "name": "",
        "title":"Mr.",
        "first":"Phi",
        "last":"Bui",
        "location":"",
        "street":"",
        "numberstreet":89,
        "namestreet":"Phung Hung",
        "picture":"https://randomuser.me/api/portraits/thumb/women/26.jpg",
        "email":"phiphi.itptit98@gmail.com",
        "dob":"1968-09-22T19:26:28.412Z",
        "phone":"0333712623",
        "nat":"phiphi"
    },
    "text":"Phi Phi"
}
export default {
    namespace: 'user',
    state: initiaState,
    effects:{
        *get({payload},{call,put}){
            const response = yield call(getUserInfo);
            const user ={};
            const data = response.data.results[0];
            console.log(data.phone); 
            user.title = data.name.title;
            user.first = data.name.first;
            user.last = data.name.last;
            user.picture = data.picture.thumbnail;
            user.numberstreet = data.location.street.number;
            user.namestreet = data.location.street.name;
            user.email = data.email;
            user.dob = data.dob.date;
            user.phone = data.phone;
            user.nat = data.login.password; 
               
            yield put({
                type: 'changeState',
                payload: user,
            })
        }
    },
    reducers:{
        changeState(state,{payload}){
            state.user = payload;
            state.text = payload.name;
            return {...state};
        },
        changeText(state,{payload}){
            state.text = payload;
            return {...state};
        }
    }
}