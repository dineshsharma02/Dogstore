import React, { useState, useEffect, Component } from 'react';
import { withRouter } from "react-router-dom";
import Menu from '../components/menu/Menu';
import Select from '../components/select/Select';
import BreedImage from '../components/breed-image/BreedImage';

class App extends Component {
    state= {
        breedsList: null,
        selectedBreed: null,
        error: false,
        loading: true,
    }

   async componentDidMount() {
       const isAuthticated = await this.isAuthticated();
       if (!isAuthticated) {
            this.props.history.push("/login");
           return;
       }
       this.fetchAllBreeds();
   }

   isAuthticated = async () => {
       return true;
   }
   fetchAllBreeds = async () => {
       try { //try to get data
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (response.ok) { // ckeck if status code is 200
            const data = await response.json();
            this.setState({
                breedsList: Object.keys(data.message),
                loading: false,
            })
        } else {
            this.setState({
                error: true
            })
            alert('Sorry, can not display the data')
        }
        } catch (e) { //code will jump here if there is a network problem
            this.setState ({
                error: true
            })
            alert('Sorry, can not display the data')
        }
       }
       selectHandler = (breed) => {
           this.setState({
               selectedBreed: breed
           })
       }
    render( ) {
        if (this.state.loading) {
            return  <div>loading...</div>
        }
        if (!this.state.breedsList) {
            return;
        }
        return (
            <div className="App">
                <Menu/>
                <Select breedsList={this.state.breedsList} onSelect={this.selectHandler} isError={this.state.error}/>
                <BreedImage breed={this.state.selectedBreed}/>
            </div>
        );
    }
}

export default withRouter(App);