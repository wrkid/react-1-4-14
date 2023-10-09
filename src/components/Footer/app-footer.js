import React from "react";
import TasksFilter from '../TasksFilter'

import './app-footer.css'

const AppFooter = ({ counter, filter, changeFilter, deleteCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{`${counter} items left`}</span>
            <TasksFilter filter = {filter}
                        changeFilter={(value) => changeFilter(value)}/>
            <button className = "clear-completed"
                    onClick={deleteCompleted}>Clear completed</button>
        </footer>
    );
};

export default AppFooter;