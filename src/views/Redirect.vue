<template>
    <div id="redirect">
        <div id="form">
            <form autocomplete="off">
                <div class="row">
                    <input id="name" v-model="name" type="text" placeholder="Name">
                </div>

                <div class="row">
                    <input id="url" v-model="url" type="url" placeholder="URL">
                </div>

                <div class="row">
                    <input id="src" v-model="src" type="text" placeholder="Source">
                </div>

                <div id="output" class="row">
                    <p>Redirect Link:</p>
                    <a :href="redirectLink" target="_blank" rel="noopener">{{redirectLink}}</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'redirect',
    props: {},
    data: function () {
        return {
            name: '',
            url: '',
            src: ''
        };
    },
    computed: {
        redirectLink: function () {
            let location = window.location,
                params = {
                    name: this.name,
                    to: this.url,
                    src: this.src
                };

            if (params.to) { params.to = this.convertToUrl(params.to); }

            return location.origin + '/r.html?' + this.generateQueryString(params);
        }
    },
    created () {
        let redirectName = this.$route.query.name,
            redirectTo = this.$route.query.to;

        if (this.$route.query && redirectTo) {
            // Log either the name (if available) or fallback to the URL
            this.trackRedirect(redirectName || redirectTo);

            // Redirect to the provided URL
            window.location = this.convertToUrl(this.$route.query.to);
        }
    },
    methods: {
        convertToUrl: function (intendedTarget) {
            if (!intendedTarget.startsWith('http://') && !intendedTarget.startsWith('https://')) {
                return 'http://' + intendedTarget;
            }
            return intendedTarget;
        },
        generateQueryString: function (queryStrParams) {
            return Object.keys(queryStrParams)
                // Convert the provided params to a query string
                .map(function (key) {
                    if (queryStrParams[key]) {
                        return key + '=' + queryStrParams[key];
                    }
                })
                // Filter out empty params
                .filter(param => param)
                .join('&');
        },
        trackRedirect: function (item) {
            this.$ga.event({
                eventCategory: 'redirect',
                eventAction: 'navigation',
                eventLabel: item
            });
        }
    }
};
</script>

<style lang="less">
    #redirect {
        #redirecting {
            text-align: center;
            padding-bottom: 2em;
        }

        #form{
            padding: 2em 0;

            .row {
                text-align: center;

                input:not([type=submit]), textarea {
                    margin-bottom: .5em;
                    padding: .375rem .75rem;
                    width: 50%;
                    font-size: 1rem;
                    min-height: 2em;
                    color: @darkgray;
                    background-color: @white;
                    border: 1px solid @lightgray;
                    border-radius: .25rem;
                    transition: .15s ease;
                    overflow: visible;

                    &:focus {
                        outline: none;
                        border: 1px solid @lightblue;
                        box-shadow: 0 0 .63em @lightgray;
                    }
                }
            }

            #output {
                padding-top: 2em;
            }
        }
    }
</style>
