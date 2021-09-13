import React from "react";
import { Link } from "react-router-dom";
import "./asset.scss";

const Assets = ({ assetData }) => {
  return (
    <div className="asset">
      <Link
        to={`/detail/${assetData.asset_contract.address}/${assetData.token_id}`}
        className="asset_image"
        style={{
          backgroundImage: `url(${
            assetData?.image_url || assetData?.collection?.banner_image_url
          })`,
        }}
      >
        <div className="asset_overlay">
          <p>Click Here to visit</p>
        </div>
      </Link>

      <h1>{assetData?.creator?.user?.username || "Unknown"}</h1>
      <span>{assetData?.description || "No description"}</span>
    </div>
  );
};

export default Assets;
