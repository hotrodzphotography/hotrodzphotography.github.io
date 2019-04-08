<template>
    <div class="photo">
        <div class="card">
            <div class="card-image">
                <a :href="album.url" rel="noopener" v-on:click="trackClick('click', album.name)">
                    <img v-lazy="album.albumCoverUrl" alt="Album Cover Photograph" v-on:load="albumLoaded">
                </a>
            </div>

            <div v-show="albumPreviewLoaded" class="card-metadata">
                <div class="card-footer">
                    <div class="card-details">
                        <p class="title">
                            <a :href="album.url" rel="noopener" v-on:click="trackClick('click', album.name)">
                                {{album.name}}
                            </a>
                        </p>
                        <p class="date">
                            <calendar-icon class="icon" />
                            {{formatDate(album.date)}}
                        </p>
                        <p class="location">
                            <a :href="googleMapsBaseSearchUrl + album.location" v-on:click="trackEvent('location', album.location)">
                                <map-marker-icon class="icon" />
                                {{album.location}}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';

export default {
    name: 'album',
    components: {
        MapMarkerIcon,
        CalendarIcon
    },
    props: {
        album: {
            type: Object,
            default: () => {}
        }
    },
    data: function () {
        return {
            albumPreviewLoaded: false,
            googleMapsBaseSearchUrl: 'https://www.google.com/maps/search/'
        };
    },
    methods: {
        formatDate: function (date) {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        },
        albumLoaded: function () {
            console.log('LOADED!');
            this.albumPreviewLoaded = true;
        },
        trackEvent: function (action, label) {
            this.$ga.event({
                eventCategory: 'albums',
                eventAction: action,
                eventLabel: label
            });
        }
    }
};
</script>

<style lang="less">
    .photo {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.33333%;
        display: inline-block;

        .card {
            margin: .5em;

            .card-image {
                border-top-left-radius: 1em;
                border-top-right-radius: 1em;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }

            .card-metadata {
                border: 1px @lightgray;
                border-bottom-left-radius: 1em;
                border-bottom-right-radius: 1em;
                border-style: none solid solid solid;
            }

            .card-footer {
                text-align: center;
                padding-top: .1em;
                padding-bottom: .7em;

                .card-details {

                    .title {
                        font-weight: bold;
                    }

                    a {
                        color: @darkgray;
                        text-decoration: none;

                        &:hover {
                            color: @lightblue;
                        }
                    }

                }
            }
        }
    }
</style>
