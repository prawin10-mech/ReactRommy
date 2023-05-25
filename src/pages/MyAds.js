import {
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import Cookies from "js-cookie";
import axios from "axios";
import DummyImage from "../assets/demo.jpg";
import { useNavigate } from "react-router-dom";

const MyAds = () => {
  const type = JSON.parse(Cookies.get("user")).type;
  const token = localStorage.getItem("token");
  const [myAds, setMyAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchMyAds = async () => {
    setIsLoading(true);
    const searchType = type === "landlord" ? "property" : "roommate";
    try {
      const { data } = await axios.get(
        `https://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/${searchType}-ad/my-ads`,
        { headers: { Authorization: token } }
      );
      setMyAds(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(myAds);

  const myAdsData =
    type === "landlord"
      ? myAds
          ?.slice()
          .reverse()
          .map((myAd) => (
            <Grid
              key={myAd._id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ cursor: "pointer", p: 2 }}
            >
              <Grid
                sx={{
                  width: "300px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "200px",
                    padding: "10px",
                    overflow: "hidden",
                    borderRadius: "20px ",
                    objectFit: "cover",
                  }}
                  image={myAd.images.length > 0 ? myAd.images[0] : [DummyImage]}
                  alt={myAd?.id}
                />
                <Grid
                  container
                  justifyContent={"space-between"}
                  sx={{ padding: "10px" }}
                >
                  <Grid>
                    <Typography variant="subtitle1">
                      <Typography component="span">{myAd.type}</Typography>
                    </Typography>
                    <Typography variant="subtitle1">
                      <Typography component="span">
                        {myAd.address.location}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid sx={{ fontWeight: "900" }}>
                    AED {myAd.monthlyPrice + 0.1 * myAd.monthlyPrice}
                  </Grid>
                  <hr style={{ borderTop: "1px solid #000", width: "100%" }} />
                </Grid>

                <Grid container gap={2}>
                  <Grid sx={{ color: "purple" }}>
                    Available {myAd.quantity}
                  </Grid>
                  <Grid sx={{ color: "orange" }}>
                    {" "}
                    Taken {myAd.quantityTaken}
                  </Grid>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "15px" }}
                    onClick={() => navigate(`/rooms/view-room/${myAd.id}`)}
                  >
                    All Details
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))
      : myAds
          ?.slice()
          .reverse()
          .map((myAd) => (
            <Grid
              key={myAd._id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ cursor: "pointer", p: 2 }}
            >
              <Grid
                sx={{
                  width: "300px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "200px",
                    padding: "10px",
                    overflow: "hidden",
                    borderRadius: "20px ",
                    objectFit: "cover",
                  }}
                  image={myAd.images.length > 0 ? myAd.images[0] : [DummyImage]}
                  alt={myAd?.id}
                />
                <Grid
                  container
                  justifyContent={"space-between"}
                  sx={{ padding: "10px" }}
                >
                  <Grid>
                    <Typography variant="subtitle1">
                      <Typography component="span" sx={{ fontWeight: 700 }}>
                        {myAd?.action}
                      </Typography>
                    </Typography>
                    <Typography variant="subtitle1">
                      <Typography component="span">
                        Age({myAd?.aboutYou?.age})
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid>
                    <Button
                      variant={"contained"}
                      onClick={() =>
                        navigate(`/roommate/view-roommate/${myAd.id}`)
                      }
                    >
                      View Ad
                    </Button>
                  </Grid>
                  <hr style={{ borderTop: "1px solid #000", width: "100%" }} />
                </Grid>

                <Grid container justifyContent={"space-between"}>
                  <Grid item>
                    <Typography>Budget </Typography>
                    <Typography sx={{ fontWeight: 700 }}>
                      AED {myAd?.budget}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Moving date </Typography>
                    <Typography sx={{ fontWeight: 700 }}>
                      {new Date(myAd?.movingDate).toLocaleDateString(
                        undefined,
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ));

  useEffect(() => {
    fetchMyAds();
  }, []);

  return (
    <Grid>
      <TopBackground />
      <Typography variant="h5" align="center" fontWeight={900}>
        My Ads
      </Typography>
      <Typography variant="subtitle1" align="center">
        {myAds.length} results
      </Typography>
      {isLoading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: 400 }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          gap={4}
          sx={{ margin: "auto", maxWidth: 1200, mb: 5 }}
        >
          {myAdsData}
        </Grid>
      )}
      <BottomBackground />
    </Grid>
  );
};

export default MyAds;
