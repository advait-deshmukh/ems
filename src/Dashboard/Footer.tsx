import React from 'react';
import { Pagination } from 'semantic-ui-react';

const Footer = ({totalPages, activePage, setActivePage, setPageLength}) => {
    
    const onPageChange = (event, pageInfo) => {setActivePage(pageInfo.activePage);};

    return (
    <div className = "ui right aligned grid">
        <div className="ui row">
            <div className='ten wide column'></div>
            <div className="two wide column">
                <div>
                    <select onChange={(event) => setPageLength(event.target.value)}>
                        <option value="5" selected>Show : 5</option>
                        <option value="10">Show : 10</option>
                        <option value="20">Show : 20</option>
                    </select>
                </div>
            </div>
            <div className='four wide column'>
                <div >
                    <Pagination 
                        firstItem={null}
                        lastItem={null}
                        boundaryRange={0}
                        totalPages={totalPages}                   //will get from the api
                        activePage={activePage}
                        onPageChange={onPageChange}
                        pointing
                        secondary
                        ellipsisItem = {null}
                    />
                </div>
            </div>
        </div>
        
    </div>
    )
}
export default Footer;