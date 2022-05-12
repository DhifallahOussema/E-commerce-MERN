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
import {ScategoryService } from '../../Services/Scategorie-Service'



const ListScategorie = () => {
  const [scategories, setScategories] = useState([]);
 

  useEffect(() => {
    GetListScategories();

    console.log(scategories);

  },[])

  const GetListScategories = async () => {
    await ScategoryService.fetchScategories().then((response) => {
      setScategories(response.data);
    })
  }
  const deleteScategory = async (_id) => {
    await ScategoryService.deleteScategorie(_id)
    var newScategory = scategories.filter((item) => {return item.id !== _id;})
    setScategories(newScategory);
    toast("Sous categorie Supprimé", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      

  }
  const columns =[
    {
      label :"Sub-Category Name",
      name:"nomscategorie",


    },
    {
      label:"Sub-Category Image",
      name:"imagescat",
      options:{
        customBodyRender:(rowdata) =>(
        <img style={{ height: 60, borderRadius: '50%' }} src={rowdata} alt="" />
      )
}
    },
    {
      label:"Category Name",
      name:"categorieID",
      options: {
        customBodyRender:(categ) =>(
          categ?categ.nomcategorie:null
        )
      }



    },
    {
      label:"Category image",
      name:"imagecategorie",
      option:{
        customBodyRender:(categ) =>(
          <img style={{ height: 60, borderRadius: '50%' }} src={categ} alt="" />
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
        { <Link to={"/Scategories/edit/" + value}  >
          <EditIcon   color='secondary' />
      </Link> 
      }
     
      </IconButton> 
      <IconButton onClick={()=>{deleteScategory(value)}}>
      <DeleteIcon  sx={{ color: pink[500] }} />
        
        </IconButton>
        
      
      
        </div>
        )
      }
  
  },
  ]
  return (
    <div>
      <div style={{padding:5,margin:5}}>
      <Button
        color="success"
       
        startIcon={<AddCircleIcon />}
        variant="contained"     
      >
        { <Link to={"/Scategories/add"}  style={{textDecoration:"none",color:"white"}}>
                Ajouter
            </Link> 
            }
        
      </Button>
      </div>
        {scategories.length>0?  

               <ThemeProvider theme={createTheme()}> 
               <MUIDataTable
                 title="Sub-categories List"
                 data={scategories}
                 columns={columns}
                   />
               </ThemeProvider> 
          :null
        }
         
    </div>
  )
}

export default ListScategorie
