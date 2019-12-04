<template>
    <div id="survey">
        <breadcrumb></breadcrumb>
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
                    <p>All the time</p>
                </div>
            </div>
            <div class="form-group" v-for="question in questions" :key="question.id">
                <p><span id="question-1-id">{{ question.id }}.</span> {{ question.question }}</p>
                <div class="input-wrapper">
                    <input type="radio" v-bind:name="question.id" v-bind:id="question.id" class="checkmark-custom">
                    <label v-bind:for="question.id" class="checkmark-custom-label"></label>
                </div>
                <div class="input-wrapper">
                    <input type="radio" v-bind:name="question.id" v-bind:id="question.id" class="checkmark-custom">
                    <label v-bind:for="question.id" class="checkmark-custom-label"></label>
                </div>
                <div class="input-wrapper">
                    <input type="radio" v-bind:name="question.id" v-bind:id="question.id" class="checkmark-custom">
                    <label v-bind:for="question.id" class="checkmark-custom-label"></label>
                </div>
            </div>
        </form>
    <div class="page-end-container">
        <div class="left-border yellow"></div>
        <div class="next">
            <router-link to="/results" class="btn go-next" >Next</router-link>
        </div>
        <div class="right-border yellow"></div>
    </div>
    </div>
</template>

<script>
    import breadcrumb from './Breadcrumb.vue';
    import questions from '../assets/json/questions.json';
    export default {
        data() {
            return { position: 'step 2', questions: questions };
        },
        components: { breadcrumb }
    }
</script>

<style lang="scss">
        @import '../assets/sass/_variables.scss';
        .form-group {
            display: flex;
            padding-left: 1em;
    
            p {
                width: 55%;
                padding-right: 1em;
            }
    
            .input-wrapper {
                display: flex;
                width: 15%;
                align-items: center;
                justify-content: center;
            }
        }

        .form-group:nth-child(odd) {
            background-color: rgba(0,0,0,0.05);
        }
        
        #form-header {
            display: flex;
            background-color: $yellow;
            padding: 0 1em;
    
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
            width: 20px;
            height: 20px;
            z-index: 2;
            position: absolute;
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
        
</style>