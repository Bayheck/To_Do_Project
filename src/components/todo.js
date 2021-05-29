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
            text : "Enter Your To-DOOooo..."
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
            <div className={"col-lg-1 col-m col-sm col-centered"}>
                <h1>Todo List</h1>
                {this.listMaker()}

                <form onSubmit={this.formPreventDefault}>
                    <input type="text" value = {this.state.text} onChange = {this.handleTodoChange}/>
                </form>
                <button onClick={this.handleAddTodo}  className={"btn btn-outline-danger btn-sm m-2"}>Add a Todo</button>
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
        const temp = this.state.todos;
        temp.push({todo: this.state.text});
        this.setState({todos: temp, text : ''});
    }

    listMaker(){
        const list = this.state.todos.map((todo,index) =>{
            return(
                <React.StrictMode>
                    <li key={index}>{todo.todo}</li>
                    <button className={"btn btn-sm btn-warning"} onClick={() =>this.handleDeleteTodo(index)}>X</button>
                </React.StrictMode>
            );
        });
        return list;
    }
}

export default Todo;