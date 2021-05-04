import React, { Component } from 'react';

import Header from './components/Header';
import Recipes from './recipes';
import Card from './components/Card';
import Admin from './components/Admin';

import './App.css';

import base from './base.js';

class App extends Component {
  state = {
    username: this.props.match.params.username,
    Recipes: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`/${ this.state.username }/recipes`, {
      context: this,
      state: 'Recipes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addRecipe = recipe => {
    const Recipes = { ...this.state.Recipes };
    Recipes[`recipe-${ Date.now() }`] = recipe;
    this.setState({ Recipes });
  };

  editRecipe = (key, newRecipe) => {
    const Recipes = { ...this.state.Recipes };
    Recipes[key] = newRecipe;
    this.setState({ Recipes });
  };

  removeRecipe = key => {
    const Recipes = { ...this.state.Recipes };
    Recipes[key] = null;
    this.setState({ Recipes });
  }

  loadExample = () => this.setState({ Recipes });

  render() {
    const cards = Object.keys(this.state.Recipes).map(key => <Card key={ key } details={ this.state.Recipes[key] } />);
    // console.log(this.state.recipes);

    return (
      <div className="box">
        <Header username={ this.state.username } />
        <div className="cards">
          { cards }
        </div>
        <Admin recipes={ this.state.Recipes }
               loadExample={ this.loadExample }
               addRecipe={ this.addRecipe }
               editRecipe={ this.editRecipe }
               removeRecipe={ this.removeRecipe }
        />
      </div>
    );
  }
}

export default App;
