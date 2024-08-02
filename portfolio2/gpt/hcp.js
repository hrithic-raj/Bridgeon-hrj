document.querySelectorAll('.progress-circle').forEach(function(circle) {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
    circle.querySelector('.progress-number').textContent = percentage + '%';
});
