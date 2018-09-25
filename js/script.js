$(function () {
  var hbs = Handlebars;
  var GETCLASSES = "http://imoocnote.calfnote.com/inter/getClasses.php";

  $.getJSON(GETCLASSES, { curPage: 1 }, function (data) {
    console.log(data);
    render('class-template', 'classes', data.data)
  });

  // 模板渲染函数
  function render(templateId, targetId, data) {
    // 获取模板内容
    let templateContent = $('#' + templateId).html();
    // 根据模板内容生成渲染函数
    let templateCompile = hbs.compile(templateContent);
    // 传入数据生成html
    let htmlContent = templateCompile(data);
    // 插入目标元素
    $('#' + targetId).html(htmlContent);
  };

  hbs.registerHelper('equal', function (v1, v2, options) {
    return v1 == v2 ? options.fn(this) : options.inverse(this);
    // if(v1==v2){
    //   return options.fn(this)
    // }
  });
  hbs.registerHelper('long', function(value,options){
    if(value.indexOf('小时') != -1){
      return options.fn(this);
    }else{
      return options.inverse(this);
    };
  });
});