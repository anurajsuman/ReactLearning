import  React , { Component } from "react";


class TodoList extends Component{

render(){
    return(
        <div>
            <ul>
                <li>
                    want to dance tonight
                </li>
            </ul>
        </div>

    );
}

constructor(props){
    super(props)
}


componentDidMount(){
    document.title = 'Todo List'
}

}

export default TodoList;