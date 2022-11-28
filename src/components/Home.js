import React, { Fragment } from 'react'
import Employees from './Employees'
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const Home = () => {
  return (
    <Fragment>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            name
                        </th>
                        <th>
                            age
                        </th>
                    </tr>
                </thead>
                        <tbody>
                            {
                                Employees && Employees.length>0 ? Employees.map((item)=>{
                                    return(
                                        <tr>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.age}
                                            </td>
                                            <td>
                                                <Button onClick={()=>alert(item.id)}>Delete</Button>
                                                &nbsp;
                                            </td>
                                        </tr>
                                    )
                                }) :"No Data available"
                            } 
                        </tbody>
                    
                
            </Table>       
         </div>
    </Fragment>
    
  )
}

export default Home