import React, { Component, Fragment } from 'react';
import api from '../../helpers/api';

// Components
import List from '../../components/List/List';
import Player from '../../components/Player/Player';

class Home extends Component {

    state = {
        error: false,
        players: [],
        isLoading: false
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        api.getPlayers()
            .then(response => {
                this.setState({ players: response.data.players, isLoading: false });
            })
            .catch(error => this.setState({ error: true }));
    }

    render() {
        let players = <h1>Some error occurs fetching data. Please retry</h1>;

        if (!this.state.error) {
            players = this.state.players.map(player => {
                return <Player
                            key={player.shortname}
                            firstname={player.firstname}
                            lastname={player.lastname}
                            picture={player.picture}
                            country={player.country}
                            data={player.data}
                        />;
            });
        }

        return (
            this.state.isLoading 
            ? <h1> Loading... </h1>
            :
            <Fragment>
                <List>
                    {players}
                </List>
            </Fragment>
        )
    }
}

export default Home;