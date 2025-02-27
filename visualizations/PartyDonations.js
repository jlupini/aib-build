(function (){
    var width = 800,
        height = 600;

    var svg = d3.select("#chart2")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)");



var simulation = d3.forceSimulation()
.force("x", d3.forceX(width/2).strength(0.07))
.force("y", d3.forceY(height/2).strength(0.07))
.force("collide", d3.forceCollide(8))


    d3.csv("PartyDonations.csv").then(function(datapoints) {
        var circles = svg.selectAll(".voter")
            .data(datapoints)
            .enter().append("circle")
            .attr("class", "voter")
            .attr("r", 7)
            .attr("fill", function(datapoints){
                return datapoints.Colour
            })

            simulation.nodes(datapoints)
            .on('tick', ticked)

            function ticked() {
                circles
                .attr("cx", function(d){
                    return d.x
                })
                .attr("cy", function(d){
                    return d.y
                })
            }

    }).catch(function(error) {
        console.error("Error loading the CSV data:", error);
    });

})();