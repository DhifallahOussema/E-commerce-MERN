import Api from "../Axios/Api";
const Categorie_API="/categories"

    const fetchCategories=async()=> {
        return await Api.get(Categorie_API);
        }
     const fetchCategorieById=async(CategorieId)=> {
        return await Api.get(Categorie_API + '/' + CategorieId);
        }
    const deleteCategorie=async(CategorieId) =>{
        
        return await Api.delete(Categorie_API + '/' + CategorieId);
        }
     const addCategorie=async(Categorie)=> { 
       
        return await Api.post(Categorie_API,Categorie);
    
        }    
     const editCategorie=(Categorie) =>{ 
       
        return Api.put(Categorie_API + '/' + Categorie._id, Categorie);
    
        }
        const fetchCategorieByCat=async(catId)=> {
            return await Api.get(Categorie_API + '/affparcat/' + catId);
        
            }   
    export const CategoryService = {
        fetchCategories,
        fetchCategorieById,
        deleteCategorie,
        addCategorie,
        editCategorie,
        fetchCategorieByCat
    }

