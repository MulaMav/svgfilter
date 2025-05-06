// 获取 SVG 滤镜元素
const turbulence = document.getElementById("firstlayoutTurbulence");
const displacement = document.getElementById("firstlayoutDisplacement");

// 设置 baseFrequency 的 X 值（Y 值保持固定）
function setNoiseFrequencyX(freqX) {
  let currentY = parseFloat(turbulence.getAttribute("baseFrequency").split(" ")[1]) || 0.05;
  turbulence.setAttribute("baseFrequency", `${freqX} ${currentY}`);
}

// 设置噪声复杂度（numOctaves）
function setNoiseOctaves(octaves) {
  turbulence.setAttribute("numOctaves", octaves);
}

// 设置 displacement 位移强度
function setDisplacementScale(scale) {
  displacement.setAttribute("scale", scale);
}

// 设置 turbulence 的 seed
function setNoiseSeed(seed) {
  turbulence.setAttribute("seed", seed);
}