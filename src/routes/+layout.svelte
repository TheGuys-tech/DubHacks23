<div class="navbar">
    <div>GroupSync</div>
    <div class="nav-spacer"></div>
    <a href="/">Home</a>
    <a href="/calendar">Calendar</a>
    <a href="/friends">Friends</a>
    <a href="/groups">Groups</a>
    <div class="nav-spacer"></div>
    <a href="/profile">Profile</a>
</div>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Sans">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

<div class="spacing"></div>

<style>
    :global(body) {
        margin: 0;
        background-color: white;
        font-family: DM Sans;
    }

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

    .nav-spacer {
        margin-left: auto;
    }

    .spacing {
        margin-top: 50px;
    }
</style>

<slot></slot>