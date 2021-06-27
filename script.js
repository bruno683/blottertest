let text = new Blotter.Text('Ants !', {
  family: 'serif',
  size: '150',
  fill: 'white',
})

const material = new Blotter.fliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = 0.8;
material.uniforms.uSpeed.value = 5;


const blotter = new Blotter(material,{
  texts : text,
})

const scope = blotter.forText(text);
let element = document.getElementById('ants');
scope.appendTo(element);