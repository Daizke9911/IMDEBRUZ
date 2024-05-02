const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


//hora

const dateTimeElement = document.getElementById('datetime');

function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('es-VE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = now.toLocaleTimeString('es-VE', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true  // Adjust for 12-hour format if needed
  });
  dateTimeElement.textContent = `${formattedDate} ${formattedTime}`;
}

updateDateTime();  // Call the function initially to display date and time
setInterval(updateDateTime, 1000); // Update every second for real-time