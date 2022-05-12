import React, { useState } from "react";
import {CategoryService} from "../../Services/Categorie-Service"
import { useNavigate } from "react-router-dom";
import { Button, TextField, FormControl } from '@mui/material';
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
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const Insertcategorie = () => {
  let navigate = useNavigate();
  const [categoryname, setCategoryname] = useState("");
  const [files, setFiles] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const objectcategorie = {
      nomcategorie: categoryname,
      imagecategorie: files ? "images/" + files[0].file.name : null,

    };
    await CategoryService.addCategorie(objectcategorie).then((response) => {
      toast("Category added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/Categories")
    }).catch(error => {
      toast("Error Category is not added", {
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
              {<Link to={"/ArticlesTable"} style={{ textDecoration: "none", color: "white" }}>
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
              label="Category Name"
              value={categoryname}
              onChange={e => setCategoryname(e.target.value)}
            />
          </FormControl>

          <h4>Upload an image</h4>
          <FormControl >
            <div style={{ width: 400, height: 50 }}>
              <FilePond
                files={files}
                allowMultiple={false}
                onupdatefiles={setFiles}
                labelIdle='<span class="filepond--label-action">Browse One</span>'
              />
            </div>
          </FormControl>

        </form>

      </div>
    </>
  )
}

export default Insertcategorie
