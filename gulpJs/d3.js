function drawPie(t,e,r){var a=d3.scale.category20(),n=d3.layout.pie().sort(null),i=d3.svg.arc().innerRadius(r/3).outerRadius(r/2),d=d3.select(t).append("svg").attr("width",1.5*r).attr("height",r).append("g").attr("transform","translate("+1.5*r/2+","+r/2+")");d.selectAll("path").data(n(e)).enter().append("path").attr("fill",function(t,e){return a(e)}).attr("d",i)}function drawFill(t,e,r,a){for(var n,i=[],d=0,c=d3.select(t).append("svg").attr({width:a,height:2.3*a}).attr("class","fill"),l=0;l<e.length;l++)n={value:e[l],colour:r[l],x:0,y:d},d+=e[l],i.push(n);var o=c.selectAll("rect").data(i);o.enter().append("rect").attr({width:a/2.5,height:function(t){return t.value},y:function(t){return t.y}}).style({fill:function(t){return t.colour}})}function drawBar(t,e){var r=25,a=170,n=26,i=15,d=d3.scale.category20(),c=d3.scale.linear().domain([0,1]).range([0,r+i]),l=d3.scale.linear().domain([0,d3.max(e)]).rangeRound([0,a-n]),o=d3.select(t).append("svg").attr("class","chart").attr("width",230).attr("height",a);o.selectAll("rect").data(e).enter().append("rect").attr("x",function(t,e){return c(e)-.5}).attr("y",function(t){return a-.5}).attr("width",r).attr("fill",function(t,e){return d(e)}).transition().delay(function(t,e){return 600*e}).duration(800).attr("height",function(t){return l(t)}).attr("y",function(t){return a-l(t)-.5}),o.selectAll("text").data(e).enter().append("text").attr("width",r).attr("x",function(t,e){return c(e)+r/2}).attr("y",function(t){return a-l(t)-15}).attr("text-anchor","middle").transition().delay(function(t,e){return 600*e}).duration(800).text(function(t){return"$"+t})}$(document).ready(function(){var t,e=new XMLHttpRequest;e.open("GET","js/d3.json",!0),e.setRequestHeader("Content-type","application/json"),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){t=JSON.parse(e.responseText);var r=document.getElementById("project-pie"),a=document.getElementById("fill-chart"),n=document.getElementById("risk-chart"),i=document.getElementById("issue-chart"),d=document.getElementById("nav-first"),c=document.getElementById("nav-second"),l=document.getElementById("a-first"),o=document.getElementById("a-second");drawPie(r,t.projectPie,100),drawFill(a,t.fillBar,t.fillColor,75),drawBar(n,t.riskBar),drawBar(i,t.issueBar),drawPie(d,t.projectPie,40),drawPie(c,t.portfolio,40),drawPie(l,t.halfValue,40),drawPie(o,t.projectPie,40)}},e.send(),$(function(){$("#nav-section").niceScroll({cursorcolor:"#00F"})});var r=$(".excited:first-child",".active").text();$("#heading").html(r),$("#major-container").children().click(function(){var e,a;a=document.getElementById("big-image"),$(this).addClass("active"),$(this).siblings().removeClass("active"),r=$(".excited:first-child",".active").text(),$("#heading").html(r);$(this).attr("class");e=$(this).prop("id"),console.log(e),$("#big-image").empty(),drawPie(a,t[e],400)})});