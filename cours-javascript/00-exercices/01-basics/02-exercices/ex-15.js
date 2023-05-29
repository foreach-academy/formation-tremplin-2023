const displayDescPyramid = (numberOfLines) => {
  if (numberOfLines < 1 || numberOfLines > 25) return;
  let row = '#';

  for (let i = 0; i < numberOfLines; i++) {
    console.log(row);
    row += '#';
  }
};

displayDescPyramid(5);
