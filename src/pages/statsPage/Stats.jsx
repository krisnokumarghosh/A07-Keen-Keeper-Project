import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { Pie, PieChart, Tooltip } from "recharts";
import textImg from "../../assets/Ellipse 27.png";
import callImg from "../../assets/Ellipse 28.png";
import videoImg from "../../assets/Ellipse 29.png";

const Stats = () => {
  const { timelineFriends } = useContext(FriendsContext);

  const data = [
    {
      name: "Call",
      value: timelineFriends.filter((item) => item.action === "Call").length,
      fill: "#244D3F",
    },
    {
      name: "Text",
      value: timelineFriends.filter((item) => item.action === "Text").length,
      fill: "#7E35E1",
    },
    {
      name: "Video",
      value: timelineFriends.filter((item) => item.action === "Video").length,
      fill: "#37A163",
    },
  ];

  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <h1 className=" text-[37px] text-center md:text-left md:text-  [48px] font-bold text-[#1F2937]">
        Friendship Analytics
      </h1>

      <div className="mt-6 p-8 bg-white shadow rounded-xl">
        <p className="text-[20px] text-[#244D3F]">By Interaction Type</p>

       {
        timelineFriends.length === 0 ?
        <div className="py-10">
            <h4 className="text-[20px] text-center mt-3 font-semibold text-[#244D3F]">Do Action to View Chat</h4>
        </div> : 

        <div>
             <div className="flex justify-center py-10 h-60 md:h-80">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "300px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip></Tooltip>
          </PieChart>
        </div>
         <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
                <img src={textImg} alt="" />
                <p className="text-[14px] text-[#64748B]">Text</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={callImg} alt="" />
                <p className="text-[14px] text-[#64748B]">Call</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={videoImg} alt="" />
                <p className="text-[14px] text-[#64748B]">Video</p>
            </div>
          </div>
        </div>
       }
      </div>
    </div>
  );
};

export default Stats;
