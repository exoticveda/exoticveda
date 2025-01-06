// RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card" key={recipe.id} >
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
      </div>
      <div className="recipe-details">
        <h2>{recipe.title}</h2>
        <div className="ingredients">
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <h5>Instructions:</h5>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
        <p>
          <strong>Benefits:</strong> {recipe.benefits}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
