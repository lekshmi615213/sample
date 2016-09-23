// /piechart/

var dataset = {
    pievalue: [95, 5],
    pievalue1: [70, 30],
    pievalue2: [80, 20],
    pievalue3: [90, 10],
    data: [42, 38, 40, 52, 33, 0],
    data1: [43, 36, 25, 50, 3, 0]
};

var width = 100,
    height = 150,
    radius = Math.min(width, height) / 2;

var color = d3.scale.category20();

var pie = d3.layout.pie()
    .sort(null);

var arc = d3.svg.arc()
    .innerRadius(radius - 20)
    .outerRadius(radius - 5);

var svg = d3.select(".circle-chart").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + "), rotate(0)");

var path = svg.selectAll("path")
    .data(pie(dataset.pievalue))
    .enter().append("path")
    .attr("fill", function(d, i) {
        return color(i); })
    .attr("d", arc);
var datavars = [30, 70];
var prev_width = [0,
    datavars[0],
    datavars[0] + datavars[1]
];
var colors = ['blue', 'green'];

var svg = d3.select('.rectangle')
    .append('svg')
    .attr('width', 100)
    .attr('height', 600);

svg.selectAll('rect')
    .data(datavars)
    .enter()
    .append('rect')
    .attr('height', function(d) {
        return d;
    })
    .attr('y', function(d, i) {
        return prev_width[i];
    })
    .attr('fill', function(d, i) {
        return colors[i]; })
    .attr('x', 0)
    .attr('width', 30);
var bar_w = 25,
    bar_h = 200,
    label_padding = 26,
    bar_padding = 10;

var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, bar_w + bar_padding]);

var y = d3.scale.linear()
    .domain([0, d3.max(dataset.data)])
    .rangeRound([0, bar_h - label_padding]);

var chart = d3.select("#barchart1").append("svg")
    .attr("class", "chart")
    .attr("width", (bar_w * dataset.data.length) + bar_padding)
    .attr("height", bar_h);

chart.selectAll("rect")
    .data(dataset.data)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return x(i) - .5; })
    .attr("y", function(d) {
        return bar_h - .5; })
    .attr("width", bar_w)
    .attr("class", function(d, i) {
        return i == 0 ? 'first' : 'second' })
    .transition().delay(function(d, i) {
        return i * 600; })
    .duration(800)
    .attr("height", function(d) {
        return y(d); })
    .attr("y", function(d) {
        return bar_h - y(d) - .5; });

chart.selectAll("text")
    .data(dataset.data)
    .enter().append("text")
    .attr("width", bar_w)
    .attr("x", function(d, i) {
        return x(i) + bar_w / 2; })
    .attr("y", function(d) {
        return bar_h - y(d) - 15; })
    .attr("text-anchor", "middle")
    .transition().delay(function(d, i) {
        return i * 600; })
    .duration(800)
    .text(function(d) {
        return d; });
// /barchart2/
var chart = d3.select("#barchart2").append("svg")
    .attr("width", (bar_w * dataset.data1.length) + bar_padding)
    .attr("height", bar_h);

chart.selectAll("rect")
    .data(dataset.data1)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return x(i) - .5; })
    .attr("y", function(d) {
        return bar_h - .5; })
    .attr("width", bar_w)
    .attr("class", function(d, i) {
        return i == 0 ? 'first' : 'second' })
    .transition().delay(function(d, i) {
        return i * 600; })
    .duration(800)
    .attr("height", function(d) {
        return y(d); })
    .attr("y", function(d) {
        return bar_h - y(d) - .5; });

chart.selectAll("text")
    .data(dataset.data1)
    .enter().append("text")
    .attr("width", bar_w)
    .attr("x", function(d, i) {
        return x(i) + bar_w / 2; })
    .attr("y", function(d) {
        return bar_h - y(d) - 15; })
    .attr("text-anchor", "middle")
    .transition().delay(function(d, i) {
        return i * 600; })
    .duration(800)
    .text(function(d) {
        return d; });
