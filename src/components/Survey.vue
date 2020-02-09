<template>
    <div id="survey">
        <div id="breadcrumb-container">
            <p>You are here: <span class="breadcrumb-position">{{ position }}</span></p>
        </div>
        <h1>Teacher Talent Tool: <span class="heading-underline">Questions</span></h1>
        <div class="divider yellow"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        <form action="" id="questions-form">
            <div id="form-header">
                <div class="cell">
                    <p>Teaching strategies</p>
                </div>
                <div class="cell">
                    <p>Hardly ever</p>
                </div>
                <div class="cell">
                    <p>Sometimes</p>
                </div>
                <div class="cell">
                    <p>Regularly</p>
                </div>
            </div>
            <div class="form-group" v-for="question in questions" :key="question.id">
                <span class="question-id">{{ question.id }}.</span> 
                <p>{{ question.question }}</p>
                <div class="input-wrapper">
                    <input 
                        type="radio" 
                        v-bind:name="question.id" 
                        class="checkmark-custom" 
                        value="-1" 
                        v-model="question.score"
                    >
                    <label v-bind:for="question.id" class="checkmark-custom-label"></label>
                </div>
                <div class="input-wrapper">
                    <input 
                        type="radio" 
                        v-bind:name="question.id" 
                        class="checkmark-custom"  
                        value="0" 
                        v-model="question.score"
                    >
                    <label v-bind:for="question.id" class="checkmark-custom-label"></label>
                </div>
                <div class="input-wrapper">
                    <input 
                        type="radio" 
                        v-bind:name="question.id" 
                        class="checkmark-custom"  
                        value="1" 
                        v-model="question.score"
                    >
                    <label v-bind:for="question.id" class="checkmark-custom-label"></label>
                </div>
            </div>
        </form>
    <div class="page-end-container">
        <div class="left-border yellow"></div>
        <div class="next">
            <button class="btn go-next" @click.prevent="onSubmit">Next</button>
        </div>
        <div class="right-border yellow"></div>
    </div>
    </div>
</template>

<script>
    import questions from '../assets/json/questions.json';
    export default {
        data() {
            return { 
                position: 'step 2', 
                questions: questions,
                score: []
                }
        },

        methods: {
            onSubmit() {
                let inputs = document.querySelectorAll('.checkmark-custom');
                for(let i = 0; i < inputs.length; i++) {
                    if(inputs[i].checked) {
                        this.scores_a.push(inputs[i].value);
                        this.scores_b.push(inputs[i].value);
                    }
                }
                
                if(this.scores_a.length < 49) {
                    alert('Please make sure that all the questions have been answered before you proceed.');
                } else {
                    this.$router.push("/results");
                }
            }
        }
    }
</script>

<style lang="scss">
        @import '../assets/sass/_variables.scss';
        .form-group {
            display: flex;
            padding: 1em 0 1em 1em;
    
            p {
                width: 55%;
                padding-right: 1em;
                margin: 0;
                line-height: 1em;
            }
    
            .input-wrapper {
                display: flex;
                width: 15%;
                align-items: center;
                justify-content: center;
                position: relative;
            }
        }

        .form-group:nth-child(odd) {
            background-color: rgba(0,0,0,0.05);
        }
        
        #form-header {
            display: flex;
            background-color: $yellow;
            padding: 0 1em;
            position: sticky; 
            top: 0;
            z-index: 2;
    
            p {
                color: $gray;
                font-weight: 800;
                text-align: center;
            }
    
            .cell:first-child {
                width: 55%;
                justify-content: flex-start;
    
                p {
                    font-size: 1.5em;
                }
            }
    
            .cell {
                justify-content: center;
            }
        }
    
        .cell {
            width: 15%;
            display: flex;
            align-items: center;
    
            p {
                font-size: 1em;
            }
        }
    
        /* Checkmark */
        .checkmark-custom {
            opacity: 0;
            width: 35px;
            height: 35px;
            z-index: 2;
            position: absolute;
            margin: 0;
        }
    
        .checkmark-custom-label {
            position: relative;
            margin: 0;
        }
    
        .checkmark-custom, .checkmark-custom-label {
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
        }
    
        .checkmark-custom + .checkmark-custom-label:before {
            content: '';
            border: 2px solid $gray;
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            padding: 2px;
            margin-right: 10px;
            text-align: center;
        }
    
        .checkmark-custom:checked + .checkmark-custom-label:before {
            content: "\2714";
            background: $blue;
            color: white;
            border: 2px solid $blue;
        }

        .question-id {
          height: 100%;
          display: inline-block;
          margin-right: 1em;
          font-size: 1em;
        }
        
</style>