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
        <div id="chart-output">
            <p v-for="inner_item in inner">{{ inner_item }}</p>
        </div>
        <div id="table">
            <div class="table-heading">
                <div class="cell"></div>
                <div class="cell">Score</div>
                <div class="cell">Teacher characteristics</div>
            </div>
            <div class="table-row">
                <div class="cell">A</div>
                <div class="cell">27</div>
                <div class="cell">
                    <p class="bold">Teacher: Flexibility in classroom situations</p>
                    <p>Adapting to students' needs, interests and states of mind while in class. Avoiding rigidity</p>
                </div>
            </div>
            <div class="table-row">
                <div class="cell">A</div>
                <div class="cell">27</div>
                <div class="cell">
                    <p class="bold">Teacher: Flexibility in classroom situations</p>
                    <p>Adapting to students' needs, interests and states of mind while in class. Avoiding rigidity</p>
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
                <span @click="showData">
                    <img src="src/assets/img/pdf-icon.svg" alt="">
                </span>
            </div>
            <div class="right-border yellow"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                position: 'step 3',
                inner: this.scores_a,
                outer: this.scores_b
            };
        },
        methods: {
            printResults() {
                window.print();
            },

            savePdf() {
                alert('Todo: save as pdf functionality');
            },

            showData() {
                console.log(`the results for inner circle are: ${this.scores_a}`);
                console.log(`the results for outer circle are: ${this.scores_b}`);
            }
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