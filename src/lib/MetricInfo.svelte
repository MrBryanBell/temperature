<div>
    <section class="bar-name">
        <h2>RAM</h2>
        <span>84%</span>
    </section>

    <section class="bar-data">
        <p>
            <span>32</span><span>/64</span> 
            CORES
        </p>
    </section>

</div>

<slot>
    <p>No Slot Detecteddd</p>
</slot>

<p class='interpolator-type'>RGB INTERPOLATOR</p>





<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap');

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    .bar-name {
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: center;
    }

    .bar-name h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.02em;
        color: #FDFDFD;
    }

    .bar-name span {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 100%;
        letter-spacing: -0.01em;
        font-feature-settings: 'tnum' on, 'lnum' on;

        color: #FF2120;
    }

    .bar-data p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 100%;
        text-align: right;
        font-feature-settings: 'tnum' on, 'lnum' on;
        letter-spacing: 0.02em;
        
        color: #FDFDFD;
    }
    
    .bar-data p span {
        letter-spacing: -0.01em;
        font-family: 'Archivo';
    }

    .bar-data p span:last-child {
        color: #B5B5B5;
    }

    .interpolator-type {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 100%;
        letter-spacing: 0.02em;
        font-feature-settings: 'tnum' on, 'lnum' on;

        color: #A3A3A3;
    }
    
</style>