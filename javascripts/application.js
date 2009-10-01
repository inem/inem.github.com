j = jQuery;
j.noConflict();

//safe console.log
function cl(a) {
  if (jQuery.browser.mozilla) {
    // var arrguments = Array.prototype.slice.call(arguments);
    if (typeof(console) != 'undefined') {
      console.log(a); 
      }
  }
};
