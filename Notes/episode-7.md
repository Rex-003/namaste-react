# useEffect

    The main concept of useEffect hook is basically that it is called everytime the component is re-rendered.
    means when any state changes or when the page loads basically when the react component is re rendered the useEffect will run.
    and this useEffect will cause the call back function to run.
    now it is also having a dependency array, which means we can change the behavior of the useEffect.
    useEffect runs after render. If no dependency array is provided, it runs after every render. If an empty array is provided, it runs only once after the initial render. If dependencies are provided, it runs only when one of those dependencies changes.

# React Router Dom

    when you want to create routers then you have to create the configuration for the dom.
    configuration is the information which will tell what will be rendered when that route hits.
    createBrowserRouter ----> used to create the configuration
    RouterProvider ---> used to pass the information to the components for which route they have to act
    errorElement ---> used to refine the error page if any user hits any unmatched route
    useRouteError ---> used to specify the error, or meta data about the error.
    for making the child routes{
        use the children property of the createBrowserRouter
        and in that do the same configiration...
    }
    Outlet ---> it is used to dynamically change the rendering of the components, for example if you want your header
    to be static and just the body is changing with the contact and about then those about and contact will replace
    this outler and will render according to the route...

# What is the difference between the Link and Anchor Tag

    The major difference is just the refreshing of the component, means refreshing the page or reloading to be more precise
    Link ----> only the desired component is reloaded , not the whole page
    Anchor Tag ----> whole page is reloaded.
    Link is faster and more UX Preferred

# DIFFERENCE BETWEEN CLIENT SIDE ROUTING AND SERVER SIDE ROUTING

    Client Side Routing ----> It is normal routing in which we are not doing any server/network calls to move between routes
                              , and it does not reloads the whole page when we switch between routes
    Server Side Routing ----> In this when we used to move between routes, then the whole page is reloaded which slows the UX
                              becasue it does some network calls/ server calls to do the same routing.

# SPA(SINGLE PAGE APPLICATION)

    Yep!!! React is a single page application in which we are just interchanging the components or rendering according to the routes
    with the help of Client Side Rendering...

# useParams

    It is used when you want to create a dyanamic routing, it is a part of the react router...
