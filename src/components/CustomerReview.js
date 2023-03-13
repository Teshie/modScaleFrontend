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
import { motion, AnimatePresence } from "framer-motion";
const CustomerReview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(customerReview.length / itemsPerPage);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const currentReviews = customerReview.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const duration = 0.4;

  const defaultStyle = {
    transition: `opacity ${duration}s ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  };

  const paginateVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="width mx-auto mt-10 flex justify-center flex-col items-center">
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
        <div className="flex justify-center items-center mx-auto">
          <div className="flex flex-col space-y-6">
            <motion.div
              className="grid place-items-center xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-20"
              style={{ height: "auto", overflow: "hidden" }}
              variants={paginateVariants}
              initial="hidden"
              animate="visible"
            >
              {currentReviews.map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  transition={{ duration }}
                  className="h-76 cursor-pointer hover:shadow-lg bg-white rounded-lg w-64 flex flex-col justify-start p-4"
                >
                  <div className="flex justify-start items-start">
                    <img className="h-8 w-8" src={comment} alt="commentIcon" />
                  </div>
                  <div className="mt-4 text-gray-800 ">
                    <p className="text-base text-left">{item.comment}</p>
                  </div>

                  <div className="flex items-center mt-2">
                    <img
                      className="h-8 w-8 rounded-full mr-2"
                      src="https://i.pravatar.cc/50"
                      alt="User Avatar"
                    />
                    <div>
                      <p className=" ">{item.username}</p>
                      <p className="text-gray-500 text-sm">{item.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
