import React, { useState,useEffect } from "react";
import {CategoryService} from "../../Services/Categorie-Service"
import { useNavigate } from "react-router-dom";
import { Button, TextField, FormControl, MenuItem } from '@mui/material';
//import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';

import { FilePond, registerPlugin } from 'react-filepond'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import {ScategoryService} from '../../Services/Scategorie-Service'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


const InsertScategorie = () => {
  let navigate= useNavigate();
  const [scategoryname, setscategoryname] = useState("");
  const [file, setFile] = useState("");
  const [categories, setCategories] = useState([]);
  const [categorieID, setCategorieID] = useState("");
  useEffect(() => {
    GetListCategories();
    console.log(categories);

  }, []);
  const GetListCategories = async ()=>{
    await CategoryService.fetchCategories().then((response)=>{
      setCategories(response.data);
    })


  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objsubcategory ={
      nomscategorie:scategoryname,
      imagescat:file?"images/"+file[0].file.name:"null",
      categorieID:categorieID,

    };
    await ScategoryService.addScategorie(objsubcategory).then((response) => {
      toast("Sub-Category added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/Scategories")
    }).catch(error => {
      toast("Error Sub-Category is not added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });

  }

  return (
    <>

      <div className="container">

        <form  >
          <div>

            <Button style={{ padding: 15, margin: 20, width: 150 }}
              color="secondary"

              startIcon={<SaveIcon />}
              variant="contained"
              onClick={(event) => handleSubmit(event)}

            >

              Save
            </Button>

            <Button style={{ padding: 15, margin: 2, width: 150 }}
              color="primary"


              startIcon={<CancelIcon />}
              variant="contained"

            >
              {<Link to={"/Scategories"} style={{ textDecoration: "none", color: "white" }}>
                Cancel
              </Link>
              }

            </Button>

          </div>

          <FormControl >
            <TextField
              fullWidth
              style={{ marginLeft: 8, marginTop: 20, width: 400 }}
              variant="outlined"
              label="Sub-Category Name"
              value={scategoryname}
              onChange={e => setscategoryname(e.target.value)}
            />
          </FormControl><br />
          <FormControl style={{width:350}}>
             <TextField
             fullWidth
                   select
                   
                   label="Category"
                   variant="outlined"
                  
                   value={categorieID}
                   style={{ marginLeft: 8,marginTop:20,width:820}}
                   onChange={(event)=>{setCategorieID(event.target.value);}}
                   helperText="Select a category"
                 
                    >
               {
               categories ?    
               categories.map(cat=>
                    <MenuItem key={cat._id} value={cat._id}>{cat.nomcategorie}              
                   </MenuItem>
              )
               :null
               }
             </TextField>
             </FormControl><br/>

          <h4>Upload an Image</h4>
          <FormControl >
            <div style={{ width: 400, height: 50 }}>
              <FilePond
                files={file}
                allowMultiple={false}
                onupdatefiles={setFile}
                labelIdle='<span class="filepond--label-action">Browse One</span>'
              />
            </div>
          </FormControl>

        </form>

      </div>
    </>
  )
}

export default InsertScategorie
