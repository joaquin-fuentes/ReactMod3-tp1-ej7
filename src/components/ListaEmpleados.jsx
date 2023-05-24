import React from 'react';
import LineaEmpleado from './LineaEmpleado';
import { ListGroup } from "react-bootstrap"

const ListaEmpleados = ({ listaEmpleados }) => {
     return (

          <ListGroup >
               {
                    listaEmpleados.map((empleado) => {
                         return <ListGroup.Item className='p-0'>
                                   <LineaEmpleado empleado={empleado}></LineaEmpleado>
                                </ListGroup.Item>
                    })
               }

          </ListGroup>
     );
};

export default ListaEmpleados;