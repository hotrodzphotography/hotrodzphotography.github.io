<template>
    <div id="photography">
        Redirecting to Instagram...
    </div>
</template>

<script>

export default {
    name: 'photography',
    
    data: function () {
        return {
            instagramUrl: 'https://instagram.com/hotrodzphotography',
        };
    },
    created () {
        window.location.href = this.instagramUrl;
    }
};
</script>

<style lang="less">
    #photography {
        margin: 0 2em;

        .user {
            text-align: center;
            padding-top: 1.3em;
            padding-bottom: .3em;
            transition: 0.3s ease;

            * {
                vertical-align: middle;
            }

            .user-info {
                display: inline-block;
                padding-right: .5em;
                font-size: 1.3em;

                .name {
                    color: @darkgray;
                }

                .username {
                    a {
                        color: @darkgray;
                        transition: 0.3s;
                        text-decoration: none;

                        &:hover {
                            color: @lightblue;
                        }
                    }
                }
            }

            .user-picture {
                img {
                    height: 5em;
                    border-radius: 2.5em;
                }
            }
        }

        #photos {
            * {
                vertical-align: top;
            }

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
                        padding-top: 1em;
                        padding-bottom: .7em;

                        .card-footer-item {
                            display: inline-block;
                            width: 33.33333%;

                            * {
                                vertical-align: middle;
                            }

                            .icon {
                                vertical-align: middle;
                                color: @darkgray;
                                padding-right: .5em;
                            }

                            .open-icon {
                                transition: .3s;
                                &:hover {
                                    color: @lightblue;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media @upToNarrowQuery {
        #photography {
            #photos {
                .photo {
                    width: 100%;
                }
            }
        }
    }

    @media @extraNarrowAndUpQuery {
        #photography {
            #photos {
                .photo {
                    width: 50%;
                }
            }
        }
    }

    @media @mediumAndUpQuery {
        #photography {
            #photos {
                .photo {
                    width: 33.3%;
                }
            }
        }
    }
</style>
