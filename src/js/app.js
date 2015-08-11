var Vue = require('vue');
var membersUrl = 'https://api.github.com/orgs/code-brewery/members';

Vue.use(require('vue-resource'));

var vm = new Vue({
    "el": "#app",
    data: {
        members: []
    },
    ready: function () {
        this.$http.get(membersUrl, function (data, status, response) {
            data.map(function(member) {
                this.members.push({
                    username: member.login,
                    avatar: member.avatar_url,
                    profile_url: member.html_url
                });
            }.bind(this));
        }).error(function (date, status, response) {

        });
    }
});


module.exports = vm;