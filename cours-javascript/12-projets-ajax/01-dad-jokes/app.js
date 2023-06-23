import { getElement as get } from './getElement.js';

const url = 'https://icanhazdadjoke.com/';

const btn = get('.btn');
const result = get('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP response error: ${response.status}`);
    }

    const { joke } = await response.json();
    result.textContent = joke;
  } catch (error) {
    console.log(error);
    result.textContent = 'There was an error...';
  }
};

btn.addEventListener('click', fetchDadJoke);

fetchDadJoke();
