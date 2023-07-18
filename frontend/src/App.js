import './App.css';
import React, {useState,useContext} from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Background from './users/components/background_components/background'
import Navbar from './users/components/navbar_component/Navbar'
import NavbarAdmin from './food/components/navbar_component/NavbarAdmin'
import LoginPage from './users/pages/login_page/loginPage'
import Home from './users/pages/home/Home'
import MenuPage from './users/pages/menu_page/menuPage'
import Cart from './users/pages/cart_page/Cart'
import AdminOrders from './food/pages/orders_page/AdminOrders'
import AdminMenu from './food/pages/menu_page/AdminMenu'
import { useAuth } from "./hooks/authhook";
import { AuthContext } from "./context/auth-context";
import SignupPage from './users/pages/signup_page/signupPage';
import UpdateForm from "./food/components/menu_component/Updateform"
import ItemForm from './food/components/menu_component/Itemform';
import FilePage from './users/pages/file_page/filePage';


export default function App() {
  const {token, Login, Logout, name} = useAuth()
  const [cart, setCart]=useState([]);
  const [chooseNavbar,setChooseNavbar]=useState(0)
  const [order,setOrder] = useState(null)

  const goForOrder=()=>{
    let orderMenu=cart;
    let today = new Date();
    let dd=today.getDate();
    let mm=today.getUTCMonth();
    let yyyy=today.getFullYear();
    let date=dd+"/"+mm+"/"+yyyy;
    let time=new Date().toLocaleTimeString();
    let total=0;
    for(let i=0;i<orderMenu.length;i++){
      total=total+(orderMenu[i].price*orderMenu[i].amount);
    }
    setOrder({
      date:date,
      time:time,
      orderMenu:orderMenu,
      total:total
    })
  }

  const adminNavbar =()=>{
    setChooseNavbar(0)
  }

  const userNavbar =()=>{
    setChooseNavbar(1)
  }


  const handleClick= (item)=>{
        let isPresent=false;
        cart.forEach((product)=>{
            if(item.id===product.id){
                isPresent =true;
            }
        })
        if(isPresent){
            return;
        }
        else {  
            setCart([...cart,item]);
        }
    }

  const handleChange =(item, d)=>{
      let ind = cart.findIndex((data)=>data.id===item.id);
      setCart((prevValue)=>{
          prevValue[ind].amount +=d;
          if (prevValue[ind].amount === 0) prevValue[ind].amount = 1;
          return [...prevValue ];
  })}

  let routes;
  if(token){
    routes=(
      <>
       <Route exact path='/' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/login' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/profile' element={<FilePage />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/services/:id' element={<UpdateForm />} />
        {/* <Route exact path='/services' element={<UpdateForm />} /> */}
        <Route exact path='/about' element={<ItemForm />} />
        <Route exact path="/user/about" element={<div></div>} />
        <Route exact path='/user/services' element={<div></div>} />
        <Route exact path="/user/home" element={<Home />} />
        <Route exact path='/user/menu' element={<MenuPage handleClick={handleClick} cart={cart}/> } />
        <Route exact path='/user/cart' element={<Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} goForOrder={goForOrder}/>} />
        <Route exact path='/admin/order' element={<AdminOrders order={order}/>} />
        <Route exact path='/admin/menu' element={<AdminMenu/>} />
      </>
    )
  }else{
    routes=(
      <>
       <Route exact path='/' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/login' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/logout' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />}  />
        <Route exact path='/profile' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/services/:id' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />}  />
        {/* <Route exact path='/services' element={<UpdateForm />} /> */}
        <Route exact path='/about' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path="/user/about" element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />}  />
        <Route exact path='/user/services' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />}  />
        <Route exact path="/user/home" element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />}  />
        <Route exact path='/user/menu' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />}  />
        <Route exact path='/user/cart' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/admin/order' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/admin/updates' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />} />
        <Route exact path='/admin/menu' element={<LoginPage userNavbar={userNavbar} adminNavbar={adminNavbar} />}  />
      </>
    )
  }
  return (
    <AuthContext.Provider value={{isLoggedin: !!token, token: token, name: name, login: Login, logout: Logout}}>
    <BrowserRouter>
    <Background />
      {/* <Navbar size={cart.length} /> */}
      {(!token) ? null:(chooseNavbar===1) ? <Navbar size={cart.length} />: <NavbarAdmin />}
      
      <Routes>
       {routes}
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}