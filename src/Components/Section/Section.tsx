import * as React from 'react';
import Tasks from '../Tasks/Tasks';
import Bot from '../Bot/Bot';
import './Section.css';
export default class Container extends React.Component<{}, null> {
    render() {
        return (
            <div className="section-container">
                <Tasks />
                <Bot />
            </div>
        );
    }
}