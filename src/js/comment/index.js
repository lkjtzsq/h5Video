const itemHtml2 = require("./comment-list-item.html");
require("./index.css");
export default class Comment {
  static setUp($wrapper, list) {
    list.forEach(function(item, index) {
      let $item2 = $(itemHtml2);
      let $upic = $item2.find('.utou');
      let $uname = $item2.find('.uname');
      let $utalk = $item2.find('.utalk');
      let $utime = $item2.find('.utime');
      let $agreeCount = $item2.find('.agreeCount');
      $upic.attr('src', item.upic);
      $uname.html(item.uname);
      $utalk.html(item.utalk);
      $utime.html(item.utime);
      $agreeCount.html(item.agreeCount);
      $wrapper.append($item2);
    });
  }
}
