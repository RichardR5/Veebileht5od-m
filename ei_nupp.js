document.getElementById('mustaks').addEventListener('click', function() {
  document.getElementById('mustekraan').style.display = 'block';
  document.getElementById('sonum').style.display = 'block';
  document.getElementById('sonum').innerHTML = "HALB VALIK PROOVI UUESTI";  

  setTimeout(function() {
      document.getElementById('mustekraan').style.display = 'none';
      document.getElementById('sonum').style.display = 'none';
  }, 1500); 
});