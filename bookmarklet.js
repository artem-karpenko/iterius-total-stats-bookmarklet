javascript:(function() {
    let times = $.map($(".daily-projects-stat"), task => {
        let timeStr = $(":nth-child(4)", task)[0].outerText.split(":");
        let time = timeStr[0] * 3600 + timeStr[1] * 60;
        return [[$(":nth-child(2)", task)[0].outerText, time]];
    });

    times = times.reduce((logs, log) => {
        if (logs[log[0]] == undefined) {
            logs[log[0]] = 0;
        }

        logs[log[0]] += log[1];

        return logs;
    }, {});

    times = Object.keys(times).reduce((tasks, task) => {
        tasks[task] = Math.floor(times[task] / 3600) + ":" + times[task] % 3600 / 60;
        return tasks;
    }, {});

    alert(JSON.stringify(times, null, 2));
})();