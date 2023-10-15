<script>
    export let data;

    console.log(data);
    let month = data.submitMonth || (new Date()).getMonth();
    let year = data.submitYear || (new Date).getFullYear();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    let selectedBox = -1;

    function daysInMonth (month, year) {
        return new Date(parseInt(year), parseInt(month) + 1, 0).getDate();
    }

    let getFirstDay = function(calweek) {
        return "week-calendar";
    }

    let getCalendarDay = function(calweek, calday) {
        let finalday = (calday + calweek * 7) - (new Date(year, month, 1)).getDay();
        return finalday < 0 ? "" : finalday < daysInMonth(month, year) ? finalday + 1 : "";
    }
</script>

<div class="container">
    <div class="calendar">
        <div class="calendar-header">
            <form action="/calendar" method="POST" style="margin-left: 10px; margin-right: auto;">
                <input type="hidden" name="month" value="{(month + 11) % 12}" />
                <input type="hidden" name="year" value="{month - 1 < 0 ? year - 1 : year}" />
                <input type="submit" class="monthchanger" value="&lt;" />
            </form>
            {months[month]} {year}
            <form action="/calendar" method="POST" style="margin-right: 10px; margin-left: auto;">
                <input type="hidden" name="month" value="{(month + 1) % 12}" />
                <input type="hidden" name="year" value="{month + 1 > 11 ? year + 1 : year}" />
                <input type="submit" class="monthchanger" value="&gt;" />
            </form>
        </div>
        <div class="calendar-day-header">
            <div class="calendar-day-day">Sun</div>
            <div class="calendar-day-day">Mon</div>
            <div class="calendar-day-day">Tue</div>
            <div class="calendar-day-day">Wed</div>
            <div class="calendar-day-day">Thu</div>
            <div class="calendar-day-day">Fri</div>
            <div class="calendar-day-day">Sat</div>
        </div>
        {#each {length: 5} as _, calweek}
        <a class="calendar-week" href={getFirstDay(calweek)}>
            {#each {length: 7} as _, calday}
            <div class="calendar-day">{getCalendarDay(calweek, calday)}</div>
            {/each}
        </a>
        {/each}
    </div>
</div>

<style>
    .container {
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        margin-left: auto;
        margin-right: auto;
        width: min-content;
        border-radius: 5px;
    }

    .calendar {
        display:flex;
        flex-direction: column;
        padding: 20px;
    }

    .calendar-header {
        background-color: rgba(255, 127, 251);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-direction: row;
    }

    .calendar-week {
        display: flex;
        color: black;
        text-decoration: none;
    }

    .calendar-week:hover {
        background-color: rgba(255, 127, 251, 0.5);
        background-blend-mode: multiply;
    }

    .calendar-day-header {
        display: flex;
    }

    .calendar-day-day {
        line-height: 30px;
        height: 30px;
        width: 60px;
        border: 1px solid black;
        text-align: center;
    }

    .calendar-day {
        height: 50px;
        width: 50px;
        border: 1px solid black;
        padding: 5px;
    }

    .monthchanger {
        font-size: 1.5em;
        text-decoration: none;
        color: black;
        cursor: pointer;
        user-select: none;
        background-color: transparent;
        border: 0px;
    }
</style>