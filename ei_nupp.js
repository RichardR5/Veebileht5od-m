// Võtab elemendi id-ga 'mustaks' ja lisab sellele event listeneri 'click' eventi jaoks
document.getElementById('mustaks').addEventListener('click', function() {
  // Kui nupule klõpsatakse, kuvab musta ekraani ja sõnumit
  document.getElementById('mustekraan').style.display = 'block';
  document.getElementById('sonum').style.display = 'block';

  // Määrab sõnumi sisu
  document.getElementById('sonum').innerHTML = "HALB VALIK, PROOVI UUESTI";

  // Kasutab setTimeout funktsiooni, et must ekraan püsiks 1500ms (1,5 sekundit)
  setTimeout(function() {
    // Pärast 1.5 sekundit must ekraan koos sõnumiga kaob (sest display = 'none')
    document.getElementById('mustekraan').style.display = 'none';
    document.getElementById('sonum').style.display = 'none';
  }, 1500);
});

// Selle koodi autoriks on Richard-Sven Rivik