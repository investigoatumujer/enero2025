// calendar.js
function renderLuna(day, date) {
  const luna = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  luna.setAttribute('cx', '50');
  luna.setAttribute('cy', '50');
  luna.setAttribute('r', '45');
  luna.setAttribute('fill', 'none');
  luna.setAttribute('stroke', 'black');
  luna.setAttribute('stroke-width', '2');
  return luna;
}

function renderZodiacSign(day, date) {
  const zodiacSign = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  zodiacSign.setAttribute('d', 'M30,35 Q40,65 30,80 M30,80 Q20,60 30,20');
  zodiacSign.setAttribute('stroke', '#000000');
  zodiacSign.setAttribute('fill', 'none');
  zodiacSign.setAttribute('stroke-width', '4');
  return zodiacSign;
}

function renderTransit(day, date) {
  const transit = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  transit.textContent = `Transit: ${date}`;
  return transit;
}

function renderDay(day) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.innerHTML = `
    <div class="date">${day}</div>
    <svg class="moon-phase" viewBox="0 0 100 100">
      ${renderLuna(day, date)}
      ${renderZodiacSign(day, date)}
    </svg>
    <div class="bottom-info">
      ${renderTransit(day, date)}
    </div>
  `;
  return dayElement;
}

function renderCalendar(year, month) {
  const days = new Array(7);
  for (let i = 0; i < 7; i++) {
    days[i] = i;
  }

  const daysInMonth = new Date(year, month - 1, 0).getDate();
  const daysOfMonth = new Array(daysInMonth);
  for (let i = 0; i < daysInMonth; i++) {
    daysOfMonth[i] = i + 1;
  }

  const calendar = document.createElement('div');
  calendar.classList.add('calendar');

  const weekdays = document.createElement('div');
  weekdays.classList.add('weekdays');
  weekdays.innerHTML = `
    ${['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, index) => `<div>${day}</div>`).join('')}
  `;

  const daysList = document.createElement('div');
  daysList.classList.add('days');
  daysList.innerHTML = `
    ${daysOfMonth.map((day) => renderDay(day)).join('')}
  `;

  calendar.appendChild(weekdays);
  calendar.appendChild(daysList);

  return calendar;
}

function renderCalendar(year, month) {
  const calendar = renderCalendar(year, month);
  return calendar;
}

const calendarElement = document.getElementById('calendar');
calendarElement.innerHTML = `
  <div class="header">ENERO 2025</div>
  ${renderCalendar(2025, 1)}
`;

// ...