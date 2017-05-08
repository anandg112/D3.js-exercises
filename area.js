var dataArr = [1, 3, 8, 11, 15, 17, 18, 20, 25, 32, 37, 42, 45, 47, 52, 56, 62];

var dataYrs = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
              '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

var parseDate = d3.timeParse("%Y");
var height = 200;
var width = 500;

var margin = {left:50, right:50, top:40, bottom:0};

var y = d3.scaleLinear()
          .domain([0, d3.max(dataArr)])
          .range([height, 0]);

var x = d3.scaleTime()
          .domain(d3.extent(dataYrs, function(d){return parseDate(d);}))
          .range([0, width]);

var yAxis = d3.axisLeft(y).ticks(5).tickPadding(10).tickSize(10);
var xAxis = d3.axisBottom(x);

var area = d3.area().x(function(d, i){ return x(parseDate(dataYrs[i])) ;})
                    .y0(height)
                    .y1(function(d) {return y(d); });

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+","+margin.top+")")

chartGroup.append("path").attr("d", area(dataArr));

chartGroup.append("g")
   .attr("class", "axis y")
   .call(yAxis);

chartGroup.append("g")
          .attr("class", "axis x")
          .attr("transform", "translate(0, "+height+")")
          .call(xAxis);
