// ---------------------------
// Welcome Screen Transition
// ---------------------------
document.getElementById('welcome-page').classList.add('active');
setTimeout(() => {
  document.getElementById('welcome-page').classList.remove('active');
  document.getElementById('form-page').classList.remove('hidden');
  document.getElementById('form-page').classList.add('active');
}, 4000);

// ---------------------------
// Form Submit Event
// ---------------------------
document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);

  document.getElementById('form-page').classList.remove('active');
  document.getElementById('library-page').classList.remove('hidden');
  document.getElementById('library-page').classList.add('active');
  document.getElementById('welcomeUser').textContent = `வணக்கம் ${name}! இதோ உங்கள் நூலகம் 📚`;

  showCategories(age);
});

// ---------------------------
// Tamil Book Data (3×20 Books)
// ---------------------------
const booksData = {
  kids: [
    { title: "பஞ்சதந்திரக் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0193.pdf" },
    { title: "ஏசோப்பின் நீதிக் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0021.pdf" },
    { title: "தெனாலிராமன் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0133.pdf" },
    { title: "விக்கிரமாதித்தன் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0180.pdf" },
    { title: "சின்னஞ்சிறு கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0055.pdf" },
    { title: "நல்ல பழக்கக் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0290.pdf" },
    { title: "அம்மாவின் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0295.pdf" },
    { title: "மழலையர் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0230.pdf" },
    { title: "பாடல்களும் பழமொழிகளும்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0186.pdf" },
    { title: "நல்ல மனம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0210.pdf" },
    { title: "சின்ன தம்பி கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0198.pdf" },
    { title: "குழந்தைகள் கவிதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0200.pdf" },
    { title: "பூங்குழலி கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0248.pdf" },
    { title: "பாட்டும் பாடலும்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0188.pdf" },
    { title: "தமிழ் நாட்டுப் பழமொழிகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0241.pdf" },
    { title: "சின்ன சித்திரம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0215.pdf" },
    { title: "முருகன் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0232.pdf" },
    { title: "முல்லை மந்திரக் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0235.pdf" },
    { title: "நல்ல குழந்தை", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0253.pdf" },
    { title: "பாடல் தொகுப்பு", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0266.pdf" }
  ],

  teens: [
    { title: "திருக்குறள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0043.pdf" },
    { title: "சிலப்பதிகாரம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0001.pdf" },
    { title: "மணிமேகலை", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0002.pdf" },
    { title: "பொன்னியின் செல்வன்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0007.pdf" },
    { title: "சிவகாமியின் சபதம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0008.pdf" },
    { title: "பாரதியின் பாடல்கள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0036.pdf" },
    { title: "பாரதிதாசன் கவிதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0053.pdf" },
    { title: "திருக்குறள் விளக்கம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0040.pdf" },
    { title: "சுந்தர ராமசாமி கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0155.pdf" },
    { title: "சங்க இலக்கியம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0098.pdf" },
    { title: "கண்ணதாசன் பாடல்கள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0178.pdf" },
    { title: "புராணக் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0129.pdf" },
    { title: "தமிழ் வீரக் கதைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0159.pdf" },
    { title: "நாவல்கள் தொகுப்பு", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0209.pdf" },
    { title: "இளையோருக்கான சிந்தனை", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0170.pdf" },
    { title: "வள்ளுவரின் சிந்தனைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0112.pdf" },
    { title: "தமிழ் கவிதை மாலா", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0184.pdf" },
    { title: "சிந்தனை ஒளி", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0174.pdf" },
    { title: "பொன்மாலை", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0217.pdf" },
    { title: "சிறுகதை உலகம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0220.pdf" }
  ],

  adults: [
    { title: "திருவாசகம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0065.pdf" },
    { title: "திருப்பாவை", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0063.pdf" },
    { title: "வள்ளலார் திருவருட்பா", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0066.pdf" },
    { title: "பெரியாரின் சிந்தனைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0140.pdf" },
    { title: "அண்ணா உரைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0099.pdf" },
    { title: "சுப்பிரமணிய பாரதி கட்டுரைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0088.pdf" },
    { title: "திருமந்திரம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0111.pdf" },
    { title: "நாயனார் சரிதம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0072.pdf" },
    { title: "பாகவத கீதை", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0125.pdf" },
    { title: "மனித நேயம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0151.pdf" },
    { title: "தத்துவம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0137.pdf" },
    { title: "தமிழர் பண்பாடு", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0115.pdf" },
    { title: "சிந்தனை துளிகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0222.pdf" },
    { title: "அருமை வாழ்க்கை வழிகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0212.pdf" },
    { title: "இனிய சிந்தனைகள்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0182.pdf" },
    { title: "தமிழ் சிந்தனை இலக்கியம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0204.pdf" },
    { title: "வாழ்வியல் தத்துவம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0217.pdf" },
    { title: "நூல் அறிவியல்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0185.pdf" },
    { title: "தர்மம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0163.pdf" },
    { title: "பக்தி இலக்கியம்", url: "https://www.projectmadurai.org/pm_etexts/pdf/pm0153.pdf" }
  ]
};

// ---------------------------
// Show Books by Age
// ---------------------------
function showCategories(age) {
  const container = document.getElementById('categories');
  container.innerHTML = '';

  let selectedCategory = age < 13 ? 'kids' : age <= 19 ? 'teens' : 'adults';
  let books = booksData[selectedCategory];

  const catDiv = document.createElement('div');
  catDiv.className = 'category';
  catDiv.innerHTML = `<h3>${
    selectedCategory === 'kids'
      ? '👧 குழந்தைகளுக்கான புத்தகங்கள்'
      : selectedCategory === 'teens'
      ? '🧑‍🎓 இளையோருக்கான புத்தகங்கள்'
      : '👨‍🏫 முதிர்ந்தோருக்கான புத்தகங்கள்'
  }</h3>`;

  books.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    div.textContent = book.title;
    div.onclick = () => window.open(book.url, '_blank');
    catDiv.appendChild(div);
  });

  container.appendChild(catDiv);
}

