(function() {
  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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
      window.alyticsTestDB.goals.reset(window.bootstrapData.goals_list);
      return window.alyticsTestDB.user = new AlyticsTest.User.Model(localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : {
        campaign_blocks_visibility: window.bootstrapData.campaign_blocks_visibility,
        campaign_fields_visibility: window.bootstrapData.campaign_fields_visibility
      });
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

  AlyticsTest.Campaign.Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      _ref1 = Model.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Model.prototype.type = 'AlyticsTest.Campaign.Model';

    return Model;

  })(Backbone.Model);

  AlyticsTest.Campaign.Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      _ref2 = Collection.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    Collection.prototype.type = 'AlyticsTest.Campaign.Collection';

    Collection.prototype.model = AlyticsTest.Campaign.Model;

    Collection.prototype.initialize = function(models, options) {};

    Collection.prototype.set = function() {
      Collection.__super__.set.apply(this, arguments);
      return localStorage.setItem('campaigns', JSON.stringify(this.toJSON()));
    };

    Collection.prototype.getTotal = function() {
      var goal, total;
      total = this.models.reduce(function(subTotal, campaign) {
        var campaignCosts;
        campaignCosts = campaign.attributes.costs;
        subTotal.costs.clicks += campaignCosts.clicks;
        subTotal.costs.shows += campaignCosts.shows;
        subTotal.costs.cost += campaignCosts.cost;
        _.each(campaign.attributes.goals, function(goal, i) {
          return subTotal.goals[i].count += goal.count;
        });
        return subTotal;
      }, {
        value: 'Total',
        status: false,
        costs: {
          clicks: 0,
          shows: 0,
          cost: 0
        },
        goals: (function() {
          var _i, _len, _ref3, _results;
          _ref3 = this.models[0].attributes.goals;
          _results = [];
          for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
            goal = _ref3[_i];
            _results.push({
              name: goal.name,
              goal_id: goal.goal_id,
              count: 0
            });
          }
          return _results;
        }).call(this)
      }, this);
      total.costs.cpc = total.costs.cost / total.costs.clicks;
      total.costs.ctr = 100 * total.costs.clicks / total.costs.shows;
      _.each(total.goals, function(goal) {
        goal.cpa = total.costs.cost / goal.count;
        return goal.cr = 100 * goal.count / total.costs.clicks;
      });
      return total;
    };

    return Collection;

  })(Backbone.Collection);

  AlyticsTest.Goal.Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      _ref3 = Model.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    Model.prototype.type = 'AlyticsTest.Goal.Model';

    return Model;

  })(Backbone.Model);

  AlyticsTest.Goal.Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      _ref4 = Collection.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    Collection.prototype.type = 'AlyticsTest.Goal.Collection';

    Collection.prototype.model = AlyticsTest.Goal.Model;

    Collection.prototype.initialize = function(models, options) {};

    Collection.prototype.set = function() {
      Collection.__super__.set.apply(this, arguments);
      return localStorage.setItem('goals', JSON.stringify(this.toJSON()));
    };

    return Collection;

  })(Backbone.Collection);

  AlyticsTest.User.Model = (function(_super) {
    __extends(Model, _super);

    function Model() {
      _ref5 = Model.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    Model.prototype.type = 'AlyticsTest.User.Model';

    Model.prototype.set = function() {
      Model.__super__.set.apply(this, arguments);
      return localStorage.setItem('user', JSON.stringify(this.toJSON()));
    };

    return Model;

  })(Backbone.Model);

  AlyticsTest.Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref6 = Router.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    Router.prototype.routes = {
      '!': 'showCampaigns',
      '': 'showCampaigns'
    };

    Router.prototype.showCampaigns = function() {};

    return Router;

  })(Backbone.Router);

  AlyticsTest.Views.Campaign.Item = (function(_super) {
    __extends(Item, _super);

    function Item() {
      this.onMouseLeave = __bind(this.onMouseLeave, this);
      this.onMouseOver = __bind(this.onMouseOver, this);
      _ref7 = Item.__super__.constructor.apply(this, arguments);
      return _ref7;
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
      var blocks_visibility, costs, data, goal, goals, _i, _len, _ref8;
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
      _ref8 = data.goals;
      for (_i = 0, _len = _ref8.length; _i < _len; _i++) {
        goal = _ref8[_i];
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

  AlyticsTest.Views.Campaign.List = (function(_super) {
    __extends(List, _super);

    function List() {
      this.onMinusSignClick = __bind(this.onMinusSignClick, this);
      this.onPlusSignClick = __bind(this.onPlusSignClick, this);
      this.appendOne = __bind(this.appendOne, this);
      this.render = __bind(this.render, this);
      _ref8 = List.__super__.constructor.apply(this, arguments);
      return _ref8;
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
      var blocks_visibility, data, goal, i, _i, _len, _ref9;
      blocks_visibility = alyticsTestDB.user.get('campaign_blocks_visibility');
      data = this.collection.toJSON();
      data.goals = data[0].goals.slice(0);
      _ref9 = data.goals;
      for (i = _i = 0, _len = _ref9.length; _i < _len; i = ++_i) {
        goal = _ref9[i];
        goal.numParams = 3;
        goal.goal_id = window.alyticsTestDB.goals.models[i].attributes.goal_id;
        goal.visible = blocks_visibility.goals[goal.goal_id];
      }
      data.statusVisible = blocks_visibility.status;
      data.costsVisible = blocks_visibility.costs;
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
      var goal, prop, visibility;
      visibility = alyticsTestDB.user.get('campaign_blocks_visibility');
      for (prop in window.bootstrapData.campaign_blocks_visibility) {
        if (event.target.classList.contains("" + prop + "-block")) {
          visibility[prop] = true;
        }
      }
      for (goal in window.bootstrapData.campaign_blocks_visibility.goals) {
        if (event.target.classList.contains("block-" + goal)) {
          visibility.goals[goal] = true;
        }
      }
      alyticsTestDB.user.set('campaign_blocks_visibility', visibility, {
        trigger: true
      });
      return this.render();
    };

    List.prototype.onMinusSignClick = function(event) {
      var goal, prop, visibility;
      visibility = alyticsTestDB.user.get('campaign_blocks_visibility');
      for (prop in window.bootstrapData.campaign_blocks_visibility) {
        if (event.target.classList.contains("" + prop + "-block")) {
          visibility[prop] = false;
        }
      }
      for (goal in window.bootstrapData.campaign_blocks_visibility.goals) {
        if (event.target.classList.contains("block-" + goal)) {
          visibility.goals[goal] = false;
        }
      }
      alyticsTestDB.user.set('campaign_blocks_visibility', visibility, {
        trigger: true
      });
      return this.render();
    };

    return List;

  })(Backbone.View);

}).call(this);
