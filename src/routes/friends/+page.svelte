<script>
    export let data;
    if (data.error)
    {
        data.content = data.error_msg;
    }

    var friends = [];
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

    console.log(friends);
    
</script>

<h1>Friends</h1>
{#each friends as friend}
<div>{friend.name}</div>
{/each}