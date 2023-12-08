import './style.css'
import 'quill/dist/quill.snow.css'
import { analyser } from './analyser';
import Quill from 'quill'


let html = String.raw;

document.querySelector('#app').innerHTML = html`
  <div>
    <h1>Paste a Text and let it be Analyzed</h1>
    <div>
      <div id="editor"></div>
      <div id="analyze-result"></div>
    </div>
  </div>
`
let analyze = document.querySelector("#analyze-result")
let quill = new Quill('#editor', {
  theme: 'snow'
});

quill.on('text-change', function(delta, oldDelta, source) {
  let analyzed = analyser(quill.getText());

  analyze.innerHTML =html`
  <span>words : ${analyzed.words}</span>
  <span>language : ${analyzed.language}</span>
  <span>chars : ${analyzed.chars}</span>
  <span>wordsigns : ${analyzed.wordsigns}</span>
  <span>reading time : ${analyzed.readingTime}</span>
  `

});

