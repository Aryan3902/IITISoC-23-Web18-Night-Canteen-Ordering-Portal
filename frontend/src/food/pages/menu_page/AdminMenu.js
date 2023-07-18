import React,{useState,useEffect} from 'react'
// import WorkoutDetails from '../../../users/components/WorkoutDetails';
import WorkoutDetails from '../../components/menu_component/WorkoutDetails';

export default function AdminMenu() {
    const [menuitems,setMenuItems]=useState(null);
    useEffect(()=>{
        const fetchWorkouts=async()=>{
        const response=await fetch('/canteen/food',{
            method:"GET"
        })
        const json=await response.json();
        if(response.ok){
            setMenuItems(json);
        }
        }
        fetchWorkouts();
    })
    
  return (
    <div>
      <div className="input-group ms-sm-4 ms-md-4" style={{marginTop:"100px"}}>
        <div className="width-setting-of-input">
            <input type="text mx-2" className="form-control my-3" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group-append">
          <a className="btn btn-success mx-2 my-3" type="button" href='/about'>Add Item</a>
          <a className="btn btn-warning mx-2 my-3" type="button" href='/services'>Update Item</a>
          <button className="btn btn-danger mx-2 my-3" type="button">Delete Item</button>
        </div>
    </div>

    <h3 className="ms-sm-4 ms-md-4 mt-2">Category</h3>
    <hr/>

    <div className="container">
        <div className="row">
            
                    {menuitems && menuitems.map((workout)=>(
                  <WorkoutDetails key={workout._id} workout={workout}/>
                )

                )}
            {/* <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div>
            <div className="card col-sm-6 col-md-4 col-lg-2 mx-2 my-2" style={{width: "160px", height: "200px"}}>
                <img src="https://shriramsetu.org/img/11-(2).png" className="card-img-top" alt="..." style={{height: "100px", width: "140px"}} />
                <hr/>
                <div className="card-body">
                    <h5 className="card-text">Category Name</h5>
                </div>
            </div> */}
            
        </div>
    </div>
    </div>
  )
}
