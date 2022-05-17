import React from 'react';
import { Pet } from './Pet.js';
import { petApi } from '../rest/PetApi.js';
import { NewPetForm } from './NewPetForm';

export class PetList extends React.Component{
    state = {
        pets : []
    };

    componentDidMount(){
         this.fetchPets();
    }
    fetchPets = async () => {
        const pets = await petApi.get();
        this.setState({ pets }); 
    };
    updatePet = async (updatedPet) => {
        await petApi.put(updatedPet);
        this.fetchPets();
    };

    deletePet = async (pet_id) => {
        await petApi.delete(pet_id);
        this.fetchPets();
    }

    createPet = async (newPet) => {
        await petApi.create(newPet);
        this.fetchPets();
    }

    render(){
        return(
            <div className = 'pet-list'>
                <h1>Pets in the Shelter</h1>
                <ul>
                {this.state.pets.map((pet) => (
                    <Pet
                    pet = {pet}
                    key = {pet._id}
                    updatePet = {this.updatePet}
                    deletePet = {this.deletePet}
                    />  
                ))}
                </ul>
                <div className = ''>
                    <NewPetForm addNewPet = {this.createPet} />
                </div>
            </div>
        )
    }

}