import React from "react";
import TaskList from "../TaskList";
import AppFooter from '../Footer'

const AppMain = ({ todos, onDeleted, onToggleDone, counter, deleteCompleted, filter, changeFilter }) => {
    return (
        <section className="main">
            <TaskList todos = { todos }
                    onDeleted = { (id) => onDeleted(id)}
                    onToggleDone = {(id) => onToggleDone(id)}/>
            <AppFooter counter = {counter}
                        filter = {filter}
                        changeFilter = {(value) => changeFilter(value)}
                        deleteCompleted = {() => deleteCompleted()}/>
        </section>
    );
}

export default AppMain;