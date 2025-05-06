// 控制 baseFrequency 的 X 值
document.getElementById("filterControlOne").addEventListener("input", e => {
    const newValue = e.target.value;
    setNoiseFrequencyX(newValue);
  });
  
  // 控制 turbulence 的 seed
  document.getElementById("filterControlTwo").addEventListener("input", e => {
    const newValue = e.target.value;
    setNoiseSeed(newValue);
  });
  
  // 控制 displacement 的 scale
  document.getElementById("filterControlThree").addEventListener("input", e => {
    const newValue = e.target.value;
    setDisplacementScale(newValue);
  });
  
  // 控制 turbulence 的复杂度（numOctaves）
  document.getElementById("filterControlFour").addEventListener("input", e => {
    const newValue = e.target.value;
    setNoiseOctaves(newValue);
  });