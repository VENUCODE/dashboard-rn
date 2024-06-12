import React from "react";
// import samplecsv from "./sampleProduct.csv";
const Instructions = () => {
  return (
    <div className="container-fluid mt-5 p-0">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card m-0 ">
            <div className="card-body">
              <h2 className="card-title text-center mb-4 poppins-medium">
                Bulk Upload Instructions for Products
              </h2>
              <p className="card-text">
                To successfully upload product data in bulk, please follow these
                comprehensive instructions. Ensure that your CSV file adheres to
                the specified format for seamless data import into the system.
              </p>
              <h4 className="mb-3">Required CSV Format</h4>
              <p className="card-text">
                Your CSV file must include the following columns with the exact
                column names:
              </p>
              <ol className="card-text">
                <li>
                  <strong>productName:</strong> The name of the product.
                </li>
                <li>
                  <strong>productPrice:</strong> The price of the product
                  (numerical value).
                </li>
                <li>
                  <strong>productDescription:</strong> A brief description of
                  the product.
                </li>
                <li>
                  <strong>images:</strong> Up to 5 images for the product.
                  Images can be specified as online URLs or as absolute paths
                  from your computer. Separate multiple image paths with commas
                  (,).
                </li>
                <li>
                  <strong>categoryName:</strong> The category to which the
                  product belongs.
                </li>
              </ol>

              <h4 className="mt-4 mb-3">Steps to Upload the CSV File</h4>
              <ol className="card-text">
                <li>
                  <strong>Prepare Your CSV File:</strong> Create a CSV file
                  using a spreadsheet application or a text editor.
                </li>
                <li>
                  <strong>Validate Your Data:</strong> Check that all required
                  columns are present and the data is correctly formatted.
                </li>
                <li>
                  <strong>Upload the CSV File:</strong> Access the bulk upload
                  functionality in your application and select the prepared CSV
                  file.
                </li>
                <li>
                  <strong>Review Upload Results:</strong> After the upload is
                  complete, review the results to ensure all products have been
                  successfully imported.
                </li>
              </ol>
              <p className="card-text">
                By following these instructions, you can efficiently upload your
                product data in bulk, ensuring that all necessary information is
                correctly formatted and imported into the system.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card m-0">
            <div className="card-body">
              <h2 className="card-title text-center mb-4 poppins-medium">
                Bulk Upload Instructions for Services
              </h2>
              <p className="card-text">
                To successfully upload service data in bulk, please follow these
                comprehensive instructions. Ensure that your CSV file adheres to
                the specified format for seamless data import into the system.
              </p>
              <h4 className="mb-3">Required CSV Format</h4>
              <p className="card-text">
                Your CSV file must include the following columns with the exact
                column names:
              </p>
              <ol className="card-text">
                <li>
                  <strong>serviceName:</strong> The name of the service.
                </li>
                <li>
                  <strong>servicePrice:</strong> The price of the service
                  (numerical value).
                </li>
                <li>
                  <strong>serviceDescription:</strong> A brief description of
                  the service.
                </li>
                <li>
                  <strong>city:</strong> The city where the service is
                  available.
                </li>
                <li>
                  <strong>Location:</strong>The complete location of the service
                </li>
                <li>
                  <strong>latitude:</strong> The latitude coordinate of the
                  service location.
                </li>
                <li>
                  <strong>longitude:</strong> The longitude coordinate of the
                  service location.
                </li>
                <li>
                  <strong>images:</strong> Up to 5 images for the service.
                  Images can be specified as online URLs or as absolute paths
                  from your computer. Separate multiple image paths with commas
                  (,).
                </li>
                <li>
                  <strong>categoryName:</strong> The category to which the
                  service belongs.
                </li>
              </ol>

              <h4 className="mt-4 mb-3">Steps to Upload the CSV File</h4>
              <ol className="card-text">
                <li>
                  <strong>Prepare Your CSV File:</strong> Create a CSV file
                  using a spreadsheet application or a text editor.
                </li>
                <li>
                  <strong>Validate Your Data:</strong> Check that all required
                  columns are present and the data is correctly formatted.
                </li>
                <li>
                  <strong>Upload the CSV File:</strong> Access the bulk upload
                  functionality in your application and select the prepared CSV
                  file.
                </li>
                <li>
                  <strong>Review Upload Results:</strong> After the upload is
                  complete, review the results to ensure all services have been
                  successfully imported.
                </li>
              </ol>
              <p className="card-text">
                By following these instructions, you can efficiently upload your
                service data in bulk, ensuring that all necessary information is
                correctly formatted and imported into the system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
