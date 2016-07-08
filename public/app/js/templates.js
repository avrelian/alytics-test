this["JST"] = this["JST"] || {};

this["JST"]["alytics-test/campaign/item"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),total = locals_.total,value = locals_.value,statusVisible = locals_.statusVisible,status = locals_.status,costsVisible = locals_.costsVisible,costs = locals_.costs,goals = locals_.goals;buf.push("<tr" + (jade.attrs({ "class": [('campaign'),("" + (total) + "")] }, {"class":true})) + "><td><input type=\"checkbox\" class=\"select-campaign\"/></td><td class=\"campaign-value\">");
if ( total)
{
buf.push("" + (jade.escape((jade.interp = value) == null ? '' : jade.interp)) + "");
}
else
{
buf.push("<a href=\"#\" class=\"campaign-value-link\">" + (jade.escape((jade.interp = value) == null ? '' : jade.interp)) + "</a><div class=\"edit-button\"><img src=\"img/edit-button.png\"/></div>");
}
buf.push("</td>");
if ( statusVisible)
{
buf.push("<td class=\"campaign-status start-of-block end-of-block\">");
if ( status)
{
buf.push("<img" + (jade.attrs({ 'src':("img/" + (status) + "-campaign.png") }, {"src":true})) + "/>");
}
buf.push("</td>");
}
else
{
buf.push("<td class=\"campaign-status start-of-block end-of-block\">");
if ( status)
{
buf.push("&#8212;");
}
buf.push("</td>");
}
if ( costsVisible)
{
buf.push("<td class=\"start-of-block\">" + (jade.escape((jade.interp = costs.shows) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = costs.clicks) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = costs.ctr) == null ? '' : jade.interp)) + "%</td><td>" + (jade.escape((jade.interp = costs.cpc) == null ? '' : jade.interp)) + "</td><td class=\"end-of-block\">" + (jade.escape((jade.interp = costs.cost) == null ? '' : jade.interp)) + "</td>");
}
else
{
buf.push("<td class=\"start-of-block end-of-block\">&#8212;</td>");
}
// iterate goals
;(function(){
  var $$obj = goals;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var goal = $$obj[$index];

if ( goal.visible)
{
buf.push("<td class=\"start-of-block\">" + (jade.escape((jade.interp = goal.cpa) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = goal.cr) == null ? '' : jade.interp)) + "%</td><td class=\"end-of-block\">" + (jade.escape((jade.interp = goal.count) == null ? '' : jade.interp)) + "</td>");
}
else
{
buf.push("<td class=\"start-of-block end-of-block\">&#8212;</td>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

if ( goal.visible)
{
buf.push("<td class=\"start-of-block\">" + (jade.escape((jade.interp = goal.cpa) == null ? '' : jade.interp)) + "</td><td>" + (jade.escape((jade.interp = goal.cr) == null ? '' : jade.interp)) + "%</td><td class=\"end-of-block\">" + (jade.escape((jade.interp = goal.count) == null ? '' : jade.interp)) + "</td>");
}
else
{
buf.push("<td class=\"start-of-block end-of-block\">&#8212;</td>");
}
    }

  }
}).call(this);

buf.push("</tr>");;return buf.join("");
};

