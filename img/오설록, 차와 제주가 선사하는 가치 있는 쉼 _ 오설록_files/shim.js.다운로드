"use strict";

// RequireJS 설정 객체
var require = {
  baseUrl: gCdnUrl + '/kr/ko/static/js',

  paths: {
    '$': 'lib/jquery-1.11.2.min',
    '_': 'lib/underscore-min',
    'text': 'lib/text',
    'TweenMax': 'lib/TweenMax.min',
    'gsap': 'lib/jquery.gsap.min',

    'masonry': 'lib/masonry.pkgd.min',            // Masonry PACKAGED v3.3.1
    'imagesloaded': 'lib/imagesloaded.pkgd.min',  // imagesLoaded PACKAGED v3.2.0

    // juqery plugins
    'validate': 'lib/jquery.form-validator.min',
    'autosize': 'lib/jquery.textarea_autosize.min',
    'datepicker': 'lib/jquery-ui.datepicker.min',
    'fileupload': 'lib/dropzone-amd-module.min',
    'modal': 'lib/jquery.modal.min',
    'skrollr': 'lib/skrollr.min',
    'slick': 'lib/slick.min',

    // plugins, functions for ui
    'sticker': 'utils/stickSmoothly',
    'utils': 'utils',

    // etc
    'SmoothScroll': 'lib/SmoothScroll',
    'clipboard': 'clipboard.min'
  },

  shim: {
    // shim 속성의 키로 모듈 이름을 지정하고 내부 속성을 나열
    'modernizr': {
      // exports: 반환될 객체 정의
      // 문자 또는 함수
      exports: 'Modernizr'
    },

    'gsap': {
      // 의존하는 library를 deps 속성에 정의
      // 이름은 위에서 지정한 별칭(키 이름)으로 해도 된다.
      deps: ['$', 'TweenMax']
    },

    'modal': {
      deps: ['$']
    },

    'skrollr': {
      deps: ['$']
    },

    'fileupload': {
      deps: ['$']
    },

    'datepicker': {
      deps: ['$']
    },

    'validate': {
      deps: ['$']
    },

    'autosize': {
      deps: ['$']
    },

    'imagesloaded': {
      deps: ['$']
    },

    'utils': {
      deps: ['$', 'TweenMax', 'gsap']
    },

    'sticker': {
      deps: ['$', '_']
    },

    'slick': {
      deps: ['$', '_']
    },

    'ui': {
      deps: ['utils']
    }
  },

  // 배포 시간 설정 - js 모듈 캐시
  //urlArgs : 'ts=' + (new Date(2016, 7, 2)).getTime()
  //urlArgs : 'ts=' + (new Date(2021, 2, 29)).getTime()
  //urlArgs : 'ts=' + (new Date(2022, 1, 18)).getTime()
  urlArgs : 'ver=230704'
};