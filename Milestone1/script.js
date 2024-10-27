var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
//event listner = it waits until user click//
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
