import React, { useState } from 'react'

const NotificationsBar = () => {
  const [unread, setUnread] = useState(false)
  return (
    <div className="flex justify-between font-plusjakartasans mt-6">
      <div className="flex gap-2">
        <h1 className="font-bold">Notifications</h1>
        <div className="bg-primary-blue text-white px-3 py1 rounded-lg">3</div>
      </div>
      <div className=""><p className="text-dark-grayish-blue">Mark all as read</p></div>
    </div>
  )
}

export default NotificationsBar