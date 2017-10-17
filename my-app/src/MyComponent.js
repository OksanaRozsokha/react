import React, { Component } from 'react';
var styles = {
    background: 'red'
};

export default class MyComponent extends Component {

    constructor(props) {
        super(props)
        this.color = 'red'

        this.updateColor = this.updateColor.bind(this)
    }

    updateColor() {
        console.log(1);
        // if ( this.color === 'red') {
        //     this.color = 'green'
        // } else {
        //     this.color = 'red'
        // }

        this.color = this.color === 'red' ? 'green': 'red'
        this.forceUpdate()

    }

    render() {
        return (
            <div
                style={{background: this.color}}
                onClick={this.updateColor}
            >
                <h1>My component!</h1>
            </div>

        )
    }
}