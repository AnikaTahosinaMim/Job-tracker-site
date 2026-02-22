console.log("hello world");

let interViews = [];
let rejected = [];
let currentStatus = "all";
// total card count
const allCardContainer = document.getElementById("allCard-container");
let total = document.getElementById("totalCount");
const allCardCount = allCardContainer.children.length;
// interViews card count
const interViewCrads = document.getElementById("interviewCount");
const rejectedCards = document.getElementById("rejectCount");
console.log(allCardCount);
function culculateCards() {
  total.innerHTML = allCardCount;
  interViewCrads.innerText = interViews.length;
  rejectedCards.innerText = rejected.length;
}
culculateCards();

// toggle btn
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
function toggleBtn(id) {
  allBtn.classList.remove("bg-blue-500", "text-white");
  interviewBtn.classList.remove("bg-blue-500", "text-white");
  rejectedBtn.classList.remove("bg-blue-500", "text-white");
  allBtn.classList.add("bg-white", "text-black");
  interviewBtn.classList.add("bg-white", "text-black");
  rejectedBtn.classList.add("bg-white", "text-black");
  const clickbtn = document.getElementById(id);
  clickbtn.classList.add("bg-blue-500", "text-white");
  clickbtn.classList.remove("bg-white", "text-black");
}
allBtn.addEventListener("click", function () {
  currentStatus = "all";
  toggleBtn("all-btn");
  filterSection();
});

interviewBtn.addEventListener("click", function () {
  currentStatus = "interview";
  toggleBtn("interview-btn");
  filterSection();
});

rejectedBtn.addEventListener("click", function () {
  currentStatus = "rejected";
  toggleBtn("rejected-btn");
  filterSection();
});
const pusHere = document.getElementById("filterNewsection");
function filterSection() {
  pusHere.innerHTML = "";

  let data = [];

  if (currentStatus === "all") {
    allCardContainer.style.display = "block";
    return;
  } else if (currentStatus === "interview") {
    data = interViews;
  } else {
    data = rejected;
  }

  allCardContainer.style.display = "none";

  if (data.length === 0) {
    pusHere.innerHTML = `
        <div class="flex flex-col bg-white p-5 my-5 rounded-lg shadow-md space-y-3 text-center py-10 justify-center items-center">
                <img src="./jobs.png" alt="">
                <h2>No jobs available</h2>
                <p>Check back soon for new job opportunities</p>
            </div>
    `;
    return;
  }

  for (let item of data) {
    let section = document.createElement("div");
    section.innerHTML = `<h3>${item.name}</h3>`;
    pusHere.appendChild(section);
  }
}
