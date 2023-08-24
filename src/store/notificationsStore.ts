import { atom, computed, map } from "nanostores";

export type Notification = {
  name: string;
  type:
    | "post-reaction"
    | "follow"
    | "joined"
    | "left"
    | "message"
    | "picture-comment";
  avatar: string;
  message?: string;
  time: string;
  postName?: string;
  commentedPicture?: string;
  unread: boolean;
};

export const notification = map<Notification>({
  name: "",
  type: "post-reaction",
  avatar: "",
  time: "",
  postName: "",
  commentedPicture: "",
  message: "",
  unread: false
});

export const $notifications = map<Notification[]>([
  {
    name: "Mark Webber",
    type: "post-reaction",
    avatar: "/avatar-mark-webber.webp",
    message: "",
    time: "1m ago",
    postName: "My first tournament today!",
    commentedPicture: "",
    unread: true,
  },
  {
    name: "Angela Gray",
    type: "follow",
    avatar: "/avatar-angela-gray.webp",
    message: "",
    time: "5m ago",
    postName: "",
    commentedPicture: "",
    unread: true,
  },
  {
    name: "Jacob Thompson",
    type: "joined",
    avatar: "/avatar-jacob-thompson.webp",
    message: "",
    time: "1 day ago",
    postName: "",
    commentedPicture: "",
    unread: true,
  },
  {
    name: "Rizky Hasanuddin",
    type: "message",
    avatar: "/avatar-rizky-hasanuddin.webp",
    message:
      "Hello, thanks for setting up the Chess Club.  I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    postName: "",
    commentedPicture: "",
    unread: false,
  },
  {
    name: "Kimberly Smith",
    type: "picture-comment",
    avatar: "/avatar-kimberly-smith.webp",
    message: "",
    time: "1 week ago",
    postName: "",
    commentedPicture: "/image-chess.webp",
    unread: false,
  },
  {
    name: "Nathan Peterson",
    type: "post-reaction",
    avatar: "/avatar-nathan-peterson.webp",
    message: "",
    time: "2 weeks ago",
    postName: "5 end-game strategies to increase your win rate",
    commentedPicture: "",
    unread: false,
  },
  {
    name: "Anna Kim",
    type: "left",
    avatar: "/avatar-anna-kim.webp",
    message: "",
    time: "2 weeks ago",
    postName: "",
    commentedPicture: "",
    unread: false,
  },
]);

export const $unreadLength = computed($notifications, n => n.filter(i => i.unread))

// export function markRead(n: Notification[]) {
//   n.map((n: Notification) => n.setKey("unread", false))
// }

