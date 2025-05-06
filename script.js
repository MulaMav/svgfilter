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
  
  


  
  // 默认值定义
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
    multiplierControl:1.5






  };
  
  document.getElementById("resetButton").addEventListener("click", () => {
    for (const id in defaultValues) {
      const input = document.getElementById(id);
      const value = defaultValues[id];
      input.value = value;
  
      // 手动触发 input 事件以更新滤镜
      input.dispatchEvent(new Event("input"));
  
      // 更新显示数值（如果你使用了 span 来展示当前值）
      const valueSpan = document.getElementById("value" + id.slice(-1));
      if (valueSpan) valueSpan.textContent = value;
    }
  });

  window.addEventListener("load", () => {
    document.getElementById("resetButton").click();
  });