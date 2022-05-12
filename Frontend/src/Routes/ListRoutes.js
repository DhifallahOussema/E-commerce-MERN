import { Routes, Route } from "react-router-dom";
import Editarticle from "../Components/Articles/Editarticle";
import Insertarticle from "../Components/Articles/Insertarticle";
import ListArticleCard from "../Components/Articles/ListArticleCard";
import Listarticles from "../Components/Articles/Listarticles";
import ListArticlesDatatable from "../Components/Articles/ListArticlesDatatable";
import Editcategorie from "../Components/Categories/Editcategorie";
import Insertcategorie from "../Components/Categories/Insertcategorie";
import Listcategories from "../Components/Categories/Listcategories";
import EditScategorie from "../Components/SouCategories/EditScategorie";
import InsertScategorie from "../Components/SouCategories/InsertScategorie";
import ListScategorie from "../Components/SouCategories/ListScategorie";
import CartArticle from '../Components/Articles/CartArticle'
import SignIn from "../Components/users/SignIn";
const ListRoutes=() =>{
return (
<Routes>
<Route path="/Articles" exact element={<Listarticles/>}/>
<Route path="/ArticlesCard" exact element={<ListArticleCard/>}/>
<Route path="/ArticlesTable" exact element={<ListArticlesDatatable/>}/>
<Route path="/Articles/add" element={<Insertarticle/>}/>
<Route path="/Article/edit/:id" element={<Editarticle/>}/>
<Route path="/Categories" exact element={<Listcategories/>}/>
<Route path="/Categories/add" element={<Insertcategorie/>}/>
<Route path="/Categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/Scategories" exact element={<ListScategorie/>}/>
<Route path="/Scategories/add" element={<InsertScategorie/>}/>
<Route path="/Scategories/edit/:id" element={<EditScategorie/>}/>
<Route path="/Cart" element={<CartArticle/>}/>
<Route path="/signin"  element={<SignIn/>}/>
<Route path="/" exact element={<ListArticleCard/>}/>
</Routes>

      );
}
export default ListRoutes;
