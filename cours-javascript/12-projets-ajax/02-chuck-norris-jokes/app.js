const url = 'https://api.chucknorris.io/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('img');

const fetchData = async () => {
  content.textContent = 'Loading...';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP response error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    content.textContent = 'There was an error...';
  }
};

const displayJoke = ({ value: joke }) => {
  // const { value: joke } = data;
  content.textContent = joke;
  img.classList.add('shake-img');
  const randomTime = Math.random() * 1000;

  setTimeout(() => {
    img.classList.remove('shake-img');
  }, randomTime);
};

btn.addEventListener('click', async () => {
  const data = await fetchData();
  displayJoke(data);
});
