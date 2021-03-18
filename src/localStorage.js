export const loadState = () => {
    try {
        const serilizedState = localStorage.getItem('state');
        if(serilizedState === null)
        {
            return undefined
        }
        else{
            // localStorage.removeItem("state")
            return JSON.parse(serilizedState);
        }
    }
    catch(err)
    {
        console.log(err)
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serilizedState = JSON.stringify(state);
        localStorage.setItem('state', serilizedState);
    }
    catch(err){
        console.log(err);
    }
}