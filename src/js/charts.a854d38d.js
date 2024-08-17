window.onload = t;
async function t() {
    try {
        let t = await fetch("https://studenter.miun.se/~mallar/dt211g/")
          , a = await t.json();
        (function(t) {
            let a = t.filter(t=>"Kurs" === t.type).sort((t,a)=>a.applicantsTotal - t.applicantsTotal).slice(0, 6)
              , e = a.map(t=>t.name);
            (function(t, a) {
                let e = document.getElementById("myChart");
                new Chart(e,{
                    type: "bar",
                    data: {
                        labels: t,
                        datasets: [{
                            label: "De 6 mest sökta kurserna",
                            data: a,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        indexAxis: "y",
                        animation: !0,
                        responsive: !0,
                        maintainAspectRatio: !0,
                        scales: {
                            y: {
                                beginAtZero: !0
                            }
                        }
                    }
                })
            }
            )(e, a.map(t=>t.applicantsTotal))
        }
        )(a),
        function(t) {
            let a = t.filter(t=>"Program" === t.type).sort((t,a)=>a.applicantsTotal - t.applicantsTotal).slice(0, 6)
              , e = a.map(t=>t.name);
            (function(t, a) {
                let e = document.getElementById("pieChart");
                new Chart(e,{
                    type: "pie",
                    data: {
                        labels: t,
                        datasets: [{
                            label: "De 6 mest sökta programmen",
                            data: a,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        animation: !0,
                        responsive: !0,
                        maintainAspectRatio: !0,
                        scales: {
                            y: {
                                beginAtZero: !0
                            }
                        }
                    }
                })
            }
            )(e, a.map(t=>t.applicantsTotal))
        }(a)
    } catch (t) {
        console.error(t)
    }
}
//# sourceMappingURL=charts.a854d38d.js.map
