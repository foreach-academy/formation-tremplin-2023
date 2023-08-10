import { Form, useFetcher } from 'react-router-dom';

const SingleItem = ({ item }) => {
  const fetcher = useFetcher();
  let completed = item.completed;

  return (
    <article className='single-item'>
      <fetcher.Form method='POST' action={`/items/edit/${item.item_id}`}>
        <input
          type='checkbox'
          name='completed'
          checked={completed}
          onChange={(e) => fetcher.submit(e.target.form)}
        />
      </fetcher.Form>
      <label
        htmlFor='completed'
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through'
        }}
      >
        {item.name}
      </label>
      <Form method='POST' action={`/items/delete/${item.item_id}`}>
        <button type='submit' className='btn remove-btn'>
          supprimer
        </button>
      </Form>
    </article>
  );
};
export default SingleItem;
