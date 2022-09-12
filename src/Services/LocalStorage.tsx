
export function AuthHeader(){
    const token:string = localStorage.getItem('token')!;
    if(token)
        return `Basic ${token}`;
    else
        return null;
}

export function setSelectedId(id){
    localStorage.setItem("selectedId", id);
}

export function getSelectedId(){
    const id = localStorage.getItem("selectedId");
    if(id)
        return id;
    else
        return null;
}

export function removeSelectedId(){
    localStorage.removeItem('selectedId');
}