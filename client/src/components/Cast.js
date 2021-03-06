import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { POSTER_URL } from "../constants/url";
import { fetchCast } from "../redux/actions/castActions";

const Cast = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { cast } = useSelector(state => state.castReducer);

    useEffect(() => {
        dispatch(fetchCast(id));
    }, [dispatch, id]);

    return (
        <div className="cast">
            <div
                className={`cast__container ${
                    cast.length < 10 && "cast__container--center"
                }`}
            >
                {cast.map(actor => (
                    <div className="cast__info" key={actor.cast_id}>
                        <Avatar
                            src={`${POSTER_URL}${actor.profile_path}`}
                            alt={actor.name}
                        />
                        <p className="cast__name">{actor.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cast;
