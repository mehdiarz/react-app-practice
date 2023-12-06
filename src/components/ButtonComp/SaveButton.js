import React,{useState} from "react";
import './Button.css'

 function SaveButton(props){
    const [name,setName] = useState({name : 'Save'});

    const clickHandler = () => {
        if(name.name === 'Save'){
        setName({name:'Done!'})
        const costumerName = {"name": props.name}
        localStorage.setItem("costumerName" ,JSON.stringify(costumerName));
        }
        else{
        setName({name:'Save'})
        return (<div>
            {alert("your name is : " + JSON.parse(localStorage.getItem("costumerName")).name)}
        </div>)
        }
    }
    return(
    <button className = "clickMeButton" onClick={clickHandler}>
        {name.name}
    </button>
    )
}

export default SaveButton;