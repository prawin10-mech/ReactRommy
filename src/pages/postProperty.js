import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import InputDropDown from "../components/postPropertyComponents/InputDropDown";
import TextInput from "../components/postPropertyComponents/TextInput";
import VideoInput from "../components/postPropertyComponents/VideoInput";

const PostProperty = () => {
  const toastOptions = {
    autoClose: 3000,
    closeButton: true,
    position: "bottom-right",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const {
    type,
    quantity,
    quantityTaken,
    preferedRentType,
    monthlyPrice,
    weeklyPrice,
    dailyPrice,
    deposit,
    depositPrice,
    description,
    posterType,
    city,
    location,
    buildingName,
    appartmentNumber,
    floorNumber,
    firstName,
    lastName,
    email,
    phone,
    numberOfPeople,
    gender,
    grouping,
    nationality,
    smoking,
    drinking,
    visitors,
    cooking,
  } = useSelector((state) => state.property);

  const postProductHandler = async () => {
    console.log(city);
    if (
      !type ||
      !quantity ||
      !quantityTaken ||
      !monthlyPrice ||
      !weeklyPrice ||
      !dailyPrice ||
      !deposit ||
      !depositPrice ||
      !description ||
      !preferedRentType ||
      !posterType ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !city ||
      !location ||
      !buildingName ||
      !appartmentNumber ||
      !floorNumber ||
      !numberOfPeople ||
      !gender ||
      !grouping ||
      !nationality ||
      !smoking ||
      !visitors ||
      !drinking ||
      !cooking
    ) {
      console.log("please enter all the required fields");
      toast.error("Please enter all the fields", toastOptions);
      return;
    }
    const address = {
      city,
      location,
      buildingName,
      appartmentNumber,
      floorNumber,
    };

    console.log(address);
    const agentInfo = {
      firstName,
      lastName,
      email,
      phone,
    };

    const socialPreferences = {
      numberOfPeople,
      gender,
      grouping,
      nationality,
      smoking,
      drinking,
      visitors,
      cooking,
    };
    const obj = {
      type,
      quantity: Number(quantity),
      quantityTaken: Number(quantityTaken),
      preferedRentType,
      monthlyPrice: Number(monthlyPrice),
      weeklyPrice: Number(weeklyPrice),
      dailyPrice: Number(dailyPrice),
      deposit,
      depositPrice: Number(depositPrice),
      description,
      posterType,
      address,
      agentInfo,
      socialPreferences,
    };
    const { data } = await axios.post(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad",
      //"http://localhost:8000/postProperty",
      obj
    );
    console.log(data);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TopBackground />
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Please fill the following information to post your property
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={4}>
                <InputDropDown
                  label="Property Type"
                  name="type"
                  values={["Bed", "Room", "Master Room", "Partition"]}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextInput label="How Many?" name="quantity" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextInput label="How Many Occupied?" name="quantityTaken" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputDropDown
                  label="Preferred Rent Type"
                  name="preferedRentType"
                  values={["Monthly", "Weekly", "Daily"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextInput label="Monthly Price" name="monthlyPrice" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextInput label="Weekly Price" name="weeklyPrice" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextInput label="Daily Price" name="dailyPrice" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputDropDown
                  label="Deposit"
                  name="deposit"
                  values={["true", "false"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextInput label="How Much Deposit ?" name="depositPrice" />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextInput label="Description" name="description" />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <InputDropDown
                  label="Are you ?"
                  name="posterType"
                  values={["Landlord", "Agent/Broker"]}
                />
              </Grid>
            </Grid>
            <Grid>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bolder", mt: 5 }}
              >
                Property Address
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="City" name="city" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="Location" name="location" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="Building Name" name="buildingName" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="Apartment Number" name="appartmentNumber" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="Floor Number" name="floorNumber" />
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bolder", mt: 5 }}
              >
                Help everyone imagine What it's like to live at your property
                upload clear photos and videos of your property
              </Typography>
              <Grid item xs={12} sm={6} md={4}>
                <VideoInput />
              </Grid>
            </Grid>
            <Grid>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bolder", mt: 5 }}
              >
                Agent Information
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="First Name" name="firstName" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="Last Name" name="lastName" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="Email" name="email" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextInput label="Phone" name="phone" />
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "bolder", mt: 5 }}
              >
                About Your Property
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="How many peoples in your property"
                    name="numberOfPeople"
                    values={["0-1", "1-5", "5-10", "10-15", "15-20", "+20"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="Gender of the people who live in your property"
                    name="gender"
                    values={["Male", "Female", "Mix"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="Grouping"
                    name="grouping"
                    values={["Single", "Couple"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="The nationality of the people who live on your property"
                    name="nationality"
                    values={["indian", "asian", "black"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="Smoking Allowed"
                    name="smoking"
                    values={["yes", "no"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="Drinking Allowed"
                    name="drinking"
                    values={["yes", "no"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="Visitors Allowed"
                    name="visitors"
                    values={["yes", "no"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <InputDropDown
                    label="Cooking Allowed"
                    name="cooking"
                    values={["yes", "no"]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          sx={{ mt: 5, mb: 3 }}
        >
          <Button
            color="success"
            variant="contained"
            onClick={postProductHandler}
          >
            Add Property
          </Button>
        </Grid>
        <BottomBackground />
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default PostProperty;
