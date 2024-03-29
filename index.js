function getUrlParameterValue(url, parameter) 
{
    var qs = url.split('?')[1];
    
    var pa = qs.split('&');
    
    for (var i = 0; i < pa.length; i++) {
        var pair = pa[i].split('=');
        
        if (pair[0] === parameter) {
        
            return pair[1];
        }
    }

    return null;
}


var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium"));

console.log(getUrlParameterValue(url, "utm_campaign"));

