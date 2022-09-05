import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from './login/Signup';
import Login from './login/Login';
import Title from './Dashboard/Title';
import List from './Dashboard/List';
import Add from './Dashboard/Add';
import Edit from './Dashboard/Edit';


const setSelectedEmployee = () => {};
const selectedEmployee = {id : 1, empName:'a', empMail :'a@b.com', department:'a', manager:'a' };
const token:string = "";
const setToken = () => {};
const logged: boolean = true;
const setLogged = ()=>{};


test('render signup page', ()=> {
    render(<Signup/>);
    const headerElement = screen.getByText(/Sign up/i);
    expect(headerElement).toBeInTheDocument();
    const formElement = screen.getByRole("textbox");
    expect(formElement).toBeInTheDocument();
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement.length).toBe(2);
});

test('render login page', ()=>{
    render(<Login token={token} setToken={setToken} setLogged = {setLogged}/>)
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
    const formElement = screen.getByRole('textbox');
    expect(formElement).toBeInTheDocument();
    const buttonElement = screen.getAllByRole("button")
    expect(buttonElement.length).toBe(2);                     //2 buttons on login page
    const linkElement = screen.getByRole("link")
    expect(linkElement).toBeInTheDocument();
})

test('render dashboard title', ()=>{
    render(<Title token={token} setToken = {setToken} logged = {logged} setLogged = {setLogged}/>)
    const headerElement = screen.getByRole('heading');
    const linkElement = screen.getAllByRole('link');
    const logoutElement = screen.getByText(/logout/i)
    expect(headerElement).toBeInTheDocument();
    expect(linkElement.length).toBe(1);
    expect(logoutElement).toBeInTheDocument();
})

test('render employee list',()=>{
    render(<List setSelectedEmployee={setSelectedEmployee} token={token} logged = {logged} />)
    const listElement = screen.getByRole('table');
    const SearchBox = screen.getByRole('textbox')
    expect(listElement).toBeInTheDocument();
    expect(SearchBox).toBeInTheDocument();
})

test('render Add employee form', ()=>{
    render(<Add token={token}/>);
    const headerElement = screen.getByRole('heading');
    const inputElements = screen.getAllByRole('textbox');
    const buttonElement = screen.getAllByRole('button');
    expect(headerElement).toBeInTheDocument();
    expect(inputElements.length).toBe(4);
    expect(buttonElement.length).toBe(2);
})

test('render Add employee form', ()=>{
    render(<Edit selectedEmployee = {selectedEmployee} token={token}/>);
    const headerElement = screen.getByRole('heading');
    const inputElements = screen.getAllByRole('textbox');
    const buttonElement = screen.getAllByRole('button');
    expect(headerElement).toBeInTheDocument();
    expect(inputElements.length).toBe(4);
    expect(buttonElement.length).toBe(2);
})