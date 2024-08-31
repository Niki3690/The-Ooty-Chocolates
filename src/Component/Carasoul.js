import React from 'react'
import "../Style/Carasoul.css"

const Carasoul = () => {
    return (
        <div>
            <div>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active carasoull" aria-current="true" aria-label="Slide 1" style={{ height: 10, width: 10, borderRadius: "50%" }}></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ height: 10, width: 10, borderRadius: "50%" }}></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{ height: 10, width: 10, borderRadius: "50%" }}></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://theootychocolates.com/cdn/shop/files/banner-3_a752fee9-9ccc-4c12-9c11-86e6f5dfcb2d_1728x.jpg?v=1691066638" class="d-block w-100 imgg" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://theootychocolates.com/cdn/shop/files/banner-1_4e087ce7-63d9-432f-acdb-14d78d24082c_1728x.jpg?v=1691064801" class="d-block w-100 imgg" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://theootychocolates.com/cdn/shop/files/banner-2_1728x.jpg?v=1691064836" class="d-block w-100 imgg" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" >
                        <span class="carousel-control-prev-icon carasoul-color" aria-hidden="true" style={{ marginTop: 650 }}></span>
                        <span class="visually-hidden" >Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true" style={{ marginTop: 650 }}></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carasoul
