import React, {Component} from 'react';

class Textbox extends Component {

    render () {
        return (
            <div>
                <input className="form-control" name={this.props.nameofinput} type={this.props.typeofinput} placeholder="Enter your info" onChange={this.props.handleOnChange}>

                </input>
            </div>
        );
    }
}

export default Textbox;
