import * as React from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import './Container.css';
export default class Container extends React.Component<{}, null> {
    render() {
        return (
            <div className="container">
                <Header />
                <Section />
            </div>
        );
    }
}