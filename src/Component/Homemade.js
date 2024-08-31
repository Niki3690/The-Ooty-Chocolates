import React from 'react'
import "../Style/Homemade.css"
import ChocolateDetails from "./ChocolateDetails"

const Homemade = () => {
    return (
        <div className='homemaid'>
            <div className="container">

                <div className="row p-0">


                    {ChocolateDetails.map((demo) => {
                        return (
                            <div className='col-lg-4 col-md-6 col-sm-12 g-3'>
                                <img src={demo.img} className='home-img container-fluid' />
                                <p className='text-center mt-3  map-color'> {demo.title}</p>
                                <p className='text-center prices p-0 m-0'> RS. {demo.price}</p>
                            </div>

                        )
                    })}

                </div>



            </div>
        </div>
    )
}

export default Homemade
