$(document).ready(function(){
    var mixer = mixitup('.view-product-area');

    //search bar 
    $('.search-bar i').click(function(){
        $('.search-bar').css({
            'width':'40%',
        });
        $('.search-bar input').css({
            'width': '100%',
            'opacity': '1',
        });
    });

    //responsive menu
    $('.catagory-header i').click(function(){
        $('.left-menu-area').css({
            'left': '0',
        });
    });
    $('.close-bar').click(function(){
        $('.left-menu-area').css({
            'left': '-100%',
        });
    });
});