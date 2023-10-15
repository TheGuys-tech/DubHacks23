<script>
    // JavaScript
    let selectedSection = 'personal_info';
</script>

<style>

    .navbar {
        background-color: #fff; /* White background */
        border-bottom: 1px solid #e0e0e0; /* Light gray border at the bottom */
        position: fixed; /* Fix the navbar to the top */
        top: 0;
        left: 0;
        right: 0;
        height: 5%; 
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px; /* Padding on the sides */
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); /*  shadow */
        z-index: 1000; /* navbar on top */
        font-family: DM Sans;
        font-weight: 550;
        font-size: 13px;

  
    }

    .navbar a {
        color:#777E90;
        text-decoration: none; /* Remove underline */
        padding: 10px 5px; /* Add some space around the links */
        transition: color 0.3s ease; /* Smooth transition for color change */
        margin: 0 10px;
    }

    .navbar a:hover {
        color: #000; /* Black text on hover */
    }

    .container {
        width: 90%;
        /* max-width: 600px; */
        margin: 50px auto;
        padding: 20px;
        background-color: #FFFFFF;
        display: flex;
        gap: 20px;
    }

    .sidebar, .settings-content {
        padding: 20px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .sidebar-item {
        color:#777E90;
        font-family: DM Sans;
        font-weight: 700;
        font-size: 13px;
        line-height: 30px;
        margin: 12px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .sidebar-item i {
        margin-right: 8px;
    }

    .selected, .selected i {
        color: black;
        /* background-color: pink; */

    }

    .settings-content {
        color: rgb(123, 59, 123);
        font-size: 13px;
        width: 65%;
        padding-left: 5%;
    }

    .settings-content label {
        font-family: DM Sans;
        display: block;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .settings-content input[type="text"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;

    }
    .input-container {
    display: flex;
    gap: 20px; /* spacing between the fields */
    }

    .field {
        flex: 1; /* equally distribute space between the fields */
    }
</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Sans">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

<div class="navbar">
    <a href="#">Home</a>
    <a href="#">Classes</a>
    <a href="#">Events</a>
    <a href="#">Calendar</a>

</div>


<div class="container">
    <div class="sidebar">
        <div class="sidebar-item" class:selected={selectedSection === 'profile'} on:click={() => selectedSection = 'profile'}>
            <i class="fas fa-user"></i> Profile
        </div>
        <div class="sidebar-item" class:selected={selectedSection === 'settings'} on:click={() => selectedSection = 'settings'}>
            <i class="fas fa-cogs"></i> Settings
        </div>
        <div class="sidebar-item" class:selected={selectedSection === 'my_classes'} on:click={() => selectedSection = 'my_classes'}>
            <i class="fas fa-chalkboard-teacher"></i> My Classes
        </div>
        <div class="sidebar-item" class:selected={selectedSection === 'my_event'} on:click={() => selectedSection = 'my_event'}>
            <i class="fas fa-calendar-alt"></i> My Events
        </div>
        <div class="sidebar-item" class:selected={selectedSection === 'my_groups'} on:click={() => selectedSection = 'my_groups'}>
            <i class="fas fa-users"></i> My Groups
        </div>
    </div>
    

    <div class="settings-content">
        {#if selectedSection === 'profile'}
            <div class="input-container">
                <div class="field">
                    <label for="display-name">Username</label>
                    <input type="text" id="display-name" placeholder="Enter your username">
                </div>
        
                <div class="field">
                    <label for="real-name">Name</label>
                    <input type="text" id="real-name" placeholder="Enter your name">
                </div>
            </div>


        {:else if selectedSection === 'settings'}
            <p>Login and security settings...</p>
        <!-- ... other sections based on selectedSection value ... -->
        {/if}
    </div>
</div>
