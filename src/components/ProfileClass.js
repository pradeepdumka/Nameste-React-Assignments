import React from 'react';
 
 class ProfileC extends React.Component {

    constructor(props){
        super(props)
        this.state={
            counter:0
        }
        console.log('Child Constructor! '+ this.props.name)
         // we do not mutate state directorly use setState({})
    }
   componentDidMount(){
    console.log('Child Did Mount!'+ this.props.name)
    // this.setState({counter:1})
   }
    render(){
        console.log('Child render!!'+ this.props.name)
        console.log(this.props)
         
       return <h1>This is Profile Class Component {this.state.counter}</h1>
    }
 }


 export default ProfileC;