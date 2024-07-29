import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Friend, Table } from './pages';
import { MainLayout } from './components';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout>Hello world!</MainLayout>,
    },
    {
      path: "/friend",
      element: <Friend />,
    },
    {
      path: "/table",
      element: <Table />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
