import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form style={{ display: "flex"}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10px', padding:'5px'}}
                    placeholder="Add Todo..."
                />
                <input type="text"
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: "1"}}
                />
            </form>
        )
    }
}
