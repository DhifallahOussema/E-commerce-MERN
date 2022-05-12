import React from 'react'
import { useState,useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { toast } from 'react-toastify';
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import {CategoryService } from '../../Services/Categorie-Service'

const Listcategories = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    GetListCategories();
    console.log(categories)
    

    },[]);
  const GetListCategories = async () => {
    await CategoryService.fetchCategories()
    .then((res) => {
      setcategories(res.data);
    })
  }
  const delCategory = async (_id) => {
    await CategoryService.deleteCategorie(_id)

    var newcategories = categories.filter((item) =>{
      return item._id!==_id;
    }
    )
    setcategories(newcategories);
    toast("Categorie Supprimé", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }
      const columns = [
        {
          label: "Name",
          name: "nomcategorie"
        },
        
        
        {
            name:"imagecategorie",
            label: "Image",
            options: {
            customBodyRender : (rowData) => (
              <img
                style={{ height: 60, borderRadius: '50%' }}
                src={rowData}
                alt=""
              />
            )
            }
          },
          {
            name: "_id",
            label: "Actions",
            options: {
            customBodyRender: (value) => (
              <div>
                <IconButton  >
              { <Link to={"/Categories/edit/" + value}  >
                <EditIcon   color='secondary' />
            </Link> 
            }
           
            </IconButton> 
            <IconButton onClick={()=>{delCategory(value)}}>
            <DeleteIcon  sx={{ color: pink[500] }} />
              
              </IconButton>
              
            
            
              </div>
              )
            }
        
        },
        ];


    

  
  return (
    <div>
      <div style={{padding:5,margin:5}}>
      <Button
        color="success"
       
        startIcon={<AddCircleIcon />}
        variant="contained"     
      >
        { <Link to={"/Categories/add"}  style={{textDecoration:"none",color:"white"}}>
                Ajouter
            </Link> 
            }
        
      </Button>
      </div>
        {categories.length>0?  

               <ThemeProvider theme={createTheme()}> 
               <MUIDataTable
                 title="Liste des articles"
                 data={categories}
                 columns={columns}
                   />
               </ThemeProvider> 
          :null
        }
         
    </div>
  )
}

export default Listcategories
