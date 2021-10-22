const navAnimation = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-ul');
  const navItems = document.querySelectorAll('.navlinks');
  const linkSubnav = document.querySelector('.link-subnav');
  const subNav = document.querySelector('.sub-nav');
  const subNavItems = document.querySelectorAll('.sub-navitems');

  hamburger.addEventListener('click', () => {
    // Toggle Class
    nav.classList.toggle('nav-view');

    // Nav bar items Animation
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = ''
      } else {
        item.style.animation = `navFade 0.5s ease forwards ${index / 9 + 0.45}s`
      }
    });

    hamburger.classList.toggle('toggle');
  });

  linkSubnav.addEventListener('click', () => {
    subNav.classList.toggle('subnav-view');

    subNavItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = ''
      } else {
        item.style.animation = `navFade 0.5s ease forwards ${index / 8 + 0.8}s`
      }
    });
  })
}

navAnimation();


//Script For Calender And Date Picker Pop Up On Viewdetails.html Page

let yearChosen = new Date().getFullYear(); //current year
let monthChosen = new Date().getMonth(); //current month 0 to 11 where 0 = january & 11 = december
let labelDate = document.getElementById('label-date');
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function getNumberOfDays(year, month) {
  let numDays = new Date(year, month + 1, 0).getDate();
  return numDays;
}

function renderCal(getNumDays, newYear, newMonth) {
  let monthName = months[newMonth]
  let yearPTag = document.getElementById('year');
  yearPTag.innerHTML = newYear;
  // let monthPTag = document.getElementById('month');
  // monthPTag.innerHTML = monthChosen;

  // let DateToDisplay = document.getElementById('label-date');
  // DateToDisplay.innerHTML = monthName + yearChosen;

  let dayColumns = document.getElementsByClassName('day-column');
  for (let otherIndex = 0; otherIndex < dayColumns.length; otherIndex++) {
    // if (otherIndex !== 0) {
    //   dayColumns[otherIndex].innerHTML = "";
    // }
    dayColumns[otherIndex].innerHTML = "";
  }

  let firstDay = monthName + ' 1,' + newYear;
  let firstDayOfMonth = new Date(firstDay).getDay();
  for (let anotherIndex = 0; anotherIndex < firstDayOfMonth; anotherIndex++) {
    // console.log(firstDayOfMonth);
    let blankPTag = document.createElement("p");
    let blankText = document.createTextNode(" ");
    blankPTag.style.padding = '16px';
    blankPTag.appendChild(blankText);
    let dayColumn = document.getElementById(anotherIndex.toString());
    if (anotherIndex !== 0) {
      dayColumn.appendChild(blankPTag);
    }
  }


  for (let i = 1; i <= getNumDays; i++) {
    let dayPTag = document.createElement("p");
    dayPTag.classList.add("dayPTag");
    dayPTag.style.fontSize = "20px";
    dayPTag.style.cursor = "pointer";
    dayPTag.style.display = 'flex';
    dayPTag.style.justifyContent = 'center';
    let dayText = document.createTextNode(i.toString());
    dayPTag.appendChild(dayText);
    let date = monthName + " " + i.toString() + ", " + newYear;
    //console.log(date);
    let dayOfWeek = new Date(date).getDay();
    // console.log(dayOfWeek);
    document.getElementById(dayOfWeek.toString()).appendChild(dayPTag);
    if (dayOfWeek === 0) {
      dayPTag.style.backgroundColor = "#7DA9FF";
    }
    if (dayOfWeek === 6) {
      dayPTag.style.backgroundColor = "#7DA9FF";
    }
    dayPTag.addEventListener('click', function () {
      let clicked_dayPTag = dayPTag.innerHTML;
      this.style.backgroundColor = 'red';
    });
  }
}

// document.querySelectorAll('dayPTag').addEventListener('click', function () {
//   dayPTag.find.style.backgroundColor = "white";
//   this.style.backgroundColor = "red";
// });
$(document).on("click", ".dayPTag", function () {
  $(document).find(".dayPTag").css("background", "white");
  $(this).css("background", "red");
});

labelDate.innerHTML = months[monthChosen] + yearChosen;
let selectedMonth = document.getElementById('selectedMonth');
let defaultCurrentMonth = document.getElementById('default-current-month');
defaultCurrentMonth.value = monthChosen;
function changeMonth() {
  if (selectedMonth.value != null) {
    monthChosen = selectedMonth.value;
  }
  console.log(selectedMonth.value);
  labelDate.innerHTML = months[monthChosen] + yearChosen;
  renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
}

// function changeMonth(addMinus) {
//   if (addMinus === "minus") {
//     if (monthChosen !== 0) {
//       monthChosen -= 1;
//       renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
//     }
//     else {
//       monthChosen = 11;
//       yearChosen -= 1;
//       renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
//     }
//   } else {
//     if (monthChosen !== 11) {
//       monthChosen += 1;
//       renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
//     }
//     else {
//       monthChosen = 0;
//       yearChosen += 1;
//       renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
//     }
//   }
// }


function changeYear(addMinus) {
  if (addMinus === "minus") {
    yearChosen -= 1;
    renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
  } else {
    yearChosen += 1;
    renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
  }
}

renderCal(getNumberOfDays(yearChosen, monthChosen), yearChosen, monthChosen);
