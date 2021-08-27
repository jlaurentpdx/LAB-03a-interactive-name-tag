const nameTag = document.getElementById('name-tag');
const nameElement = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const pronounsElement = document.getElementById('pronouns');
const pronounsInput = document.getElementById('pronouns-input');
const colorSelect = document.getElementById('color-select');
const fontSelect = document.getElementById('font-select');
const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', () => {   
    const name = nameInput.value; 
    const pronouns = pronounsInput.value;

    if(name !== '') {
        nameElement.textContent = name;
    } 

    if(pronouns === '') {
        pronounsElement.style.display = 'none';
    } else {
        pronounsElement.style.display = 'grid';
    }

    nameTag.style.background = colorSelect.value;
    nameElement.style.fontFamily = fontSelect.value; 
    pronounsElement.style.fontFamily = fontSelect.value;
    pronounsElement.textContent = pronouns;
});

