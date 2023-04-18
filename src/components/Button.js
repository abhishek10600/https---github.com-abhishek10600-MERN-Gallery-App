import React from 'react'

const Button = ({ setUpdateUI }) => {
    const uploadPost = async (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        formData.append("myImage", ev.target.files[0]);
        const response = await fetch("http://localhost:4000/api/Pictures/Home", {
            method: "POST",
            body: formData,
        })
        const responseData = await response.json();
        if (response.status === 200) {
            console.log(`${responseData.message}`);
            console.log(responseData.data._id);
            setUpdateUI(responseData.data._id);
        } else {
            console.log("Some error");
        }
    }
    return (
        <label htmlFor="myImage" className="flex justify-end py-10">
            <input type="file" name="myImage" id="myImage" onChange={(ev) => uploadPost(ev)} className=" file:border-2 file:border-purple-900 file:bg-white file:px-4 file:py-2 file:hover:bg-purple-900 file:hover:text-white file:ease-in file:duration-100 file:cursor-pointer text-white" />
        </label>
    )
}

export default Button