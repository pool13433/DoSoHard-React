import React, { Component } from 'react';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { messages: [] }; // <- set up react state
    }

    render() {
        const styles = {
            margin: '300px 30px 0px 30px'
        };

        return (
            <div style={{ margin: '300px 30px 0px 30px' }}>
                <a className="waves-effect waves-light btn red">Google PLus</a>
            </div >
        );
    }
}

export default LoginComponent;