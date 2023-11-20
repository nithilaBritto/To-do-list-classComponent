import React, { Component } from 'react'

export class EditTodo extends Component {
    state={
        editRef:React.createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const currentval=this.state.editRef.current.value
        this.props.onModify(this.props.item.id,this.state.editRef.current.value)
        console.log(currentval)
    }
    componentDidMount(){
        this.state.editRef.current.value=this.props.item.task
    }
  render() {
    return (
      <div>
        <form>
            <input type='text'  className='updateTask' ref={this.state.editRef}/>
            <button className='AddTask' onClick={(e)=>this.handleSubmit(e)}>Update</button>
        </form>
      </div>
    )
  }
}

export default EditTodo