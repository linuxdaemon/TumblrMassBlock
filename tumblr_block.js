var blogs = prompt("Blogs to block");
var arr = blogs.split(" ");
arr.forEach(function(element) {
  jQuery.ajax({
    url: '/svc/block/add',
    type: 'post',
    async: false,
    data: {
        tumblelog: $("div[class='navigation_inner'] h3 a span").innerHTML,
        blocked_tumblelog: element
    },
    headers: {
        'x-tumblr-form-key': $("meta[name='tumblr-form-key']").getAttribute('content')
    },
    error: function(xhr, status, err) 
    {
      alert("Error occured, please report to https://github.com/linuxdemon1/TumblrMassBlock/issues \n Data: " + status)
    }
  });
})
