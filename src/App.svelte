<script lang="ts">
    import Title from "./lib/Title.svelte";
    import MetricInfo from "./lib/MetricInfo.svelte";
    import Bar from "./lib/Bar.svelte";
    import Features from "./lib/Features.svelte";
</script>



<main>
    <Title />
    <MetricInfo>
        <Bar />
    </MetricInfo>
</main>

<Features />







<style>
    :global(body) {
        background-color: #000000;
        padding: 28px 48px;
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }

    main {
        max-width: 360px;
        margin-bottom: 100px;
    }

</style>