import axios from 'axios';
import { toast } from 'react-toastify';

export const action = async ({ params, request }) => {
  const { id } = params;
  const token = localStorage.getItem('token');
  const formData = await request.formData();
  const completed = formData.get('completed') === 'on';

  try {
    return await axios.put(
      `/api/v1/items/${id}`,
      {
        completed
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
