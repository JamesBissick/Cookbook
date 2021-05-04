import React from 'react';

const AdminForm = ({ id: key, recipes, editRecipe, removeRecipe }) => {
  const recipe = recipes[key];

  const handleChange = (event, key) => {
    const { name, value } = event.target;
    const newRecipe = recipes[key];
    recipe[name] = value;
    editRecipe(key, newRecipe);
  };

  return (
    <div className="card">
      <form className="admin-form">
        <input type="text" name="name" value={ recipe.name } onChange={ e => handleChange(e, key) }
               placeholder="Nom de la recette" />
        <input type="text" name="image" value={ recipe.image } onChange={ e => handleChange(e, key) }
               placeholder="Nom de l'image" />
        <textarea name="ingredients" value={ recipe.ingredients } onChange={ e => handleChange(e, key) } rows="3"
                  placeholder="Liste des ingrédients" />
        <textarea name="instructions" value={ recipe.instructions } onChange={ e => handleChange(e, key) } rows="15"
                  placeholder="Liste des instructions" />
        <button className="button-delete" onClick={ () => removeRecipe(key) }>Supprimer</button>
      </form>
    </div>
  );
};

export default AdminForm;
