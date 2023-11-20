import React, { Component } from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Tasks from './Tasks'
export class Todo extends Component {
    state={
        data:[],
        task:[],
        count:1,
        searchQuery:'',
        filteredData:[]
    }
    onAdd=(task)=>{
        this.setState({count:this.state.count+1})
        const newData={id:this.state.count,task:task,completed:false,isediting:false}
        this.setState(prev=>({data:[...this.state.data,newData]}))
    }
    
    onSearch=(value)=>{
      this.setState({searchQuery:value})
    }

    onModify=(id,value)=>{
      const modify=this.state.data.map(item=>item.id===id?{...item,task:value,isediting:!item.isediting}:item)
      this.setState({data:modify})
    }

    onEdit=(id)=>{
      const update=this.state.data.map(item=>item.id===id?{...item,isediting:!item.isediting}:item)
      this.setState({data:update})
    }

    onDelete=(id)=>{
      const del=this.state.data.filter(item=>item.id!==id)
      this.setState({data:del})
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.searchQuery!==prevState.searchQuery || this.state.data!==prevState.data){
            const taskList=(this.state.data.filter(item=>this.state.searchQuery?item.task.toLowerCase().includes(this.state.searchQuery.toLowerCase()):item))
            this.setState({filteredData:taskList})
        }

    }
  render() {
    return (
      <div className='container'>
            <Header />
            <AddTask onAdd={this.onAdd} task={this.state.task}/>
            <Tasks onSearch={this.onSearch}  onModify={this.onModify} onEdit={this.onEdit} onDelete={this.onDelete} data={this.state.filteredData}/>
      </div>
    )
  }
}

export default Todo