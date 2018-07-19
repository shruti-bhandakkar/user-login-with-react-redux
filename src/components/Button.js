import React, {Component} from 'react';

class Button extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <button type="button" onClick={this.props.handleOnClick}>
                    Login
                </button>
            </div>
        );
    }
}

export default Button;
