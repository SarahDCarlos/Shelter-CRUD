import React, { useState } from 'react';

export const NewPetForm = (props) => {
     const [name, setName] = useState('');
     const [breed, setBreed] = useState('');
     const [age, setAge] = useState('');
     const [color, setColor] = useState('');
     const onSubmit = (e) => {
         e.preventDefault();
         if (name && breed && age && color) {
            props.addNewPet({
                'name' : name,
                'breed' : breed,
                'age' : age,
                'color' : color

            });
            setName('');
            setBreed('')
            setAge('')
            setColor('')
         }else {
             console.log('invalid input')
         }
     };

     return(
         <div> 
            <h4>Add a New Pet</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='name'
                    onChange = {(e) => setName(e.target.value)}
                    value ={name}
                    /> 
                <input 
                    type = 'text'
                    placeholder='breed'
                    onChange = {(e) => setBreed(e.target.value)}
                    value = {breed}
                    />
                <input
                    type = 'text'
                    placeholder='age'
                    onChange = {(e) => setAge(e.target.value)}
                    value = {age}
                    />
                     <input
                    type = 'text'
                    placeholder='color'
                    onChange = {(e) => setColor(e.target.value)}
                    value = {color}
                    />
                <button type='submit'>Add Pet</button>
            </form>
         </div>
     )
};