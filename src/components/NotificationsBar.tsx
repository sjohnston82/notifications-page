import { $unreadLength, markRead } from "../store/notificationsStore";
import { useStore } from "@nanostores/react";
import type { Notification } from "../store/notificationsStore";
import NotificationContainer from "./NotificationContainer";
import { useState } from "react";

type NotificationsBarProps = {
  notifications: Notification[] | undefined;
};

const NotificationsBar = ({ notifications }: NotificationsBarProps) => {
  const unreadLength = useStore($unreadLength);
  // console.log(unreadLength);
  const [notificationState, setNotificationState] = useState(notifications);

  const setMarkAsRead = () => {
    const updatedNotifications = notificationState?.map((notification) =>
      notification.unread ? { ...notification, unread: false } : notification
    );

    setNotificationState(updatedNotifications);
  };

  const unreadAmount = notificationState?.filter((notification) => notification.unread).length

  return (
    <div className="flex flex-col bg-white lg:py-4 lg:px-5 lg:my-8 lg:rounded-xl lg:shadow-xl lg:w-[43%]">
      <div className="flex justify-between font-plusjakartasans mt-6 mb-8">
        <div className="flex gap-2">
          <h1 className="font-[800] text-[18px] lg:text-[22px] tracking-tight">
            Notifications
          </h1>
          <div className="bg-primary-blue text-white px-3 py-1 font-semibold rounded-lg">
            {unreadAmount}
          </div>
        </div>
        <div className="">
          <p onClick={() => setMarkAsRead()} className="text-dark-grayish-blue lg:text-sm hover:text-primary-blue cursor-pointer">
            Mark all as read
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-8">
        {notificationState?.map((notification, i) => (
          <NotificationContainer key={i} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsBar;
