import React from 'react';

export const Pet = (props) => {
   const  {pet, updatePet, deletePet} = props;

   return(
        <li>
           <label>
               {`Name: ${pet.name} Breed: ${pet.breed} Age: ${pet.age} Color: ${pet.color}`}
           </label>
           <button onClick={(e) => deletePet(pet._id)}>Delete</button>
        </li>
   );
};