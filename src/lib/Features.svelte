<script>
    import { changeLog } from '../notes/changeLog';    
</script>


<h1>Change Log</h1>




<ul>
    {#each changeLog as { category, description }}
         <li>-{category}: {description}</li>
    {:else}
        <p>Waiting por Data</p>
    {/each}
</ul>







<style>
    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 100%;
            
        letter-spacing: 0.02em;
            
        color: #FDFDFD;
        margin-bottom: 24px;
    }


    li {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;

        letter-spacing: -0.01em;
        font-feature-settings: 'tnum' on, 'lnum' on;

        color: #A3A3A3;

        list-style: none;
        margin-bottom: 12px;
    }

    ul {
        max-width: 400px;
    }
</style>