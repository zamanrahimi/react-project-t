
function Profile(props){

    return (<h1> Hello - {props.name} {props.lname}
            {props.children}
    </h1>);
    
    
}

export default Profile;