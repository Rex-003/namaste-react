# Class Components

    They are the same as functional component and traditional way of doing things....
    The main difference between class and fucntional based components is :{
        In class based component we extend the React.component class and then use the render() function to return some piece of jsx
        which was done by the functiional component directly...
    }

# How to define the setState function to change the state variables

    we can use the this.setState({
        and this a object which has the updated values of all the state variables like
        value1: updatedValue,
        value2: updatedValue,
    })

    and this object is used to set the values of the this.state = {
        this is the state object which has all the state variables...
        and most importantly only those values will be updated whose updated values are passed in the object and then values are updated
        like
        value1 : initial value,
        value2 : initial value,
        value3 : initial value,
    }

    So, in this case only the value1 and value2 will be updated and not value3 if there were more values then those also would not have
    updated.

# Life Cycle of Class Based Components

    So first of all the constructor is called whenever any class object is imstatiated means loaded onto the webpage
    In Step 1 ---> The class constructor is called.
    In Step 2 ---> The render method is called.
    In Step 3 ---> The Component Did Mount is called.
    Now for the component did mount there is subtle edge case
    ComponentDidMount ----> It is called when a component is mounted succesfully, If any parent class is calling the child class
    then the parent class Component will mount later than that of child due to mounting, means if the child is called in the parent's render method then you will call the child's class component life cycle and then the constructor, render and the ComponentDidMount is
    called for the child and then the parent ComponentDidMount.

# Why does the ComponentDidMount is used to call the API's ?

    As we know that componentDidMount is used to call the API's, but there is a specific reason behind using the componentDidMount for calling the API's, As we know react works on the priciple of Load-->Render-->API call-->Render   So from this we can easily understand that the  Api call should be done after the rendering for the non API part to ensure smooth UX for the user.
    and we know that the ComponentDidMount is called after it has been successfully mounted....so after rendering the non API part it calls the API and then fill the data by the api...
