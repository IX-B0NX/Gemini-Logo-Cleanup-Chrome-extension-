const fileInput = document.getElementById('file-input');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Listen directly for when a file is selected
fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => removeWatermark(img);
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

function removeWatermark(img) {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  // Target bottom-right corner
  const patchSize = Math.floor(img.width * 0.1); 
  const startX = img.width - patchSize;
  const startY = img.height - patchSize;

  // Sample clean background color from right above the logo
  const cleanPixel = ctx.getImageData(startX, startY - 5, 1, 1).data;
  
  // Cover the watermark box
  ctx.fillStyle = `rgb(${cleanPixel[0]}, ${cleanPixel[1]}, ${cleanPixel[2]})`;
  ctx.fillRect(startX, startY, patchSize, patchSize);

  // Download
  const link = document.createElement('a');
  link.download = 'cleaned-image.png';
  link.href = canvas.toDataURL();
  link.click();
}