import React, { Component } from 'react';
class TodoList extends Component {
    state = {
        names: [],        
        name: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    handleRemove = (index) => {
        const {names} = this.state;
        this.setState({
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (
                <li key={index}>
                    {name}                     
                    <button onClick={() => this.handleRemove(index)}>제거</button>
                </li>
            )
        );

        return (
            <div>
                <h1>TODO-LIST</h1>
                <div>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.name}/>
                    <button onClick={this.handleInsert}>ㅌ</button>
                    <ul>
                        {nameList}
                    </ul>
                </div>
            </div>

        );
    }
}

export default TodoList;