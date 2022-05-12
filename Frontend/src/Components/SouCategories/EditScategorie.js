import React, { useState,useEffect } from "react";
import Axios from "../../Axios/Api"
import { useNavigate, useParams } from "react-router-dom";
import {CategoryService} from "../../Services/Categorie-Service";
import SaveIcon from '@mui/icons-material/Save';
import { ScategoryService } from "../../Services/Scategorie-Service";
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

const EditScategorie = () => {
  let navigate =useNavigate();
  const {id} = useParams();
  const [scategoryname, setScategoryname] = useState("");
  const [catID, setCatID] = useState("");
  const [file, setFile] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CategoryService.fetchCategories().then((response) => {
      setCategories(response.data);
      console.log(categories);
    });
    ScategoryService.fetchScategorieById(id).then((response) => {
      setScategoryname(response.data.nomscategorie);
      setCatID(response.data.categorieID);
      setFile(response.data.imagescat);
    }).catch((err) => {
      console.error(err);
      toast("Error in fetching Sub-Category data", {
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
    const objectscategory={
      _id:id,
      nomscategorie: scategoryname,
      imagescat:file?"images/"+file[0].file.name:null
    };
    console.log(objectscategory);
    ScategoryService.editScategorie(objectscategory).then((res) => {
      toast("Sub-Category successfully updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        navigate("/Scategories")

    }).catch((err)=>{
      toast("Error Sub-Category is not updated", {
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
        <h2>Edit Sub-Category  </h2>
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
   { <Link to={"/Scategories"}  style={{textDecoration: "none",color:"white"}}>
           Cancel
       </Link> 
       }
   
 </Button>
   </div>

      <FormControl>  
      
      <TextField 
       style={{ marginLeft: 8,marginTop:20,width:400}}
       variant="outlined"
       label="Category name"
       value={scategoryname}
       onChange={e => setScategoryname(e.target.value)}
             /> 
    </FormControl>
    <FormControl >
             <TextField 
                   select
                   label="Categories"
                   variant="outlined"
                   value={catID}
                   style={{ marginLeft: 8,marginTop:20,width:800}}
                   onChange={e=>{setCatID(e.target.value);}  }
                 >
               {
               categories ?    
               categories.map(f=>
                    <MenuItem value={f._id}>{f.nomcategorie}
                    
                    </MenuItem>
                    
               )
               :null
               }
             </TextField>
             </FormControl><br/>
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

export default EditScategorie
