import React, { Component } from 'react';
import fire from '../services/fire.js';
import FeedItemComponent from './feedItem.js';

class FeedListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { profiles: [] }; // <- set up react state
    }

    componentWillMount() {
        /* Create reference to messages in Firebase Database */
        let profileRef = fire.database().ref('profile').orderByKey().limitToLast(100);
        profileRef.on('value', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let profiles = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                profiles.push(item);
            }.bind(this));
            this.setState({ profiles: profiles });
        });

    }

    render() {
        console.log('this.state.profiles ::==', this.state.profiles);
        return (
            <div>
                {this.state.profiles.map(function (profile, i) {                    
                    return <FeedItemComponent key={i} data={profile}/>
                })}
            </div>
        );
    }
}

export default FeedListComponent;