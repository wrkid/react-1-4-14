import {React, Component} from "react";

import './task.css'

export default class Task extends Component {
 
    render () {
        const { done, description, createdTime, onDeleted, onToggleDone } = this.props;

        let status;

        if (done) {
            status = 'completed';
        } else {
            status = 'active';
        }

        return (
            <li className={status}>
                <div className="view">
                    <input className="toggle" 
                            type="checkbox"
                            checked={done ? true : false} 
                            onChange={onToggleDone}/>
                    <label>
                        <span className="description">{ description }</span>
                        <span className="created">{ createdTime }</span>
                    </label>
                    <button className="icon icon-edit"
                            onClick={this.editingHandler}></button>
                    <button className="icon icon-destroy"
                            onClick={onDeleted}></button>
                </div>
                <input type="text" className="edit" defaultValue="Editing task" />
            </li>
        );
    }
}
