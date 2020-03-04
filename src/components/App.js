import React from "react";
import {handleInitialData} from "../actions/shared";
import {connect} from 'react-redux';
import ConnectedTodos from './Todo'
import ConnectedGoals from './Goals'


class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleInitialData());

    }
    render() {
        // const { todos, goals, loading } = store.getState();
        if (this.props.loading === true) {
            return <h1>Loading</h1>;
        }
        return (
            <div>
                <ConnectedTodos />
                <ConnectedGoals />
            </div>
        );
    }
}

export default connect((state)=>({
        loading : state.loading }
))(App);