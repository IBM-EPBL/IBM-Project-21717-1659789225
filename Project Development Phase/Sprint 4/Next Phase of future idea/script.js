const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Choose a college...", "Agro Paris Tech", "Aix-Marseille Universite", "Arizona State University Tempe", "Autonomous University of Barcelona", "Baylor College of Medicine", "Boston University", "Brown University", "Chinese University of Hong Kong", 
                 "Cardiff University", "California Institute of Technology", "Case Western Reserve University", "Columbia University", "Cornell University", "Delft University of Technology", "Duke University", "Eberhard Karls University of Tubingen", "Ecole Polytechnique Federale de Lausanne", "Emory University", "ETH Zurich", "Free University of Berlin", "Georgia Institute of Technology", "Ghent University",
                 "Harvard University", "Hong Kong Polytechnic University", "Humboldt University of Berlin", "Icahn School of Medicine at Mount Sinai", "Imperial College London", "Indian Institute of Technology Kharagpur", "International School for Advanced Studies", "John Hopkins University", "Johannes Gutenberg University of Mainz", "Karlsruhe Instiute of Technology", "King Abdulaziz University", "King's College London", "KU Leuven", 
                 "McMaster University", "Massachusetts Institute of Technology (MIT)", "Maastricht University", "Nanjing University of Information Science & Technology", "National Institute of Pharmaceutical Education & Research (NIPER)", "Nelson Mandela University", "Oklahoma State University - Stillwater", "Sapienza University Rome",
                 "Thammasat University", "Universidad Nacional Autonoma de Mexico", "R.M.K. Engineering College", "Sri Sivasubramaniya Nadar College", "SRM University Kattankulathur", "PSG College Of Technology", "Anna University Chennai", "Queen Mary University London",
                 "Sapienza University Rome", "Technical University of Denmark", "University of Manchester", "University of Maryland College Park", "University of Munich", "University of Wisconsin Madison", "Weizmann Institute of Science", "Zhejiang Normal University"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! College not found. Please Enter Correct Name.</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));