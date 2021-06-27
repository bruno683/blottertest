const text = new Blotter.Text('Watter', {
  family: 'serif',
  size: '170',
  fill: '#BAFAC7',
  marginBottom: 10,
})

const material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.5;
material.uniforms.uVolatility.value = 0.15;
material.uniforms.uSeed.value = 0.1;

const blotter = new Blotter(material, {
  texts: text,
})

const scope = blotter.forText(text);
const element = document.getElementById('water');
scope.appendTo(element);