// ===== STATES ARRAY =====
const states = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue",
  "Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu",
  "Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi",
  "Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo",
  "Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT - Abuja"
];

// Populate states dropdown
const stateSelect = document.getElementById("state");
states.forEach(state => {
    let option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

// ===== FORM SUBMISSION =====
const regForm = document.getElementById("regForm");
regForm.addEventListener("submit", function(e){
    e.preventDefault();

    let volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];

    let data = {
        fullname: document.getElementById("fullname").value,
        passportNo: document.getElementById("passportNo").value,
        nin: document.getElementById("nin").value,
        state: document.getElementById("state").value,
        lga: document.getElementById("lga").value,
        nextOfKin: document.getElementById("nok").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        qualification: document.getElementById("qualification").value,
        maritalStatus: document.getElementById("marital").value,
        status: "Pending"
    };

    volunteers.push(data);
    localStorage.setItem("volunteers", JSON.stringify(volunteers));

    // Show popup properly
    const popup = document.getElementById("successPopup");
    popup.classList.add("show");           // Add show class to fade in
    setTimeout(() => popup.classList.remove("show"), 3000); // Remove after 3s

    this.reset();

    // Update dashboards if functions exist
    if(typeof loadAdminTable === "function") loadAdminTable();
});
