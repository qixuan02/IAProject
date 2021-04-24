//Option 2 - jquery smooth scroll
$('.navbar a '). on('click', function(e){
    if(this.hash !==''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body'). animate
(
    {
        scrollTop: $(hash).offset().top
    },800);
    }  

});

//calc

function calcAmount(val){
    var price = 565626/(val* 12);
    var result = document.getElementById('result');
    result.value = "RM "+price.toFixed(2);
}
function calcAmount2(val){
    var price = 1377360/(val* 12);
    var result = document.getElementById('result2');
    result.value = "RM "+price.toFixed(2);
}
function calcAmount3(val){
    var price = 815760/(val* 12);
    var result = document.getElementById('result3');
    result.value = "RM "+price.toFixed(2);
}
    


