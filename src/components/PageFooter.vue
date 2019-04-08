<template>
    <div id="footer">
        <div id="copyright">
            <span>
                &copy; 2015 - {{currentYear}} Hot Rodz Photography.
            </span>
            <span>
                All Rights Reserved.
            </span>
        </div>
        <div id="identities">
            <a :href="facebookUrl" target="_blank" rel="noopener" v-on:click="trackClick('facebook')">
                <facebook class="icon" :size="iconSize" />
            </a>
            <a :href="instagramUrl" target="_blank" rel="noopener" v-on:click="trackClick('instagram')">
                <instagram class="icon" :size="iconSize" />
            </a>
            <a :href="emailUrl" v-on:click="trackClick('email')">
                <email class="icon" :size="iconSize" />
            </a>
        </div>
    </div>
</template>

<script>
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Facebook from 'vue-material-design-icons/FacebookBox.vue';
import Email from 'vue-material-design-icons/Email.vue';

export default {
    name: 'page-footer',
    components: {
        Instagram,
        Facebook,
        Email
    },
    data () {
        return {
            instagramUrl: 'https://instagram.com/hotrodzphotography',
            facebookUrl: 'https://facebook.com/HotRodzPhotography',
            emailUrl: 'mailto:hotrodzphotography@gmail.com',
            currentYear: (new Date()).getFullYear(),
            iconSize: 36
        };
    },
    methods: {
        trackClick: function (iconType) {
            this.$ga.event({
                eventCategory: 'footer',
                eventAction: 'click',
                eventLabel: iconType
            });
        }
    }
};
</script>

<style lang="less">
    #footer {
        margin-top: 2em;
        text-align: center;

        #identities {
            padding-top: 1em;

            a {
                color: black;
                padding: .4em;

                .icon {
                    opacity: 0.5;
                    transition: 0.4s;
                }

                &:hover {
                    .icon {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media @upToNarrowQuery {
        #footer {
            #copyright {
                span {
                    display: block;
                }
            }
        }
    }
</style>
