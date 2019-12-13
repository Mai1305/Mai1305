
import {getUserInfo} from '@/services/user'
const initiaState={
    user:{
        name: {
            title:'Mr.',
            first:'Phi',
            last:'Bui',
        },
        location:{
            street:{
                number:'89',
                name:'Phung Hung',
            }
        },
        picture:'https://randomuser.me/api/portraits/thumb/women/26.jpg',
        email:'phiphi.itptit98@gmail.com',
        dob:'1968-09-22T19:26:28.412Z',
        phone:'0333712623',
        nat:'phiphi',
    },
    text:'Phi Phi'
}
export default {
    namespace: 'user',
    state: initiaState,
    effects:{
        *get({payload},{call,put}){
            const response = yield call(getUserInfo);
            const user = {};
            const data = response.data.results[0];
            user.name.title = data.name.title;
            user.name.first = data.name.first;
            user.name.last = data.name.last;
            user.picture = data.picture.thumbnail;
            user.location.street.number = data.location.street.number;
            user.location.street.name = data.location.street.name;
            user.email = data.name.email;
            user.dob = data.name.dob.date;
            user.phone = data.name.phone;
            user.nat = data.name.nat;     
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