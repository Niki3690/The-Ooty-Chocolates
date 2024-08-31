import React from 'react'
import "../Style/Search.css"

const Search = () => {
  return (
    <div>
      <h1 className='text-center mt-5 login'>Search</h1>
      <div className='main'>
        <div className='main1'></div>
      </div>
      <div className="container searches">
        <div className="row justify-content-center">
          <div className='col-lg-5 col-md-6 col-sm-12'>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Search Items" aria-describedby="button-addon2" />
              <button class="btn btn-outline-secondary btnn" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
