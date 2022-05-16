<script>
    import HomeSlide from "./HomeSlide.svelte";
    import RightNavigationArrow from "./RightNavigationArrow.svelte";
    import LeftNavigationArrow from "./LeftNavigationArrow.svelte";
    import RehearsalSpaceSlide from "./RehearsalSpaceSlide.svelte";

    let currentIndex = 0;


    const slides = [ HomeSlide, RehearsalSpaceSlide ]
</script>

<div>
    <svelte:component this={slides[currentIndex]} />
    <div class="row">        
        {#if currentIndex >= 1}
            <LeftNavigationArrow length={slides.length} index={currentIndex} onClick={() => currentIndex -= 1} />
        {/if}
        <RightNavigationArrow length={slides.length} index={currentIndex + 1 } onClick={() => currentIndex < slides.length - 1 ? currentIndex++ : currentIndex}/>
    </div>
</div>
<style>
    div {
        margin-bottom: 2rem;
    }
    .row{
        height: 10rem;
        display: flex;
        position: relative;
    }
    
    :global(.arrow-wrapper span){
        margin-top: 10%;
    }

    :global(.arrow-wrapper){
        margin-top: 5%;
        margin-top: auto;
        display: flex;
    }

    :global(.icon) {
        height: 60px;
        cursor: pointer;
    }

    :global(.arrow) {
        position: absolute;
        width: 9%;
        height: 10px;
        background-color: var(--text);
    }

    :global(.arrow::after,
    .arrow::before ){
        content: "";
        position: absolute;
        width: 62px;
        height: 10px;
        background-color: var(--text);
    }

    :global(.arrow::after){
        bottom: -18.5px;
        transform: rotate(45deg);
    }

    :global(.arrow::before) {
        bottom: 18.5px;
        transform: rotate(-45deg);
    }

    @media only screen and (max-width: 720px) {
        .row{
            display: none;
        }
    }
</style>