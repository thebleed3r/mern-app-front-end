import React, { Component } from 'react';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props)
        
        this.onChangeToDoDescription = this.onChangeToDoDescription.bind(this);
        this.onChangeToDoPriority = this.onChangeToDoPriority.bind(this);
        this.onChangeToDoResponsible = this.onChangeToDoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeToDoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeToDoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        })
    }

    onChangeToDoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div  className="form-group">
                        <label>Description:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeToDoDescription}
                        />
                    </div>
                    <div  className="form-group">
                        <label>Responsible:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeToDoResponsible}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.todo_priority === 'Low'}
                                   onChange={this.onChangeToDoPriority}
                            />
                            <label className="form-check-label">Low</label> 
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.todo_priority === 'Medium'}
                                   onChange={this.onChangeToDoPriority}
                            />
                            <label className="form-check-label">Medium</label> 
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.todo_priority === 'High'}
                                   onChange={this.onChangeToDoPriority}
                            />
                            <label className="form-check-label">High</label> 
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}