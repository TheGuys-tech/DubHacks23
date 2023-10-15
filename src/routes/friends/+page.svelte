<script>
    export let data;
    let friends = [];
    if (!data.error)
    {
        let me = 0;
        for (let i = 0; i < data.users[me].friends.length; i++) {
            for (let j = 0; j < data.users.length; j++)
            {
                console.log(data.users[j]._id);
                console.log(data.users[me].friends[i]);
                if (data.users[j]._id == data.users[me].friends[i])
                {
                    friends.push(data.users[j]);
                }
            }
        }
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