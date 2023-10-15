<div class="nav">
    <img src="images/groupSyncLogo.png" class="app-logo" alt="Logo"/>
    <a href="/" class="app-title"><div>GroupSync</div></a>
    <a href="/calendar" class="page"><div>Calendar</div></a>
    <a href="/friends" class="page"><div>Friends</div></a>
    <a href="/profile" class="profile-image"><img src="images/user-icon.png" alt="Profile"/></a>
</div>

<style>
    :global(body) {
        margin: 0;
        background-color: antiquewhite;
    }

    .nav {
        display:flex;
        width: 100%;
        height: 60px;
        background-color: aquamarine;
    }

    .app-title {
        font-size: 1.5em;
        padding: 5px;
        display:flex;
        align-items: center;
        color: black;
        text-decoration: none;
    }

    .page {
        padding: 10px;
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
        min-width: 50px;
        text-align: center;
    }

    .page div {
        width: 100%;
    }

    .profile-image {
        margin-left: auto;
        width: 60px;
        height: 60px;
        padding: 5px;
    }

    .profile-image img {
        width: 50px;
        height: 50px;
    }

    .page:hover {
        background-color: darkcyan;
    }
</style>

<slot></slot>