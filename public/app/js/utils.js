(function() {
  window.utils = {
    random: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    formatNumber: function(num, numFractionalDigits) {
      if (numFractionalDigits != null) {
        num = num.toFixed(numFractionalDigits);
      }
      return ('' + num).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.', ',');
    }
  };

}).call(this);
