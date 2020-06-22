$(function(){
  var dataBox = new DataTransfer();
  var file_field = document.querySelector('input[type=file]')
  $('#img-file').change(function(){
    var file = $('input[type="file"]').prop('files')[0];
    $.each(this.files, function(i, file){
      var fileReader = new FileReader();
      dataBox.items.add(file)
      file_field.files = dataBox.files

      var num = $('.item-image').length + 1 + i
      fileReader.readAsDataURL(file);
      if(num == 10){
        $('#image-box__container').css('display','none')
      }

      fileReader.onloadend = function() {
        var src = fileReader.result
        var html = `<div class='item-image' data-image="${file.name}">
                      <div class=' item-image__content'>
                        <div class='item-image__content--icon'>
                          <img src=${src} width="114" height="80" >
                        </div>
                      </div>
                      <div class='item-image__operetion'>
                        <div class='item-image__operetion--delete'>削除</div>
                      </div>
                    </div>`
        $('#image-box__container').before(html);
      };
      $('#image-box__container').attr('class', 'item-num-${num}')
     });
   });

   $(document).on("click", '.item-image__operetion--delete', function(){
     var target_image = $(this).parent().parent()
       target_image.remove();
       file_field.var("")
    })
});

  // var file_field = document.querySelector('image-box')
  // $('#previews').change(function(){
  //   var file = $('image-box').prop('files')[0];
  //   var fileReader = new FileReader();
  //   fileReader.onloadend = function(){
  //     var src = fileReader.result
  //     var html = `<img src="${src}" width="114" height="80">`
  //     $('.js-file').before(html);
  //   }
  //   fileReader.readAsDataURL(file);
  // });


// $(function () {
//   // 画像用のinputを生成する関数
//   const buildFileField = (num)=> {
//     const html = `<div data-index="${num}" class="js-file_group">
//                   <input class="js-file" type="file"
//                   name="item[item_images_attributes][${num}][image]"
//                   id="item_images_attributes_${num}_image"><br>
//                   <div class="js-remove">削除</div>
//                   </div>`;
//     return html;
//   }
//   // プレビュー用のimgタグを生成する関数
//   const buildImg = (index, url)=> {
//     const html = `<img data-index="${index}" src="${url}" width="120px" height="120px">`;
//     return html;
//   }

//   // file_fieldのnameに動的なindexをつける為の配列
//   let fileIndex = [1,2,3,4,5,6,7,8,9,10];
//   // 既に使われているindexを除外
//   lastIndex = $('.js-file_group:last').data('index');
//   fileIndex.splice(0, lastIndex);

//   $('.hidden-destroy').hide();

//   $('#image-box').on('change', '.js-file', function(e) {
//     const targetIndex = $(this).parent().data('index');
//     // ファイルのブラウザ上でのURLを取得する
//     const file = e.target.files[0];
//     const blobUrl = window.URL.createObjectURL(file);

//     // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
//     if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
//       img.setAttribute('src', blobUrl);
//     } else {  // 新規画像追加の処理
//       $('#previews').append(buildImg(targetIndex, blobUrl));
//       // fileIndexの先頭の数字を使ってinputを作る
//       $('#image-box').append(buildFileField(fileIndex[0]));
//       fileIndex.shift();
//       // 末尾の数に1足した数を追加する
//       fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
//     }
//   });

//   $('#image-box').on('click', '.js-remove', function() {
//     const targetIndex = $(this).parent().data('index');
//     // 該当indexを振られているチェックボックスを取得する
//     const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
//     // もしチェックボックスが存在すればチェックを入れる
//     if (hiddenCheck) hiddenCheck.prop('checked', true);

//     $(this).parent().remove();
//     $(`img[data-index="${targetIndex}"]`).remove();

//     // 画像入力欄が0個にならないようにしておく
//     if ($('.js-file').length == 0) $('#previews').append(buildFileField(fileIndex[0]));
//   });
// });


// $(function(){
//   $('#price_calc').on('input', function(){   //リアルタイムで表示したいのでinputを使う｡入力の度にイベントが発火するようになる｡
//     var data = $('#price_calc').val(); // val()でフォームのvalueを取得(数値)
//     var profit = Math.round(data * 0.9)  // 手数料計算を行う｡dataにかけているのが0.9なのは単に引きたい手数料が10%のため｡
//     var fee = (data - profit) // 入力した数値から計算結果(profit)を引く｡それが手数料となる｡
//     $('.fee_data').html(fee) //  手数料の表示｡html()は追加ではなく､上書き｡入力値が変わる度に表示も変わるようにする｡
//     $('.fee_data').prepend('¥') // 手数料の前に¥マークを付けたいので
//     $('.profit_data').html(profit)
//     $('.profit_data').prepend('¥')
//     if(profit == '') {   // もし､計算結果が''なら表示も消す｡
//     $('.profit_data').html('');
//     $('.fee_data').html('');
//     }
//   })
// })
