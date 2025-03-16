document.getElementById('projects').addEventListener('click', function() {
  toggleWindow('window1'); 
});
document.getElementById('xbutton').addEventListener('click', function() {
  toggleWindow('window1'); 
});


function toggleWindow(windowId) {
  const window = document.getElementById(windowId);
  if (window.style.display === 'none' || window.style.display === '') {
    window.style.display = 'block';
  } else {
    window.style.display = 'none';
  }
}

