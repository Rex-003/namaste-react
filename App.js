/**
 * 
 *<div id = "parent">
        <div id = "child1">
            <h1>Hello world from react!</h1>
            <h2>This is h2 tag</h2>
        </div>
        <div id = "child2">
            <h3>This is h3 tag</h3>
            <h4>This is h4 tag</h4>
        </div>
    </div>
  1. Create the above nested structure using React.createElement() and render it to the DOM              
 * 
 * 
 * 
 *
 */

const parent = React.createElement('div' , {id: "parent"} , [
    React.createElement('div' , {id: "child1"} , [
        React.createElement('h1' , {}, "This is h1 tag"),
        React.createElement('h2' , {} , "This is h2 tag")    
    ]),
    React.createElement('div' , {id : "child2"} , [
        React.createElement('h3' , {} , "This is h3 tag"),
        React.createElement('h4' , {} , "This is h4 tag")
    ])
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);









// // This {} object in the createElement function is for attributes like class, id, style etc.
// const heading = React.createElement('h1' , { id: "heading"} , "Hello world from react!");
// // create a root so that the react code can be injected into the div with id 'root' and also so that all the code and elements can be easily rendered by react
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // Now render the heading in the root id div
// root.render(heading);