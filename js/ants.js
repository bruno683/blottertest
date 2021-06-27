
const text = new Blotter.Text('Fourmis !', {
  family: 'serif',
  size: '170',
  fill: 'white',
})

const material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value= 0.013;
material.uniforms.uPointRadius.value = .9;
material.uniforms.uSpeed.value = 6;


const blotter = new Blotter(material, {
  texts: text,
})

const scope = blotter.forText(text);
let element = document.getElementById('ants');
scope.appendTo(element);
