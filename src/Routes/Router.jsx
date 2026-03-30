const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p>Loading..</p>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/apps",
                element: <Apps />,
            },
            {
                path: "/installation",
                element: <Installation />
            }, 
            {
                path: '/app/:id',
                element: <AppDetails></AppDetails>, 
                errorElement: <Apperror />,
            }
        ]
      
    },
    

]);

export default router;