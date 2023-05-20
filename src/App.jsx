import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ListaEmpleados from './components/ListaEmpleados';


const App = () => {
  return (
    <section className='container d-flex justify-content-center mt-5'>
       <ListaEmpleados className="row"></ListaEmpleados>
    </section>
  );
};

export default App;