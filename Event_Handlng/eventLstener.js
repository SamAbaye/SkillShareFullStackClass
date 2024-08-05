document.getElementById('button').addEventListener('mousedown', function() {
    this.style.backgroundColor = 'red';
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

const div = document.getElementById('trail');
const trailQueue = [];

div.addEventListener('mousemove', function(event){

  const trail = document.createElement('div');
  
  trail.style.position = 'fixed';
  trail.style.left = `${event.clientX}px`;
  trail.style.top = `${event.clientY}px`;
  trail.style.width = '10px';
  trail.style.height = '10px';
  trail.style.backgroundColor = 'red';
  trail.style.borderRadius = '50%';
  trail.style.pointerEvents = 'none';
  
  div.append(trail);
  trailQueue.push(trail);

});

function deleteOldTrail(){
  if(trailQueue.length > 0) {
    const oldestTrail = trailQueue.shift();
    if(oldestTrail.parentNode){
      oldestTrail.parentNode.removeChild(oldestTrail);
    }
  }
};

setInterval(deleteOldTrail, 20);