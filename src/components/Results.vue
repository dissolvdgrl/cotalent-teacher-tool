<template>
    <div id="results">
        <div id="breadcrumb-container">
            <p>You are here: <span class="breadcrumb-position">{{ position }}</span></p>
        </div>
        <div class="warning">
            <img src="src/assets/img/warning-icon.svg" alt="">
            <p>Your results are not stored online, please print or download them to your computer before closing this window.</p>
        </div>
        <div class="document-controls">
            <button class="print" @click="printResults">
                <img src="src/assets/img/print-icon.svg" alt="">
                <span>Print</span>
            </button>
            <button class="save-pdf" @click="savePdf">
                <img src="src/assets/img/pdf-icon.svg" alt="">
                <span>Save as PDF</span>
            </button>
        </div>
        <h1>Your <span class="heading-underline">Results</span></h1>
        <div class="divider yellow"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <canvas id="myChart" width="400" height="400"></canvas>
        <div id="table">
            <div class="table-heading">
                <div class="cell"></div>
                <div class="cell">Score</div>
                <div class="cell">Teacher characteristics</div>
            </div>
            <div class="table-row" v-for="answer in answers">
                <div class="cell">{{ answer.key }}</div>
                <div class="cell">{{ answer.value }}</div>
                <div class="cell">
                    <!-- <p class="bold">Teacher: Flexibility in classroom situations</p> -->
                    <p>{{ answer.desc }}</p>
                </div>
            </div>
        </div>

        <div class="page-end-container">
            <div class="left-border yellow"></div>
            <div class="page-end-controls">
                <span @click="printResults">
                    <img src="src/assets/img/print-icon.svg" alt="">
                </span>
                <img src="src/assets/img/line.svg" alt="">
                <span @click="savePdf">
                    <img src="src/assets/img/pdf-icon.svg" alt="">
                </span>
            </div>
            <div class="right-border yellow"></div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';

    export default {
        data() {
            return { 
                position: 'step 3',
                example: 'just testing',
                userScores: this.scores_a,// temporary data - this.scores_a
                //[1,1,0,-1,1,0,0,0,0,1,1,-1,-1,0,1,0,1,-1,1,1,0,-1,1,0,0,0,0,1,1,-1,-1,0,1,0,1,-1,0,1,0,-1,1,0,-1,-1,0,1,1,0]
                outer: this.scores_b,
                limit: 49, // limits to the top 3 results in the array/results from the survey
                answers: []
            };
        },

        computed: {
            innerObj() {
                return this.limit ? this.userScores.slice(0, this.limit) : this.userScores;
            }
        },

        methods: {
            printResults() {
                window.print();
            },

            savePdf() {
                alert('Todo: save as pdf functionality');
            },

            calcCharacteristicScore(characteristicScore, characteristicDef, key, desc) {              
                let scores = this.userScores;
                characteristicScore = [];
                scores.map((a, i) => {
                    let x = a * characteristicDef[i];
                    if(x > 0) {
                        characteristicScore.push(x);
                    }
                    parseFloat(characteristicScore);
                });
                
                this.answers.push({key: key, value: characteristicScore.reduce((a,b) => a + b, 0).toFixed(3), desc: desc});
            },

            renderGraph() {
                let context = document.querySelector('#myChart').getContext('2d');
                let answers = this.answers;
                const dataInner = [];
                const labelsInner = [];

                answers.forEach(function(item) {
                    labelsInner.push(item.key); // data
                    dataInner.push(item.value); // values
                });
                
                new Chart(context, {
                    type: 'radar',
                    data: {
                        labels: labelsInner,
                        datasets: [{
                            label: 'Inner scores',
                            data: dataInner,
                            backgroundColor: 'rgba(255, 196, 0, 0.2)',
                            borderColor: 'rgba(255, 196, 0, 0.6)'
                        }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            }
        },
        
        mounted: function() {
            this.calcCharacteristicScore(this.characteristicAScore, this.charA, 'A', 'Teacher: Flexibility in classroom situations');
            this.calcCharacteristicScore(this.characteristicBScore, this.charB, 'B', 'Teacher: Flexibility in administration');
            this.calcCharacteristicScore(this.characteristicCScore, this.charC, 'C', 'Teacher: Flexibility in planning');
            this.calcCharacteristicScore(this.characteristicDScore, this.charD, 'D', 'Teacher: Societal awareness');
            this.calcCharacteristicScore(this.characteristicEScore, this.charE, 'E', 'Teacher: Creativity in preparation');
            this.calcCharacteristicScore(this.characteristicFScore, this.charF, 'F', 'Teacher: Sharing responsibility');
            this.calcCharacteristicScore(this.characteristicGScore, this.charG, 'G', 'Teacher: Having high expectations');
            this.calcCharacteristicScore(this.characteristicHScore, this.charH, 'H', 'Teacher: Building relation with students');
            this.calcCharacteristicScore(this.characteristicIScore, this.charI, 'I', 'Personal: Willing to show personality');
            this.calcCharacteristicScore(this.characteristicJScore, this.charJ, 'J', 'Personal: Broad interest');
            this.calcCharacteristicScore(this.characteristicKScore, this.charK, 'K', 'Society: Critical reflection');
            this.calcCharacteristicScore(this.characteristicLScore, this.charL, 'L', 'Society: Real-life connection');
            this.calcCharacteristicScore(this.characteristicMScore, this.charM, 'M', 'Society: Involvement in program');
            this.renderGraph();
        }
    }
</script>

<style lang="scss">
    @import '../assets/sass/_variables.scss';
    .warning {
        background-color: $yellow;
        overflow: visible;
        position: relative;

        img {
            position: absolute;
            top: -1.5em;
            left: -2em;
            height: 100px;
            width: 100px;
        }

        p {
            font-weight: 800;
            padding: 1em 0;
            padding-left: 60px;
        }
    }

    .document-controls {
        display: flex;
        button {
            background-color: transparent;
            border: 2px solid $yellow;
            padding: 0.5em 1em;
            font-size: 1em;
            font-weight: 800;
            display: flex;           
            align-items: center;
            justify-content: center;
            margin-right: 2em;
            transition: 0.2s ease all;

            span {
                margin-left: 1em;
            }
        }

        button:hover, button:focus {
            cursor: pointer;
            background-color: $yellow;
        }
    }

    #chart-output, #table {
        margin: 4em 0;
    }

    #table {
        width: 100%;
        display: flex;
        flex-direction: column;

        .table-heading {
            background-color: $blue;
            display: flex;
            
            .cell {
                color: white;
                text-transform: uppercase;
                font-weight: 800;
                width: 10%;
                padding: 0.5em;
            }

            .cell:last-child {
                width: 70%;
            }
        }

        .table-row:nth-child(odd) {
            background-color: rgba(0,0,0,0.05);
        }

        .table-row {
            display: flex;

            .cell {
                padding: 0.5em;
                width: 10%;
                display: initial;
                border-right: 1px solid #CBCBCB;
            }

            .cell:first-child {
                font-weight: 800;
            }

            .cell:last-child {
                width: 70%;
                border-right: none;
                p:first-child {
                    font-weight: 800;
                }
                p {
                    margin: 0;
                }
            }
        }
    }

    .page-end-controls {
        display: flex;
        span {
            display: flex;
            border: 2px solid $yellow;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            justify-content: center;
            transition: 0.2s ease all;
        }

        span:hover, span:focus {
            background-color: $yellow;
            cursor: pointer;
        }
    }
</style>