this["JST"]["alytics-test/campaign/list"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),statusVisible = locals_.statusVisible,costsVisible = locals_.costsVisible,goals = locals_.goals;buf.push("<div class=\"campaigns\"><table class=\"campaigns-table\"><thead><tr class=\"folders\"><th colspan=\"2\" class=\"no-fold\">&nbsp;</th>");
if ( statusVisible)
{
buf.push("<th class=\"folder\"><img src=\"img/minus-sign.png\" class=\"minus-sign status-block\"/></th>");
}
else
{
buf.push("<th class=\"folder\"><img src=\"img/plus-sign.png\" class=\"plus-sign status-block\"/></th>");
}
if ( costsVisible)
{
buf.push("<th colspan=\"5\" class=\"folder\"><img src=\"img/minus-sign.png\" class=\"minus-sign costs-block\"/></th>");
}
else
{
buf.push("<th class=\"folder\"><img src=\"img/plus-sign.png\" class=\"plus-sign costs-block\"/></th>");
}
// iterate goals
;(function(){
  var $$obj = goals;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var goal = $$obj[$index];

if ( goal.visible)
{
buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('folder')] }, {"colspan":true})) + "><img" + (jade.attrs({ 'src':("img/minus-sign.png"), "class": [('minus-sign'),("block-" + (goal.goal_id) + "")] }, {"class":true,"src":true})) + "/></th>");
}
else
{
buf.push("<th class=\"folder\"><img" + (jade.attrs({ 'src':("img/plus-sign.png"), "class": [('plus-sign'),("block-" + (goal.goal_id) + "")] }, {"class":true,"src":true})) + "/></th>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

if ( goal.visible)
{
buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('folder')] }, {"colspan":true})) + "><img" + (jade.attrs({ 'src':("img/minus-sign.png"), "class": [('minus-sign'),("block-" + (goal.goal_id) + "")] }, {"class":true,"src":true})) + "/></th>");
}
else
{
buf.push("<th class=\"folder\"><img" + (jade.attrs({ 'src':("img/plus-sign.png"), "class": [('plus-sign'),("block-" + (goal.goal_id) + "")] }, {"class":true,"src":true})) + "/></th>");
}
    }

  }
}).call(this);

buf.push("</tr><tr><th rowspan=\"2\">&nbsp;</th><th rowspan=\"2\">КАМПАНИИ</th>");
if ( statusVisible)
{
buf.push("<th rowspan=\"2\" class=\"start-of-block end-of-block\">Статус</th>");
}
else
{
buf.push("<th rowspan=\"2\" class=\"start-of-block end-of-block\">&#8212;</th>");
}
if ( costsVisible)
{
buf.push("<th rowspan=\"2\" class=\"start-of-block\">Показы</th><th rowspan=\"2\">Клики</th><th rowspan=\"2\">CTR</th><th rowspan=\"2\">CPC</th><th rowspan=\"2\" class=\"end-of-blocks\">Затраты</th>");
}
else
{
buf.push("<th rowspan=\"2\" class=\"start-of-block end-of-blocks\">&#8212;</th>");
}
// iterate goals
;(function(){
  var $$obj = goals;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var goal = $$obj[$index];

if ( goal.visible)
{
buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('start-of-block'),('end-of-block')] }, {"colspan":true})) + "><div class=\"goal-name\">" + (jade.escape((jade.interp = goal.name) == null ? '' : jade.interp)) + "</div><div class=\"goal-id\"> &#8212; Цель " + (jade.escape((jade.interp = goal.goal_id) == null ? '' : jade.interp)) + " &#8212;</div></th>");
}
else
{
buf.push("<th rowspan=\"2\" class=\"start-of-block end-of-block\">&#8212;</th>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

if ( goal.visible)
{
buf.push("<th" + (jade.attrs({ 'colspan':("" + (goal.numParams) + ""), "class": [('start-of-block'),('end-of-block')] }, {"colspan":true})) + "><div class=\"goal-name\">" + (jade.escape((jade.interp = goal.name) == null ? '' : jade.interp)) + "</div><div class=\"goal-id\"> &#8212; Цель " + (jade.escape((jade.interp = goal.goal_id) == null ? '' : jade.interp)) + " &#8212;</div></th>");
}
else
{
buf.push("<th rowspan=\"2\" class=\"start-of-block end-of-block\">&#8212;</th>");
}
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

if ( goal.visible)
{
buf.push("<th class=\"start-of-block\">CPA, р.</th><th>CR, %</th><th class=\"end-of-block\">Кол-во</th>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var goal = $$obj[$index];

if ( goal.visible)
{
buf.push("<th class=\"start-of-block\">CPA, р.</th><th>CR, %</th><th class=\"end-of-block\">Кол-во</th>");
}
    }

  }
}).call(this);

buf.push("</tr><tr class=\"total\"></tr></thead><tbody class=\"items\"></tbody></table></div>");;return buf.join("");
};