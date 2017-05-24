import * as React from 'react';
import './Task.css';
export default class Task extends React.Component<{}, null> {
    render() {
        return (
            <div className="task-container">
                <div className="task-header">
                    task Header
                </div>
                <div className="task-content">
                    I am a new task
                </div>
            </div>
        );
    }
}