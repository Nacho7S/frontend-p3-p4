'use client'
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./pagination.css";
import ReactPaginate from "react-paginate";


export const Paginations = ({ totalPages, handlePageChange, pageQuery }) => {
  return (
    <div className="div-pagination">
      <ReactPaginate
        forcePage={+pageQuery - 1}
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        currentPage={pageQuery}
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        nextClassName={"item next "}
        nextLabel={
          <ArrowForwardIosIcon
            style={{ fontSize: 18, width: 150, color: "red" }}
          />
        }
        previousClassName={"item previous"}
        previousLabel={
          <ArrowBackIosIcon
            style={{ fontSize: 18, width: 150, color: "red" }}
          />
        }
        pageClassName={"item pagination-page "}
      />
    </div>
  );
};
