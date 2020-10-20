import React from 'react'

export default function IndexCarousel(){
    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  src="https://www.laopinion.com.co/sites/default/files/2017/07/21/imagen/ahorror.jpg" class="d-block w-100" alt="Ahorro Familiar"/>
          </div>
          <div class="carousel-item">
            <img src="https://www.billmo.com/wp-content/uploads/2018/06/shutterstock_609909389-1000x0-c-default.jpg" class="d-block w-100" alt="Gestiona tus ahorros"/>
          </div>
          <div class="carousel-item">
            <img src="https://previews.123rf.com/images/andreypopov/andreypopov1611/andreypopov161100250/66942957-ahorrar-dinero-la-econom%C3%ADa-familiar.jpg"
            class="d-block w-100 img-fluid" alt="Invierte tu dinero"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        )
}