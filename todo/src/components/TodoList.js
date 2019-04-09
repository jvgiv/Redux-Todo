import React, { Component } from 'react'
// import Todo from './Todo'
import { connect } from 'react-redux'
import { changeTodo, alterTodo, deleteTodo } from '../actions'


class TodoList extends Component {
    state = {
        listItem: '',
        id: '',
        isClicked: ''
    };
   
    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.value)
    };



    updateList = e => {
        e.preventDefault();
        // console.log(this.props.changeTodo())
        this.props.changeTodo(this.state.listItem)
        this.setState({ listItem: ''})
    }


    lineThrough = id => {
        // e.preventDefault();
        this.props.alterTodo(id)
        // console.log(id)
    }

    deleteItem = id => {
        e.preventDefault();
        this.props.deleteTodo(id)
    }


  render() {
    // console.log(this.props.todoInfo)
    const shell = {
        border: '1px solid black',
        boxShadow: '5px 5px 5px #ccc',
        width: '60%',
        margin: '16px auto',
        borderRadius: '5px'
    }

    const input = {
        boxShadow: '5px 5px 5px #ccc',
        width: '60%',
        margin: '8px auto',
        borderRadius: '5px'
    }

    const list = {
        fontSize: '25px'
    }

    const list2 = {
        fontSize: '25px',
        textDecoration: 'line-through'
    }

    const button = {
        width: '30%',
        height: '35px',
        borderRadius: '5px',
        margin: '6px auto'
        
    }

    return (
      <div style={shell}>
          <h1>Todo List</h1>
        <ul>
            {this.props.todoInfo.map(eachItem => (<li style={eachItem.isClicked ? list2 : list} onClick={() => this.lineThrough(eachItem.id)}>{eachItem.name}</li>
            ))}
            {/* <li>{this.props.todoInfo}</li> */}
        </ul>
        <input 
            style={input}
            type="text"
            name="listItem"
            placeholder="Add an Item"
            value={this.state.listItem}
            onChange={this.handleChanges}
        />
        <br/>
        <button style={button} onClick={this.updateList}>Update Todo List</button>
        <br/>
        <button style={button} onClick={this.deleteTodo} >Delete Completed Task(s)</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        todoInfo: state.todo
    }
}


export default connect(mapStateToProps, { changeTodo, alterTodo, deleteTodo })(TodoList)