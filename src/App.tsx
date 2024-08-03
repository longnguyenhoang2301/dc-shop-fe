import logo from './logo.svg';
import './App.css';
import './resources/styles/custom.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components';
import Friend from './containers/Friend';
import Table from './containers/Table';

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
    <div id={"app-main"} className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
