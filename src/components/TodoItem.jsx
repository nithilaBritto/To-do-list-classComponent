import React, {  PureComponent } from 'react'

export class TodoItem extends PureComponent {
    
  render() {
    return (
      <div>
        <span>{this.props.item.task}</span>
        <div>
          <button className="edit" onClick={(e)=>this.props.onEdit(this.props.item.id)}>Edit </button>
          <button onClick={()=>this.props.onDelete(this.props.item.id)}>Trash</button>
        </div>   
      </div>
    )
  }
}

export default TodoItem