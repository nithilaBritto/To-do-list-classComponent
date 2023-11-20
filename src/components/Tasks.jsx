import React, { Component, Suspense } from 'react'
// import Search from './Search'

import EditTodo from './EditTodo'
import TodoItem from './TodoItem'
const Search=React.lazy(()=>import('./Search'))
export class Tasks extends Component {
  render() {
    return (
      <div>
        <h2 className="heading2">MY TASKS</h2>
        <Suspense fallback={<div>Loading....</div>}>
          <Search onSearch={this.props.onSearch}/>
        </Suspense>
        <>
        <ul className="task-list">
        {this.props.data.length>0?
          this.props.data.map((item,index)=>{
            return(
              <li className="Tasks" key={index}>
                {item.isediting?
                <EditTodo onModify={this.props.onModify} item={item}/>
              :<TodoItem onEdit={this.props.onEdit} onDelete={this.props.onDelete} item={item}/>}
              </li>
            )
          }):""
        }
        </ul>
        </>
      </div>
    )
  }
}

export default Tasks