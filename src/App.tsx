import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

import { History } from './history';

const router = createBrowserRouter([
  {
    path: '/',
    element: <History />,
  },
  {
    path: '/history',
    element: <History />,
  },
]);

const App = (): JSX.Element => (
  <main className="App">
    <RouterProvider router={router} />
  </main>
);

export default App;
