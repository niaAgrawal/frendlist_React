import React from 'react';
import PropTypes from 'prop-types';

class AddFriend extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newName :''
        }

        this.insertName = this.insertName.bind(this);
        this.handleAddNewFriend = this.handleAddNewFriend.bind(this);
        this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
        this.handleclearAllFunc = this.handleclearAllFunc.bind(this);
    }
    insertName(e){
        let tempName = e.target.value;
        this.setState({
            newName :tempName
        })
    }
    handleAddNewFriend(){
        this.props.addNew(this.state.newName);
        this.setState({
            newName: ''
        });
    }
    handleRemoveFriend(){
        this.props.removeNew(this.state.newName);
        this.setState({
            newName: ''
        });
    }
    handleclearAllFunc(){
        this.props.handleclearAll();
    }
    render() {
        return (
            <div style={{margin:'10px'}}>
                <input 
                    style={{margin:'10px', padding:'10px'}}
                    type='text'
                    value={this.state.newName}
                    onChange={this.insertName} 
                />
                <button style={{margin:'10px', padding:'10px'}} onClick={this.handleAddNewFriend}> Add </button>
                <button style={{margin:'10px', padding:'10px'}} onClick={this.handleRemoveFriend}> Remove </button>
                <button style={{margin:'10px', padding:'10px'}} onClick={this.handleclearAllFunc}> Clear All </button>
            </div>
        );
    }
}

AddFriend.propTypes ={
    addNew: PropTypes.func.isRequired
}

export default AddFriend;