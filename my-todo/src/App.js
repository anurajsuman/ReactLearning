
import React, { Component }  from 'react';
import Header from  './Header';
import Footer from './Footer';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import {
  Route,
  Switch, 
  HashRouter as Router}  from 'react-router-dom';

import './App.css';


class  App extends Component {
  render(){
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route path="/create-todo" component={CreateTodo} /> 
          <Route path="/todo-list" component={TodoList} /> 
        </Switch>
      </Router>

 
      <Footer/>
    </div>
    
  );
}
}

export default App;
