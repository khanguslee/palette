const viewportHeight = document.documentElement.clientHeight;
const svgHeight = viewportHeight - 200;
const svg = d3.select('#svg-palette')
  .append('svg')
  .attr('width', '100%')
  .attr('height', svgHeight);

function renderColours(saturation, lightness) {
  const numberOfColours = 36;
  const svgRectHeight = svgHeight / numberOfColours;

  for (let index = 0; index < numberOfColours; index += 1) {
    const hue = (360 / numberOfColours) * index;
    svg.append('rect')
      .attr('width', '100%')
      .attr('height', svgRectHeight)
      .attr('fill', d3.hsl(hue, saturation, lightness))
      .attr('transform', `translate(0, ${svgRectHeight * index})`);
  }
}

function clearSVG() {
  d3.selectAll('rect').remove();
}

function sliderChange() {
  const saturationSlider = document.getElementById('saturationRange');
  const lightnessSlider = document.getElementById('lightnessRange');

  const saturation = saturationSlider.value;
  const lightness = lightnessSlider.value;

  // Re-render the colours
  clearSVG();
  renderColours(saturation, lightness);

  // Output value as text
  document.getElementById('saturationText').innerHTML = saturation;
  document.getElementById('lightnessText').innerHTML = lightness;
}

renderColours(0.5, 0.5);
