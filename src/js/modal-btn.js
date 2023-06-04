// One modal for multiple buttons
var modal = document.getElementById('modal-1');

var btn = document.getElementsByClassName("modal-open");

var close = document.getElementsByClassName("modal-close")[0];

btn[0].onclick = function() {
  modal.style.display = "block";
};

btn[1].onclick = function() {
  modal.style.display = "block";
};

close.onclick = function() {
modal.style.display = "none";
}

// Multiple modals
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'backdrop') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal')) {
        var modal = document.querySelector('[class="backdrop open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);
