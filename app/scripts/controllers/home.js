'use strict';

/**
 * @ngdoc function
 * @name tiymeetupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tiymeetupApp
 */
angular.module('tiymeetupApp')
    .controller('HomeCtrl', function ($scope, $location) {
        $scope.introLinks = ['Programmers and Designers', 'Group Reviews', 'Upcoming Meetups', 'More'];

        $scope.menuItems = [{
            route: '#/',
            title: 'Home',
        }, {
            route: '#/members',
            title: 'Members',
        }, {
            route: '#/photos',
            title: 'Photos',
        }, {
            route: '#/discussions',
            title: 'Discussions',
            active: false
        }, {
            route: '#/more',
            title: 'More',
        }];

        $scope.$on('$routeChangeSuccess', function () {
            $scope.currentRoute = '#' + $location.path();
        });


        $scope.upcomingEvents = [{
            date: 'Yesterday 6:30pm',
            title: 'Mobile Growth Austin Hosted at The Iron Yard',
            avatarPath: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg',
            memberCount: 1,
            details: 'Doctrina duis probant fabulas, quae arbitror litteris. Nam dolore aliqua hicexcepteur.Nescius dolor ingeniis, in magna sempiternum quo lorem si ea veniam iudicem et de sed fugiat sunt culpa ne irure incididunt laborum, magna et nostrud ex quorum, o amet ullamco si ab in eram summis duis.Cillum doctrina in...'
        }, {
            date: 'Yesterday 6:30pm',
            title: 'Mobile Growth Austin Hosted at The Iron Yard',
            avatarPath: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg',
            memberCount: 1,
            details: 'Doctrina duis probant fabulas, quae arbitror litteris. Nam dolore aliqua hicexcepteur.Nescius dolor ingeniis, in magna sempiternum quo lorem si ea veniam iudicem et de sed fugiat sunt culpa ne irure incididunt laborum, magna et nostrud ex quorum, o amet ullamco si ab in eram summis duis.Cillum doctrina in...'
        }, {
            date: 'Yesterday 6:30pm',
            title: 'Mobile Growth Austin Hosted at The Iron Yard',
            avatarPath: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg',
            memberCount: 1,
            details: 'Doctrina duis probant fabulas, quae arbitror litteris. Nam dolore aliqua hicexcepteur.Nescius dolor ingeniis, in magna sempiternum quo lorem si ea veniam iudicem et de sed fugiat sunt culpa ne irure incididunt laborum, magna et nostrud ex quorum, o amet ullamco si ab in eram summis duis.Cillum doctrina in...'
        }, {
            date: 'Yesterday 6:30pm',
            title: 'Mobile Growth Austin Hosted at The Iron Yard',
            avatarPath: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg',
            memberCount: 1,
            details: 'Doctrina duis probant fabulas, quae arbitror litteris. Nam dolore aliqua hicexcepteur.Nescius dolor ingeniis, in magna sempiternum quo lorem si ea veniam iudicem et de sed fugiat sunt culpa ne irure incididunt laborum, magna et nostrud ex quorum, o amet ullamco si ab in eram summis duis.Cillum doctrina in...'
        }, {
            date: 'Yesterday 6:30pm',
            title: 'Mobile Growth Austin Hosted at The Iron Yard',
            avatarPath: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg',
            memberCount: 1,
            details: 'Doctrina duis probant fabulas, quae arbitror litteris. Nam dolore aliqua hicexcepteur.Nescius dolor ingeniis, in magna sempiternum quo lorem si ea veniam iudicem et de sed fugiat sunt culpa ne irure incididunt laborum, magna et nostrud ex quorum, o amet ullamco si ab in eram summis duis.Cillum doctrina in...'
        }, {
            date: 'Yesterday 6:30pm',
            title: 'Mobile Growth Austin Hosted at The Iron Yard',
            avatarPath: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg',
            memberCount: 1,
            details: 'Doctrina duis probant fabulas, quae arbitror litteris. Nam dolore aliqua hicexcepteur.Nescius dolor ingeniis, in magna sempiternum quo lorem si ea veniam iudicem et de sed fugiat sunt culpa ne irure incididunt laborum, magna et nostrud ex quorum, o amet ullamco si ab in eram summis duis.Cillum doctrina in...'
        }];

        $scope.whatsNewItems = [{
            icon: 'fa fa-user',
            title: 'NEW MEMBER',
            name: 'William Smith',
            action: ' joined ',
            time: '1h ago',
            image: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg'
        }, {
            icon: 'fa fa-check',
            title: 'NEW RSVP',
            name: 'Rafe Simmons',
            action: ' RSVPed Yes ',
            event: 'for Free Crash Course-Build A Home Page',
            time: '2h ago',
            image: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg'
        }, {
            icon: 'fa fa-user',
            title: 'NEW MEMBER',
            name: 'Rafe Simmons',
            action: ' joined ',
            event: '',
            time: '2h ago',
            image: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg'
        }, {
            icon: 'fa fa-check',
            title: 'UPDATED RSVP',
            name: 'Raviraj Patil',
            action: ' RSVPed Yes fo ',
            event: 'Design Workflow with Sketch',
            time: '2h ago',
            image: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg'
        }, {
            icon: 'fa fa-check',
            title: 'Updated RSVP',
            name: 'Johnny Tran',
            action: ' RSVPed Yes for ',
            event: 'Design Workflow with Sketch',
            time: '3h ago',
            image: 'http://photos2.meetupstatic.com/photos/member/a/a/a/d/thumb_249763693.jpeg'
        }, {}];

    });
