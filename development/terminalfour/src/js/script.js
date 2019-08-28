// Add your custom JavaScripts to this file
/* A function set the height on a set of elements */
function heightEqualizer(query) {
    var els = document.querySelectorAll(query) || 'undefined';
    if (els) {
        var h = 0;
        els.forEach(function(el, idx) {
            console.log(el.offsetHeight);        
            if (el.offsetHeight > h) {
                h = el.offsetHeight;
            }
            console.log(h);
        });
        if (h > 0) {
            els.forEach(function(el) {
                el.style.height = h+'px';
            });
        }
    }
}