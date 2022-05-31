import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import {deleteUser1, getAllUsers1} from '../actions/userActions'
export default function Userslist() {
    const dispatch = useDispatch()
  const usersstate = useSelector(state=>state.getAllUsersReducer)
  const {error , loading , users} = usersstate
    useEffect(() => {

        dispatch(getAllUsers1())
        
    }, [])
    return (
        <div>

            <h1>Users list</h1>
            {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
       <table className='table table-dark table-bordered table-responsive-sm'>
           <thead className='thead-dark'>
         <tr>
             <th>User Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>Delete</th>
         </tr>
           </thead>

           <tbody>
               {users && users.map(user=>{
                   return <tr>
                       <td>{user._id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td><button className='btn' onClick={()=>{dispatch(deleteUser1(user._id))}}>Remove User</button></td>
                   </tr>
               })}
           </tbody>

       </table>

        </div>
    )
}