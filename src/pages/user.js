
import React from 'react';
import {Component} from 'react';
import {connect} from 'dva';
import {
    Card,
    Divider,
    Avatar,
    Button
} from 'antd';



@connect(({dispatch, user}) => ({dispatch,user}))

class Userrandom extends Component {
    componentDidMount(){
        this.getNew();
    }
    getNew = () => {
        
        this.props.dispatch({
            type: 'user/get'
        });

    }
    changeState = (text) => {
        this.props.dispatch({
            type:'user/changeText',
            payload: text
        })
    }
    render(){
        let user = this.props.user.user;
        // console.log(user);
        return(
            <div>
                <div style={{ padding: "25px 25px"  }}>
                    <Card  bordered={false} style={{ width: 600 }}>
                    <Divider>
                        <Avatar  size={100} src={user.picture.thumbnail}  />
                    </Divider>
                    <p>{this.props.user.text}</p>
                  <Button color="primary" size='large' icon="user" onMouseMove={()=> this.changeState('My name is ' + user.title+' '+user.first+ ' '+user.last)} />
                  <Button color="primary" size='large' icon="mail"  onMouseMove={() => this.changeState('My email is '+user.email) }/>
                  <Button color="primary" size='large' icon="phone"  onMouseMove={() => this.changeState('My phone is '+user.phone )} />
                  <Button color="primary" size='large' icon="calendar"  onMouseMove={() => this.changeState('My dob is '+ user.dob)}/>
                  <Button color="primary" size='large' icon="home"  onMouseMove={() => this.changeState('My address is '+ user.numberstreet +' '+ user.namestreet)}/>
                  <Button color="primary" size='large' icon="phone"  onMouseMove={() => this.changeState('My phone is '+user.phone )} />
                  <Button color="primary" size='large' icon="lock"  onMouseMove={() => this.changeState('My pass is '+user.nat )}/>
          </Card>
          <Button type="primary" onClick={() => this.getNew()}>New User</Button>
          </div>
            </div>
        )
    }
}
export default Userrandom;
