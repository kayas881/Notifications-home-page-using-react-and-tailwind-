import React from "react";
import Mark from "../assets/images/avatar-mark-webber.webp";
import Angela from "../assets/images/avatar-angela-gray.webp";
import Jacob from "../assets/images/avatar-jacob-thompson.webp";
import Rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "../assets/images/avatar-kimberly-smith.webp";
import Nathan from "../assets/images/avatar-nathan-peterson.webp";
import Anna from "../assets/images/avatar-anna-kim.webp";
import Chess from "../assets/images/image-chess.webp";
const Notifications = ({ markAsRead }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div
        className={
          markAsRead
            ? "w-[90%] h-20 bg-opacity-50 bg-white flex items-center rounded-lg bg-gray " // Set the background color when markAsRead is true
            : "w-[90%] h-20 bg-light-grayish-blue-1 bg-opacity-50 flex items-center rounded-lg"
        }
      >
        <img className="w-12 ml-3 mt-1   " src={Mark} alt="PFP" />
        <div>
          <h1 className="ml-5">
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer ">
              Mark Webber
            </span>{" "}
            reacted to your recent post{" "}
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              My first tournament today!
            </span>
          </h1>
          <p className="ml-5 mt-[-5px]">1m ago</p>
        </div>
        <span
          className={
            markAsRead
              ? "hidden"
              : "text-red text-[40px] md:mb-6 md:ml-2 max-md:mr-[150px]"
          }
        >
          &#8226;
        </span>
      </div>
      <div
        className={
          markAsRead
            ? "w-[90%] h-20 bg-opacity-50 bg-white flex items-center rounded-lg bg-gray mt-2" // Set the background color when markAsRead is true
            : "w-[90%] h-20 bg-light-grayish-blue-1 bg-opacity-50 flex items-center rounded-lg mt-2"
        }
      >
        <img className="w-12 ml-3 mt-1   " src={Angela} alt="PFP" />
        <div>
          <h1 className="ml-5">
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              Angela Gray
            </span>{" "}
            followed you
          </h1>
          <p className="ml-5 mt-[-5px]">5m ago</p>
        </div>
        <span
          className={markAsRead ? "hidden" : "text-red text-[40px] mb-6 ml-2"}
        >
          &#8226;
        </span>
      </div>
      <div
        className={
          markAsRead
            ? "w-[90%] h-20 bg-opacity-50 bg-white flex items-center rounded-lg bg-gray mt-2" // Set the background color when markAsRead is true
            : "w-[90%] h-20 bg-light-grayish-blue-1 bg-opacity-50 flex items-center rounded-lg mt-2"
        }
      >
        <img className="w-12 ml-3 mt-1   " src={Jacob} alt="PFP" />
        <div>
          <h1 className="ml-5">
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              Jacob Thompson
            </span>{" "}
            has joined your group{" "}
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              Chess Club
            </span>
          </h1>
          <p className="ml-5 mt-[-5px]">1 day ago</p>
        </div>
        <span
          className={markAsRead ? "hidden" : "text-red text-[40px] mb-6 ml-2"}
        >
          &#8226;
        </span>
      </div>
      <div className="w-[90%] h-auto bg-opacity-50 bg-white flex items-center rounded-lg bg-gray mt-2">
        <img
          className="w-12 ml-3 md:mt-[-40px] max-md:mt-[-60px]   "
          src={Rizky}
          alt="PFP"
        />
        <div>
          <h1 className="ml-5 mt-10">
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              Rizky Hasanuddin
            </span>{" "}
            sent you a private message{" "}
          </h1>
          <p className="ml-5 mt-[-5px] opacity-70 font-jakarta text-[15px]">
            5 days ago
          </p>

          <p
            className={
              markAsRead
                ? "bg-white ml-5 mt-5 h-auto text-[14px] font-jakarta px-5 py-3 hover:cursor-pointer"
                : "bg-light-grayish-blue-1 ml-5 mt-5 h-auto text-[14px] font-jakarta px-5 py-3 hover:cursor-pointer"
            }
          >
            {" "}
            <span className="">
              {" "}
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </span>
          </p>
        </div>
      </div>
      <div className="w-[90%] h-20 bg-opacity-50 bg-white flex items-center rounded-lg bg-gray mt-2">
        <img className="w-12 ml-3 mt-1   " src={Kimberly} alt="PFP" />
        <div>
          <h1 className="ml-5">
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              Kimberly Smith
            </span>{" "}
            commented on your picture{" "}
          </h1>
          <p className="ml-5 mt-[-5px] opacity-70 font-jakarta text-[15px]">
            1 week ago
          </p>
        </div>
        <img className="h-12 w-12 m-auto" src={Chess} alt="chess game" />
      </div>
      <div className="w-[90%] h-20 bg-opacity-50 bg-white flex items-center rounded-lg bg-gray mt-2">
        <img className="w-12 ml-3 mt-1   " src={Nathan} alt="PFP" />
        <div>
          <h1 className="ml-5">
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              Nathan Peterson
            </span>{" "}
            reacted to your recent post{" "}
            <span className="font-jakarta font-extrabold hover:text-blue hover:cursor-pointer opacity-60">
              5 end-game strategies to increase your win rate
            </span>
          </h1>
          <p className="ml-5 mt-[-5px] opacity-70 font-jakarta text-[15px]">
            2 weeks ago
          </p>
        </div>
      </div>
      <div className="w-[90%] h-20 bg-opacity-50 bg-white flex items-center rounded-lg bg-gray mt-2">
        <img className="w-12 ml-3 mt-1   " src={Anna} alt="PFP" />
        <div>
          <h1 className="ml-5">
            <span className=" font-jakarta font-extrabold hover:text-blue hover:cursor-pointer">
              Anna Kim
            </span>{" "}
            left the group{" "}
            <span className="font-jakarta font-extrabold hover:text-blue hover:cursor-pointer opacity-60">
              Chess Club
            </span>
          </h1>
          <p className="ml-5 mt-[-5px] opacity-70 font-jakarta text-[15px]">
            2 weeks ago
          </p>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
