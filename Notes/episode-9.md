# What are Custom Hooks

    They are basically normal javascript utility functions which are used when we have to create a helper function.
    they are used so that our project can follow single responsibility contract, in which a component or hooks or custom hook should be responsible for only 1 responsibilty and not more than that

# What is LAZY LOADING?

    This is a concept in which we load the code of the page on demand means we are used to load the bundle of the page when we mount that page on the screen this is known as lazy loading.
    It is done using the keyword lazy and an import function {not the normal import but a function}

    --------------------------------
    const About = lazy(() => import("./components/about"));

    this how we do lazy loading in react

    and most importantly if we lazy load this compoennt but if we do not use the suspense then error will be thrown because as we know react is very fast but in the lazy loading the code or parcel's bundle arrives on demand so when you click on the about page it's bundle has not been fetched but react is very fast so the time when we hit the page and the bundle is fetched of the about page between that time span the react sees that it does not have the bindle of the about page and hence throw error.
    To overcome this error we use the concept of the Suspense keyword which is wrapped around the component to be lazy loaded and it requires a fallback, which tells what to show on the screen until we are fetching the bundle...

    <Suspense fallback={<Loading />}>
        <About />
    </Suspense>

    and in the fallback i can also give any html element also like p tag , heading tag etc..
