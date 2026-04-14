import React from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();

  const expectedFriend = friends.find((friend) => friend.id === Number(id));

  // const {
  //     name,
  //     picture,

  // } = expectedFriend

  console.log(expectedFriend);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="container mx-auto">
          {/* left div */}
          <div>
            <div className="w-87.5 py-6 bg-white shadow rounded-xl">
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
          </div>

          {/* right div */}
          <div></div>
        </div>
      )}
    </div>
  );
};

export default FriendDetails;
