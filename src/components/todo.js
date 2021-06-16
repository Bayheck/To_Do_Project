import React, {Component} from 'react';
//import App from "../App";


class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {todo: "buy a flower"},
                {todo: "read a book"},
                {todo: "go swimming"},
            ],
            text : ""
        };
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.formPreventDefault = this.formPreventDefault.bind(this);
    }

    handleDeleteTodo(num){
        const temp = this.state.todos.filter((todo, index)=> index !== num);
        this.setState({todos:temp});
    }

    render(){
        return(
            <div className={"col-lg-2  col-centered special"}>
                <h1>Todo List</h1>
                <hr/>
                {this.listMaker()}
                <br/>
                <form onSubmit={this.formPreventDefault}>
                    <input placeholder="Enter your todo" type="text" value = {this.state.text} onChange = {this.handleTodoChange}/>
                </form>
                <br/>
                <button onClick={this.handleAddTodo}  className={"btn btn-danger btn-lg m-2"}>Add a Todo</button>

            </div>
        )
    }

    formPreventDefault(e){
        e.preventDefault();
        this.handleAddTodo();
    }

    handleTodoChange(event){
        this.setState({text: event.target.value});
    }

    handleAddTodo(){
        if(this.state.text === ''){
            return;
        }
        const temp = this.state.todos;
        temp.push({todo: this.state.text});
        this.setState({todos: temp, text : ''});
    }

    listMaker(){
        const list = this.state.todos.map((todo,index) =>{
            return(
                <React.StrictMode>
                    <li key={index}>{todo.todo} <button className={"btn btn-sm btn-danger m-2"} onClick={() =>this.handleDeleteTodo(index)}>X</button></li>
                </React.StrictMode>
            );
        });
        return list;
    }
}

export default Todo;