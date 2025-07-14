Promise.all([
    d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"),
    d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json")
]).then(([countyData, educationData]) => {

    const svg = d3.select("svg");
    const path = d3.geoPath();
    // Tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("id", "tooltip")
        .style("opacity", 0);
       


    // Convert TopoJSON to GeoJSON
    const counties = topojson.feature(countyData, countyData.objects.counties).features;

    // Create color scale
    const color = d3.scaleQuantize()
        .domain([
            d3.min(educationData, d => d.bachelorsOrHigher),
            d3.max(educationData, d => d.bachelorsOrHigher)
        ])
        .range(d3.schemeBlues[9]);

    // Draw counties and attach event listeners
    svg.append("g")
        .selectAll("path")
        .data(counties)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "county")
        .attr("fill", d => {
            const result = educationData.find(ed => ed.fips === d.id);
            return result ? color(result.bachelorsOrHigher) : "#ccc";
        })
        .attr("data-fips", d => d.id)
        .attr("data-education", d => {
            const result = educationData.find(ed => ed.fips === d.id);
            return result ? result.bachelorsOrHigher : 0;
        })
        .on("mouseover", function (event, d) {
            const result = educationData.find(ed => ed.fips === d.id);
            if (result) {
                tooltip.style("opacity", 0.9);
                tooltip
                    .html(`
                        <strong>${result.area_name}, ${result.state}</strong><br/>
                        ${result.bachelorsOrHigher}% with bachelor's or higher
                    `)
                    .attr("data-education", result.bachelorsOrHigher)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 30) + "px");
            }
        })
        .on("mouseout", function () {
            tooltip.style("opacity", 0);
        });
    

    
    // Legend
    const legendGroup = svg.append("g")
        .attr("id", "legend")
        .attr("transform", "translate(580, 20)");

    const legend = d3.legendColor()
        .scale(color)    // nanti bakalan ada 9 kotak karena.. scale function kita memang pakai 9 warna kan
        .shapeWidth(30)
        .orient("horizontal")
        .labels(({ i, genLength, generatedLabels, domain }) => {
            // Fungsi parseFloat akan mengambil angka pertama dari teks "3-12", "12-21", dst.
            const value = parseFloat(generatedLabels[i]);

            if (i === genLength - 1) {
                // Untuk label terakhir, lebih baik tampilkan batas atas dari domain
                return `≥ ${Math.round(value)}`; // Contoh: "≥ 66"
            } else {
                // Untuk label lain, bulatkan angka yang sudah kita ambil
                return Math.round(value);
            }
        })

                
    legendGroup.call(legend);

    // setelah call, legend baik balok2 warna ataupun text nya semua jadi svg element. langsung dibuatin .label dari librarynya :))

    legendGroup.selectAll(".label")
        // .style("font-weight", "bold")
        .style("fill", "#222") // A dark gray color for the font
        .style("font-size", "12px");

});