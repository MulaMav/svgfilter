// 获取 SVG 滤镜元素
const turbulence = document.getElementById("firstlayoutTurbulence");
const displacement = document.getElementById("firstlayoutDisplacement");
const bloomFunc  = document.getElementById("bloomFunc");    // feFuncA 节点
const bloomBlur  = document.getElementById("bloomBlur");    // feGaussianBlur 节点
const bloomColor = document.getElementById("bloomColor");   // feFlood 节点
const redOffsetNode   = document.getElementById("redOffset");
const greenOffsetNode = document.getElementById("greenOffset");
const blueOffsetNode  = document.getElementById("blueOffset");


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

function setNoiseType(type) {
    turbulence.setAttribute("type", type);
  }


function setGlowSize(v) {
    bloomBlur.setAttribute("stdDeviation", v);
  }
  
  function setGlowSpread(spread) {
    const base = parseFloat(document.getElementById("glowSizeControl").value);
    bloomBlur.setAttribute("stdDeviation", base * spread);
  }
  
  function setThreshold(v) {
    bloomFunc.setAttribute("intercept", -v);
  }
  
  function setGlowColor(c) {
    bloomColor.setAttribute("flood-color", c);
  }
  
  function setGlowOpacity(o) {
    bloomColor.setAttribute("flood-opacity", o);
  }

  let redBase = 0, greenBase = 0, blueBase = 0;
let globalStrength = 1;
let glitchMode = 'horizontal';

/**
 * 根据当前状态，计算并应用 dx,dy 到三个通道
 */
function applyOffsets() {
  // 计算单通道偏移
  function compute(v) {
    const amt = v * globalStrength;
    if (glitchMode === 'horizontal') {
      return [amt, 0];
    } else if (glitchMode === 'vertical') {
      return [0, amt];
    } else { // random
      const rnd = () => (Math.random() * 2 - 1) * Math.abs(amt);
      return [rnd(), rnd()];
    }
  }

  const [rx, ry] = compute(redBase);
  const [gx, gy] = compute(greenBase);
  const [bx, by] = compute(blueBase);

  redOffsetNode.setAttribute('dx', rx);
  redOffsetNode.setAttribute('dy', ry);

  greenOffsetNode.setAttribute('dx', gx);
  greenOffsetNode.setAttribute('dy', gy);

  blueOffsetNode.setAttribute('dx', bx);
  blueOffsetNode.setAttribute('dy', by);
}

// 以下函数供 script.js 调用，每次调用都会更新内部状态并重新应用偏移

function setRedOffset(v) {
  redBase = parseFloat(v);
  applyOffsets();
}

function setGreenOffset(v) {
  greenBase = parseFloat(v);
  applyOffsets();
}

function setBlueOffset(v) {
  blueBase = parseFloat(v);
  applyOffsets();
}

function setGlobalStrength(v) {
  globalStrength = parseFloat(v);
  applyOffsets();
}

function setGlitchMode(v) {
  glitchMode = v;
  applyOffsets();
}