import React,{Component, PureComponent} from "react";

export default class AddTask extends Component{
    
    state={
        myRef:React.createRef(),
    }
    handleClick=(e)=>{
        e.preventDefault();
        const currentVal=this.state.myRef.current.value
        this.state.myRef.current.value=''
        this.props.onAdd(currentVal)
    }
    
    render(){
        return(
            
            <div>
            <form className="add-task">
                <input 
                id="taskinput"
                type="text" 
                placeholder="Add new task"
                ref={this.state.myRef}
                />
                <button className='btn'onClick={(e)=>this.handleClick(e)}>
                Add     
                </button>
            </form>
       </div>
        )
    }
}