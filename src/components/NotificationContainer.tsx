import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Props {
  unread: boolean;
  type:
    | "post-reaction"
    | "follow"
    | "joined"
    | "left"
    | "message"
    | "picture-comment";
  name: string;
  avatar: string;
  message?: string;
  time: string;
  postName?: string;
  commentedPicture?: string;
}

const NotificationContainer = ({
  unread,
  type,
  name,
  avatar,
  message = "",
  time,
  postName,
  commentedPicture,
}: Props) => {
  return (
    <div
      className={cn(
        "flex gap-3 p-3 text-[14px] leading-normal   font-plusjakartasans",
        {
          "bg-very-light-grayish-blue rounded-xl": unread,
        }
      )}
    >
      <div className="flex justify-start ">
        <img src={avatar} alt={name} className="w-[50px] h-[50px] " />
      </div>
      <div className="flex flex-col flex-1">
        {type === "post-reaction" && (
          <p className="">
            <span className="font-bold cursor-pointer hover:text-primary-blue">
              {name}&nbsp;
            </span>{" "}
            reacted to your recent post{" "}
            <span className="font-[700] text-dark-grayish-blue cursor-pointer hover:text-primary-blue">
              &nbsp;{postName}
            </span>
            &nbsp;
            {unread && (
              <span className="inline-flex align-text-top mt-[7px] ml-1 h-2 w-2 bg-primary-red rounded-full"></span>
            )}
          </p>
        )}

        {type === "follow" && (
          <p className="">
            <span className="font-bold cursor-pointer hover:text-primary-blue">
              {name}&nbsp;
            </span>{" "}
            followed you{" "}
            {unread && (
              <span className="inline-flex align-text-top mt-[7px] ml-1 h-2 w-2 bg-primary-red rounded-full"></span>
            )}{" "}
          </p>
        )}

        {type === "joined" && (
          <p className="">
            <span className="font-bold cursor-pointer hover:text-primary-blue">
              {name}&nbsp;
            </span>{" "}
            has joined your group &nbsp;{" "}
            <span className="text-primary-blue cursor-pointer font-bold font-plusjakartasans">
              Chess Club
            </span>
            &nbsp;
            {unread && (
              <span className="inline-flex align-text-top mt-[7px] ml-1 h-2 w-2 bg-primary-red rounded-full"></span>
            )}
          </p>
        )}

        {type === "message" && (
          <div className="">
            <p className="">
              <span className="font-bold cursor-pointer hover:text-primary-blue">
                {name}
              </span>
              &nbsp; sent you a private message
            </p>
            <p className="">{time}</p>
            <div className="mt-2 border hover:bg-light-grayish-blue-1 cursor-pointer border-light-grayish-blue rounded p-3">
              <p className="">{message}</p>
            </div>
          </div>
        )}

        {type === "picture-comment" && (
          <div className="flex gap-3">
            <div className="flex flex-col gap-1">
              <p className="">
                <span className="font-bold cursor-pointer hover:text-primary-blue">
                  {name}
                </span>
                &nbsp; commented on your picture
              </p>
              <p className="">{time}</p>
            </div>
            <img
              src={commentedPicture}
              alt="Photo comment"
              className="w-[40px] h-[40px] cursor-pointer "
            />
          </div>
        )}

        {type === "left" && (
          <p className="">
            <span className="font-bold cursor-pointer hover:text-primary-blue">
              {name}
            </span>
            &nbsp; left the group &nbsp;{" "}
            <span className="text-primary-blue font-bold font-plusjakartasans cursor-pointer">
              Chess Club
            </span>
            &nbsp;
          </p>
        )}
        {type !== "message" && type !== "picture-comment" && (
          <p className="">{time}</p>
        )}
      </div>
    </div>
  );
};

export default NotificationContainer;
