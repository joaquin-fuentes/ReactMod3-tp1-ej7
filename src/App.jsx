import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ListaEmpleados from './components/ListaEmpleados';
import { useState } from 'react';


const App = () => {

  let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg?w=2000" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg?w=2000" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=2000" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg?w=2000" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg?w=2000" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://e7.pngegg.com/pngimages/956/783/png-clipart-computer-icons-female-youtube-woman-avatar-business-woman-face-black-hair-thumbnail.png" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png" },
  ]

  const [listaEmpleados, setListaEmpleados] = useState(empleados)
  

  return (
    <section className='container d-flex justify-content-center mt-5'>
       <ListaEmpleados listaEmpleados={listaEmpleados} className="row"></ListaEmpleados>
    </section>
  );
};

export default App;