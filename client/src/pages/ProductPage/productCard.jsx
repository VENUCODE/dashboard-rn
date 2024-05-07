import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div class="col-lg-6 col-md-6 col-sm-12 mb-2 rounded-3">
      <div class="card rounded-1   bg-glass mx-1 ">
        <div class="row g-0">
          <div class=" card-left col-12 col-md-6 col-sm-12 ">
            <img
              src="https://wallpapercave.com/wp/wp6724318.jpg"
              class="img-fluid img-thumbnail"
              alt="..."
              style={{ maxHeight: "250px", width: "100%" }}
            />
          </div>

          <div class="col-12 col-md-6 col-sm-12  card-right right-0">
            <div class="card-body">
              <div class="card-titlebar d-flex justify-content-between">
                <h5 class="text-dark">
                  <i class="fa-brands fa-battle-net"></i>
                  <span class="ms-1 text-primary text-capitalize">
                    {data.productName}
                  </span>
                  <small class="ms-2 text-secondary text-lowercase">
                    ({data.categoryName})
                  </small>
                </h5>

                <div class="icon">
                  <div class="dropdown">
                    <i
                      class="fs-4 fa-solid fa-ellipsis-vertical text-primary"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                  </div>
                </div>
              </div>

              <div class="description">
                <p class="text-muted text-capitalize">
                  {data.productDescription}
                </p>
              </div>

              <div class="price">
                <p class="card-pric d-flex justify-content-between">
                  <small class="text-dark h5">
                    <span class="ms-1">
                      <i class="fa-sharp fa-solid fa-money-bill-wave"></i>
                      <span class="ms-1">Rs.{data.productPrice}</span>
                    </span>
                  </small>
                </p>
              </div>

              <hr />

              <div class="detail-box d-flex justify-content-between">
                <div class="text-secondary"></div>
                <div class="text-muted"></div>
                <div class="text-duration text-muted"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
