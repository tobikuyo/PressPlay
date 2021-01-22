import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../constants/url";
import { fetchCast } from "../redux/actions/castActions";

const Cast = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cast } = useSelector(state => state.castReducer);

    useEffect(() => {
        dispatch(fetchCast(id));
    }, [dispatch]);

    return (
        <div className="cast">
            {cast.map(actor => (
                <div className="cast__container">
                    <img
                        className="cast__img"
                        src={`${IMAGE_URL}${actor.profile_path}`}
                        alt={actor.name}
                    />
                    <p className="cast__name">{actor.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Cast;
