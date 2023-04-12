import React,{Fragment} from 'react'
import Empolyee from "./Empolyee"
import {Button,Table} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link,useNavigate}from "react-router-dom"
const EmployeSearch = () => {
  let history = useNavigate();
  let handleEdit = (Id,first_name,last_name,phone,email,gender,Birthdate,Country,State)=>{
    localStorage.setItem("first_name",first_name);
    localStorage.setItem("last_name",last_name);
    localStorage.setItem("phone",phone);
    localStorage.setItem("email",email);
    localStorage.setItem("gender",gender);
    localStorage.setItem("Birthdate",Birthdate);
    localStorage.setItem("Country",Country);
    localStorage.setItem("State",State);
    localStorage.setItem("Id",Id);
  }
  const handleDElelte = (id)=>{
    var index = Empolyee.map(function(e){
      return e.id
    }).indexOf(id);
    Empolyee.splice(index,1);
    history("/search");
  }
  return (
    <div>
      <Fragment>
        <div style={{margin:"10rem"}}>
          <Table striped bordered hover size='sm'>
            <thead>
               <tr>
                <th>
                  First Name
                </th>
                <th>
                  Last Name
                </th>
                <th>
                  Phone
                </th>
                <th>
                  Email
                </th>
                <th>
                  Gender
                </th>
                <th>
                  Birthdate
                </th>
                <th>
                  Country
                </th>
                <th>
                  State
                </th>
                <th>
                  Action
                </th>
               </tr>
            </thead>
            <tbody>
              {
                Empolyee && Empolyee.length>0
                ?
                Empolyee.map((item)=>{
                  return(
                    <tr>
                      <td>
                        {item.first_name}
                      </td>
                      <td>
                        {item.last_name}
                      </td>
                      <td>
                        {item.phone}
                      </td>
                      <td>
                        {item.email}
                      </td>
                      <td>
                        {item.gender}
                      </td>
                      <td>
                        {item.Birthdate}
                      </td>
                      <td>
                        {item.Country}
                      </td>
                      <td>
                        {item.State}
                      </td>
                      <td>
                      <Link to = "/Edit">
                        <Button onClick = {()=>handleEdit(item.id,item.first_name,item.last_name,item.phone,item.email,item.gender,item.Birthdate,item.Country,item.State)}>edit</Button>
                        </Link>
                        &nbsp;
                        <Button onClick = {()=>handleDElelte(item.id)}>Delete</Button>
                      </td>
                    </tr>
                  )

                })
                :
                "no data availabele"
              }
            </tbody>
          </Table>
          <br>
          </br>
          <Link className='d-grid gap-2' to = "/create">
            <Button size='1g'>Create</Button>
          </Link>
            </div>
    </Fragment>
    </div>
  )
}

export default EmployeSearch
