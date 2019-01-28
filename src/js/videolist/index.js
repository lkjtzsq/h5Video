const itemHtml = require('./itemlist.html');
require('./index.css');
export  default class VideoList
{
	static setup(list)
	{
		// console.log(list);
		var $liveTitle=list.title;
		var $liveTimeCount=list.publish_date;
		var $liveViewCount=list.read_cnt;
		var $liveTxt=list.content;
		$('.live-title').html($liveTitle);
		$('.live-time-count').html($liveTimeCount);
		$('.live-view-count').html($liveViewCount);
		$('.live-txt').html($liveTxt);
	}
}
