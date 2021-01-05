import axios from 'axios';

const fetchNotifications = async () => {
  const { data } = await axios.get('/notification');
  return data.data;
};

const readNotification = async (id) => {
  const { data } = await axios.patch(`/notification/read?id=${id}`);
  return data.data;
};

const readAllNotifications = async () => {
  const { data } = await axios.patch('/notification/readall');
  return data.data;
};

export default { fetchNotifications, readNotification, readAllNotifications };
