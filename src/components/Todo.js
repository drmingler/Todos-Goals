import React from "react"
import List from './List'
import { connect } from 'react-redux'
import {
    handleAdd,
    handleRemove,
    handleToggle
} from "../actions/todos";

class Todos extends React.Component {
    addItem = e => {
        e.preventDefault();
        this.props.dispatch(
            handleAdd(this.input.value, () => (this.input.value = ""))
        );
    };

    remove = todo => {
        this.props.dispatch(handleRemove(todo));
    };

    toggle = id => {
        this.props.dispatch(handleToggle(id));
    };

    render() {
        return (
            <div>
                <h1>TODO LIST</h1>
                <input
                    type={"text"}
                    placeholder={"Add Todo"}
                    ref={input => (this.input = input)}
                />
                <button onClick={this.addItem}> Add Todo</button>
                <List
                    toggle={this.toggle}
                    remove={this.remove}
                    item={this.props.todos}
                />
            </div>
        );
    }
}
export default connect((state)=>({
    todos: state.todos
}))(Todos);