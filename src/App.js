import React, { Component } from 'react'
import TodoItems from './components/todoItems/todoItems'
import AddItem from './components/addItem/addItem'

class App extends Component {

    state = {
        items: [
            
        ]
    }

    deleteItem = (id) => {
        let items = this.state.items.filter(item => {
            return item.id !== id
        })
        this.setState({items})
    }

    addItem = (item) => {
        item.id = Math.random()
        let items = this.state.items
        items.push(item)
        this.setState({items})
    }

    render() {
        return (
            <div className="App container">
                <h1 className="text-center">Names list</h1>
                <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
                <AddItem addItem={this.addItem} />
            </div>
        )
    }
}

export default App