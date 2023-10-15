<script>
    export let data;
    let friends = [];
    if (!data.error)
    {
        let me = 0;
        friends = data.users[me].friends.map((id) => data.users.filter((u) => u._id == id)[0]);
    }
</script>

<h1>Friends</h1>
{#if data.error}
<div>{data.error_msg}</div>
{:else}
{#each friends as friend}
<div>{friend.name}</div>
{/each}
{/if}