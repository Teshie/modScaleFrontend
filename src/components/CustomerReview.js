import React, { useEffect, useRef, useState } from "react";
import worldMap from "./../assets/worldMap.png";
import comment from "./../assets/comment.svg";
import arrowLeft from "./../assets/arrow-left.svg";
import map from "./../assets/map.svg";
import arrowRight from "./../assets/arrow-right.svg";
import RevenueManagement from "./RevenueManagement";
import CustomerComment from "./CustomerComment";
import { customerReview } from "../data/data";
import { revenueManagement } from "../data/data";
import ReactPaginate from "react-paginate";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CustomerReview = () => {
  const reviewsGridRef = useRef(null);

  useEffect(() => {
    if (reviewsGridRef.current) {
      const reviewsGridHeight = reviewsGridRef.current.offsetHeight;
      const parentContainer = reviewsGridRef.current.parentNode;
      parentContainer.style.height = `${reviewsGridHeight}px`;
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(customerReview.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentReviews = customerReview.slice(offset, offset + itemsPerPage);
  const fadeTransitionDuration = 300;

  return (
    <div className="width mx-auto mt-10">
      <p className="pb-3 mb-10 justify-center items-center xs:text-xs sm:text-sm md:text-md lg:text-4xl xl:text-4xl  font-bold flex">
        <p>Why customers love us?</p>
      </p>
      <div
        style={{
          backgroundImage: `url(${map})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center h-full overflow-hidden mx-auto">
          <div ref={reviewsGridRef} className="flex flex-col space-y-6">
            <TransitionGroup>
              <CSSTransition
                key={currentPage}
                timeout={fadeTransitionDuration}
                classNames="fade"
              >
                <div className="grid  place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 ">
                  {currentReviews.map((items) => (
                    <CSSTransition
                      key={items.id}
                      timeout={fadeTransitionDuration}
                      classNames="fade-review"
                    >
                      <div className="h-76 cursor-pointer hover:shadow-lg bg-white rounded-lg  w-56   flex flex-col justify-start p-3.5">
                        <div className="flex justify-start items-start ">
                          <img
                            className="h-8 w-8"
                            src={comment}
                            alt="commentIcon"
                          />
                        </div>
                        <div className="mt-4 text-gray-800 ">
                          <p className="text-base text-left">{items.comment}</p>
                        </div>

                        <div className="flex items-center mt-2">
                          <img
                            className="h-8 w-8 rounded-full mr-2"
                            src="https://i.pravatar.cc/50"
                            alt="User Avatar"
                          />
                          <div>
                            <p className=" ">{items.username}</p>
                            <p className="text-gray-500 text-sm">
                              {items.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CSSTransition>
                  ))}
                </div>
              </CSSTransition>
            </TransitionGroup>

            <div className="flex justify-between items-center mt-6  ">
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
            {/* <img src={map} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
