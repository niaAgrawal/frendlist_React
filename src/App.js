import React from 'react';
import './App.css';
import AddFriend from './AddFriend';
import ShowList from './ShowList';
import Loading from './Loading';

window.API = {
  getFriendAPI (){
    return new Promise((res,rej) => {
      const friends = ['Sunny','Ana','Viki','Gosain'];
      setTimeout(() => {
        res(friends)
      },2000);
    });
  }
};

class FriendContainer extends React.Component {

  constructor(props){
    console.log('----constructor---');

    super(props);
    this.state = {
      name: 'Nitya',
      friends: [],
      deactiveList:[],
      loading:true
    };
    this.addfriend = this.addfriend.bind(this);
    this.removeFrd = this.removeFrd.bind(this);
    this.deactiveFrd = this.deactiveFrd.bind(this);
    this.activeFrd = this.activeFrd.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }
  addfriend(friend){
    if(friend !== ''){
      this.setState((state)=>({
          friends: state.friends.concat([friend])
      }));
    }
  }
  removeFrd(remfriend){
    console.log(remfriend);
    if(remfriend !== ''){
      this.setState((currentState)=>({
        friends: currentState.friends.filter((currFriend)=> currFriend !== remfriend)
      }));
    }
  }
  deactiveFrd(defriend){
    console.log(defriend);
    this.setState((currState) =>({
      deactiveList: currState.deactiveList.concat([defriend])
    }));
  }
  activeFrd(actfriend){
    console.log(actfriend);
    this.setState((currState) =>({
      deactiveList: currState.deactiveList.filter((deactive) => deactive !== actfriend) 
    }));
  }
  clearAll(){
    this.setState((currState) =>({
      friends:[],
      deactiveList: []
    }));
  }

  componentDidMount (){
    console.log('---componentDidMount----');
    window.API.getFriendAPI ()
      .then ((friends)=>{
        this.setState({
          friends,
          loading:false
        })
      });
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('---componentDidUpdate----');
  }

  componentWillUnmount (){
    console.log('---componentWillUnmount----');
  }

  render() {
    console.log('---RENDER----');

    if(this.state.loading === true){
      return <Loading />
    }

    return(
      <div style={{margin:'20px'}}>
        <h3>My Name {this.state.name}</h3>
        <AddFriend 
          addNew={this.addfriend} 
          removeNew={this.removeFrd}
          handleclearAll={this.clearAll}
        />
        <ShowList 
          activeList={this.state.friends.filter((frd) => {
            return this.state.deactiveList.indexOf(frd) === -1
          })}
          deactiveList={this.state.deactiveList}
          removeNew={this.removeFrd}
          handleDeactive={this.deactiveFrd}
          handleActivate ={this.activeFrd}
        />
      
      </div>
    );
  }

}

//export default App;
export default FriendContainer;
