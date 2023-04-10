import "./MyFavorites.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newRequest } from "../../utils/request";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader } from "../../components/loader/Loader";
import utility from "../../utils/utility";
import constants from "../../common/constants";

export const MyFavorites = () => {
  const [prevErrorMessage, setPrevErrorMessage] = useState(null);

  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: favorites,
  } = useQuery({
    queryKey: ["myFavorites"],
    queryFn: async () => {
      const { data: response } = await newRequest.get("favorites");
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
      await newRequest.post(`/favorite/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myFavorites"]);
    },
  });

  const handleRemoveFavorite = async (id) => {
    try {
      await mutation.mutateAsync(id);
      toast.success(constants.SUCCESS_MESSAGES.FAV_REMOVE);
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
    <div className="my-favorites">
      <div className="container">
        <div className="title">
          <h1>My Favorites</h1>
          <Link to="/gigs">
            <button>Explore More Gigs</button>
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
        ) : favorites.length === 0 ? (
          <h3 className="empty">No Items Added!</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>COVER</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>ADDED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((favorite) => {
                return (
                  <tr key={favorite._id}>
                    <td>
                      <Link className="link" to={`/gig/${favorite.gigId}`}>
                        <img
                          className="gig-image"
                          src={favorite.img}
                          alt="gig-cover"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link className="link" to={`/gig/${favorite.gigId}`}>
                        {favorite?.title?.substring(0, 60)}...
                      </Link>
                    </td>
                    <td>₹ {favorite.price}</td>
                    <td>{utility.timeAgo(favorite.createdAt)}</td>
                    <td>
                      <img
                        className="delete"
                        src={constants.ENUMS.ASSETS.ICONS.DELETE}
                        alt="delete"
                        onClick={() => handleRemoveFavorite(favorite.gigId)}
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