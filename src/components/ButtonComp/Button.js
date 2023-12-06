import React,{Component} from "react";
import './Button.css'
import SaveButton from "./SaveButton";
export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            count:0
        }
    }
    render(){
        return(
            <div className="Button">
                <p>you clicked this button {this.state.count} times</p>
                <button className = "clickMeButton" onClick={() => this.setState({count:this.state.count + 1})}>
                    click on me
                </button>
                <button className= "clickMeButton" onClick={() => this.setState({count:0})}>
                    Reset the counter
                </button>
                <div>
                    <input className = "inputName" name="name" placeholder="put your name here : " value={this.state.name} 
                    onChange={(e) => this.setState({name : e.target.value})}>
                    </input>
                </div>
                <div>
                    <SaveButton name = {this.state.name} />
                </div>
            </div>
        )
    }

}