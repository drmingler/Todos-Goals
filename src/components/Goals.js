import React from "react";
import { connect } from 'react-redux';
import List from './List'
import {
    handleDelete,
    handleAdd,
} from "../actions/goals";

class Goals extends React.Component {
    addItem = e => {
        e.preventDefault();
        this.props.dispatch(
            handleAdd(this.input.value, () => (this.input.value = ""))
        );
    };
    remove = goal => {
        this.props.dispatch(handleDelete(goal));
    };
    render() {
        return (
            <div>
                <h1>GOALS LIST</h1>
                <input
                    type={"text"}
                    placeholder={"Add Goal"}
                    ref={input => (this.input = input)}
                />
                <button onClick={this.addItem}> Add Goal</button>
                <List remove={this.remove} item={this.props.goals} />
            </div>
        );
    }
}
export default connect((state)=>({
    goals:state.goals
}))(Goals);