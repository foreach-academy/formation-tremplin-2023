import axios from 'axios';
import { useEffect } from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const token = localStorage.getItem('token');

  try {
    await axios.post('/api/v1/items', data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    toast.success('Article ajouté');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ItemsForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    document.querySelector("[name='name']").value = '';
  });

  return (
    <Form method='POST'>
      <h4>Liste de courses</h4>
      <div className='form-control'>
        <label htmlFor='name' className='visually-hidden'>
          Ajouter un article
        </label>
        <input type='text' name='name' id='name' className='form-input' />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'Ajout...' : 'Ajouter'}
        </button>
      </div>
    </Form>
  );
};

export default ItemsForm;
