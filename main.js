// DOMの読み込み終了時の処理を登録
window.addEventListener('DOMContentLoaded', function() {
	// id="calc" のボタンを1つ選択
	let elCalc = document.querySelector('#calc');

	// ボタンをクリックしたときの処理を追加
	elCalc.addEventListener('click', function() {
	    // class="price" 要素（各桁）を全て選択
	    let values = document.querySelectorAll('.value');
	    let sum = 0;	// 合計用の変数
	    for (let i = 0; i < values.length; i ++) {
		if(values[i].checked){
		    val = 1;　// 珠が上がっている桁の数値を得る
		}
		else val = 0;　// 珠が上がっていない桁は数値を0に設定
		// 値を10進数にして加算
		sum += val * parseInt(Math.pow(2, values.length-1-i));
	    }

	    // 表示用のHTML文字列を作る
	    let html = '2進数 : <strong>'+ sum.toString(2) +
			'</strong> <br>十進数 : <strong> '
			+ sum +
			'</strong> ';

	    // id="output" の要素にHTML文字列を追加
	    document.querySelector('#output').innerHTML = html;
	}); // End elcalc.addEventListener
}); // End window.addEventListener
