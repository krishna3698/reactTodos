import React, { Component } from 'react'
import TodoList from '../../ToDoList/TodoList'
import './todo.css'


class Todo extends Component {
    state = {

        content: '',
        todoList: JSON.parse(localStorage.getItem("todoList")),
        isEdit: false,
        editCOntent: ''
    }

    changeHandler = (event) => {
        return (
            this.setState({
                content: event.target.value,
            })

        )
    }

    editContentHandler = (event) => {
        return (
            this.setState({
                editCOntent: event.target.value
            })
        )
    }

    clickHandler = (e) => {
        // localStorage.setItem('content1',this.state.content);
        e.preventDefault();
        console.log('before pushing', this.state.todoList)
        let data = {
            id: Math.random(),
            value: this.state.content
        }
        let arr = this.state.todoList;
        arr.push(data);
        console.log('arr', arr)
        this.setState({
            content: '',
            todoList: arr
        })
        localStorage.setItem('todoList',JSON.stringify(this.state.todoList))

        // localStorage.setItem('todoList',this.state.todoList)
        return (
            console.log('Storing to Local Storage!', this.state.todoList)
        )
    }

    deleteHandler = (id) => {
        console.log('deleteHandler', id);
        const updateArr = this.state.todoList.filter((data) => {
            return (data.id !== id)
        })
        this.setState({
            todoList: updateArr
        })
        localStorage.setItem('todoList',JSON.stringify(this.state.todoList))
    }

    editHandler = (id) => {
        console.log('editHandler', id);
        this.setState({ isEdit: true })
    }

    render() {

        const todoList = this.state.todoList.length > 0 ?
            this.state.todoList.map((data) => {
                return (
                    <div className='todoList' key={data.id}>
                        <TodoList content={data.value} click={() => { this.deleteHandler(data.id) }} edit={() => this.editHandler(data.id)} />
                    </div>
                )
            }) : null;


        return (
            <div >
                <h1>ToDo Component</h1>
                
                <div className='todo'>
                    <form>
                        <input type='text' className='content' placeholder='Add your task' name='todo' row='3' value={this.state.content} onChange={this.changeHandler} />
                        <button className='addBtn' type='submit' onClick={this.clickHandler}>Add</button>
                    </form>
                    {/* <TodoList list={this.state.todoList}/> */}
                    {this.state.isEdit ? <form>
                        <input type='text' className='content' placeholder='Edit your task' name='editTodo' row='3' value={this.state.editCOntent} onChange={this.editContentHandler} />
                        <button className='addBtn' type='submit' onClick={this.clickHandler}>Add</button>
                    </form>
                        : null}
                </div>
                <div>
                    {todoList}
                </div>
            </div>
        )
    }
}

export default Todo;
