<script lang="ts">
    import { Calc } from '../classes/Calc';

    const defaultElements = 50
    const temperature = 80

    $: elements = Calc.Squares(temperature)
</script>





<main>
    <div>
        {#each {length: elements} as _, i }
            {@const color = Calc.Color({value: i, max: defaultElements}) }
            <section
                style:background-color={color}
                >
            </section>
	    {/each}
    </div>

    <div>
        {#each {length: defaultElements} as _, i }
            <section
                style:background-color={'#363636'}
                >
            </section>
	    {/each}
    </div>

</main>



<style>
    /* main {
        position: relative;
        width: 100%;
        height: 32px;
    } */

    div {
        height: 32px;
        display: grid;
        grid-template-columns: repeat(50, 1fr);
        gap: 2px;
    }

    section {
        background-color: red;
    }

    main {
        margin-bottom: 24px;
        resize: horizontal;
        overflow: auto;

        position: relative;
    }

    div:first-child {
        position: relative;
        z-index: 10;
    }

    div:last-child {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
    }
</style>