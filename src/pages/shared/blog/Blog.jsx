/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl font-bold text-center mb-5'>This is Blog page</h2>
            <div>
                <h3 className='text-2xl font-bold text-center mb-3'>1.The main different between controlled and uncontrolled components.</h3>
                <p className='text-center mb-3 text-xl'>A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange.

                    They both render form elements
                    Uncontrolled component and Controlled component are terms used to describe React components that render HTML form elements. Every time you create a React component that renders an HTML form element, you are creating one of those two.

                    Uncontrolled components and Controlled components differ in the way they access the data from the form elements (input, textarea, select)</p>
                <h3 className='text-2xl font-bold text-center mb-3'>2.React props validate using PropTypes</h3>
                <p className='text-center text-xl'>i.any : The prop can be of any data type. <br />
                    ii. bool : The prop should be a Boolean.<br />
                    iii. number : The prop should be a number.<br />
                    iv. string : The prop should be a string.<br />
                    v. func : The prop should be a function.<br />
                    vi. array : The prop should be an array.<br />
                    vii. object : The prop should be an object.</p>
                <h3 className='text-2xl text-center font-bold mb-3 mt-3'>3.The main different between node.js and express.js</h3>
                <p className='text-xl'>The comparison is not entirely correct. The difference between node.js and express.js in the level of abstraction:1.Node.js is a run-time environment for building server-side event-driven i/o application using javascript. 2.Express.js is a framework based on node.js for building web-application using principles and approaches of node.js.Express is built on top of Node, so yes Express adds more features. Node is just a Javascript environment with libraries to make it easy to write software, where Express extends Node specifically to make webservers easy to write.</p>
                <h3 className='text-2xl text-center font-bold mb-4'>4.The meaning of custom hook and reason for custom hook create</h3>
                <p className='text-xl'>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.</p>
                <p className='text-xl'>Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and you can search for many open sources where you can get some custom hooks from the library already created by developers.</p>
            </div>
        </div>
    );
};

export default Blog;