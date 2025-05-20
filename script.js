document.getElementById("filterControlOne1").addEventListener("input", e => {
    const newValue = e.target.value;
    document.getElementById("valueOne").textContent = newValue;
    setNoiseFrequencyX(newValue);
  });
  
  document.getElementById("filterControlOne2").addEventListener("input", e => {
    const newValue = e.target.value;
    document.getElementById("valueTwo").textContent = newValue;
    setNoiseSeed(newValue);
  });
  
  document.getElementById("filterControlOne3").addEventListener("input", e => {
    const newValue = e.target.value;
    document.getElementById("valueThree").textContent = newValue;
    setDisplacementScale(newValue);
  });
  
  document.getElementById("filterControlOne4").addEventListener("input", e => {
    const newValue = e.target.value;
    document.getElementById("valueFour").textContent = newValue;
    setNoiseOctaves(newValue);
  });

  document.getElementById("noiseTypeControl").addEventListener("change", e => {
    const newType = e.target.value;
    setNoiseType(newType);
  });

  // Glow Size
document.getElementById("glowSizeControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueGlowSize").textContent = v;
    setGlowSize(v);
  });
  
  // Glow Spread
  document.getElementById("glowSpreadControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueGlowSpread").textContent = v;
    setGlowSpread(v);
  });
  
  // Threshold
  document.getElementById("thresholdControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueThreshold").textContent = v;
    setThreshold(v);
  });
  
  // Glow Color
  document.getElementById("glowColorControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueGlowColor").textContent = v;
    setGlowColor(v);
  });
  
  // Glow Opacity
  document.getElementById("glowOpacityControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueOpacity").textContent = v;
    setGlowOpacity(v);
  });
  
  // Red Offset
document.getElementById("redOffsetControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueRed").textContent = v;
    setRedOffset(v);
  });
  
  // Green Offset
  document.getElementById("greenOffsetControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueGreen").textContent = v;
    setGreenOffset(v);
  });
  
  // Blue Offset
  document.getElementById("blueOffsetControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueBlue").textContent = v;
    setBlueOffset(v);
  });
  
  // Global Strength (multiplier)
  document.getElementById("multiplierControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueMultiplier").textContent = v;
    setGlobalStrength(v);
  });
  
  // Glitch Mode (fun select)
  document.getElementById("glitchModeControl").addEventListener("change", e => {
    const v = e.target.value;
    setGlitchMode(v);
  });
  
  document.getElementById("wcDispControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueDisp").textContent = v;
    setWatercolorDisplacement(v);
  });
  
  // Blur
  document.getElementById("wcBlurControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueBlur").textContent = v;
    setWatercolorBlur(v);
  });
  
  // Saturation
  document.getElementById("wcSatControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueSat").textContent = parseFloat(v).toFixed(1);
    setWatercolorSaturation(v);
  });
  
  // Contrast
  document.getElementById("wcContrastControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueContrast").textContent = parseFloat(v).toFixed(1);
    setWatercolorContrast(v);
  });

  document.getElementById("wcTextureControl").addEventListener("input", e => {
    const v = e.target.value;
    document.getElementById("valueTexture").textContent = v;
    setWatercolorTexture(v);
  });
  


  
  
  const defaultValues = {
    filterControlOne1: 0.05,
    filterControlOne2: 1,
    filterControlOne3: 0,
    filterControlOne4: 1,
    glowSizeControl:1,
    glowSpreadControl:1,
    thresholdControl:1,
    glowOpacityControl:0,
    redOffsetControl:0,
    greenOffsetControl:0,
    blueOffsetControl:0,
    multiplierControl:1.5,
    wcDispControl:0, 
    wcBlurControl:0,
    wcSatControl:1,
    wcContrastControl:1,
    wcTextureControl:0.03






  };
  
  document.getElementById("resetButton").addEventListener("click", () => {
    for (const id in defaultValues) {
      const input = document.getElementById(id);
      const value = defaultValues[id];
      input.value = value;
  
   
      input.dispatchEvent(new Event("input"));
  
      
      const valueSpan = document.getElementById("value" + id.slice(-1));
      if (valueSpan) valueSpan.textContent = value;
    }
  });

  window.addEventListener("load", () => {
    document.getElementById("resetButton").click();
  });

  const uploadInput = document.getElementById('uploadImage');
uploadInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const container = document.querySelector('.overlay .container');
   
    container.style.display = 'block';
    container.style.maxWidth = '70vw';
    container.style.margin = '-20px auto';
    
    container.innerHTML = `
      <img
        src="${ev.target.result}"
        alt="uploaded"
        class="pic"
        style="
          width: 100%;
          height: auto;
          filter:
            url(#noise)
            url(#bloomFilter)
            url(#glitchFilter)
            url(#watercolorFilter);
        "
      />
    `;
  };
  reader.readAsDataURL(file);
});

const oldBtn = document.getElementById('downloadButton');
const downloadBtn = oldBtn.cloneNode(true);
oldBtn.parentNode.replaceChild(downloadBtn, oldBtn);


downloadBtn.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();

  const img = document.querySelector('.overlay .container img');
  if (!img) return;

  
  const { width, height } = img.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;


  const origSvg = document.getElementById('filterSvg');
  if (!origSvg) {
    console.error('cannot find filterSvg');
    return;
  }
  const defs = origSvg.querySelector('defs').cloneNode(true);


  const SVG_NS   = 'http://www.w3.org/2000/svg';
  const XLINK_NS = 'http://www.w3.org/1999/xlink';
  const svgEl = document.createElementNS(SVG_NS, 'svg');
  svgEl.setAttribute('xmlns', SVG_NS);
  svgEl.setAttribute('xmlns:xlink', XLINK_NS);
  svgEl.setAttribute('width',  width);
  svgEl.setAttribute('height', height);
  svgEl.appendChild(defs);

  const svgImg = document.createElementNS(SVG_NS, 'image');
  svgImg.setAttribute('width',  width);
  svgImg.setAttribute('height', height);
  svgImg.setAttributeNS(XLINK_NS, 'href', img.src);

  
  let filterValue = '';
  const styleAttr = img.getAttribute('style') || '';
  const m = styleAttr.match(/filter\s*:\s*([^;]+);/);
  filterValue = m ? m[1] : window.getComputedStyle(img).getPropertyValue('filter');
  svgImg.setAttribute('filter', filterValue);

  svgEl.appendChild(svgImg);

 
  const svgStr  = new XMLSerializer().serializeToString(svgEl);
  const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
  const url     = URL.createObjectURL(svgBlob);

 
  const canvas = document.createElement('canvas');
  canvas.width  = width  * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const raster = new Image();
  raster.onload = () => {
    ctx.drawImage(raster, 0, 0);
    URL.revokeObjectURL(url);

   
    const pngUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = pngUrl;
    a.download = 'edited-image.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  raster.onerror = err => {
    URL.revokeObjectURL(url);
    console.error('Rasterize SVG fail', err);
  };
  raster.src = url;

});

