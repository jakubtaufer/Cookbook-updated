import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function RecipesListDev(props) {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th className="text-start">Název</th>
            <th className="text-end">ID receptu</th>
          </tr>
        </thead>
        <tbody>
          {props.recipesList.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td className="text-start">{recipe.name}</td>
                <td className="text-end">{recipe.id}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default RecipesListDev;
