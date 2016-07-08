(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AlyticsTest.Views.Campaign.List = (function(_super) {
    __extends(List, _super);

    function List() {
      this.onMinusSignClick = __bind(this.onMinusSignClick, this);
      this.onPlusSignClick = __bind(this.onPlusSignClick, this);
      this.appendOne = __bind(this.appendOne, this);
      _ref = List.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    List.prototype.type = 'AlyticsTest.Views.Campaign.List';

    List.prototype.template = JST['alytics-test/campaign/list'];

    List.prototype.events = {
      'click .plus-sign': 'onPlusSignClick',
      'click .minus-sign': 'onMinusSignClick'
    };

    List.prototype.initialize = function() {
      return this.render();
    };

    List.prototype.render = function() {
      var outerEl;
      outerEl = $(this.template(this.serializeData()));
      this.$el.replaceWith(outerEl);
      this.setElement(outerEl);
      this.cacheUI();
      this.appendItems();
      new AlyticsTest.Views.Campaign.Item({
        el: this.$total,
        model: new AlyticsTest.Campaign.Model(this.collection.getTotal())
      });
      return this;
    };

    List.prototype.appendItems = function() {
      return this.collection.each(this.appendOne);
    };

    List.prototype.serializeData = function() {
      var data, goal, i, _i, _len, _ref1;
      data = this.collection.toJSON();
      data.goals = data[0].goals.slice(0);
      _ref1 = data.goals;
      for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
        goal = _ref1[i];
        goal.numParams = 3;
        goal.goal_id = window.alyticsTestDB.goals.models[i].attributes.goal_id;
        goal.visible = window.bootstrapData.campaign_blocks_visibility.goals[goal.goal_id];
      }
      data.statusVisible = window.bootstrapData.campaign_blocks_visibility.status;
      data.costsVisible = window.bootstrapData.campaign_blocks_visibility.costs;
      return data;
    };

    List.prototype.cacheUI = function() {
      this.$items = this.$('.items');
      this.$goals = this.$('.goals');
      return this.$total = this.$('.total');
    };

    List.prototype.appendOne = function(level) {
      var campaignView;
      campaignView = new AlyticsTest.Views.Campaign.Item({
        model: level,
        parentView: this
      });
      return this.$items.append(campaignView.$el);
    };

    List.prototype.onPlusSignClick = function(event) {
      var goal, prop;
      for (prop in window.bootstrapData.campaign_blocks_visibility) {
        if (event.target.classList.contains("" + prop + "-block")) {
          window.bootstrapData.campaign_blocks_visibility[prop] = true;
        }
      }
      for (goal in window.bootstrapData.campaign_blocks_visibility.goals) {
        if (event.target.classList.contains("block-" + goal)) {
          window.bootstrapData.campaign_blocks_visibility.goals[goal] = true;
        }
      }
      return this.render();
    };

    List.prototype.onMinusSignClick = function(event) {
      var goal, prop;
      for (prop in window.bootstrapData.campaign_blocks_visibility) {
        if (event.target.classList.contains("" + prop + "-block")) {
          window.bootstrapData.campaign_blocks_visibility[prop] = false;
        }
      }
      for (goal in window.bootstrapData.campaign_blocks_visibility.goals) {
        if (event.target.classList.contains("block-" + goal)) {
          window.bootstrapData.campaign_blocks_visibility.goals[goal] = false;
        }
      }
      return this.render();
    };

    return List;

  })(Backbone.View);

}).call(this);
