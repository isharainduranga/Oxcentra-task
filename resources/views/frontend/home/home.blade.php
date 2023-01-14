@extends('frontend.layouts.app')
@section('content')
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img src="{{asset('frontend/image/slider-a.jpg')}}" class="d-block w-100" alt="banner img">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="{{asset('frontend/image/slider-b.jpg')}}" class="d-block w-100" alt="banner img">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="{{asset('frontend/image/slider-c.jpg')}}" class="d-block w-100" alt="banner img">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-10 card-center">
            <div class="card banner-card">
            
                <div class="card-body p-body">
                  <h5 class="card-title card-topic-main">Lorem ipsum dolor sit amet</h5>
                  <p class="card-text mt-4 card-para-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        
    </div>
    <div class="row mt-5" id="news">
        <div class="col-md-9 col-sm-12">
            <h3 class="topic">Latest News</h3>
            <div class="card card-sm mb-3 mt-4" class="col-12">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="{{asset('frontend/image/news-a.jpg')}}" class="img-fluid rounded-start" alt="card img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                        <div class="card-space">
                            <h5 class="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                            <p class="card-text card-para mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            
                        </div>
                     
                    </div>
                  </div>
                </div>
            </div>
            <div class="card card-sm mb-3 mt-4" class="col-12">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="{{asset('frontend/image/news-b.jpg')}}" class="img-fluid rounded-start" alt="card img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                        <div class="card-space">
                            <h5 class="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                            <p class="card-text card-para mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            
                        </div>
                     
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-12 mb-5">
            <h3 class="topic">Recent News</h3>
            <div class="card col-12 mt-4">
                <img src="{{asset('frontend/image/news-a.jpg')}}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                  
                </div>
            </div>
            <div class="card col-12 mt-4">
                <img src="{{asset('frontend/image/news-b.jpg')}}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title card-topic">Lorem ipsum dolor sit amet</h5>
                  
                </div>
            </div>
        </div>
        
    </div>
</div>
@endsection