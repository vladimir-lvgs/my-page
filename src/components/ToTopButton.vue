<template>
    <!-- <button class="goTop" v-if="isVisible" @click="backToTop"> -->
    <button class="toTop" :class="{'isVisible': isVisible}" @click="scrollToTop">
        <i class="fas fa-angle-up" aria-hidden="true"></i>
    </button>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false
        };
    },
    created() {
        document.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        document.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isVisible = window.scrollY > 150 ? true : false;
        },
        scrollToTop() {
            scrollPageTo(0);

            // https://gist.github.com/felipenmoura/650e7e1292c1e7638bcf6c9f9aeb9dd5
            function scrollPageTo(to, duration = 500) {
                //t = current time
                //b = start value
                //c = change in value
                //d = duration
                const easeInOutQuad = function(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return (c / 2) * t * t + b;
                    t--;
                    return (-c / 2) * (t * (t - 2) - 1) + b;
                };

                return new Promise((resolve, reject) => {
                    const element = document.scrollingElement;

                    if (typeof to === "string") {
                        to = document.querySelector(to) || reject();
                    }
                    if (typeof to !== "number") {
                        to = to.getBoundingClientRect().top + element.scrollTop;
                    }

                    let start = element.scrollTop,
                        change = to - start,
                        currentTime = 0,
                        increment = 20;

                    const animateScroll = function() {
                        currentTime += increment;
                        let val = easeInOutQuad(
                            currentTime,
                            start,
                            change,
                            duration
                        );
                        element.scrollTop = val;
                        if (currentTime < duration) {
                            setTimeout(animateScroll, increment);
                        } else {
                            resolve();
                        }
                    };
                    animateScroll();
                });
            }
        }
    },
    mounted() {
        this.$nextTick(function() {
            // function
        });
    }
};
</script>

<style lang="scss" scoped>
.toTop {
    display: block;
    position: fixed;
    right: 15px;
    bottom: 15px;
    z-index: -1;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: $primary;
    background-color: rgba($primary, .7);
    opacity: 0;

    &.isVisible {
        z-index: 4;
        opacity: .8;
        transition: all .4s ease-in;
    }

    .fa {
        color: white;
        font-size: 22px;
    }

    &:hover {
        background-color: $primary;
        background-color: rgba($primary, .9);
        opacity: 1;
    }
}
</style>
