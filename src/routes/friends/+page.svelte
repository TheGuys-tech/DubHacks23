<script>
    export let data;
    export let postData;
    let me = 0;
    let friends = [];
    if (!data.error)
    {
        friends = data.users[me].friends.map((id) => data.users.filter((u) => u._id == id)[0]);
    }
</script>

<h1>Friends</h1>
{#if data.error}
<div>{data.error_msg}</div>
{:else}
{#if postData != undefined}
<div style="background-color: burlywood; width: 100%;">{postData}</div>
{/if}
{#each friends as friend}
<div class="user-profile-card">
    <div class="user-profile-card-namebox">
        <img class="user-profile-icon" src="images/user-icon.png" alt="User profile icon"/>
        <p class="user-profile-card-name">{friend.name}</p>
    </div>
    <form action="/friends" method="POST">
        <input type="hidden" name="action" value="remove" />
        <input type="hidden" name="friendId" value="{friend._id}" />
        <input type="submit" value="Remove friend" />
    </form>
</div>
{/each}
<br>
<form action="/friends" method="POST">
    <input type="hidden" name="action" value="add" />
    <input name="friendId" />
    <input type="submit" value="Add friend" />
</form>
<p>Your FriendID: {data.users[me]._id}</p>
{/if}

<style>
    .user-profile-card {
        width: 300px;
        height: 100px;
        display: flex;
        flex-direction: column;
        border: 2px solid black;
    }

    .user-profile-card-namebox {
        display: flex;
        align-items: center;
    }

    .user-profile-card-name {
        width: max-content;
        font-size: 1.5em;
        margin: 5px;
    }

    .user-profile-icon {
        width: 64px;
        height: 64px;
    }
</style>