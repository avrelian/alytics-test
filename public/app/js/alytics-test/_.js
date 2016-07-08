(function() {
  window.AlyticsTest = {
    Campaign: {},
    Goal: {},
    User: {},
    Views: {
      Campaign: {}
    }
  };

  $(function() {
    window.alyticsTestDB = {};
    return window.alyticsTest = new AlyticsTest.App;
  });

}).call(this);
