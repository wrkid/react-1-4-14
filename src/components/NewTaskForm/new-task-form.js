import React, { Component } from "react";

import './new-task-form.css';

export default class NewTaskForm extends Component {

    state = {
        value: ''
    }

    async handleSubmit (event) {
        event.preventDefault();
        if (this.state.value.trim())
            this.props.addTask(this.state.value);
        this.setState(() => {
            return {
                value : ''
            }
        });
    }

    async onValueChange(event) {
        this.setState(() => {
            return {
                value: event.target.value
            };
        });
    };


    render () {

        const { addTask } = this.props;

        return (
            <header>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h1>todos</h1>
                    <input className="new-todo"
                            type="text" 
                            placeholder="What needs to be done...?"
                            autoFocus
                            value={this.state.value}
                            onChange={e => this.onValueChange(e)}/>
                </form>
            </header>
        );
    }
}

