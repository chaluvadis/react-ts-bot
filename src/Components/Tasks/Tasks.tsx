import * as React from 'react';
import Task from '../Task/Task';
import './Tasks.css';
export default class Tasks extends React.Component<{}, null> {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="tasks-container">
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        );
    }
}