<template>
    <section class="main-container">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="text text-white">
                <h1>Contact Me!</h1>
                <p>I’d love to hear from you! Whether you have questions about my work, want to discuss a potential project, or simply want to connect, feel free to reach out. I’m always open to new opportunities and collaborations.</p>
                <p>You can reach me via email at <a href="pauljacobtocmo96@gmail.com" class="text-white">pauljacobtocmo96@gmail.com</a> or through my social media channels linked below.</p>
                <p>Let’s connect and make something amazing together!</p>   
                <div class="socials d-flex gap-2">
                    <a href="https://web.facebook.com/pauljacob.tocmo/" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/paaul_jcb/" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-twitter"></i>
                    </a>
                </div>         
            </div>
            <div class="image">
                <img required :src="contactImage" alt="Contact">
            </div>
        </div>
    </section>
</template>

<script>
import contactImage from '@/assets/Images/contact.png';

export default {
    data() {
        return {
            contactImage,
        };
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    .container {
        .text {
            h1 {
                font-size: 3em;
            }
            p {
                font-size: 0.9em;
            }
            div {
                i {
                    color: white;
                    font-size: 2em;
                }
            }
        }
        .image {
            img {
                width: 40vw;
            }
        }
    }
}
</style>