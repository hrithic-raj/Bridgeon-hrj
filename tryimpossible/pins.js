function openPopup(content) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-text').innerText = content;
    document.querySelector('.popup-background').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.popup-background').style.display = 'none';
  }
  