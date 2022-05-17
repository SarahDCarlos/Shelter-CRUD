const PET_ENDPOINT = 'https://crudcrud.com/api/d5a6a0f664dc4044952d43dea7b82cb7/petapi';

class PetApi {
    get = async() => {
        try {
            const resp = await fetch (PET_ENDPOINT);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Oops looks like PetApi had an issue.', e)
        }
    }

    put = async (pet) => {
        try{
            const resp = await fetch(`${PET_ENDPOINT}/${pet.id}`,{

                method: 'PUT',
                headers: {
                     'Content-Type': 'application/json '
                },
                body: JSON.stringify (pet) 
             }); 
             const data = await resp.json();
             console.log(data);
             return data;
             } catch(e){
            console.log('Oops looks like updating pets  had an issue.', e);

        }
       
    }

    delete = async (pet_id) => {
        try{
            return await fetch(`${PET_ENDPOINT}/${pet_id}`,{

                method: 'DELETE'
             }); 
             
             
        } catch(e){
            console.log('Delete function fail petapi', e);
        }
    }

    create = async (newPet) => {
        try{
            const resp = await fetch(PET_ENDPOINT,{

                method: 'POST',
                headers: {
                     'Content-Type': 'application/json '
                },
                body: JSON.stringify (newPet) 
             }); 
             const data = await resp.json();
             console.log(data);
             return data;
             } catch(e){
            console.log('Oops looks like create pets had an issue.', e);

        }
       
    }

}



export const petApi = new PetApi(); 