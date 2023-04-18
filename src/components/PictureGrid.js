import React from 'react'

const PictureGrid = ({ photos }) => {
    console.log(photos);
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mx-4">
                {
                    photos.map(({ photo, _id }) => (
                        <div key={_id} className="">
                            <img className="h-[400px] w-[800px]" src={`http://localhost:4000/uploads/${photo}`} alt="gridimages" />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default PictureGrid