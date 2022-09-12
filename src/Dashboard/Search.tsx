import React from 'react';
import {Formik, Form, Field} from 'formik'



const Search = ({setSearchTerm}) => {

    const reset = () =>{
        setSearchTerm({id:"", empName:"", empMail:"", department:""});
    }

    return(
        <div className = "ui container">
            <Formik
                initialValues={{id:"", empName:"", empMail:"", department:""}}
                onSubmit={(values)=> setSearchTerm(values)}
            >        
                <Form>          
                <div className='ui grid'> 
                    <div className='ui row'>     
                        <div className='two wide column'>
                            <label>Employee Id</label>
                            <Field
                                id="id"
                                name="id"
                                type="number"
                            />
                        </div>
                        <div className='five wide column'>
                            <label>Employee name</label>
                            <Field
                                id="empName"
                                name="empName"
                                type="text"
                            />
                        </div>
                        <div className='five wide column'>
                            <label>Employee Email</label>
                            <Field
                                id="empMail"
                                name="empMail"
                                type="text"
                            />
                        </div>
                        <div className='four wide column'>
                            <label>Department</label> 
                            <Field as="select" name="department">
                                <option value=""  selected > </option>
                                <option value="Features">Features</option>
                                <option value="Integration">Integration</option>
                                <option value="DevRelations">DevRelations</option>
                            </Field>
                        </div>
                    </div>
                    </div>

                    <div className = "text-center">
                        <button className="ui secondary button" type='submit'> Search </button>
                        <button className="ui muted button" type='reset' onClick={()=>reset()}> Clear </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Search;