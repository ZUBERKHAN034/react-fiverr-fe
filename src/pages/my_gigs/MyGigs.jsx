import "./MyGigs.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newRequest } from "../../utils/request";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import constants from "../../common/constants";
import { Loader } from "../../components/loader/Loader";
import utility from "../../utils/utility";

export const MyGigs = () => {
  const [prevErrorMessage, setPrevErrorMessage] = useState(null);

  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: myGigs,
  } = useQuery({
    queryKey: ["myGigs"],
    queryFn: async () => {
      const { data: response } = await newRequest.get("my-gigs");
      return response.data;
    },
  });

  useEffect(() => {
    if (error) {
      const newErrorMessage = error.response.data.error;
      if (newErrorMessage && newErrorMessage !== prevErrorMessage) {
        toast.error(newErrorMessage);
        setPrevErrorMessage(newErrorMessage);
      }
    }
  }, [error, prevErrorMessage]);

  const mutation = useMutation({
    mutationFn: async (id) => {
      await newRequest.post(`/gig/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDeleteGig = async (id) => {
    try {
      await mutation.mutateAsync(id);
      toast.success(constants.SUCCESS_MESSAGES.GIG_DELETE);
    } catch (error) {
      if (error.code === constants.RESP_ERR_CODES.ERR_NETWORK) {
        toast.error(constants.ERROR_MESSAGES.NOT_AUTHORIZED);
      } else {
        console.error(error);
        toast.error(error?.response?.data?.error || error.message);
      }
    }
  };

  return (
    <div className="my-gigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <hr />
        {isLoading ? (
          <div className="loading">
            <Loader />
            <h3>Loading...</h3>
          </div>
        ) : error ? (
          <h3 className="error">Something went wrong!</h3>
        ) : myGigs.length === 0 ? (
          <h3 className="empty">No Gigs Found!</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>COVER</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>SALES</th>
                <th>LAST DELIVERY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {myGigs.map((gig) => {
                return (
                  <tr key={gig._id}>
                    <td>
                      <Link className="link" to={`/gig/${gig._id}`}>
                        <img
                          className="gig-image"
                          src={gig.cover}
                          alt="gig-cover"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="link" to={`/gig/${gig._id}`}>
                        {gig?.title?.substring(0, 60)}...
                      </Link>
                    </td>
                    <td>₹ {gig.price}</td>
                      <td>{gig.sales}</td>
                    <td>
                      {gig.lastDelivery
                        ? utility.timeAgo(gig.lastDelivery)
                        : "No last delivery available!"}
                    </td>
                    <td>
                      <img
                        className="delete"
                        src={constants.ENUMS.ASSETS.ICONS.DELETE}
                        alt="delete"
                        onClick={() => handleDeleteGig(gig._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
