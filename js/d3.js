$(document).ready(function(){
  var content, ajaxReq = new XMLHttpRequest();
	ajaxReq.open( "GET", 'js/d3.json', true );
	ajaxReq.setRequestHeader("Content-type", "application/json");
	ajaxReq.onreadystatechange = function() {
    if( ajaxReq.readyState == 4 && ajaxReq.status == 200 ) {
      content = JSON.parse( ajaxReq.responseText ); 
      var pieDiv = document.getElementById("project-pie"),
        fillDiv = document.getElementById("fill-chart"),
        riskBar = document.getElementById("risk-chart"),
        issueBar = document.getElementById("issue-chart"),
        portfolioFirst = document.getElementById("nav-first"),
        portfolioSecond = document.getElementById("nav-second"),
        aFirst = document.getElementById("a-first"),
        aSecond = document.getElementById("a-second");

      drawPie(pieDiv, content.projectPie, 100);
      drawFill (fillDiv, content.fillBar ,content.fillColor, 75);
      drawBar(riskBar ,content.riskBar);
      drawBar(issueBar ,content.issueBar);
      drawPie(portfolioFirst, content.projectPie, 40);
      drawPie(portfolioSecond, content.portfolio, 40);
      drawPie(aFirst, content.halfValue, 40);
      drawPie(aSecond, content.projectPie, 40);
      }
    }
  ajaxReq.send();
  $(function () { 
    $("#nav-section").niceScroll({cursorcolor:"#00F"});
  });
  var heading = $(".excited:first-child", ".active").text();
    $('#heading').html(heading);
    $("#major-container").children().click(function(){
      var a, b;
      b = document.getElementById("big-image");
      // console.log(b);
      $(this).addClass("active");
       $(this).siblings().removeClass( "active");
      heading = $(".excited:first-child", ".active").text();
      $('#heading').html(heading);
      var myClass = $(this).attr("class");
      a = $(this).prop("id");
       console.log(a);
      $("#big-image").empty();
       drawPie(b, content[a] , 400);
    });
});

function drawPie(id, arr, h) {
  var color = d3.scale.category20();

  var pie = d3.layout.pie()
    .sort(null);

  var arc = d3.svg.arc()
   .innerRadius(h/3)
   .outerRadius(h/2);

  var svg = d3.select(id).append("svg")
   .attr("width", 1.5*h)
   .attr("height", h)
   .append("g")
   .attr("transform", "translate(" + (1.5*h) / 2 + "," + h / 2 + ")");

  var path = svg.selectAll("path")
    .data(pie(arr))
    .enter().append("path")
    .attr("fill", function(d, i) {
      return color(i); })
    .attr("d", arc);
}

function drawFill (id, arr, arrColor, w) {
  var newFill = [],
    yOffset = 0, 
    datum;
  var canvas = d3.select(id).append("svg")
    .attr({width: w, height: 2.3*w})
    .attr("class", "fill")
       
  for(var i = 0; i < arr.length; i++) {
    datum = {
      value : arr[i],
      colour : arrColor[i],
      x: 0,
      y: yOffset
    }
    yOffset += arr[i];
    newFill.push(datum);
  }
  var bars = canvas.selectAll('rect').data(newFill);
  bars.enter()
    .append('rect')
    .attr({
      width : w/2.5,
      height : function(d) {
        return d.value
      },
      y : function(d) {
        return d.y
      }
    })
    .style({
      fill : function(d) {
        return d.colour
      }
    })
}

function drawBar(id ,arr) {
  var barWidth = 25,
    barHeight = 170,
    labelPadding = 26,
    barPadding = 15;
       var color = d3.scale.category20();   
    var x = d3.scale.linear()
      .domain([0, 1])
      .range([0, barWidth + barPadding]);
          
    var y = d3.scale.linear()
      .domain([0, d3.max(arr)])
      .rangeRound([0, barHeight - labelPadding]);

    var chart = d3.select(id).append("svg")
      .attr("class", "chart")
      .attr("width", 230)
      .attr("height", barHeight);

    chart.selectAll("rect")
      .data(arr)
      .enter()
      .append("rect")
      .attr("x", function(d, i) { return x(i) - .5; })
      .attr("y", function(d) { return barHeight - .5; })
      .attr("width", barWidth)
      .attr("fill", function(d, i) {
        return color(i); })
      .transition().delay(function (d,i){ return i * 600;})
      .duration(800)
      .attr("height", function(d) { return y(d); })
      .attr("y", function(d) { return barHeight - y(d) - .5; });

    chart.selectAll("text")
      .data(arr)
      .enter().append("text")
      .attr("width", barWidth)
      .attr("x", function(d, i) { return x(i) + barWidth/2; })
      .attr("y", function(d) { return barHeight - y(d) - 15; })
      .attr("text-anchor", "middle")
      .transition().delay(function (d,i){ return i * 600;})
      .duration(800)
      .text(function(d) { return '$' + d; });
}
