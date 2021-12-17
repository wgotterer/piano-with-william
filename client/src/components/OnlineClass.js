import React, {useEffect, useState} from 'react'
import OnlineClassCard from './OnlineClassCard'
import Popup from './Popup'




function OnlineClass({user}) {

    const [allOnlineClasses, setAllOnlineClasses] = useState()
    const [showPopUp, setShowPopUp] = useState(false)
    const [search, setSearch] = useState();
    const [classToDisplay, setClassToDisplay] = useState([{}]);
    



    useEffect(() => {
        fetch("/online_classes")
       .then(resp => resp.json())
       .then(onlineClasses => {
           setAllOnlineClasses(onlineClasses)
           setClassToDisplay(onlineClasses)
        
       })
    }, [])

    console.log(allOnlineClasses)

    function handleShowPopUp(){
        setShowPopUp(!showPopUp)
    }

    function handleSearch(e){
        setSearch(e.target.value)
        handleFilterSearch(e.target.value)
    }

    function handleFilterSearch(value) {
        setClassToDisplay(allOnlineClasses.filter(filterclass => {
            return filterclass.name.toLowerCase().includes(value.toLowerCase());
        }));
        
    }

   




    return allOnlineClasses ? (
        <div>
            <h3>Purchase premium follow along classes below</h3>
            <h3>Or</h3>
            <h3>Sign up for a private class here</h3>
            <button onClick={handleShowPopUp}>Sign Up</button>
            <Popup trigger={showPopUp} setShowPopUp={setShowPopUp}/>
            
            <form>
                    <label>Search: 
                    <input
                        type='text'
                        name='search'
                        id="search"
                        placeholder="Type a class name to search..."
                        value={search}
                        onChange={handleSearch}
                    />
                    </label>
            </ form>
        <div className="online_grid_container">

           {classToDisplay ? classToDisplay.map((oneOnlineClass)  => <OnlineClassCard oneOnlineClass={oneOnlineClass} user={user}/>) : "Loading"} 
        </div>
        </div>
       
    ) : "loading"


}

export default OnlineClass