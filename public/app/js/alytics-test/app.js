(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AlyticsTest.App = (function(_super) {
    __extends(App, _super);

    function App() {
      _ref = App.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    App.prototype.type = 'AlyticsTest.App';

    App.prototype.initialize = function() {
      this.initData();
      this.cacheUI();
      this.initRouter();
      return new AlyticsTest.Views.Campaign.List({
        el: this.$campaigns,
        collection: window.alyticsTestDB.campaigns
      });
    };

    App.prototype.initData = function() {
      window.alyticsTestDB.campaigns = new AlyticsTest.Campaign.Collection;
      window.alyticsTestDB.campaigns.reset(window.bootstrapData.content);
      window.alyticsTestDB.goals = new AlyticsTest.Goal.Collection;
      return window.alyticsTestDB.goals.reset(window.bootstrapData.goals_list);
    };

    App.prototype.cacheUI = function() {
      return this.$campaigns = $('.campaigns.placeholder');
    };

    App.prototype.initRouter = function() {
      new AlyticsTest.Router;
      return Backbone.history.start();
    };

    return App;

  })(Backbone.View);

}).call(this);
