<script>
    let startDateYear = 2023;
    let startDateMonth = 10;
    let startDateDay = 14;
    let startDay = 1;
    let endDay = 5;
    let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

    let cellHasEvent = [];
    for (let day = startDay; day <= endDay; day++) {
        let dayData = [];
        for (let hour = 0; hour < 48; hour++)
        {
            dayData.push({hasEvent: false});
        }
        cellHasEvent.push(dayData);
    }

    /*for (let i = 0; i < data.events.length; i++) {
        let event = data.events[i];
        if (event.day) {

        }
    }*/

</script>

<input type="number" min="1" max="12" bind:value={startDateMonth} />
<input type="number" min="1" max="31" bind:value={startDateDay} />
<input type="number" min="1970" bind:value={startDateYear}/>

<div class="week-calendar">
    <div class="week-calendar-day">
        <div class="week-calendar-dayname" style="padding-bottom: 2px;">Time</div>
        {#each {length: 24} as _, hour}
            <div class="week-calendar-time-key">{hour < 12 ? (hour == 0 ? "12 AM" : hour + " AM") : hour - 12 == 0 ? "12 PM" : hour - 12 + " PM"}</div>
        {/each}
    </div>
    {#each {length: endDay - startDay + 1} as _, day}
        <div class="week-calendar-day">
            <div class="week-calendar-dayname">{days[startDay + day]}</div>
            {#each {length: 48} as _, hour}
                <div class="week-calendar-hour {cellHasEvent[day][hour].hasEvent ? "filled" : ""}" data-calendar-hour={hour}></div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .week-calendar {
        display: flex;
    }

    .week-calendar-time-key {
        text-align: right;
        height: 0px;
        padding-bottom: 23.2px;
    }

    .week-calendar-day {
        width: 50px;
        text-align: center;
    }

    .week-calendar-hour {
        border: 1px solid black;
        padding-bottom: 10px;
    }

    .week-calendar-hour:hover {
        border: 1px solid red;
        background-color: yellow;
    }

    .week-calendar-hour.filled {
        background-color: orangered;
    }
</style>