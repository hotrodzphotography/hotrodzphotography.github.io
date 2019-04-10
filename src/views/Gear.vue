<template>
    <div id="gear">
        <div id="cameras" class="equipment-section">
            <h2>Cameras</h2>

            <div class="camera">
                <h3>Canon EOS 6D Mark II</h3>
                <img src="../assets/canon6dmk2.png" alt="Canon 6D Mark II">
            </div>
            <div class="camera">
                <h3>Canon EOS Rebel T5i</h3>
                <img src="../assets/canont5i.png" alt="Canon T5i">
            </div>
            <div class="camera">
                <h3>GoPro Hero 4 Silver</h3>
                <img src="../assets/goprohero4silver.png" alt="Go Pro Hero 4 Silver">
            </div>
        </div>

        <div id="lenses" class="equipment-section">
            <h2>Lenses</h2>

            <div class="lens">
                <h3>Canon 24-105mm F/4L IS II</h3>
                <img src="../assets/canon24-105mm.png" alt="Canon 24-105mm F/4L IS II">
            </div>
            <div class="lens">
                <h3>Canon 50mm F/1.4L USM</h3>
                <img src="../assets/canon50mm.png" alt="Canon 50mm F/1.4 USM">
            </div>
            <div class="lens">
                <h3>Canon 18-55mm f/3.5-5.6 IS II</h3>
                <img src="../assets/canon18-55mm.png" alt="Canon 18-55mm f/3.5-5.6 IS II">
            </div>
            <div class="lens">
                <h3>Canon 75-300mm f/4-5.6 IS</h3>
                <img src="../assets/canon75-300mm.png" alt="Canon 75-300mm f/4-5.6 IS">
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #gear {
        margin: 0 2em;

        .equipment-section {
            text-align: center;

            &:not(:first-child) {
                padding: 4em 0 2em 0;
            }

            .camera {
                display: inline-block;
                width: 33.3%;

                img {
                    max-width: 10em;

                }
            }

            .lens {
                display: inline-block;
                width: 25%;

                img {
                    max-width: 10em;
                }
            }
        }
    }

    @media @upToNarrowQuery {
        #gear {
            .equipment-section {
                .camera, .lens {
                    width: 100%;
                }
            }
        }
    }

    @media @extraNarrowAndUpQuery {
        #gear {
            .equipment-section {
                .camera, .lens {
                    width: 50%;
                }
            }
        }
    }

    @media @largeAndUpQuery {
        #gear {
            .equipment-section {
                .camera {
                    width: 33.3%;
                }

                .lens {
                    width: 25%;
                }
            }
        }
    }
</style>
