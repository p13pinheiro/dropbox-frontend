import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default class Main extends Component{
    state = {
        newBox: ''
    };

    handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post("boxes",{
            title: this.state.newBox,
        });

        this.props.history.push(`/box/${response.data._id}`)
    }
    
    handleChange = (e) => {
        this.setState({ newBox: e.target.value});
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <input name="box" onChange={this.handleChange} placeholder="Criar um box"></input>
                    <button type="submit">Criar</button>
                </form>
                </header>
            </div>
        );
    }
}