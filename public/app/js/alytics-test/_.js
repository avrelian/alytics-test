(function() {
  window.AlyticsTest = {
    Campaign: {},
    Goal: {},
    Views: {
      Campaign: {},
      Goal: {}
    }
  };

  window.localStorage.clear();

  $(function() {
    window.alyticsTestDB = {};
    return window.alyticsTest = new AlyticsTest.App;
  });

}).call(this);
