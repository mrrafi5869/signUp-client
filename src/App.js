import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import Thanks from './components/Thanks/Thanks';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <SignUp></SignUp>
        }
      ]
    },    
    {
      path: "/thanks",
      element: <Thanks></Thanks>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
