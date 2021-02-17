import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


const Album = () => {

    const [album, setAlbums] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:3001/albums`)
        .then((resp)=>resp.json())
        .then((data)=> {
            setAlbums(data)
        })
        console.log(data);
    },[]

    )
    return (
        <div>
            
        </div>
    )
}

export default Album
