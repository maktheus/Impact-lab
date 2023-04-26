function carregarImagem() {
    var imagem = document.getElementById('imagem').files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var imagemProcessada = document.getElementById('imagem-processada');
      imagemProcessada.src = event.target.result;
    };
    reader.readAsDataURL(imagem);
  }

  function aplicarFiltro() {
    var imagem = document.getElementById('imagem').files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      var imagemProcessada = document.getElementById('imagem-processada');
      imagemProcessada.src = event.target.result;
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var imagemOriginal = new Image();
      imagemOriginal.src = event.target.result;
      imagemOriginal.onload = function() {
        canvas.width = imagemOriginal.width;
        canvas.height = imagemOriginal.height;
        ctx.drawImage(imagemOriginal, 0, 0);
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;
        grayProcessing(pixels)
        ctx.putImageData(imageData, 0, 0);
        imagemProcessada.src = canvas.toDataURL();
      };
    };
    reader.readAsDataURL(imagem);
  }

  function grayProcessing(pixels){
    for (var i = 0; i < pixels.length; i += 4) {
        var r = pixels[i];
        var g = pixels[i + 1];
        var b = pixels[i + 2];
        var gray = (r + g + b) / 3;
        pixels[i] = gray;
        pixels[i + 1] = gray;
        pixels[i + 2] = gray;
      }
  }

  