import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchDetails } from "../redux/actions/detailActions";
import DetailHeader from "../components/DetailHeader";
import DetailContent from "../components/DetailContent";
import Cast from "../components/Cast";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchDetails(id));
    }, [dispatch, id]);

    return (
        <div className="detail">
            <DetailHeader />
            <DetailContent />
            <Cast />
        </div>
    );
};

export default Detail;
