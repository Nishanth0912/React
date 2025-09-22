import { Component } from "react";

class ClassComp extends Component{

    constructor(props){
     super(props)
     this.state ={count :0}
     this.num=0;
     
    }
    increase=()=>{
        this.setState({count:this.state.count+1})
        this.num++; 
     }
    
    render(){
        return(
            <>
            <h1>This is data using class: {this.state.count}</h1>
            <h1>{this.num}</h1>
            <button onClick={this.increase}>Click To Change</button>
            </>
        )
    }
}

export default ClassComp;