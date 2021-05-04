import React, { Component } from 'react';

class AddRecipe extends Component {
  state = {
    name: '',
    image: '',
    ingredients: '',
    instructions: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const submittedRecipe = { ...this.state };
    this.props.addRecipe(submittedRecipe);
    // Reset
    Object.keys(submittedRecipe).forEach(item => {
      submittedRecipe[item] = '';
    });
    this.setState({ ...submittedRecipe });
  };

  render() {
    return (
      <div className="card">
        <form className="admin-form add-recipe" onSubmit={ this.handleSubmit }>
          <input type="text" name="name" value={ this.state.name } onChange={ this.handleChange }
                 placeholder="Nom de la recette" />
          <input type="text" name="image" value={ this.state.image } onChange={ this.handleChange }
                 placeholder="Nom de l'image" />
          <textarea name="ingredients" value={ this.state.ingredients } onChange={ this.handleChange } rows="3"
                    placeholder="Liste des ingrédients" />
          <textarea name="instructions" value={ this.state.instructions } onChange={ this.handleChange } rows="15"
                    placeholder="Liste des instructions" />
          <button className='button-add' type="submit">Ajouter Recette</button>
        </form>
      </div>
    );
  }
}

export default AddRecipe;
