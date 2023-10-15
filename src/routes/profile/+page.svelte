<script>
    export let data;
    export let postData;
    let selectedSection = 'profile';
    let errorMsg = "";
</script>

<style>
    .container {
        width: calc(100vw - 40px);
        /* max-width: 600px; */
        margin: 50px auto;
        padding: 20px;
        background-color: white;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .sidebar, .settings-content {
        padding: 20px;
        background-color: white;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        width: 150px;
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
        max-width: 400px;
    }

    .savebutton {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 0px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        background-color: rgb(0, 255, 255);
    }

    .savebutton:hover {
        background-color: rgba(0, 255, 255, 0.5);
        background-blend-mode: multiply;
        cursor: pointer;
    }
</style>

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
            <div>
                <div class="input-container">   
                    <div class="field">
                        <label for="real-name">Name</label>
                        <input type="text" id="real-name" name="name" placeholder="Enter your name" value={data.users[0].name}>
                    </div>
                </div>
                <input on:click={() => errorMsg = "Success!"} type="submit" class="savebutton" value="Save">
            </div>

            <p>{errorMsg}</p>
        {:else if selectedSection === 'settings'}
            <p>Login and security settings...</p>
        <!-- ... other sections based on selectedSection value ... -->
        {/if}
    </div>
</div>
