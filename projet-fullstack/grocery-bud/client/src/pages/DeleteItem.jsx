import axios from 'axios';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const action = async ({ params }) => {
  const { id } = params;
  const token = localStorage.getItem('token');

  try {
    await axios.delete(`/api/v1/items/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    toast.success('Article supprimé');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }

  return redirect('/dashboard');
};
