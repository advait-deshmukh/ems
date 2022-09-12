import React,{useEffect, useState} from 'react';
import Search from './Search';
import Link from '../Routing/Link';
import backend from '../api/backend';
import { Table } from 'semantic-ui-react';
import Footer from './Footer';
import {AuthHeader, setSelectedId} from '../Services/LocalStorage'


type employeeType = {
    id : number,
    empName : string,
    empMail: string,
    department: string,
    manager: string
}
type searchType = {
    id : string,
    empName : string,
    empMail: string,
    department: string,
}


function List(){

    const [searchTerm, setSearchTerm] = useState<searchType>({id:"", empName:"", empMail:"", department:""});
    const [employeesData, setEmployeesData] = useState <employeeType[]> ([]);
    const [deleteCount, setDeleteCount] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const [pageLength, setPageLength] = useState<string>("5");
    const [totalPages, setTotalPages] = useState<number>(10);
    const [column, setColumn] = useState<string>("id");
    const [direction, setDirection] = useState<"ascending"|"descending">("ascending");



    //fetching the list of employees
    useEffect(()=>{
        let identity:number = searchTerm.id === "" ? 0 : Number(searchTerm.id); 
        backend.get(`/employees?sortBy=${column}&sortDirection=${direction}&pageSize=${pageLength}&pageNo=${activePage}&id=${identity}&department=${searchTerm.department}&empName=${searchTerm.empName}&empMail=${searchTerm.empMail}`,
        {
            headers: {"Authorization" : `${AuthHeader()}`}
        }).then(
            (response)=>{
                setEmployeesData(response.data.results.content);
                setTotalPages(response.data.results.totalPages)
            }
        ).catch(
            (error)=>{
                if(AuthHeader()) alert("Data fetching failed. Login again.");
            } 
        );

    }, [deleteCount, activePage, pageLength, column, direction, searchTerm])



    //sending api request to delete the employee from the database
    const handleDelete = (employee:employeeType) => {
        backend.delete(`/employee/${employee.id}`,{headers:{"Authorization" : `${AuthHeader()}`}}).then(
            (response)=>{
                alert("Deleted employee successfully");
                setDeleteCount(deleteCount+1);
            }
        ).catch(
            ()=>{
                alert("Error while deleting the employee");
            }
        )
        
    }
    
    //for deciding sorting column
    const onHeaderClick = (selectedColumn)=> {
        if(column === selectedColumn){
            setDirection(direction === 'ascending' ? 'descending' : 'ascending');
        }
        else{
            //this will be ascending sort
            setColumn(selectedColumn);
            setDirection('ascending');
        }
    }


    let renderList = employeesData.map((employee, i)=>
        <Table.Row  key = {employee.id}>
            <Table.Cell>{i+1}</Table.Cell>
            <Table.Cell>{employee.id}</Table.Cell>
            <Table.Cell>{employee.empName}</Table.Cell>
            <Table.Cell>{employee.empMail}</Table.Cell>
            <Table.Cell>{employee.department}</Table.Cell>
            <Table.Cell>{employee.manager}</Table.Cell>
            <Table.Cell className='text-right'>
                <Link href = "/edit">
                    <button className='muted-button' onClick ={()=>setSelectedId(employee.id)}> Edit </button>       
                </Link>
            </Table.Cell>
            <Table.Cell className='text-left'>
                <button 
                    className='muted-button' 
                    onClick ={()=> handleDelete(employee)}
                >
                    Delete
                </button>
            </Table.Cell>
        </Table.Row>
    );
        


    if(AuthHeader())
        return (
            <div>
                <Search  setSearchTerm = {setSearchTerm} /> 
                <br/>
                
                <Table sortable celled  structured size={'large'} striped textAlign={'center'} className="ui striped-table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell
                                sorted = {column === 'id' ? direction : undefined}
                                onClick = {()=> onHeaderClick('id')}
                            >
                                Id        
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted = {column === 'empName' ? direction : undefined}
                                onClick = {()=> onHeaderClick('empName')}
                            >
                                Name
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted = {column === 'empMail' ? direction : undefined}
                                onClick = {()=> onHeaderClick('empMail')}
                            >
                                Email
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                sorted = {column === 'department' ? direction : undefined}
                                onClick = {()=> onHeaderClick('department')}
                            >
                                Department</Table.HeaderCell>
                            <Table.HeaderCell>Manager</Table.HeaderCell>
                            <Table.HeaderCell colSpan={2} className='text-center'>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {employeesData.length>0 ?
                        (
                            renderList
                        ):(
                            <Table.Header><Table.HeaderCell colSpan={8} className='text-center'> No Employees</Table.HeaderCell></Table.Header>
                        )
                        }
                    </Table.Body>
                </Table>

                <Footer 
                    totalPages = {totalPages} 
                    activePage = {activePage} 
                    setActivePage= {setActivePage}
                    setPageLength = {setPageLength}
                />

            </div>
        );
    else    
        return(
            <div className="ui middle aligned center aligned grid" style = {{margin : "150px"}}>
                <div className="ui raised card">
                    <div className="content">
                        <div className="header" style={{textAlign : 'center'}}> 
                            <p >Log in</p>
                            <p>to see the Dashboard</p> 
                        </div>
                        <br/>
                    </div>
                    <Link href = '/'>
                        <div className="ui bottom attached secondary button">
                            Log in
                        </div>
                    </Link>
                </div>
            </div>
        );
}

export default List;
