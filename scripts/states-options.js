const stateNames = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington DC", "Washington State", "West Virginia", "Wisconsin", "Wyoming", "Other"
];

const checkboxContainer = document.getElementById("checkbox-container");

stateNames.forEach(state => {
    const div = document.createElement("div");
    div.classList.add("subject-option");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `donate-${state.toLowerCase().replace(/\s/g, '-')}`;
    input.name = `donate-${state.toLowerCase().replace(/\s/g, '-')}`;
    input.value = `donate-${state.toLowerCase().replace(/\s/g, '-')}`;

    const label = document.createElement("label");
    label.classList.add("subject-option-text");
    label.htmlFor = `donate-${state.toLowerCase().replace(/\s/g, '-')}`;
    label.textContent = state;

    div.appendChild(input);
    div.appendChild(label);

    checkboxContainer.appendChild(div);
});

