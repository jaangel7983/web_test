//宣告變數 讓其他檔案可以使用

//快速開始 
// var data=1;
// module.exports=data;

//方法一 exports新增屬性
// exports.data=2;
// exports.bark=function(){
//     return 'bark!';
// }
//方法二 直接創建物件覆蓋module.exports
var data=2;
module.exports= {
    data:data,
    bark:function(){return 'bark!'}
}

