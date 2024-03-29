function UserGreeting(props) {
  // if(props.isLoggedIn){
  //   return(
  //     <h2>Welcome {props.username}</h2>
  //   )
  // }
  // else{
  //   return <h2>Please Log in to continue.</h2>
  // }
  // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in.</h2>)

  const welcomeMessage = <h2> Welcome in.</h2>
  const loginPrompt = <h2>Please login.</h2>

  return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}
//login value is being passed through props from App.jsx
export default UserGreeting;