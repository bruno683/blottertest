const text =new Blotter.Text('Signals', {
  family: 'serif',
  size: '150',
  fill: '#000',
  paddingLeft: 10,
  paddingRight: 50,
})

const material = new Blotter.ChannelSplitMaterial();

material.uniforms.uOffset.value = 0.05;
material.uniforms.uRotation.value = 50;
material.uniforms.uApplyBlur.value = 1;// 0= false, 1 = true
material.uniforms.uAnimateNoise.value = .8;

const blotter = new Blotter(material, {
  texts: text,
})

const scope = blotter.forText(text);
const element = document.getElementById('channel');
scope.appendTo(element);