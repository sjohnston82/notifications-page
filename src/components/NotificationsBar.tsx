import { $unreadLength, markRead } from "../store/notificationsStore";
import { useStore } from "@nanostores/react";
import type { Notification } from "../store/notificationsStore";

const NotificationsBar = () => {
  const unreadLength = useStore($unreadLength);

  return (
    <div className="flex justify-between font-plusjakartasans mt-6 mb-8">
      <div className="flex gap-2">
        <h1 className="font-[800] text-[18px]">Notifications</h1>
        <div className="bg-primary-blue text-white px-3 py1 rounded-lg">
          {unreadLength.length}
        </div>
      </div>
      <div className="">
        <p
          onClick={() => markRead(unreadLength)}
          className="text-dark-grayish-blue"
        >
          Mark all as read
        </p>
      </div>
    </div>
  );
};

export default NotificationsBar;
