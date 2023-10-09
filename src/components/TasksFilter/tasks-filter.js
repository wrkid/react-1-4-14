import React from "react";

import './tasks-filter.css'

const TasksFilter = ({filter, changeFilter}) => {
    return (
        <ul className="filters">
            <li>
                <button className={filter === 'All' ? 'selected' : null}
                        onClick={() => changeFilter('All')}>All</button>
            </li>
            <li>
                <button className={filter === 'Active' ? 'selected' : null}
                        onClick={() => changeFilter('Active')}>Active</button>
            </li>
            <li>
                <button className={filter === 'Completed' ? 'selected' : null}
                        onClick={() => changeFilter('Completed')}>Completed</button>
            </li>
        </ul>
    );
};

export default TasksFilter;