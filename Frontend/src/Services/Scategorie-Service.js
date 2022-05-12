import Api from "../Axios/Api";
const Scategorie_API="/scategories"

    const fetchScategories=async()=> {
        return await Api.get(Scategorie_API);
        }
     const fetchScategorieById=async(ScategorieId)=> {
        return await Api.get(Scategorie_API + '/' + ScategorieId);
        }
    const deleteScategorie=async(ScategorieId) =>{
        
        return await Api.delete(Scategorie_API + '/' + ScategorieId);
        }
     const addScategorie=async(Scategorie)=> { 
       
        return await Api.post(Scategorie_API,Scategorie);
    
        }    
     const editScategorie=(Scategorie) =>{ 
       
        return Api.put(Scategorie_API + '/' + Scategorie._id, Scategorie);
    
        }
        const fetchScategorieByCat=async(catId)=> {
            return await Api.get(Scategorie_API + '/affparcat/' + catId);
        
            }   
    export const ScategoryService = {
        fetchScategories,
        fetchScategorieById,
        deleteScategorie,
        addScategorie,
        editScategorie,
        fetchScategorieByCat
    }

