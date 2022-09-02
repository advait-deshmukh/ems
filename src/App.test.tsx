// import {render, screen} from '@testing-library/react';
// import '@testing-library/jest-dom'
// import Signup from './login/Signup';
// import Login from './login/Login'
// import Title from './Dashboard/Title';
// import List from './Dashboard/List';
// import Add from './Dashboard/Add';
// import Edit from './Dashboard/Edit';

// // test('renders signup component', ()=>{
// //     const { getByTestId } = render(<Signup/>);
// //     const singupElement = getByTestId('home');
// //     expect(singupElement).toBeInTheDocument();
// // });>>

// const setSelectedEmployee = () => {};
// const selectedEmployee = {id : 1, empName:'a', empMail :'a@b.com', department:'a', manager:'a' };


// test('render signup page', ()=> {
//     render(<Signup/>);
//     const headerElement = screen.getByText(/Sign up/i);
//     expect(headerElement).toBeInTheDocument();
//     const formElement = screen.getByRole("textbox")
//     expect(formElement).toBeInTheDocument();
//     const buttonElement = screen.getByRole("button")
//     expect(buttonElement).toBeInTheDocument();
// });



// test('render login page', ()=>{
//     render(<Login />)
//     const headerElement = screen.getByRole('heading');
//     expect(headerElement).toBeInTheDocument();
//     const formElement = screen.getByRole('textbox');
//     expect(formElement).toBeInTheDocument();
//     const buttonElement = screen.getAllByRole("button")
//     expect(buttonElement.length).toBe(2);                     //2 buttons on login page
//     const linkElement = screen.getByRole("link")
//     expect(linkElement).toBeInTheDocument();
// })

// test('render dashboard title', ()=>{
//     render(<Title/>)
//     const headerElement = screen.getByRole('heading');
//     const buttonElement = screen.getAllByRole('button');
//     expect(headerElement).toBeInTheDocument();
//     expect(buttonElement.length).toBe(2);
// })

// test('render employee list',()=>{
//     render(<List setSelectedEmployee={setSelectedEmployee}/>)
//     const listElement = screen.getByRole('table');
//     const SearchBox = screen.getByRole('textbox')
//     expect(listElement).toBeInTheDocument();
//     expect(SearchBox).toBeInTheDocument();
// })

// test('render Add employee form', ()=>{
//     render(<Add/>);
//     const headerElement = screen.getByRole('heading');
//     const inputElements = screen.getAllByRole('textbox');
//     const buttonElement = screen.getByRole('button');
//     expect(headerElement).toBeInTheDocument();
//     expect(inputElements.length).toBe(4);
//     expect(buttonElement).toBeInTheDocument();
// })

// test('render Add employee form', ()=>{
//     render(<Edit selectedEmployee = {selectedEmployee}/>);
//     const headerElement = screen.getByRole('heading');
//     const inputElements = screen.getAllByRole('textbox');
//     const buttonElement = screen.getByRole('button');
//     expect(headerElement).toBeInTheDocument();
//     expect(inputElements.length).toBe(4);
//     expect(buttonElement).toBeInTheDocument();
// })