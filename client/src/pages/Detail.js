import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../redux/actions/detailActions";
import DetailHeader from "../components/DetailHeader";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchDetails(id));
    }, [dispatch, id]);

    return (
        <div className="detail">
            <DetailHeader />
        </div>
    );
};

export default Detail;