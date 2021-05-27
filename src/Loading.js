import React from 'react';

class Loading extends  React.Component{
    constructor (props) {
        super(props);
        this.state = {
            text :'Loading'
        }
    }

    componentDidMount (){
        const stopper = this.state.text + '...';

        this.interval = window.setInterval(()=> {
            this.state.text === stopper
            ?   this.setState ({
                    text : 'Loading'
                })
            :   this.setState ((currState) => {
                    return{
                        text : currState.text + '.'
                    }  
                })
        }
        ,300);
    }

    componentWillUnmount (){
        window.clearInterval (this.interval);
    }

    render (){
        return(
            <div>{this.state.text}</div>
        )
    }
}

export default Loading