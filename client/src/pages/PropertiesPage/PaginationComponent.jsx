import { Grid } from "@mui/material";
import { FloatButton } from "antd";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function PaginationComponent({ items, itemsPerPage, children }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Grid container>{children(currentItems)}</Grid>
      <div className="fixed-bottom  d-flex justify-content-end pe-3 ">
        <ReactPaginate
          className="pagination card d-inline-flex flex-row border border-1 border-primary"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination "
          pageClassName="page-item"
          pageLinkClassName="page-link"
          activeClassName="bg-primary-subtle "
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
        />
      </div>
    </>
  );
}

export default PaginationComponent;
