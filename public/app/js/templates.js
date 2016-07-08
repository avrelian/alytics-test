this["JST"] = this["JST"] || {};

this["JST"]["alytics-test/campaign/item"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),total = locals_.total,value = locals_.value,status = locals_.status,costs = locals_.costs,goals = locals_.goals;buf.push("<tr" + (jade.attrs({ "class": [('campaign'),("" + (total) + "")] }, {"class":true})) + "><td><input type=\"checkbox\" class=\"select-campaign\"/></td><td class=\"campaign-value\">");
if ( total)
{
buf.push("" + (jade.escape((jade.interp = value) == null ? '' : jade.interp)) + "");
}
else
{
buf.push("<a href=\"#\" class=\"campaign-value-link\">" + (jade.escape((jade.interp = value) == null ? '' : jade.interp)) + "</a><div class=\"edit-button\"><img src=\"img/edit-button.png\"/></div>");
}
buf.push("</td><td class=\"campaign-status start-of-block end-of-block\">");
if ( status)
{
buf.push("<img" + (jade.attrs({ 'src':("img/" + (status) + "-campaign.png") }, {"src":true})) + "/>");
}
buf.push("</td><td class=\"start-of-block\">" + (jade.escape((jade.interp = costs.shows) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = costs.clicks) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = costs.ctr) == null ? '' : jade.interp)) + "%</td><td>" + (jade.escape((jade.interp = costs.cpc) == null ? '' : jade.interp)) + "</td><td class=\"end-of-block\">" + (jade.escape((jade.interp = costs.cost) == null ? '' : jade.interp)) + "</td>");
// iterate goals
;(function(){
  var $$obj = goals;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var goal = $$obj[$index];

buf.push("<td class=\"start-of-block\">" + (jade.escape((jade.interp = goal.cpa) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = goal.cr) == null ? '' : jade.interp)) + "%</td><td class=\"end-of-block\">" + (jade.escape((jade.interp = goal.count) == null ? '' : jade.interp)) + "</td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

buf.push("<td class=\"start-of-block\">" + (jade.escape((jade.interp = goal.cpa) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = goal.cr) == null ? '' : jade.interp)) + "%</td><td class=\"end-of-block\">" + (jade.escape((jade.interp = goal.count) == null ? '' : jade.interp)) + "</td>");
    }

  }
}).call(this);

buf.push("</tr>");;return buf.join("");
};

this["JST"]["alytics-test/campaign/list"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),goals = locals_.goals;buf.push("<div class=\"campaigns\"><table class=\"campaigns-table\"><thead><tr class=\"folders\"><th colspan=\"2\" class=\"no-fold\">&nbsp;</th><th class=\"folder\"><img src=\"img/minus-sign.png\" class=\"minus-sign\"/></th><th colspan=\"5\" class=\"folder\"><img src=\"img/minus-sign.png\" class=\"minus-sign\"/></th>");
// iterate goals
;(function(){
  var $$obj = goals;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var goal = $$obj[$index];

buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('folder')] }, {"colspan":true})) + "><img src=\"img/minus-sign.png\" class=\"minus-sign\"/></th>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('folder')] }, {"colspan":true})) + "><img src=\"img/minus-sign.png\" class=\"minus-sign\"/></th>");
    }

  }
}).call(this);

buf.push("</tr><tr><th rowspan=\"2\">&nbsp;</th><th rowspan=\"2\">КАМПАНИИ</th><th rowspan=\"2\" class=\"start-of-block end-of-block\">Статус</th><th rowspan=\"2\" class=\"start-of-block\">Показы</th><th rowspan=\"2\">Клики</th><th rowspan=\"2\">CTR</th><th rowspan=\"2\">CPC</th><th rowspan=\"2\" class=\"end-of-blocks\">Затраты</th>");
// iterate goals
;(function(){
  var $$obj = goals;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var goal = $$obj[$index];

buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('start-of-block'),('end-of-block')] }, {"colspan":true})) + "><div class=\"goal-name\">" + (jade.escape((jade.interp = goal.name) == null ? '' : jade.interp)) + "</div><div class=\"goal-id\"> &#8212; Цель " + (jade.escape((jade.interp = goal.goal_id) == null ? '' : jade.interp)) + " &#8212;</div></th>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('start-of-block'),('end-of-block')] }, {"colspan":true})) + "><div class=\"goal-name\">" + (jade.escape((jade.interp = goal.name) == null ? '' : jade.interp)) + "</div><div class=\"goal-id\"> &#8212; Цель " + (jade.escape((jade.interp = goal.goal_id) == null ? '' : jade.interp)) + " &#8212;</div></th>");
    }

  }
}).call(this);

buf.push("</tr><tr>");
// iterate goals
;(function(){
  var $$obj = goals;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var goal = $$obj[$index];

buf.push("<th class=\"start-of-block\">CPA, р.</th><th>CR, %</th><th class=\"end-of-block\">Кол-во</th>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

buf.push("<th class=\"start-of-block\">CPA, р.</th><th>CR, %</th><th class=\"end-of-block\">Кол-во</th>");
    }

  }
}).call(this);

buf.push("</tr><tr class=\"total\"></tr></thead><tbody class=\"items\"></tbody></table></div>");;return buf.join("");
};

this["JST"]["alytics-test/goal/item"] = function anonymous(locals) {
var buf = [];
buf.push("<th colspan=\"3\">Цель</th><th class=\"goal\">CPA, р.</th><th>CR, %</th><th>Кол-во</th>");;return buf.join("");
};

this["JST"]["alytics-test/goal/list"] = function anonymous(locals) {
var buf = [];
buf.push("<tr class=\"goals\"></tr>");;return buf.join("");
};