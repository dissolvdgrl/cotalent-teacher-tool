<template>
    <div id="start-container">
        <div id="breadcrumb-container">
            <p>You are here: <span class="breadcrumb-position">{{ position }}</span></p>
        </div>
        <h1>Welcome to the Characteristics Tool</h1>
        <div class="divider yellow"></div>
        <p>As a teacher it helps to know your teacher characteristics so you can make use of them while working with students and helping them to develop their talents. In order to recognize their talents, it helps to know what your personal talents are. You will easier spot talented students who share your talents than students who have talents different from your own. The Teacher Characteristic Tool will let you discover the characteristics that come to you naturally and those that you might further develop. </p>
        <p>You will see a list of almost 50 teacher strategies that allow students to show their talents. These strategies all relate to an activity you perform in a classroom and each strategy is linked to one or multiple teacher characteristics. Each strategy links to multiple characteristics, and each characteristic builds on multiple strategies. We divided the characteristics in three categories: the first one focuses on the interaction between teachers and students, the second one relates most to personal characteristics that affect your teaching, and the third one is related to getting the outside world into your classroom.</p>
        <p>You will score yourself on each of the strategies after which you will receive a score for each of the characteristics. </p>
        <p>There are classroom examples to give you inspiration to extend your classroom practices or to introduce new colours to your palette. Next, there are links to useful videos in the eLibrary of the CoTalentWizard.</p>
        <p>It will take about 20-30 minutes to score the strategies and get an overview of your teacher characteristics. Afterwards you can of course spend as much time as you prefer to read through the examples.</p>

        <div class="how-to-use-container">
            <div class="how-to-use">
                <p><span class="yellow-txt">How to </span>use the tool:</p>
            </div>            
        </div>
        
        <ol>
            <li>
                <p>Think of a class that you are familiar with, which you have taught multiple times, or Think of your teaching over the past two years. What situations did you really like and gave you energy? How did you prepare? How did you interact with the students? Did you discuss your classes with colleagues and how were these discussions? </p>
                <p>Please note that everyone has a personal set of talents and characteristics, which are all valuable. Do not try to score the list to define the ‘ideal’ teacher, but rather focus on scoring yourself. Your personal characteristics profile is most likely to provide you with inspiration afterwards.</p>
            </li>
            <li>
                <p>Go to the strategies and score them for yourself as a teacher. You can choose from one of three levels: very little, sometimes, and very often. Try to score quickly as it is difficult to do it very precisely. Remember that the strategies link to multiple characteristics and each characteristic builds on multiple strategies, so your profile is not steered by your score on a single strategy.</p>
                <p> The strategies are presented to you seven at a time and there are seven pages in total, so 7*7 equalling 49 strategies. </p>
            </li>
            <li>
                <p>After scoring all strategies, you will see an overview of your characteristics. A list with your personal scores and a spiderweb as a visual representation. You will see two columns and two lines. The left column/inner line represents your teacher characteristics profile that comes to you naturally. You have a strong preference to use the strategies associated to those. The right column/outer line shows the profile of teacher characteristic in a somewhat looser respect. Where it is different from the inner line, you tend to use the associated strategies less often.</p>
                <p>Take some time to reflect on the profiles. Do they make sense? Did you realize that you scored so high on some characteristics?</p>
            </li>
            <li>
                <p>Read through the classroom examples of the characteristics on which you scored high with the inner line. There might be easy-to-use examples to try in an upcoming class.</p>
            </li>
            <li>
                <p>Read through the classroom examples of the characteristics on which you scored high with the inner line. These might be less easy to adopt in an upcoming class, but it should still be relatively easy.</p>
            </li>
            <li>
                <p>For a challenge, check the classroom examples of the characteristics on which you had lower scores. Apparently, these do not come naturally to you, but they might give you surprising classroom situations when trying them anyway.</p>
            </li>
            <li>
                <p>As in the previous three steps, check the videos in the eLibrary for inspiration or new approaches.</p>
            </li>
        </ol>

        <div class="page-end-container">
            <div class="left-border yellow"></div>
            <div class="next">
                <router-link to="/survey" class="btn go-next" >Start</router-link>
            </div>
            <div class="right-border yellow"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { position: 'start' }
    }
}
</script>

<style lang="scss">
    @import '../assets/sass/_variables.scss';
    #start-container {
        position: relative;
    }

    .how-to-use-container {
        position: relative;
        margin: 3em 0;
        padding: 0;
        height: 3em;
    }

    .how-to-use {
        position: absolute;
        left: -4em;
        top: 0;
        background-color: $blue;
        padding: 0.5em 1em;
        box-shadow: $shadowOne;

        p {
            color: white;
            margin: 0;
            font-weight: 800;
            font-size: 2em;
        }
    }
</style>