# PROPS

    they are basically the properties that we are passing to the functional component.
    Assume the functional component to be a normal javascript function
    in javascript function we pass the arguments when we are invoking the function similarily we can pass the props as arguments
    at the time of rendering that particular functional component.

    and

    In java script we pass tha parameter in the function signature similarily we pass the parameters to the functional component
    when we are making the functional component.

    -----------Important------------
    PROPS are basically an javascript object which is passed when we peovide the values to the functional component.
    we can pass numerous number of the props, they will be bundled and then pass to the parameter as an Object.

# DE-STRUCTURING OF PROPS

    This is basically opening the object properties at the place of defining the props means exmaple:
    case 1-

        const Heading = (props) => {

        }

        now we are using the props as parameter and then using the proprties as prop.property1....

    case 2-

        const Heading = ({resName , cuisine..}) => {

        }

        now we can directly access the properties by their actual name not as dot.

    This is known as destructuring of the props.

# CONFIG DRIVEN UI

    This is basically a UI Design in which the UI of our website changes using the data.
    for example : swiggy has diferent offers in different locations like mumbai , delhi etc...
    so for each places the offers and images will be different therefore we cannot make individual wesite for every individual place
    therefore we use the concept of this config driven UI, In which UI changes according to the configuration of the data.

# IMPORTANT CONCEPT OF KEYS IN REACT

    Keys are used to uniquely identify the values which have to iterated.
    for example : Let's say we have iterated on the restaurant cards, so there if there would be 100's of restaurnts in the locality to
    render and a new x res-card have to be added to the list, so what it will do without the keys it will re-render all the restaurants again because react does not know which is new res-card and which is old res-card.

    but in case if we provide the keys then react will necessarily be knowing which or where to be added so it will render only that card not anything else.

    Basically this concept provides a big prformance gap if we are building a great production scale app.