// /list/
var category = [
    { title: "EMPLOYEES", number: 31 },
    { title: "FREELANCERS", number: 7 },
    { title: "CONTRACTORS", number: 7 },
    { title: "CONSULTANTS", number: 2 }
];
var columns = [
    { cl: 'title', html: ƒ('title') },
    { cl: 'center', html: ƒ('number') }
];
var table = d3.select(".list")
    .append('table');
table.append('tbody')
    .selectAll('tr')
    .data(category).enter()
    .append('tr')
    .selectAll('td')
    .data(function(row, i) {
        return columns.map(function(c) {
            var cell = {};
            d3.keys(c).forEach(function(k) {
                cell[k] = typeof c[k] == 'function' ? c[k](row, i) : c[k];
            });
            return cell;
        });
    }).enter()
    .append('td')
    .html(ƒ('html'))
    .attr('class', ƒ('cl'));

function length() {
    var fmt = d3.format('02d');
    return function(l) {
        return Math.floor(l / 60) + ':' + fmt(l % 60) + ''; };
}

// /mainchart/
$("#main-pro").click(function() {
    $("#wrapper").empty();
    var categories = ['123A2B', 'A2F', 'A2V'];

    var dollars = [70, 80, 90];

    var colors = ['#0000b4', '#0082ca', '#405F83'];

    var grid = d3.range(25).map(function(i) {
        return { 'x1': 0, 'y1': 0, 'x2': 0, 'y2': 480 };
    });

    var tickVals = grid.map(function(d, i) {
        if (i > 0) {
            return i * 10; } else if (i === 0) {
            return "100"; }
    });

    var xscale = d3.scale.linear()
        .domain([0, 100])
        .range([0, 722]);

    var yscale = d3.scale.linear()
        .domain([0, categories.length])
        .range([0, 480]);

    var colorScale = d3.scale.quantize()
        .domain([0, categories.length])
        .range(colors);
    var canvas = d3.select('#wrapper')
        .append('svg')
        .attr({ 'width': 900, 'height': 450 });

    var grids = canvas.append('g')
        .attr('id', 'grid')
        .attr('transform', 'translate(150,10)')
        .selectAll('line')
        .data(grid)
        .enter()
        .append('line')
        .attr({
            'x1': function(d, i) {
                return i * 30; },
            'y1': function(d) {
                return d.y1; },
            'x2': function(d, i) {
                return i * 30; },
            'y2': function(d) {
                return d.y2; },
        })
        .style({ 'stroke': '#adadad', 'stroke-width': '1px' });

    var xAxis = d3.svg.axis();
    xAxis
        .orient('bottom')
        .scale(xscale)
        .tickValues(tickVals);

    var yAxis = d3.svg.axis();
    yAxis
        .orient('left')
        .scale(yscale)
        .tickSize(2)
        .tickFormat(function(d, i) {
            return categories[i]; })
        .tickValues(d3.range(17));

    var y_xis = canvas.append('g')
        .attr("transform", "translate(150,0)")
        .attr('id', 'yaxis')
        .call(yAxis);
    var x_xis = canvas.append('g')
        .attr("transform", "translate(150,480)")
        .attr('id', 'xaxis')
        .call(xAxis);

    var chart = canvas.append('g')
        .attr("transform", "translate(150,0)")
        .attr('id', 'bars')
        .selectAll('rect')
        .data(dollars)
        .enter()
        .append('rect')
        .attr('height', 19)
        .attr({ 'x': 0, 'y': function(d, i) {
                return yscale(i) + 19; } })
        .style('fill', function(d, i) {
            return colorScale(i); })
        .attr('width', function(d) {
            return 0; });


    var transit = d3.select("svg").selectAll("rect")
        .data(dollars)
        .transition()
        .duration(1000)
        .attr("width", function(d) {
            return xscale(d); });

    var transitext = d3.select('#bars')
        .selectAll('text')
        .data(dollars)
        .enter()
        .append('text')
        .attr({ 'x': function(d) {
                return xscale(d) - 200; }, 'y': function(d, i) {
                return yscale(i) + 35; } })
        .text(function(d) {
            return d + "$"; }).style({ 'fill': '#fff', 'font-size': '14px' });
});
$("#main-pie").click(function() {
    $("#wrapper").empty();
    var category = [
        { project: "123A2B", duration: 2, progress: 70 },
        { project: "A2F", duration: 3, progress: 80 },
        { project: "A2V", duration: 1, progress: 90 },
    ];
    var columns = [
        { head: 'project title', cl: 'title', html: ƒ('project') },
        { head: 'duration', cl: 'center', html: ƒ('duration') },
        { head: 'project progress', cl: 'center', html: ƒ('progress') }
    ];
    var table = d3.select("#pie-details")
        .append('table');
    table.append('thead').append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .attr('class', ƒ('cl'))
        .text(ƒ('head'));

    table.append('tbody')
        .selectAll('tr')
        .data(category).enter()
        .append('tr')
        .selectAll('td')
        .data(function(row, i) {
            return columns.map(function(c) {
                var cell = {};
                d3.keys(c).forEach(function(k) {
                    cell[k] = typeof c[k] == 'function' ? c[k](row, i) : c[k];
                });
                return cell;
            });
        }).enter()
        .append('td')
        .html(ƒ('html'))
        .attr('class', ƒ('cl'));

    function length() {
        var fmt = d3.format('02d');
        return function(l) {
            return Math.floor(l / 60) + ':' + fmt(l % 60) + ''; };
    }
    var width = 500,
        height = 400,
        radius = Math.min(width, height) / 2;

    var color = d3.scale.category10();

    var pie = d3.layout.pie()
        .sort(null);

    var arc = d3.svg.arc()
        .innerRadius(radius - 100)
        .outerRadius(radius - 50);

    var svg = d3.select("#wrapper").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = svg.selectAll("path")
        .data(pie(dataset.pievalue1))
        .enter().append("path")
        .attr("fill", function(d, i) {
            return color(i); })
        .attr("d", arc);

});
$("#sub-pie").click(function() {
    $("#wrapper").empty();


    var width = 500,
        height = 400,
        radius = Math.min(width, height) / 2;

    var color = d3.scale.category20();

    var pie = d3.layout.pie()
        .sort(null);

    var arc = d3.svg.arc()
        .innerRadius(radius - 100)
        .outerRadius(radius - 50);

    var svg = d3.select("#wrapper").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = svg.selectAll("path")
        .data(pie(dataset.pievalue2))
        .enter().append("path")
        .attr("fill", function(d, i) {
            return color(i); })
        .attr("d", arc);

});
$("#micro-pie").click(function() {
    $("#wrapper").empty();
    var width = 500,
        height = 400,
        radius = Math.min(width, height) / 2;

    var color = d3.scale.category10();

    var pie = d3.layout.pie()
        .sort(null);

    var arc = d3.svg.arc()
        .innerRadius(radius - 100)
        .outerRadius(radius - 50);

    var svg = d3.select("#wrapper").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = svg.selectAll("path")
        .data(pie(dataset.pievalue3))
        .enter().append("path")
        .attr("fill", function(d, i) {
            return color(i); })
        .attr("d", arc);
});
$(document).ready(function() {
    $(".project-tab").children().click(function() {
        $(this).addClass('ch_border');
        $(this).siblings().removeClass('ch_border');
        var title = $(this).children(":first").text();
        $('#pro-name').html(title);
        console.log(title);
    });
    $(".representation").children().click(function() {
        $(this).addClass('active');
        $(this).children(":nth-child(2)").addClass('color');
        $(this).children(":nth-child(2)").removeClass('color');
        console.log(this);
        $(this).siblings().removeClass('active');
    });
});
