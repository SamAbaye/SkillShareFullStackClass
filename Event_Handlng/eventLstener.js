document.getElementById('button').addEventListener('mousedown', function() {
    th.style.backgroundColor = 'red';
});

const div1 = document.getElementById('main');
div1.addEventListener('mouseover', function() {
    div1.style.borderBlockColor = 'red';
});

div1.addEventListener('mouseleave', function() {
    div1.style.borderBlockColor = 'green';
});

const p1 = document.getElementById('edit');
const div2 = document.getElementById('edit-div');
div2.addEventListener('mousemove', function(event) {
    p1.textContent = (`Mouse moved to (${event.clientX}, ${event.clientY})`);
});


document.addEventListener('keydown', function(event) {
   document.getElementById('new').textContent = (`Key pressed: ${event.key}`);
});

// const draw = document.getElementById('table');
// addEventListener('mousemove', function(event) {
    
//     p1.textContent = (`Mouse moved to (${event.clientX}, ${event.clientY})`);
// });
