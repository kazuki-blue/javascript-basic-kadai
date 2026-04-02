const Btn = document.getElementById('btn');
const Text = document.getElementById('text');

Btn.addEventListener('click', () => {  
  // 作成したli要素に「これはリスト要素です」というテキストを追加する
  Text.textContent = 'ボタンをクリックしました';

});