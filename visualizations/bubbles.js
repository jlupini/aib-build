(function (){
    var width = window.innerWidth,
        height = window.innerHeight;

    var svg = d3.select("#chart")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)");


var simulation = d3.forceSimulation()
.force("x", d3.forceX(width/2).strength(0.07))
.force("y", d3.forceY(height/2).strength(0.07))
.force("collide", d3.forceCollide(4))


    d3.csv("AllVoters.csv").then(function(datapoints) {
        var circles = svg.selectAll(".voter")
            .data(datapoints)
            .enter().append("circle")
            .attr("class", "voter")
            .attr("r", 3)
            .attr("fill", "lightblue")

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