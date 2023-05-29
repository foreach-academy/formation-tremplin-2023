const displayAscPyramid = (numberOfLines) => {
  if (numberOfLines < 1 || numberOfLines > 25) return;
  let hashtags = '';

  for (let i = 0; i < numberOfLines; i++) {
    let spaces = '';
    hashtags += '#';

    for (let j = 0; j < numberOfLines - i - 1; j++) {
      spaces += ' ';
    }

    console.log(spaces + hashtags);
  }
};

displayAscPyramid(5);
