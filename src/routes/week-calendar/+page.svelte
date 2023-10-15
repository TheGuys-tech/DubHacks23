<script>
    let startDateYear = 2023;
    let startDateMonth = 10;
    let startDateDay = 15;
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
    for (let day = 0; day <= 6; day++) {
        let dayData = [];
        for (let hour = 0; hour < 48; hour++)
        {
            dayData.push({hasEvent: false, events: ["No event"], eventIds: []});
        }
        cellHasEvent.push(dayData);
    }
    cellHasEvent[3][14] = {hasEvent:true, events: ["Study group"], eventIds: ["12387919792517"]}
    cellHasEvent[3][15] = {hasEvent:true, events: ["Study group", "Physics Exam"], eventIds: ["12387919792517", "adeeb8ea08be9"]}
    cellHasEvent[3][16] = {hasEvent:true, events: ["Physics Exam"], eventIds: ["adeeb8ea08be9"]}

    let selectedDay = -1;
    let selectedHour = -1;

    /*for (let i = 0; i < data.events.length; i++) {
        let event = data.events[i];
        if (event.day) {

        }
    }*/
    /*
    <div class="week-calendar-dateselect">
        Selected week:
        <input type="number" min="1" max="12" bind:value={startDateMonth} />
        /
        <input type="number" min="1" max="31" bind:value={startDateDay} />
        /
        <input type="number" min="1970" bind:value={startDateYear}/>    
    </div>
    */
</script>


<div class="week-calendar-container">
    <div class="week-calendar-container-vertical">
        <div class="week-calendar-partitioned">
            <div class="week-calendar">
                <div class="week-calendar-day">
                    <div class="week-calendar-dayname" style="padding-bottom: 2px;">Time</div>
                    {#each {length: 24} as _, hour}
                        <div class="week-calendar-time-key">{hour < 12 ? (hour == 0 ? "12 AM" : hour + " AM") : hour - 12 == 0 ? "12 PM" : hour - 12 + " PM"}</div>
                    {/each}
                </div>
                {#each {length: 7} as _, day}
                    <div class="week-calendar-day">
                        <div class="week-calendar-dayname">{days[day]}</div>
                        {#each {length: 48} as _, hour}
                            <div class="week-calendar-hour {cellHasEvent[day][hour].hasEvent ? "filled" : ""}" on:click|preventDefault={() => {selectedDay = day; selectedHour = hour}}><span class="tooltiptext">
                                {#each cellHasEvent[day][hour].events as event}
                                {event}
                                <br>
                                {/each}
                            </span></div>
                        {/each}
                    </div>
                {/each}
            </div>
            <div class="events">
                <div class="event" style="visibility: hidden;"></div>
                {#if selectedDay >= 0 && selectedHour >= 0}
                <h3>Events:</h3>
                {#each {length: cellHasEvent[selectedDay][selectedHour].eventIds.length} as _, event}
                <div class="event">
                    <div class="event-title">{cellHasEvent[selectedDay][selectedHour].events[event]}</div>
                    <div class="event-info">Start Time: </div>
                    <div class="event-info">End Time: </div>
                    <div class="event-info">Hosted By: </div>
                    <div class="event-info">Description: </div>
                    <div class="event-button"><button>Invite a friend</button></div>
                </div>
                {/each}
                <button>Create New Event</button>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .week-calendar-container {
        display: flex;
        justify-content: center;
    }

    .week-calendar-container-vertical {
        display: flex;
        flex-direction: column;
        padding: 20px 80px 20px 80px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .week-calendar-dateselect {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .week-calendar-dateselect input {
        width: 50px;
    }

    .week-calendar-partitioned {
        display: flex;
    }

    .week-calendar {
        display: flex;
    }

    .week-calendar-time-key {
        text-align: right;
        height: 0px;
        padding-bottom: 23.2px;
        user-select: none;
    }

    .week-calendar-day {
        width: 50px;
        text-align: center;
        user-select: none;
    }

    .week-calendar-hour {
        border: 1px solid black;
        padding-bottom: 10px;
        height: 0px;
    }

    .week-calendar-hour:hover {
        border: 1px solid red;
        background-color: yellow;
    }

    .week-calendar-hour.filled {
        background-color: orangered;
    }

    .week-calendar-hour .tooltiptext {
        display: inline-block;
        position: relative;
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
    
        z-index: 1;
        top: -5px;
        left: 105%; 
    }

    .week-calendar-hour:hover .tooltiptext {
        visibility: visible;
    }

    .events {
        margin-left: 10px;
    }

    .event {
        width: 200px;
        text-overflow: ellipsis;
        background-color: whitesmoke;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        margin: 5px;
        padding: 5px;
    }

    .event-title {
        text-align: center;
        font-size: 1.2em;
    }

    .event-button {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>