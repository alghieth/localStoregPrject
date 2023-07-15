// Select Elements
let allSpans = document.querySelectorAll('.buttons span');
let results = document.querySelector('.results > span');
let theInput = document.getElementById('the-input');

allSpans.forEach(span => {
    span.addEventListener('click', (e) => {
        if (e.target.classList.contains("chek-item")) {
            chekItem();
        };
        if (e.target.classList.contains("add-item")) {
            addItem();
        };
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        };
        if (e.target.classList.contains("show-item")) {
            showItem();
        };
    })
})


function showMessage() {
        results.innerHTML = 'Input Cant Be Empty';
}

function chekItem() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            results.innerHTML = `Found Local Item Called <span>${theInput.value}</span>`;
        } else {
            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`;
        }
    } else {
        showMessage();
    }

};
function addItem() {
    if (theInput.value !== '') {
        localStorage.setItem(theInput.value, "Test");
        results.innerHTML = `local Storage Item <span>${theInput.value}</span> Added`
        theInput.value = '';
    } else {
        showMessage();
    }
};
function deleteItem() {
    if (theInput.value !== '') {
        if (localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Storage Item Called <span>${theInput.value}</span> Deleted`;
            theInput.value = '';
        } else {
            results.innerHTML = `No Local Storage Item With The Name <span>${theInput.value}</span>`
        }

    } else {
        showMessage();
    }
};
function showItem() {
    if (localStorage.length) {
        // console.log(`Found Elements ${localStorage.length}`);
        results.innerHTML = '';
        for (let [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span class="keys">${key}</span>`
        }
    } else {
        results.innerHTML = 'Local Storage Is Empty';
    }
};