// import React from 'react'


// type NotificationProps = {
//   unread: boolean;
//   type:
//     | "post-notification"
//     | "follow"
//     | "joined"
//     | "left"
//     | "message"
//     | "picture-comment";
//   name: string;
//   avatar: string;
//   message?: string;
//   time: string;
//   postName?: string;
// };

// const Notification = ({
//   unread,
//   type,
//   name,
//   avatar,
//   message = "",
//   time,
//   postName,
// }: NotificationProps) => {
//   return <div className="">
//   <img src={avatar} alt={name} />
//   {unread && <div className="h-1 w-1 bg-primary-red rounded-full"></div>}
//   <p className="">{time}</p>
//   {type === "post-notification" && (<p className="">{name} </p>)}
// </div>;
// };

// export default Notification