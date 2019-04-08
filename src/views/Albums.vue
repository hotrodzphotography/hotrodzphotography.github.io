<template>
    <div id="photography">
        <h2>Albums</h2>
        <div id="album-count">
            <div>
                <label for="search">Search albums: </label>
                <input id="search" v-model="search" type="text" placeholder="Search albums.." autofocus>
            </div>

            <p>{{filteredAlbums.length}} Albums</p>
        </div>

        <div id="albums">
            <album v-for="albumMetadata in filteredAlbums" :key="albumMetadata.name" class="album" :album="albumMetadata" />
        </div>
    </div>
</template>

<script>
import album from '../components/Album.vue';
import Albums from '../data/albums';

export default {
    name: 'albums',
    components: {
        album
    },
    data: function () {
        return {
            search: '',
            albums: Albums.albums,
        };
    },
    computed: {
        filteredAlbums() {
            return this.albums.filter(album => {
                return JSON.stringify(album).toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    watch: {
        search: function () {
            // Force lazy loader to load any newly displayed images after search term changes
            this.$Lazyload.lazyLoadHandler();
        }
    },
    methods: {
        trackClick: function (eventLabel) {
            this.$ga.event({
                eventCategory: 'albums',
                eventAction: 'click',
                eventLabel: eventLabel
            });
        }
    }
};
</script>

<style lang="less">
    #photography {
        margin: 0 2em;

        #album-count {
            float: right;

            p {
                text-align: right;
            }
        }

        #albums {
            clear:both;

            * {
                vertical-align: top;
            }

            ul {
                padding-left: 0;

                .album {
                    display: inline-block;
                }
            }
        }

        #pagination-controls {
            text-align: center;

            .paginate-links {
                &.albums {
                    user-select: none;

                    &ul {
                        list-style-type: none;
                        padding: 0;
                    }

                    a {
                        color: @darkgray;
                        cursor: pointer;

                        &:hover {
                            color: @lightblue;
                        }
                    }

                    li {
                        display: inline-block;
                        margin: 0 10px;

                        &.active {
                            a {
                                font-weight: bold;
                            }
                        }

                        &.next {
                            &:before {
                                content: ' | ';
                                margin-right: 13px;
                                color: #ddd;
                            }
                        }

                        &.disabled {
                            a {
                                color: #ccc;
                                cursor: no-drop;
                            }
                        }
                    }
                }
            }
        }
    }

    @media @upToNarrowQuery {
        #photography {
            #albums {
                .album {
                    width: 100%;
                }
            }
        }
    }

    @media @extraNarrowAndUpQuery {
        #photography {
            #albums {
                .album {
                    width: 50%;
                }
            }
        }
    }

    @media @mediumAndUpQuery {
        #photography {
            #albums {
                .album {
                    width: 33.3%;
                }
            }
        }
    }
</style>
