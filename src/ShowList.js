import React from 'react';


function ShowList(props){ 
    return (
        <div>
            <h3> Active Friend's List</h3>
            <ul>
                {props.activeList.map((item,key) => {
                return ( 
                    <li key={item}> 
                        <span>{item} </span>
                        <span><button 
                                style={{margin:'10px', padding:'10px'}}
                                onClick={()=>{props.handleDeactive(item)}}
                            >
                            Deactivate</button></span> 
                        <span><button 
                            style={{margin:'10px', padding:'10px'}} 
                            onClick={()=>{props.removeNew(item)}}
                            >
                            Remove</button></span> 
                    </li>
                )})}
            </ul>

            <h3> Deactive Friend's List</h3>
            <ul>
                {props.deactiveList.map((item,key) => {
                return (
                    <li key={item}> 
                        <span>{item} </span>
                        <span><button 
                            style={{margin:'10px', padding:'10px'}}
                            onClick={()=>{props.handleActivate(item)}}
                            >
                            Activate</button></span> 
                    </li>
                )
                })}
            </ul>
        </div>
    );
}
ShowList.defaultProps = {
    list: []
}
export default ShowList;


