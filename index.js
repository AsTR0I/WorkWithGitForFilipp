document.addEventListener('DOMContentLoaded', () => {
    var inputText = document.querySelector('.inputText');
    var btn = document.querySelector('.btn');
  
    btn.addEventListener('click', () => {
      var text = inputText.value;
      var newWindow = window.open();
      newWindow.document.write(text);
    });
  });
  