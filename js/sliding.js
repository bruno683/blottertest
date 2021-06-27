const text = new Blotter.Text('Open',{
  //code here
  family: 'serif',
  size: '150',
  fill: '#fff',
  paddingLeft: 10,
  paddingRight: 50,
})

const material = new Blotter.SlidingDoorMaterial();

material.uniforms.uDivisions.value = 13;
material.uniforms.uDivisionWidth.value = 0.2;
material.uniforms.uAnimateHorizontal.value = 1;
material.uniforms.uFlipAnimationDirection.value = 0;
material.uniforms.uSpeed.value = 0.25;

const blotter = new Blotter(material, {
  texts: text,
})

const scope = blotter.forText(text);
const element = document.getElementById('slide');
scope.appendTo(element);