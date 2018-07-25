import React, {Component} from 'react';

class Textbox extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <input name={this.props.nameofinput} type={this.props.typeofinput} placeholder="Enter your info" onChange={this.props.handleOnChange}>
                    
                </input>
            </div>
        );
    }
}

export default Textbox;
