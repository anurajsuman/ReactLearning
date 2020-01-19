import React , {Component} from 'react';
import './CreateTodo.css';
import  TodoList from './TodoList';


class CreateTodo extends Component{

    constructor(props){
        super(props)
        this.state = {
            showTodoListComponent : false
         }
    }

render(){
    return(

        <div>
            {this.state.showTodoListComponent ?<TodoList /> : null}
            <label id="olala">
                <span id="olalaAgain" > Enter Your To-do Item: </span>
                 <span style={{'paddingRight' : '10px', 'paddingLeft': '10px' }}>
                    <input id="todo" type="text" name="name" />
                 </span>  
                
            </label>
                <button onClick={this.addTodo}> Add to do </button>
                
            </div>



    );

}

addTodo(){
    
   let data= document.getElementById("todo").value;
   console.log(data);
   this.setState({showTodoListComponent:true});

 
}

   

    componentDidMount(){
        document.title ='Create Todo';
    }
}



export default CreateTodo;