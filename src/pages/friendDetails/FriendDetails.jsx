import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import snoozeImg from "../../assets/BellSimpleZ.png";
import archiveImg from "../../assets/Archive.png";
import trashImg from "../../assets/Trash.png";
import callImg from "../../assets/PhoneCall.png";
import chatImg from "../../assets/ChatDots.png";
import videoImg from "../../assets/VideoCamera.png";
import { RotateLoader } from "react-spinners";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();

  const expectedFriend = friends.find((friend) => friend.id === Number(id));



  console.log(expectedFriend);

  return (
    <div className="mt-20">
      {loading ? (
        <div className="flex justify-center items-center pt-60">
          <RotateLoader color="#244D3F"></RotateLoader>
        </div>
      ) : (
        <div className="container mx-auto grid lg:grid-cols-2 justify-items-center">
          {/* left div */}
          <div>
            <div className=" w-75 mx-auto lg:mx-0 md:w-87.5 py-6 bg-white shadow rounded-xl border border-base-200">
              <img src={expectedFriend.picture} className="mx-auto" alt="" />
              <h4 className="font-semibold mt-2 text-[20px] text-[#1F2937] text-center">
                {expectedFriend.name}
              </h4>

              <div className="flex justify-center mt-2 ">
                <span
                  className={`badge rounded-full
                        ${
                          expectedFriend.status === "Overdue"
                            ? "bg-[#EF4444] text-white"
                            : expectedFriend.status === "On-Track"
                              ? "bg-[#244D3F] text-white"
                              : "bg-[#EFAD44] text-white"
                        }
                       `}
                >
                  {expectedFriend.status}
                </span>
              </div>

              <div className="flex gap-3 justify-center mt-2">
                {expectedFriend.tags.map((tag, ind) => {
                  return (
                    <span
                      key={ind}
                      className="badge font-semibold text-[12px] rounded-full bg-[#CBFADB] text-[#244D3F]"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

                <p className="text-center mt-3 text-[#64748B] font-semibold"><i>"{expectedFriend.bio}"</i></p>
                <p className="text-center mt-2 text-[#64748B] text-[14px]">{expectedFriend.email}</p>

            </div>

              <div className="btn bg-white  w-75 mx-auto lg:mx-0 md:w-87.5 mt-4 flex items-center">
                 <img src={snoozeImg} alt="" />
                 <button className=" text-[#1F2937]">Snooze 2 Weeks</button>
                </div>
              <div className="btn bg-white  w-75 mx-auto lg:mx-0 md:w-87.5 mt-4 flex items-center">
                 <img src={archiveImg} alt="" />
                 <button className=" text-[#1F2937]">Archive</button>
                </div>
              <div className="btn bg-white  w-75 mx-auto lg:mx-0 md:w-87.5 mt-4 flex items-center">
                 <img src={trashImg} alt="" />
                 <button className=" text-[#EF4444]">Delete</button>
                </div>
             
              

          </div>

          {/* right div */}
          <div>

              <div className="md:flex mt-7 lg:mt-0 gap-5 items-center justify-center lg:justify-normal space-y-3 md:space-y-0">
                <div className="w-57.5 mx-auto md:mx-0 py-8 bg-white shadow rounded-md border border-base-200">
                  <h3 className="font-semibold text-[30px] text-[#244D3F] text-center">{expectedFriend.days_since_contact}</h3>
                  <p className="text-[#64748B] text-center mt-1">Days Since Contact</p>
                </div>
                <div className="w-57.5 py-8 mx-auto md:mx-0 bg-white shadow rounded-md border border-base-200">
                  <h3 className="font-semibold text-[30px] text-[#244D3F] text-center">{expectedFriend.goal}</h3>
                  <p className="text-[#64748B] text-center mt-1">Goal (Days)</p>
                </div>
                <div className="w-57.5 py-8 mx-auto md:mx-0 bg-white shadow rounded-md border border-base-200">
                  <h3 className="font-semibold text-[30px] text-[#244D3F] text-center">{expectedFriend.next_due_date}</h3>
                  <p className="text-[#64748B] text-center mt-1">Next Due</p>
                </div>
              </div>

              <div className="w-77.5 md:w-184 bg-white shadow p-6 rounded-md mx-auto lg:mx-0 mt-7 border border-base-200">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-[20px] text-[#244D3F]">Relationship Goal</h4>
                  <button className="btn">Edit</button>
                </div>
                <p className="text-[#64748B] text-[18px] mt-4">Connect every <span className="text-[#1F2937] font-semibold">{expectedFriend.goal} days</span></p>
              </div>

              <div className="w-77.5 md:w-184 bg-white shadow p-6 rounded-md mx-auto lg:mx-0 mt-7 border border-base-200 ">
                <h4 className="font-semibold text-[20px] text-[#244D3F]">Quick Check-In</h4>

                <div className=" md:flex justify-between mt-3 space-y-4 md:space-y-0">
                  <button className="btn mx-auto md:mx-0 w-54.75 h-23.75 flex flex-col rounded-md">
                    <img src={callImg} className="mx-auto " alt="" />
                    <p className="text-center text-[#1F2937] text-[16px]">Call</p>
                  </button>
                  <button className="btn mx-auto md:mx-0 w-54.75 h-23.75 flex flex-col rounded-md">
                    <img src={chatImg} className="mx-auto " alt="" />
                    <p className="text-center text-[#1F2937] text-[16px]">Text</p>
                  </button>
                  <button className="btn mx-auto md:mx-0 w-54.75 h-23.75 flex flex-col rounded-md">
                    <img src={videoImg} className="mx-auto " alt="" />
                    <p className="text-center text-[#1F2937] text-[16px]">Call</p>
                  </button>
                </div>

              </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default FriendDetails;
