import React from 'react'
import './loadingSkeleton.css'

function LoadingSkeleton() {
    return (
        <div className="loading-items">

            <div className="container">

                {/* Images */}
                <div className="imgs-item sk">
                </div>


                {/* Product Details */}
                <div className="details-item ">
                    <h5 className='details-item-text-sk sk'></h5>
                    <h5 className='details-item-text-sk sk'></h5>
                    <h5 className='details-item-text-sk sk'></h5>
                    <h5 className='details-item-text-sk sk'></h5>
                    <h5 className='details-item-text-sk sk'></h5>
                </div>

            </div>

        </div>
    )
}

export default LoadingSkeleton