import React from 'react';
import LineaEmpleado from './LineaEmpleado';
import {ListGroup} from "react-bootstrap"

const ListaEmpleados = () => {
    return (
   
         <ListGroup className='bordeAzul' >
           <ListGroup.Item className='p-0'>
                <LineaEmpleado></LineaEmpleado>
           </ListGroup.Item>
           <ListGroup.Item className='p-0'>
                <LineaEmpleado></LineaEmpleado>
           </ListGroup.Item>
           <ListGroup.Item className='p-0'>
                <LineaEmpleado></LineaEmpleado>
           </ListGroup.Item>
           <ListGroup.Item className='p-0'>
                <LineaEmpleado></LineaEmpleado>
           </ListGroup.Item>
           <ListGroup.Item className='p-0'>
                <LineaEmpleado></LineaEmpleado>
           </ListGroup.Item>
         </ListGroup>
    );
};

export default ListaEmpleados;