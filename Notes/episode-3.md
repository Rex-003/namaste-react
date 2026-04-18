React Foundation
When we hit the command {npx parcel <sourcefile>}, in this the npx means we are executing a rpm package named as
parcel and we are giving the source file like the index.html.

npm scripts - these are the standard scripts that we can use to start or build our react project.

These scripts are use by the npm to run commands so we do not have to do it every time.

These have to configured in the package.json under the scripts object as attribute.

JSX(Java Script Syntax) — It is a way which helps us to right easy and readable code in normal html in react

Important : JSX and React are not same and JSX is not a part of the React, it is basically just a way to write in an easy understandable way.

We can write each and every react code without JSX but it JSX makes our work easy that’s why we use JSX.

Important : The JSX is not a valid core javascript but how can the browser understanding the JSX ?
The JSX code is transpiled before it reaches to the JS Engine means the core javascript which the browser
can understand and this whole phenomenon of transpilation is done by the PARCEL.
This transpiration is not done by PARCEL all by himself it needs some extra functionalities,
so this code is given to PARCEL and parcel immediately transfer this code to babel,  
which is basically transpiling the JSX code into react and browser understandable code.React Components

There are 2 types of components:{ 1. Class Based Component - They are the OLD way of writing the code. 2. Functional Component - This is the NEW way of writing code.
}

# React Functional Component - {

    They are basically normal javascript functions which return JSX as a single piece of code.
    Like:
    const HeadingComponent = () => {
        return <>
        <h2>NamasteReact</h2>
        </>
    }
    This is basically a functional component for react......

}

# Difference between react component and react element

    React Component : const HeadingComponent = () => {
        return <>
            <h2>NamasteReact</h2>
        </>
    }
    React element : const heading = <h1>something</h1>;

# If you want to render the react component

    If you want to render the react functional component then you can use this syntax :

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent />);

    and if want to render the normal react element then:
    root.render(heading); {simple};

# COMPONENT COMPOSITION

    It is basically the component rendering inside another component.
    like :
    const Component1 = () => {
        <div>
            <Component2 />
        </div>
    }
    const Component2 = () => {
        <h1>
            This is the component 2.
        </h1>
    }

# CR0SS-SITE-SCRIPTING ATTACKS

    This is an api attack which is used to run javascript in all those machines in which your app is stored in.
    basically -:
    const data = api.getData();
    const HeadingComponent = () => {
        return (
            <div>
                {data}
                <h1>
                    React Heading Component
                </h1>
            </div>
        )
    }
    const root = ReactDOM. createElement(document.getElementById("root"));
    root.render(<HeadingComponent />)
    So if this api has some malicious data which attacker wants to run to all the machines in which the application is installed
    , but but but the JSX is super smart , it sanitize the data, it does not blindly run any data coming from the api, it checks the data
    and if anything found suspecious then it escapes the data.

# WAYS TO CALL A FUCNTIONAL COMPONENT IN THE REACT

    In the react there are 3 ways to render a functional component inside the another component, element etc.
    1. <FunctionalComponent />
    2. <FunctionalComponent></FunctionalComponent>
    3. Last way is a bit tricky:-
            basically we know that at the end of the day a functional component of react is nothing but a function of javascript and
            the funtions can be called by their traitional methods i.e by calling them using the brackets like: function();
            So yes, we can also call the functional component similiarily like this:-

        {FunctionalComponent()}

        as simple as that......{IMPORTANT TO NOTE}

