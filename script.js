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
  if (id == "interview-btn") {
    allCardContainer.classList.add("hidden");
    document.getElementById("allFilter").classList.remove("hidden");
    interviedRender();
  } else if (id == "all-btn") {
    allCardContainer.classList.remove("hidden");
    document.getElementById("allFilter").classList.add("hidden");
    document.getElementById("allFilter").innerHTML = "";
  }
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

// add to interview
const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
  console.log(event.target.classList.contains("btn-interview"));
  if (event.target.classList.contains("btn-interview")) {
    const clickedElement = event.target.parentNode.parentNode.parentNode;
    const jobName = clickedElement.querySelector(".jobName").innerText;
    const jobtitle = clickedElement.querySelector(".jobTitle").innerText;
    const time = clickedElement.querySelector(".jobmean").innerText;
    const statusBtn = clickedElement.querySelector(".status").innerText;
    const jobThing = clickedElement.querySelector(".jobThing").innerText;
    console.log(jobName, jobtitle, time, jobThing, statusBtn);
    const cardInfo = {
      jobName,
      jobtitle,
      time,
      jobThing,
      statusBtn: "interview",
    };
    // check if the job is already in the interview list
    const jobExists = interViews.find(
      (item) => item.jobName === cardInfo.jobName,
    );
    clickedElement.querySelector(".status").innerText = "Interview";

    if (!jobExists) {
      interViews.push(cardInfo);
    }
    console.log(interViews);
    culculateCards();
    interviedRender();
  }
});

// create card function
const allFilterSection = document.getElementById("allFilter");
function interviedRender() {
  allFilterSection.innerHTML = "";
  for (let item of interViews) {
    console.log(item);
    let section = document.createElement("div");
    section.className = "bg-white p-5 rounded-lg shadow-md space-y-3";

    section.innerHTML = `
                    <div class="flex justify-between">
                    <div>
                        <h3 class="jobName">${item.jobName}</h3>
                        <p class="jobTitle text-gray-600">${item.jobtitle}</p>
                    </div>
                    <div>
                        <img src="./Group 1 (2).png" alt="">
                    </div>

                </div>
                <p class=" jobmean text-gray-600">Remote • Full-time • $130,000 - $175,000</p>
                <button class="status px-6  py-3 bg-gray-200">Not Applied</button>
                <p class="jobThing">Build cross-platform mobile applications using React Native. Work on products used
                    by millions of
                    users worldwide.</p>
                <div class="flex gap-3">
                    <button
                        class="btn-interview px-6 py-2 border border-green-500 text-green-500 font-bold rounded">INTERVIES</button>
                    <button
                        class="btn-rejected px-6 py-2 border border-red-500 text-red-500 font-bold rounded">REJECTED</button>
                </div>


    `;
    allFilterSection.appendChild(section);
  }
}
