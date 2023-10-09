import {React, Component} from "react";
import NewTaskForm from "../NewTaskForm";
import AppMain from "../app-main";

import './app.css'

export default class App extends Component {
    maxId = 0;

    state = {
        todosData : [
            this.createNewTask('learn JS'),
            this.createNewTask('drink coffee')
        ],
        filter: 'All'
    }

    createNewTask(task)  {
        return {
            id: this.maxId ++,
            done: false,
            description: task,
            createdTime: 'time ago'
        };
    };

    deleteTask = (id) => {
        this.setState(({ todosData, counter }) => {
            const idx = todosData.findIndex(el => el.id === id);
            const newData = [
                ...todosData.slice(0, idx),
                ...todosData.slice(idx + 1)
            ];
            return {
                todosData: newData
            }
        })
    }

    addTask = (task) => {
        this.setState(({ todosData }) => {
            const newTask = this.createNewTask(task)
            const newData = [...todosData, newTask];
            return {
                todosData: newData            
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todosData }) => {
            const idx = todosData.findIndex(el => el.id === id);
            const oldTask = todosData[idx];
            const newTask = {...oldTask, done: !oldTask.done};
            const newArray = todosData.with(idx, newTask);
            return {
                todosData: newArray
            }
        })
    };

    deleteCompleted = () => {
        this.setState(({ todosData }) => {
            const newData = todosData.filter(todo => !todo.done)
            return {
                todosData: newData
            }
        })
    }

    changeFilter = (v) => {
        this.setState(({ todosData }) => {
            return {
                filter: v
            }
        })
    }

    filteredTasks = () => {
        const filter = this.state.filter;
        if (filter === 'All') {
            return this.state.todosData;
        }
        const filteredData = this.state.todosData.filter(todo => {
            if (filter === 'Active') {
                return !todo.done
            } else {
                return todo.done
            }
        })
        return filteredData
    }

    render () {
        const todoCounter = this.state.todosData.filter(todo => !todo.done).length;
        
        return (
            <section className = 'todoapp'>
                <NewTaskForm addTask = {this.addTask}/>
                <AppMain todos = {this.filteredTasks()}//{this.state.todosData}
                        onDeleted={this.deleteTask}
                        onToggleDone = {this.onToggleDone}
                        counter = {todoCounter}
                        filter = {this.state.filter}
                        changeFilter = {this.changeFilter}
                        deleteCompleted = {this.deleteCompleted}/>
            </section>
        );
    }
}