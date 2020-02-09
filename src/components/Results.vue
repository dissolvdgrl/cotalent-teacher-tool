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

        <div id="content-pdf">
            <h1>Your <span class="heading-underline">Results</span></h1>
            <div class="divider yellow"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <canvas id="myChart" width="400" height="400"></canvas>
            <div id="table">
                <div class="table-heading">
                    <div class="cell">Top 3 teacher characteristics</div>
                </div>
                <div class="table-row" v-for="answer in answers.slice(0,3)">
                    <div class="cell">
                        <p class="bold top3-desc">{{ answer.desc }}</p>
                        <p class="top3-text">{{ answer.text }}</p>
                    </div>
                </div>
            </div>

            <div id="table-two">
                <div class="table-heading">
                    <div class="cell">Top 3 characteristics that has potential for development</div>
                </div>
                <div class="table-row" v-for="answerOuter in answersOuter.slice(0,3)">
                    <div class="cell">
                        <p class="bold bottom3-desc">{{ answerOuter.desc }}</p>
                        <p class="bottom3-text">{{ answerOuter.text }}</p>
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
    </div>
</template>

<script>
import Chart from 'chart.js';

    export default {
        data() {
            return { 
                position: 'step 3',
                example: 'just testing',
                userScores: this.scores_a,
                outerScores: this.scores_b,
                answers: [],
                answersOuter: []

                //userScores: ["-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1","0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1"],
                //outerScores: ["-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1","0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1", "0", "1", "0", "-1"],
            };
        },

        methods: {
            printResults() {
                window.print();
            },

            calcCharacteristicScore(characteristicScore, characteristicDef, key, desc, text) {              
                let scores = this.userScores;
                characteristicScore = [];
                scores.map((a, i) => {
                    let x = a * characteristicDef[i];
                    if(x > 0) {
                        characteristicScore.push(x);
                    }
                    parseFloat(characteristicScore);
                });
                
                this.answers.push({key: key, value: characteristicScore.reduce((a,b) => a + b, 0).toFixed(3), desc: desc, text: text});

                this.answers.sort(function(a,b) {
                    return b - a;
                });
            },

            calcOuterScore(characteristicScore, characteristicDef, key, desc, text) {
                let outerScores = this.outerScores;
                
                let characteristicScoreOuter = [];
                let characteristicScoreOuterOutput = [];

                outerScores = outerScores.map(Number);
                
                characteristicScoreOuter = outerScores.map(i => {
                    i == 0 ? i++ : i;
                    return i;
                });

                characteristicScoreOuter.map((a, i) => {
                    let x = a * characteristicDef[i];
                    if(x > 0) {
                        characteristicScoreOuterOutput.push(x);
                    }
                });

                this.answersOuter.push({key: key, value: characteristicScoreOuterOutput.reduce((a,b) => a + b, 0).toFixed(3), desc: desc, text: text});

                this.answers.sort(function(a,b) {
                    return a - b;
                });
            },

            renderGraph() {
                let context = document.querySelector('#myChart').getContext('2d');
                let answers = this.answers;
                let answersOuter = this.answersOuter;
                const dataInner = [];
                const labelsInner = [];
                const dataOuter = [];
                const labelsOuter = [];

                answers.forEach(function(item) {
                    labelsInner.push(item.key); // data
                    dataInner.push(item.value); // values
                });

                answersOuter.forEach(function(item) {
                    labelsOuter.push(item.key); // data
                    dataOuter.push(item.value); // values
                });
                
                new Chart(context, {
                    type: 'radar',
                    data: {
                        labels: labelsInner,
                        datasets: [{
                            label: 'Inner scores',
                            data: dataInner,
                            backgroundColor: 'rgba(0, 48, 151, 0.2)',
                            borderColor: 'rgba(0, 48, 151, 0.6)'
                        },
                        {
                            label: 'Outer scores',
                            data: dataOuter,
                            backgroundColor: 'rgba(255, 196, 0, 0.2)',
                            borderColor: 'rgba(255, 196, 0, 0.6)'
                        }]
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
            },

            savePdf() {    
                
                const content = document.querySelector('#content-pdf');
                content.classList.add('pdf-content');
                document.getElementById('myChart').setAttribute('style', 'width:570px');
                document.getElementById('myChart').setAttribute('style', 'height:570px');
                function clearPdfSettings() {
                    content.classList.remove('pdf-content');
                    document.getElementById('myChart').setAttribute('style', 'width:1131px');
                    document.getElementById('myChart').setAttribute('style', 'height:1131px'); 
                };

                html2pdf(content);    
                setTimeout (clearPdfSettings, 2000);
            }
        },
        
        mounted: function() {
            this.calcCharacteristicScore(this.characteristicAScore, this.charA, 'A', 'Teacher: Flexibility in classroom situations', 'Adapting to students’ needs, interests and states of mind, while in class. Avoiding rigidity.');
            this.calcCharacteristicScore(this.characteristicBScore, this.charB, 'B', 'Teacher: Flexibility in administration', 'Adjusting administration processes to deal with the diverse needs and circumstances of students.');
            this.calcCharacteristicScore(this.characteristicCScore, this.charC, 'C', 'Teacher: Flexibility in planning', 'Adapting the depth, volume and pace of educational activities to students’ needs; if needed, initial planning is adjusted during educational activities including the form of deliverables.');
            this.calcCharacteristicScore(this.characteristicDScore, this.charD, 'D', 'Teacher: Societal awareness', 'Creating awareness of others’ perspectives and encouraging students to develop a deep understanding of their personal role in society.');
            this.calcCharacteristicScore(this.characteristicEScore, this.charE, 'E', 'Teacher: Creativity in preparation', 'Choosing didactics based on context, goal and topic and the diversity of students, avoiding choices made by habits.');
            this.calcCharacteristicScore(this.characteristicFScore, this.charF, 'F', 'Teacher: Sharing responsibility', 'Inviting students to take initiative and contribute their talents. Relying on students’ qualities to find valid ways to reach teaching goals.');
            this.calcCharacteristicScore(this.characteristicGScore, this.charG, 'G', 'Teacher: Having high expectations', 'Asking full commitment from students and expecting them to actively look for connections with previous learned topics and for ways to exceed their own expectations. Helping them to trust in their abilities and guide them to a higher level than they maybe thought was possible.');
            this.calcCharacteristicScore(this.characteristicHScore, this.charH, 'H', 'Teacher: Building relation with students', 'Being an attentive listener and providing time when students are in need of personal exchange, even when the students don’t necessarily indicate this explicitly themselves.');
            this.calcCharacteristicScore(this.characteristicIScore, this.charI, 'I', 'Personal: Willing to show personality', 'Opening up to students by showing a context-appropriate level of emotions and vulnerability, mentioning examples from his/her own life.');
            this.calcCharacteristicScore(this.characteristicJScore, this.charJ, 'J', 'Personal: Broad interest', 'Being open-minded to new knowledge areas and societal challenges, in personal and professional domains.');
            this.calcCharacteristicScore(this.characteristicKScore, this.charK, 'K', 'Society: Critical reflection', 'Encouraging creative and critical thinking to analyze and discuss different viewpoints towards societal developments and students’ potential to address those.');
            this.calcCharacteristicScore(this.characteristicLScore, this.charL, 'L', 'Society: Real-life connection', 'Applying current topics and real-life examples, taking into account the different stakeholders’ involved.');
            this.calcCharacteristicScore(this.characteristicMScore, this.charM, 'M', 'Society: Involvement in program', 'Creating a community of practice by involving colleagues from other disciplines and external professionals in the program.');

            // Calculate outer scores
            this.calcOuterScore(this.characteristicAScore, this.charA, 'A', 'Teacher: Flexibility in classroom situations', 'Adapting to students’ needs, interests and states of mind, while in class. Avoiding rigidity.');
            this.calcOuterScore(this.characteristicBScore, this.charB, 'B', 'Teacher: Flexibility in administration', 'Adjusting administration processes to deal with the diverse needs and circumstances of students.');
            this.calcOuterScore(this.characteristicCScore, this.charC, 'C', 'Teacher: Flexibility in planning', 'Adapting the depth, volume and pace of educational activities to students’ needs; if needed, initial planning is adjusted during educational activities including the form of deliverables.');
            this.calcOuterScore(this.characteristicDScore, this.charD, 'D', 'Teacher: Societal awareness', 'Creating awareness of others’ perspectives and encouraging students to develop a deep understanding of their personal role in society.');
            this.calcOuterScore(this.characteristicEScore, this.charE, 'E', 'Teacher: Creativity in preparation', 'Choosing didactics based on context, goal and topic and the diversity of students, avoiding choices made by habits.');
            this.calcOuterScore(this.characteristicFScore, this.charF, 'F', 'Teacher: Sharing responsibility', 'Inviting students to take initiative and contribute their talents. Relying on students’ qualities to find valid ways to reach teaching goals.');
            this.calcOuterScore(this.characteristicGScore, this.charG, 'G', 'Teacher: Having high expectations', 'Asking full commitment from students and expecting them to actively look for connections with previous learned topics and for ways to exceed their own expectations. Helping them to trust in their abilities and guide them to a higher level than they maybe thought was possible.');
            this.calcOuterScore(this.characteristicHScore, this.charH, 'H', 'Teacher: Building relation with students', 'Being an attentive listener and providing time when students are in need of personal exchange, even when the students don’t necessarily indicate this explicitly themselves.');
            this.calcOuterScore(this.characteristicIScore, this.charI, 'I', 'Personal: Willing to show personality', 'Opening up to students by showing a context-appropriate level of emotions and vulnerability, mentioning examples from his/her own life.');
            this.calcOuterScore(this.characteristicJScore, this.charJ, 'J', 'Personal: Broad interest', 'Being open-minded to new knowledge areas and societal challenges, in personal and professional domains.');
            this.calcOuterScore(this.characteristicKScore, this.charK, 'K', 'Society: Critical reflection', 'Encouraging creative and critical thinking to analyze and discuss different viewpoints towards societal developments and students’ potential to address those.');
            this.calcOuterScore(this.characteristicLScore, this.charL, 'L', 'Society: Real-life connection', 'Applying current topics and real-life examples, taking into account the different stakeholders’ involved.');
            this.calcOuterScore(this.characteristicMScore, this.charM, 'M', 'Society: Involvement in program', 'Creating a community of practice by involving colleagues from other disciplines and external professionals in the program.');

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

    #table, #table-two {
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

            .cell:last-child {
                width: 100%;
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

    #table-two .table-heading {
        background-color: $yellow;

        .cell {
            color: $blue;
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

    #content-pdf {
        width: 100%;
    }

    .pdf-content {
        max-width: 595px;

        * {
            font-size: 12px !important;
        }        
    }
</style>