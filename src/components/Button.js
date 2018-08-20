import React, {Component} from 'react';

class Button extends Component {

    render () {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.props.handleOnClick}>
                    Login
                </button>
            </div>
        );
    }
}

export default Button;
