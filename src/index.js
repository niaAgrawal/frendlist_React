import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FriendContainer from './App';
import Popular from './Popular';
import * as serviceWorker from './serviceWorker';

/*const userDetails = {
    name :'nityaN',
    username:'nityaTest',
    img:'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}
function Badge(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <h3>{props.username}</h3>
            <img src={props.img} alt={props.name} />
        </div>
    );
}

function Name(props){
    return(
        <div>{props.name}</div>
    );
}
function UserName(props){
    return(
        <div>{props.username}</div>
    );
}
function Avatar(props){
    return(
        <img src={props.img}/>
    );
}
function Badge1(props){
    return(
        <div>
            <Name name={props.user.name}/>
            <UserName username={props.user.username}/>
            <Avatar img={props.user.img}/>
        </div> 
    );
}
*/

//Exercise


/*ReactDOM.render(
    <Badge {...userDetails} />
    ,document.getElementById('root'));

    ReactDOM.render(
        <Badge1 user={{
            name: 'Tyler McGinnis',
            img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
            username: 'tylermcginnis'
          }} />
        ,document.getElementById('root'));

*/
// Friend Project
//ReactDOM.render(<FriendContainer />, document.getElementById('root'));

// Popular Project 
ReactDOM.render(<Popular />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
