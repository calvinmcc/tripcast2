require './config';

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0) {
    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = "https://maps.googleapis.com/maps/api/js?key=" + config.GMAPS
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});
