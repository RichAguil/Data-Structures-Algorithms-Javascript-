function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return 0;
  };
  console.log(num);
  num--;
  countDown(num);
};
