import React, { useState,useEffect } from "react";
import Axios from "../../Axios/Api"
import { useNavigate, useParams } from "react-router-dom";
import {CategoryService} from "../../Services/Categorie-Service";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import {Button} from '@mui/material';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import React FilePond
import { FilePond, File,registerPlugin } from 'react-filepond'
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const Editcategorie = () => {
  let navigate =useNavigate();
  const {id} = useParams();
  const [categoryname, setCategoryname] = useState("");
  const [file, setFile] = useState([]);
  useEffect(() => {
    CategoryService.fetchCategorieById(id).then((res) =>{
      setCategoryname(res.data.nomcategorie);
      setFile(res.data.imagecategorie);
    }).catch((err) => {
      console.error(err);
      toast("Error in fetching category data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
    
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objectcategory={
      _id:id,
      nomcategorie: categoryname,
      imagecategorie:file?"images/"+file[0].file.name:null
    };
    console.log(objectcategory);
    CategoryService.editCategorie(objectcategory).then((res) => {
      toast("Category successfully updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        navigate("/Categories")

    }).catch((err)=>{
      toast("Error category is not updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })

  }


  return (
    <>
     

    <form onSubmit={handleSubmit}  >
        <h2>Edit Category  </h2>
          <div>
   
   <Button style={{padding:15,margin:20,width:150}}
   color="secondary"
   startIcon={<SaveIcon  />}
   variant="contained"
   onClick={(event)=>handleSubmit(event)}

 
 >
   
   Update
 </Button>
 
 <Button style={{padding:15,margin:2,width:150}}
   color="primary"
   
   
   startIcon={<CancelIcon />}
   variant="contained"
   

 
 >
   { <Link to={"/Categories"}  style={{textDecoration: "none",color:"white"}}>
           Annuler
       </Link> 
       }
   
 </Button>
   </div>

      <FormControl>  
      
      <TextField 
       style={{ marginLeft: 8,marginTop:20,width:400}}
       variant="outlined"
       label="Category name"
       value={categoryname}
       onChange={e => setCategoryname(e.target.value)}
             /> 
    </FormControl>
     </form>
        <br/>
        <h4>Upload Image</h4>
        <FormControl >   
        <div style={{width:400, height:50}}>
      <FilePond
      files={file}
      allowMultiple={false}
      onupdatefiles={setFile}
      labelIdle='<span class="filepond--label-action">Browse One</span>'
      
    />
      </div>
     </FormControl>
    
      

      
    </> 
  )
}

export default Editcategorie
