import React, { useState } from "react";
import worldMap from "./../assets/worldMap.png";
import comment from "./../assets/comment.svg";
import arrowLeft from "./../assets/arrow-left.svg";
import arrowRight from "./../assets/arrow-right.svg";
import RevenueManagement from "./RevenueManagement";
import CustomerComment from "./CustomerComment";
import { customerReview } from "../data/data";
import ReactPaginate from "react-paginate";

const CustomerReview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(customerReview.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentReviews = customerReview.slice(offset, offset + itemsPerPage);

  return (
    <div className="px-20  relative">
      <div className=" grid place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
        {currentReviews.map((items) => {
          return (
            <div className="flex justify-center items-center" key={items.id}>
              <div className="bg-white  rounded-lg shadow-lg p-6">
                <div className="flex justify-start">
                  <img className="h-8 w-8" src={comment} alt="commentIcon" />
                </div>
                <div className="mt-4 text-gray-800">
                  <p className="text-base text-left">{items.comment}</p>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src="https://i.pravatar.cc/50"
                    alt="User Avatar"
                  />
                  <div>
                    <p className=" ">{items.username}</p>
                    <p className="text-gray-500 text-sm">{items.company}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-6  px-14">
        <ReactPaginate
          previousLabel={<img src={arrowLeft} />}
          nextLabel={<img src={arrowRight} />}
          pageCount={pageCount}
          pageLinkClassName="hidden"
          onPageChange={handlePageClick}
          containerClassName="flex flex-wrap justify-between items-center w-full"
          pageClassName="text-purple-700 hover:text-purple-900 cursor-pointer mx-2"
          activeLinkClassName="text-white bg-purple-700 px-2 py-1 rounded-md mx-2"
          previousClassName="text-black bg-white shadow-lg px-2 py-1 rounded-md cursor-pointer"
          nextClassName="text-white bg-purple-700 px-2 py-1 rounded-md cursor-pointer"
          disabledClassName="opacity-50 cursor-not-allowed mx-2"
          breakClassName="mx-2"
          style={{ "--pagination-page-display": "none" }}
        />
      </div>
    </div>
  );
};

export default CustomerReview;
