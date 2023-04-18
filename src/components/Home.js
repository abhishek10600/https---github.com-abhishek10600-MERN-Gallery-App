import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PictureGrid from './PictureGrid'
import Button from './Button'

const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [updateUI, setUpdateUI] = useState("");
    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch("http://localhost:4000/api/Pictures/Home", {
                method: "GET"
            })
            const responseData = await response.json();
            if (response.status === 200) {
                setPhotos(responseData.data);
            }
        }
        getPosts();
    }, [updateUI ])
    return (
        <div>
            <Navbar />
            <Button setUpdateUI={setUpdateUI} />
            <PictureGrid photos={photos} />
        </div>
    )
}

export default Home