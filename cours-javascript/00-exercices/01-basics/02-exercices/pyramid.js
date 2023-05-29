const displayPyramid = (numberOfLines) => {
  if (numberOfLines < 1 || numberOfLines > 25) return;

  for (let i = 0; i < numberOfLines; i++) {
    let row = '';

    for (let j = 0; j < numberOfLines - i - 1; j++) {
      row += ' ';
    }

    for (let k = 0; k < i * 2 + 1; k++) {
      row += '#';
    }

    console.log(row);
  }
};

displayPyramid(5);
