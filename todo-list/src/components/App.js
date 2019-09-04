import React, { Component } from 'react';
import PageTemplate from'./PageTemplate/PageTemplate';
import TodoList from'./TodoList';

class App extends Component {
    render() {
        return (
            <TodoList></TodoList>
        );
    }
}

export default App;