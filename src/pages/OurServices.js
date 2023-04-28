import React, { useEffect, useState } from "react";
import FloatingImage from "../components/FloatingImage";
import Search from "../components/Search";
import CityCourosol from "../components/UI/CityCourosol";
import Rooms from "../components/Rooms";
import AvailableRooms from "../components/cityCorosols/AvailableRooms";
import { Stack, Typography,Box } from "@mui/material";
import CarouselWithMultipleImage from "../components/CarouselWithMultipleImage";
import AddWithCarasol from "../components/Card/CardForOurServics";
import axios from "axios";

const OurServices = () => {
  const [propertyAddAvilableRoom, setpropertyAddAvilableRoom] = useState([])
  const [PartitionAddAvilableRoom, setPartitionAddAvilableRoom] = useState([])


  // api call ==============================
  const getAffordableRoomData =  ()=>{
    console.log('http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available',{
      "countryCode": "AE"
     
  });
     axios.post('http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available',{
      "countryCode": "AE"
  }).then((res)=>{
    console.log("Response090",res.data);
    setpropertyAddAvilableRoom(res.data)
  }).catch((err)=>{console.log(err)})
  }
  // ---------------------------------------
  const getPartitionRoomData =  ()=>{
    console.log('http://roomy-finder-evennode.ap-1.evennode.com/api/ads/roommate-ads/available',{
      "countryCode": "AE"
     
  });
     axios.post('http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/roommate-ad/available',{
      "countryCode": "AE"
  }).then((res)=>{
    console.log("Response090",res.data);
    setPartitionAddAvilableRoom(res.data)
  }).catch((err)=>{console.log(err)})
  }

// console.log ==========================
console.log("propertyAddAvilableRoom",propertyAddAvilableRoom);
console.log("PartitionAddAvilableRoom",PartitionAddAvilableRoom);

  // useEffect ==========================
  useEffect(() => {
    getAffordableRoomData()
    getPartitionRoomData()
   
  }, [])
  
  return (<>

    <div className="flex flex-col justify-between !important">
      <div className="flex flex-col justify-between !important">
        <div className="flex justify-around">
          <div className="pt-16">
            <p className="text-4xl font-bold text-white pl-10">
              Find your perfect sharing space.
            </p>
            <div className="pt-5">
              <Search />
            </div>
          </div>
          <FloatingImage />
        </div>
        <div>
          <CityCourosol />
          <Rooms />
          <Box sx={{ display:'flex',flexDirection:'column' }}>
          <Stack sx={{mb:1}} >
          <Typography variant="h5" sx={{mb:1}}>
          Top affordable sharing option in UAE
          </Typography>
          <CarouselWithMultipleImage propertyAddAvilableRoom={propertyAddAvilableRoom} />
          </Stack>

          <Stack sx={{mt:1,mb:2}} >
          <Typography variant="h5" sx={{my:1}}>
          Partitions for rent in Sharjsh
          <CarouselWithMultipleImage PartitionAddAvilableRoom={PartitionAddAvilableRoom} />
          </Typography>
          </Stack>
          <AddWithCarasol />
          </Box>
          {/* <AvailableRooms /> */}
        </div>
      </div>
    </div>
  </>
  );
};

export default OurServices;
