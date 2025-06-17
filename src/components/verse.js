import './style/Verse.css';


export default function Verse() {

  fetch('https://beta.ourmanna.com/api/v1/get/?format=json')
.then(response => response.json())
.then(data => {
  const verse = data.verse.details.text;
  const reference = data.verse.details.reference;
  document.getElementById('verse-text').innerText = verse;
  document.getElementById('verse-reference').innerText = reference + " NIV";
})
.catch(err => {
  document.getElementById('verse-text').innerText = "Failed to load verse.";
});


  return (
    <section id="verse-box">
    <h2>Verse of the Day</h2>
    <p id="verse-text">Loading...</p>
    <p id="verse-reference"></p>

  </section>
  );
}