import React, { useState } from "react";
import { Segmented } from "antd";

const UserHeader = () => {
  const [value, setValue] = useState("RESUME");

  const segmentedStyle = {
    itemSelectedBg: "#4d70eb",
  };

  return (
    <div>
      <Segmented
        itemSelectedBg= "#4d70eb"
        style={segmentedStyle}
        options={["RESUME", "COVER LETTERS", "RESIGNATION LETTERS"]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default UserHeader;
