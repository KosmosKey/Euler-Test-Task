import { CircularProgress, Container } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { retrievingSingleAsset } from "../api";
import "./eulerviewdetail.scss";

const EulerViewsDetails = () => {
  const params = useParams();
  const { address, token } = params;
  const [assetDetail, setAssetDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await retrievingSingleAsset({
        address,
        token_id: token,
      });
      setAssetDetail(response.data);
      setLoading(false);
    };

    fetchData();
  }, [address, token]);

  return (
    <div className="assetDetail">
      <Container style={{ display: "flex", flex: "1" }}>
        {loading ? (
          <div className="loading">
            <CircularProgress size={150} color="white" />
          </div>
        ) : (
          <div className="assetDetailOverview">
            <div className="assetDetailProfile">
              {assetDetail && assetDetail.creator.profile_img_url && (
                <div
                  className="assetDetailProfilePicture"
                  style={{
                    backgroundImage: `url(${
                      assetDetail && assetDetail.creator.profile_img_url
                    })`,
                  }}
                />
              )}

              <h1>
                Created By{" "}
                {(assetDetail && assetDetail.creator.user.username) || "Unkown"}
              </h1>
            </div>

            <div className="assetDetailProduct">
              <h1>Payment Tokens</h1>

              <div className="assetDetailProductContainer">
                {assetDetail &&
                !assetDetail.collection.payment_tokens.length ? (
                  <h3>No Payment Tokens</h3>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <td>Asset</td>
                        <td>Name/Price</td>
                        <td>USD Price</td>
                      </tr>
                    </thead>
                    <tbody>
                      {assetDetail.collection.payment_tokens.map(
                        (token, index) => (
                          <tr key={index} className="assetDetailPayment">
                            <td>
                              <img src={token.image_url} alt="ethereum" />
                            </td>
                            <td>
                              {parseInt(token.eth_price).toFixed(2)}{" "}
                              {token.symbol}
                            </td>
                            <td>${token.usd_price}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                )}
              </div>

              <h1>Asset Contract</h1>

              <div className="assetContract">
                <p>
                  <span>Address:</span>
                  {assetDetail && assetDetail.asset_contract.address}{" "}
                </p>
                <p>
                  <span>Name:</span>
                  {assetDetail && assetDetail.asset_contract.name}{" "}
                </p>
                <p>
                  <span>Open Sea Version:</span>
                  {assetDetail &&
                    assetDetail.asset_contract.opensea_version}{" "}
                </p>

                <p>
                  <span>Asset Contract Type:</span>
                  {assetDetail &&
                    assetDetail.asset_contract.asset_contract_type}{" "}
                </p>
                <p>
                  <span>Seller Fee Basis Points:</span>
                  {assetDetail &&
                    assetDetail.asset_contract
                      .opensea_seller_fee_basis_points}{" "}
                </p>
                <p>
                  <span>Created:</span>
                  {assetDetail &&
                    moment(
                      assetDetail.asset_contract.created_date
                    ).fromNow()}{" "}
                </p>
                <p>
                  <span>Owner:</span>
                  {assetDetail && assetDetail.asset_contract.owner}
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default EulerViewsDetails;
