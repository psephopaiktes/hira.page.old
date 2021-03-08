// 特定の画像読み込み時にフェードアニメーション

const lazyImages = () => {
  var images = document.getElementsByClassName("js-lazy");

  for (var i = 0; i < images.length; i++) {
    var LoadImage = new Image();
    const $DOMImage = images[i];

    LoadImage.onload = () => {
      $DOMImage.src = $DOMImage.dataset.src;
      $DOMImage.classList.add("load");
    };
    LoadImage.src = images[i].dataset.src;
  }
};

export { lazyImages };
