import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import "./eulerview.scss";
import { retrievingAssets } from "../api";
import Assets from "../components/Assets";
import CircularProgress from "@material-ui/core/CircularProgress";

const EulerViews = (props) => {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await retrievingAssets();
    setAssets(response.data.assets);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [props.history.location.pathname]);

  return (
    <div className="eulerView">
      <Container>
        {loading ? (
          <div className="loading">
            <CircularProgress size={150} color="white" />
          </div>
        ) : (
          <>
            <h1 className="title">
              Welcome To Euler. Click on Image to discover an art
            </h1>
            <Grid
              container
              spacing={10}
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              {assets.map((asset, index) => (
                <Grid key={asset?.id} item lg={4} md={6} sm={12} xs={12}>
                  <Assets assetData={asset} />
                </Grid>
              ))}
            </Grid>
          </>
        )}{" "}
      </Container>
    </div>
  );
};

export default EulerViews;
