<template>
    <div id="start-container">
        <div id="breadcrumb-container">
            <p>You are here: <span class="breadcrumb-position">{{ position }}</span></p>
        </div>
        <h1>Welcome to the Characteristics Tool</h1>
        <div class="divider yellow"></div>
        <p>As a teacher you help students to develop their talents. To recognize those, it helps to know what your personal talents are. You will find it easier to spot talented students who share your talents, than students who have talents different from your own. The Teacher Characteristic Tool will let you discover those characteristics that come to you naturally, and those that you can develop with relative ease. This can help you spot talented students and provide inspiration for classroom activities.</p>

        <div class="how-to-use-container">
            <div class="how-to-use">
                <p><span class="yellow-txt">How to </span>use the tool:</p>
            </div>            
        </div>
        
        <ol>
            <li>
                <p>Think of a class that you are familiar with, which you have taught multiple times, or Think of your teaching over the past two years. What situations did you really like and gave you energy? How did you prepare? How did you interact with the students? Did you discuss your classes with colleagues and how were these discussions? <em>Please note</em> that everyone has a personal set of talents and characteristics, which are all valuable. Do not use the list to define the ‘ideal’ teacher, but focus on scoring yourself. Your personal characteristics profile can then provide you with inspiration.
</p>
            </li>
            <li>
                <p>Go to the strategies, 49 in total, and score yourself as a teacher. This will take about 15 minutes. For each strategy, you can choose whether you use it very little, sometimes, or regularly. Try to score quickly. The strategies link to multiple characteristics and each characteristic builds on multiple strategies, so your profile is not determined by your score on a single strategy.</p>
            </li>
            <li>
                <p>After scoring all strategies, you see an overview of your characteristics with two top-3’s and a spiderweb as a visual representation. The first top-3 represents the teacher characteristics that come to you naturally. You have a strong preference to use the strategies associated to those. The second top-3 indicates which teacher characteristics you could easily strengthen.  In the spiderweb you will see two lines. The inner line represents your profile based on teacher characteristics that come to you naturally. The outer line shows a second profile, now also including strategies you use less often. Take some time to reflect on the profiles. Do they make sense? Were you aware that you scored so high on some characteristics?</p>
            </li>
            <li>
                <p>Read through the classroom examples of the characteristics in the first top-3. There might be easy-to-use examples to try in an upcoming class.</p>
            </li>
            <li>
                <p>Read through the classroom examples of the characteristics in the second top-3. These might be less easy to adopt in an upcoming class, but they will suit you relatively easily.</p>
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
        width: 100%;
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