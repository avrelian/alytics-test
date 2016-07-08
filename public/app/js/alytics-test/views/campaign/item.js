(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AlyticsTest.Views.Campaign.Item = (function(_super) {
    __extends(Item, _super);

    function Item() {
      this.onMouseLeave = __bind(this.onMouseLeave, this);
      this.onMouseOver = __bind(this.onMouseOver, this);
      _ref = Item.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Item.prototype.type = 'AlyticsTest.Views.Campaign.Item';

    Item.prototype.template = JST['alytics-test/campaign/item'];

    Item.prototype.numFractionalDigits = {
      cpc: 0,
      ctr: 0,
      cpa: 0,
      cr: 0
    };

    Item.prototype.events = {
      'mouseover .campaign-value-link': 'onMouseOver',
      'mouseleave .campaign-value-link': 'onMouseLeave'
    };

    Item.prototype.initialize = function() {
      this.render();
      return this.cacheUI();
    };

    Item.prototype.render = function() {
      var outerEl;
      outerEl = $(this.template(this.serializeData()));
      this.$el.replaceWith(outerEl);
      this.setElement(outerEl);
      return this;
    };

    Item.prototype.serializeData = function() {
      var blocks_visibility, costs, data, goal, goals, _i, _len, _ref1;
      data = this.model.toJSON();
      blocks_visibility = alyticsTestDB.user.get('campaign_blocks_visibility');
      costs = {
        cpc: utils.formatNumber(data.costs.cpc, this.numFractionalDigits.cpc),
        ctr: utils.formatNumber(data.costs.ctr, this.numFractionalDigits.ctr),
        cost: utils.formatNumber(data.costs.cost),
        shows: utils.formatNumber(data.costs.shows),
        clicks: utils.formatNumber(data.costs.clicks)
      };
      data.costs = costs;
      goals = [];
      _ref1 = data.goals;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        goal = _ref1[_i];
        goals.push({
          cpa: utils.formatNumber(goal.cr, this.numFractionalDigits.cpa),
          cr: utils.formatNumber(goal.cr, this.numFractionalDigits.cr),
          count: utils.formatNumber(goal.count),
          visible: blocks_visibility.goals[goal.goal_id]
        });
      }
      data.goals = goals;
      data.statusVisible = blocks_visibility.status;
      data.costsVisible = blocks_visibility.costs;
      data.total = data.value === 'Total' ? 'total' : '';
      return data;
    };

    Item.prototype.cacheUI = function() {};

    Item.prototype.onMouseOver = function() {
      return this.$el.addClass('show-edit-button');
    };

    Item.prototype.onMouseLeave = function() {
      return this.$el.removeClass('show-edit-button');
    };

    return Item;

  })(Backbone.View);

}).call(this);
