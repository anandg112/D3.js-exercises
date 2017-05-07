var dataArr = [1, 3, 8, 11, 15, 17, 18, 20, 25, 32, 37, 42, 45, 47, 52, 56, 62];

var dataYrs = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008',
              '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

var height = 200;
var width = 500;
var area = d3.area().x(function(d, i){ return i * 20;}).y0(height).y1(function(d) {return height - d; });

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
svg.append("path").attr("height", "100%").attr("width","100%");
svg.append("path").attr("d", area(dataArr));
