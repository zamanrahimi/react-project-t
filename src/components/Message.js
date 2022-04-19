// Class Component 

import React from 'react';
// import Component from 'react';

class Message extends React.Component 
// class Message extends Component 
{

    render(){
        return <h1>Message: {this.props.msg}</h1>
    }

}

export default Message;