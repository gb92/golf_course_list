window.addEventListener("load", () => {
  const golfCourseList = document.querySelector("#golfCourseList");
  console.log(golfCourseList);

  const loadButton = document.querySelector("#loadButton");
  console.log(loadButton);
  loadButton?.addEventListener("click", () => {
    // This is where you would call the api

    [...Array(30).keys()].forEach((el) => {
      const newChild = document.createElement("div");
      newChild.innerText = el;
      golfCourseList.appendChild(newChild);
    });
  });
});
