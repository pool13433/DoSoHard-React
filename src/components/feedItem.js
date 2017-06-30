import React, { Component } from 'react';

class FeedItemComponent extends Component {


    constructor(props) {
        super(props);
        console.log('props.profile ::==',props.profile);
        this.state = {
            profile: props.profile
        }
    }

    render() {
        console.log('profile ::==',this.state.profile);
        return (
            <div>
                FeedItemComponent
            </div>
        );
    }
}

export default FeedItemComponent;