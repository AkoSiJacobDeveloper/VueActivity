<template>
    <section class="main-container text-white d-flex justify-content-center align-items-center">
        <div class="container row">
            <section class="col-12 col-md-6 p-2 w-50" v-for="(item, index) in items" :key="index">
                <h1>{{ item.title }}</h1>
                <p> {{ item.text }} </p>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return { 
            items: [
                {
                    title: 'Who am I?',
                    text: 'Hi, Im Paul Jacob Tocmo, a passionate third-year Information Technology student majoring in Web Development. I am driven by the challenge of solving complex problems and creating innovative digital experiences.'
                },
                {
                    title: 'My Story',
                    text: 'My journey in IT started when I discovered my love for coding and technology during my early school years. Over the past few years, I’ve developed my skills in front-end development, working with HTML, CSS, JavaScript, and frameworks like Vue.js. I enjoy building responsive websites that are both functional and visually appealing.'
                },
                {
                    title: 'What I do?',
                    text: 'I have technical expertise in front-end development using HTML, CSS/SCSS, JavaScript, and Vue.js, with a focus on responsive design through Bootstrap and Flexbox. I am proficient in version control with Git and GitHub, and have a basic understanding of PHP and Laravel. Additionally, I am passionate about teamwork, detail-oriented, and driven by a desire to constantly improve through new challenges.'
                },
                {
                    title: 'What drives me?',
                    text: 'Im particularly excited about the future of web development and how it continues to evolve. I’m looking forward to deepening my knowledge in full-stack development and mobile app creation, and one day, leading my own development team.'
                },
                {
                    title: 'Join Me!',
                    text: 'Feel free to browse my portfolio to see some of the projects I’ve worked on, or connect with me if you’re interested in collaborating on exciting web development projects!'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    font-size: 0.6em;
    .container {
        section {
            box-shadow: rgba(255, 255, 255, 0.16) 0px 1px 4px;
            height: auto;
        }
    }
}
</style>