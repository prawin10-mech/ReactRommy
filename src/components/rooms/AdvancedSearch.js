import React, { useState } from "react";
// import "react-input-range/lib/css/index.css";
// import InputRange from "react-input-range";
import AdvancedSearchBg from "../../assets/AdvanceSearchBg.jpg";

const AdvancedSearch = () => {
  const [value, setValue] = useState({ min: 0, max: 10000 });

  return (
    <div
      className="w-1/5 h-full p-4"
      style={{
        backgroundImage: `url(${AdvancedSearchBg})`,
      }}
    >
      <p className="font-large">Advance Search</p>
      <div>
        <p>Property Type</p>
        <div>
          <p>Regular</p>
          <p>Partition</p>
          <p>Master Room</p>
          <p>Bed Space</p>
        </div>
      </div>
      <div>
        <p>Budget Monthly</p>
        {/* <InputRange
          maxValue={10000}
          minValue={0}
          value={value}
          onChange={(value) => setValue(value)}
        /> */}
      </div>
      <div>
        <p>Amenities</p>
        <div className="flex flex-col">
          <div>
            <input type="checkbox" id="freeWifi" />
            <label htmlFor="freeWifi">Free Wifi</label>
          </div>
          <div>
            <input type="checkbox" id="parking" />
            <label htmlFor="parking">Parking</label>
          </div>
          <div>
            <input type="checkbox" id="swimmingPool" />
            <label htmlFor="swimmingPool">Swimming Pool</label>
          </div>
        </div>
      </div>
      <div>
        <p>Preferences</p>
        <div className="flex flex-col">
          <div>
            <input type="checkbox" id="smokingAllowed" />
            <label htmlFor="smokingAllowed">Smoking Allowed</label>
          </div>
          <div>
            <input type="checkbox" id="visitorsAllowed" />
            <label htmlFor="visitorsAllowed">Visitors Allowed</label>
          </div>
          <div>
            <input type="checkbox" id="partyAllowed" />
            <label htmlFor="partyAllowed">Party Allowed</label>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p>ADVANCE</p>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default AdvancedSearch;
