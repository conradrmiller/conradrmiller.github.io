import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './components/ErrorPage.tsx';
import Resume from './components/Resume.tsx';
import { projects } from './content.ts';
import Project from './components/Project.tsx';

const projectRoutes = projects.map((el) => {
    return {
        path: `/${el.route}`,
        element: <Project {...el} />,
    };
});

const router = createHashRouter([
    // {
    //     path: '/',
    //     element: <App />,
    //     errorElement: <ErrorPage />,
    // },
    {
        path: '/',
        element: <Resume />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'resume',
        element: <Resume />,
        errorElement: <ErrorPage />,
    },
    ...projectRoutes,
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
