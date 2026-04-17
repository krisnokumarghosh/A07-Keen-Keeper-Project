import React, { useContext} from "react";
import { FriendsContext } from "../../context/FriendsContext";
import callImg from "../../assets/call.png";
import videoImg from "../../assets/video.png";
import textImg from "../../assets/text.png";
import nodataImg from "../../assets/nodata.png";
import ArrowImg from "../../assets/CaretDown.png";

const Timeline = () => {
  const { timelineFriends } = useContext(FriendsContext);

  
  
  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <h1 className=" text-[37px] text-center md:text-left md:text-[48px] font-bold text-[#1F2937]">
        Timeline
      </h1>

      {timelineFriends.length === 0 ? (
        <div className="w-full bg-white shadow rounded-xl p-4 mt-6">
          <img
            src={nodataImg}
            className="mx-auto mb-3 rounded-md h-50"
            alt=""
          />
          <h1 className="text-2xl text-center font-bold">No Data Found</h1>
        </div>
      ) : (
        <div className="mt-5 space-y-6">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1 rounded-md md:w-75 ml-6 md:ml-0 flex items-center justify-between bg-white">
             <p className="text-[#64748B] font-medium">Filter Timeline</p>
             <img src={ArrowImg} alt="" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu font-semibold text-[#244D3F] bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li 
             
              className="hover:bg-[#244D3F] hover:text-white rounded-md">
                <a>Call</a>
              </li>
              <li 
               
              className="hover:bg-[#244D3F] hover:text-white rounded-md">
                <a>Text</a>
              </li>
              <li 
              
              className="hover:bg-[#244D3F] hover:text-white rounded-md">
                <a>Video</a>
              </li>
            </ul>
          </div>

          {timelineFriends.map((elem, ind) => {
            return (
              <div
                key={ind}
                className="bg-white border border-gray-200 flex gap-3 items-center shadow w-75 mx-auto md:mx-0 md:w-full p-4 rounded-md"
              >
                {elem.action === "Call" ? (
                  <img src={callImg} alt="" />
                ) : elem.action === "Video" ? (
                  <img src={videoImg} alt="" />
                ) : (
                  <img src={textImg} alt="" />
                )}

                <div>
                  <p className="text-[#64748B]">
                    <span className="text-[#244D3F] font-semibold">
                      {elem.action}
                    </span>{" "}
                    with {elem.friend.name}
                  </p>
                  <p className="text-[#64748B]">{elem.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Timeline;
