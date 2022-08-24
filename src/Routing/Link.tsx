import React,{useState} from 'react'

type Props = {
    href : string,
    children : JSX.Element
};

const Link = ({href, children} : Props) => {

    const [url, setUrl] = useState(window.location.pathname)

    const onButtonClick = (event) => {
        event.preventDefault();
        //pushState just changes the URL without refreshing the page
        window.history.pushState({}, "",href)
        
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a href = {href} onClick = {(event)=> onButtonClick(event)}>
            {children}
        </a>
    )
}

export default Link;