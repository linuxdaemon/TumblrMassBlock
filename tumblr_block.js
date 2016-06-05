var blogs = prompt("Blogs to block");
var arr = blogs.split(" ");
count = 0;

arr.forEach(function (element) {
    jQuery.ajax({
        url: '/svc/block/add',
        type: 'post',
        beforeSend: function () {
            count++;
        },
        data: {
            tumblelog: $("div[class='navigation_inner'] h3 a.blog_name span.name").innerHTML,
            blocked_tumblelog: element
        },
        headers: {
            'X-tumblr-form-key': $("meta[name='tumblr-form-key']").getAttribute('content')
        },
        error: function (xhr, status, err) {
            alert("Error occurred, please report to https://github.com/linuxdemon1/TumblrMassBlock/issues (please include the following data and any output from the console) \n Data: " + status + "\n" + err)
        },
        complete: function () {
            count--;
        }
    });
});

int = setInterval(function () {
    if (count < 1)
    {
        clearInterval(int);
        alert("All blogs blocked, you may now refresh the page");
    }
}, 50);
