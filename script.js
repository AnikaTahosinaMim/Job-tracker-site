// console.log("hello world");

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
const allFilterSection = document.getElementById("allFilter");
// console.log(allCardCount);
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
  currentStatus = id;
  clickbtn.classList.add("bg-blue-500", "text-white");
  clickbtn.classList.remove("bg-white", "text-black");
  if (id === "interview-btn") {
    allCardContainer.classList.add("hidden");
    allFilterSection.classList.remove("hidden");
    renderInterview();
  } else if (id === "all-btn") {
    allCardContainer.classList.remove("hidden");
    allFilterSection.classList.add("hidden");
  } else if (id === "rejected-btn") {
    allCardContainer.classList.add("hidden");
    allFilterSection.classList.remove("hidden");
    renderRejected();
  }
}

// add to interview
const mainContainer = document.querySelector("main");
// count of interview and rejected cards
mainContainer.addEventListener("click", function (event) {
  // for delete btn
  if (event.target.classList.contains("btn-delete")) {
    const card = event.target.closest(".card");
    const jobName = card.querySelector(".jobName").innerText;
    card.remove();
    interViews = interViews.filter((item) => item.jobName !== jobName);
    rejected = rejected.filter((item) => item.jobName !== jobName);
    culculateCards();
  }
  if (currentStatus === "interview-btn") {
    renderInterview();
  } else if (currentStatus === "rejected-btn") {
    renderRejected();
  }

  // for interview btn
  console.log(event.target.classList.contains("btn-interview"));
  if (event.target.classList.contains("btn-interview")) {
    const clickedElement = event.target.closest(".card");
    console.log(clickedElement);
    const jobName = clickedElement.querySelector(".jobName").innerText;
    const jobtitle = clickedElement.querySelector(".jobTitle").innerText;
    const time = clickedElement.querySelector(".jobmean").innerText;
    const statusBtn = clickedElement.querySelector(".status").innerText;
    const jobThing = clickedElement.querySelector(".jobThing").innerText;
    // console.log(jobName, jobtitle, time, jobThing, statusBtn);
    const cardInfo = {
      jobName,
      jobtitle,
      time,
      jobThing,
      statusBtn: "interview",
    };
    console.log(cardInfo.jobName);
    // check if the job is already in the interview list
    const jobExists = interViews.find(
      (item) => item.jobName === cardInfo.jobName,
    );
    clickedElement.querySelector(".status").innerText = "Interview";

    if (!jobExists) {
      interViews.push(cardInfo);
    }
    rejected = rejected.filter((item) => item.jobName !== cardInfo.jobName);
    culculateCards();
    if (currentStatus === "interview-btn") {
      renderInterview();
    }
  } else if (event.target.classList.contains("btn-rejected")) {
    const clickedElement = event.target.closest(".card");
    console.log(clickedElement);
    const jobName = clickedElement.querySelector(".jobName").innerText;
    const jobtitle = clickedElement.querySelector(".jobTitle").innerText;
    const time = clickedElement.querySelector(".jobmean").innerText;
    const statusBtn = clickedElement.querySelector(".status").innerText;
    const jobThing = clickedElement.querySelector(".jobThing").innerText;
    // console.log(jobName, jobtitle, time, jobThing, statusBtn);
    const cardInfo = {
      jobName,
      jobtitle,
      time,
      jobThing,
      statusBtn: "rejected",
    };
    console.log(cardInfo.jobName);
    // check if the job is already in the interview list
    const jobExists = rejected.find(
      (item) => item.jobName === cardInfo.jobName,
    );
    clickedElement.querySelector(".status").innerText = "Rejected";

    if (!jobExists) {
      rejected.push(cardInfo);
    }
    interViews = interViews.filter((item) => item.jobName !== cardInfo.jobName);
    if (currentStatus === "rejected-btn") {
      renderRejected();
    }
    culculateCards();
  }
});

// create card function
// rendaring function for interview and rejected cards
function renderInterview() {
  allFilterSection.innerHTML = "";
  if (interViews.length === 0) {
    const div = document.createElement("div");
    div.className = "bg-white p-5 rounded-lg shadow-md space-y-3 mt-10 card";
    div.innerHTML = `
     <div class="bg-white p-5  rounded-lg shadow-md space-y-3 mt-10 card">
      <img class="mx-auto" src="./jobs.png" alt="">
      <h2 class="text-center text-3xl font-bold text-gray-800">No jobs available</h2>
      <p class="text-center text-xl text-gray-600">Check back soon for new job opportunities</p>
    </div>
    <h2 class="text-center text-gray-600">No interview applications yet.</h2>
    `;
    allFilterSection.appendChild(div);
    return;
  }
  for (let inter of interViews) {
    console.log(inter);
    const div = document.createElement("div");
    div.className = "bg-white p-5 rounded-lg shadow-md space-y-3 mt-10 card";
    div.innerHTML = `


    <div class="flex justify-between">
                    <div>
                        <h3 class="jobName">${inter.jobName}</h3>
                        <p class="jobTitle text-gray-600">${inter.jobtitle}</p>
                    </div>
                    <div>
                        <img src="./Group 1 (2).png" alt="">
                    </div>

                </div>
                <p class=" jobmean text-gray-600">${inter.time}</p>
                <button class="status px-6  py-3 bg-gray-200">${inter.statusBtn}</button>
                <p class="jobThing">${inter.jobThing}</p>
                    users worldwide.</p>
                <div class="flex gap-3">
                    <button
                        class="btn-interview px-6 py-2 border border-green-500 text-green-500 font-bold rounded">INTERVIES</button>
                    <button
                        class="btn-rejected px-6 py-2 border border-red-500 text-red-500 font-bold rounded">REJECTED</button>
                </div>



    `;
    allFilterSection.appendChild(div);
    return;
  }
}
function renderRejected() {
  allFilterSection.innerHTML = "";
  if (rejected.length === 0) {
    const div = document.createElement("div");
    div.className = "bg-white p-5 rounded-lg shadow-md space-y-3 mt-10 card";
    div.innerHTML = `
     <div class="bg-white p-5  rounded-lg shadow-md space-y-3 mt-10 card">
      <img class="mx-auto" src="./jobs.png" alt="">
      <h2 class="text-center text-3xl font-bold text-gray-800">No jobs available</h2>
      <p class="text-center text-xl text-gray-600">Check back soon for new job opportunities</p>
    </div>
    <h2 class="text-center text-gray-600">No interview applications yet.</h2>
    `;
    allFilterSection.appendChild(div);
  }

  for (let reject of rejected) {
    console.log(reject);
    const div = document.createElement("div");
    div.className = "bg-white p-5 rounded-lg shadow-md space-y-3 mt-10 card";
    div.innerHTML = `


    <div class="flex justify-between">
                    <div>
                        <h3 class="jobName">${reject.jobName}</h3>
                        <p class="jobTitle text-gray-600">${reject.jobtitle}</p>
                    </div>
                    <div>
                        <img src="./Group 1 (2).png" alt="">
                    </div>

                </div>
                <p class=" jobmean text-gray-600">${reject.time}</p>
                <button class="status px-6  py-3 bg-gray-200">${reject.statusBtn}</button>
                <p class="jobThing">${reject.jobThing}</p>
                    users worldwide.</p>
                <div class="flex gap-3">
                    <button
                        class="btn-interview px-6 py-2 border border-green-500 text-green-500 font-bold rounded">INTERVIES</button>
                    <button
                        class="btn-rejected px-6 py-2 border border-red-500 text-red-500 font-bold rounded">REJECTED</button>
                </div>



    `;
    allFilterSection.appendChild(div);
  }
}
