import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./pages/Home"
import CadastroContas from './components/Cadastros/Contas';
import CadastroCategorias from './components/Cadastros/Categorias';
import Inicio from './components/Inicio';
import Receitas from './components/Cadastros/Receitas';
import Despesas from './components/Cadastros/Despesas';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
      path: "/contas",
      element: <CadastroContas />
      },
      {
        path: "/categorias",
        element: <CadastroCategorias />
      },
      {
        path: "/inicio",
        element: <Inicio />
      },
      {
        path: "/receitas",
        element: <Receitas />
      },
      {
        path: "/despesas",
        element: <Despesas />
      }
    ]
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer />
    </>
  )
}

export default App
