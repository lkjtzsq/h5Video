import Header from './js/header'
import VideoPlayer from './js/videoplayer';
import VideoList from './js/videolist';
import Comment from './js/comment';
import Favoriate from './js/favoriate';
import CommentSender from './js/commentsender';
import util from './js/util';

require('./css/index.css');
var comment, favoriate;
$(() => {
  var aaa='22';
  function getVideoData() {
    var videoData={};
    $.ajax({ 
      url: 'http://a1.cyol.com/video/detail',
      async:false,
      type: 'post',
      dataType: "jsonp",
      jsonp: "callback",
      data: {
        key_id: 16
      },
      success: function(data) {
        videoData.avatar_path=data.data.avatar_path;
        videoData.content=data.data.content;
        videoData.label=data.data.label;
        videoData.nickname=data.data.nickname;
        videoData.publish_date=data.data.publish_date;
        videoData.read_cnt=data.read_cnt;
        videoData.title=data.data.title;
        aaa=data.data.video_url;
        VideoList.setup({
          title:data.data.title,
          publish_date:data.data.publish_date,
          read_cnt:data.data.read_cnt,
          content:data.data.content,
        });
      }
    })
  }
  getVideoData();
  console.log(aaa)
  var player = new VideoPlayer({
    "id": "J_prismPlayer",
    "source": "",
    "width": "100%",
    "height": "250px",
    "autoplay": false,
    "isLive": false,
    "cover": "http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png",
    "rePlay": false,
    "playsinline": true,
    "preload": true,
    "controlBarVisibility": "hover",
    "useH5Prism": true,
    "skinLayout": [{
        "name": "H5Loading",
        "align": "cc"
      },
      {
        "name": "errorDisplay",
        "align": "tlabs",
        "x": 0,
        "y": 0
      },
      {
        "name": "infoDisplay"
      },
      {
        "name": "thumbnail"
      },
      {
        "name": "controlBar",
        "align": "blabs",
        "x": 0,
        "y": 0,
        "children": [{
            "name": "progress",
            "align": "blabs",
            "x": 0,
            "y": 44
          },
          {
            "name": "playButton",
            "align": "tl",
            "x": 15,
            "y": 12
          },
          {
            "name": "timeDisplay",
            "align": "tl",
            "x": 10,
            "y": 7
          },
          {
            "name": "fullScreenButton",
            "align": "tr",
            "x": 10,
            "y": 12
          },
          {
            "name": "setting",
            "align": "tr",
            "x": 15,
            "y": 12
          }
        ]
      }
    ]
  });

  function getUserHeader() {
    var user;
    $.ajax({
      url: "json/user.json",
      async: false,
      success: function(data) {
        user = data;
      }
    })
    return user;
  }
  var user = getUserHeader();
  Header.setUp(user);

  function getLiveData() {
    var liveData;
    $.ajax({
      url: "json/live.json",
      async: false,
      success: function(data) {
        liveData = data;
      }
    })
    return liveData;
  }
  var liveDatas = getLiveData();
  CommentSender.setup();
  var wrapper = $('.comment-list');

  function getUser() {
    var result;
    $.ajax({
      url: "json/index.json",
      async: false,
      success: function(data) {
        result = data;
      }
    })
    return result;
  }
  var userDatas = getUser();
  Comment.setUp($('.comment-container'), userDatas);
  favoriate = new Favoriate($('body'));
  $('.comment-textbox').show();

  //   let adjustLayout = () => {
  //     let offset = $('.ui-tab .ui-tab-nav').offset();
  //     let remainHeight = util.screenHeight() - offset.top - offset.height - $('.comment-textbox').height();
  //     $('.ui-tab-content').height(remainHeight);
  //     $('.comment-list .comment-container').css('max-height', remainHeight);
  //   };
  //   adjustLayout();
});
