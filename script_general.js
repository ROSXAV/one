(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"data":{"locales":{"es":"locale/es.txt"},"name":"Player593","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"speechOnInfoWindow":false,"volume":1,"rate":1},"defaultLocale":"es"},"backgroundOpacity":1,"gap":10,"propagateClick":false,"borderRadius":0,"paddingLeft":0,"id":"rootPlayer","scrollBarVisible":"rollOver","verticalAlign":"top","downloadEnabled":false,"width":"100%","children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"mediaActivationMode":"window","start":"this.init()","toolTipHorizontalAlign":"center","paddingRight":0,"backgroundColorRatios":[0],"class":"Player","horizontalAlign":"left","backgroundColorDirection":"vertical","scrollBarMargin":2,"backgroundPreloadEnabled":true,"borderSize":0,"desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarWidth":10,"height":"100%","scripts":{"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"clone":TDV.Tour.Script.clone,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaByName":TDV.Tour.Script.getMediaByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"existsKey":TDV.Tour.Script.existsKey,"isPanorama":TDV.Tour.Script.isPanorama,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumePlayers":TDV.Tour.Script.resumePlayers,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"registerKey":TDV.Tour.Script.registerKey,"mixObject":TDV.Tour.Script.mixObject,"showPopupImage":TDV.Tour.Script.showPopupImage,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"initGA":TDV.Tour.Script.initGA,"showWindow":TDV.Tour.Script.showWindow,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowScore":TDV.Tour.Script.quizShowScore,"cloneCamera":TDV.Tour.Script.cloneCamera,"translate":TDV.Tour.Script.translate,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"shareSocial":TDV.Tour.Script.shareSocial,"quizStart":TDV.Tour.Script.quizStart,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward},"overflow":"hidden","minHeight":20,"minWidth":20,"contentOpaque":false,"scrollBarOpacity":0.5,"shadow":false,"definitions": [{"id":"res_9E8571B3_9312_F164_41D4_2597F4950CFC","class":"ImageResource","data":{"type":"popup"},"levels":[{"url":"media/res_9E8571B3_9312_F164_41D4_2597F4950CFC_0.jpg","width":512,"class":"ImageResourceLevel","height":459}]},{"hfov":360,"label":trans('panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53.label'),"hfovMin":"150%","thumbnailUrl":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_t.jpg","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_t.jpg","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512},{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"height":1536}]}}],"id":"panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53","pitch":0,"hfovMax":130,"class":"Panorama","vfov":180,"data":{"label":"Planta-02112021_154705"},"overlays":["this.overlay_9F8461A5_9313_716F_41D5_833F9A5BCD37","this.overlay_9D85EF67_9313_51EC_41B9_45E53A79101D","this.popup_9EA25970_9313_51E3_41D5_48B287E6497A","this.overlay_9D2674B3_931E_D764_41DA_7703202485F3","this.overlay_9DC4182F_9312_BF7C_41C2_EB434CF1EAA6"],"partial":false},{"rotationY":0,"rotationX":0,"popupDistance":100,"class":"PopupPanoramaOverlay","hideDuration":500,"hfov":9.08,"id":"popup_9EA25970_9313_51E3_41D5_48B287E6497A","showDuration":500,"rotationZ":0,"popupMaxHeight":"95%","showEasing":"cubic_in","popupMaxWidth":"95%","pitch":-13.23,"yaw":10.13,"image":"this.res_9E8571B3_9312_F164_41D4_2597F4950CFC","hideEasing":"cubic_out"},{"items":[{"media":"this.panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_camera"}],"id":"mainPlayList","class":"PlayList"},{"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowBlurRadius":3,"data":{"name":"Main Viewer"},"subtitlesFontFamily":"Arial","toolTipFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"subtitlesPaddingTop":5,"playbackBarLeft":0,"id":"MainViewer","progressBorderColor":"#000000","progressLeft":0,"toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"subtitlesShadow":false,"playbackBarHeadHeight":15,"toolTipHorizontalAlign":"center","width":"100%","toolTipPaddingBottom":4,"class":"ViewerArea","subtitlesOpacity":1,"progressBarBorderRadius":0,"playbackBarHeadBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowColor":"#000000","toolTipShadowVerticalLength":0,"subtitlesBackgroundColor":"#000000","subtitlesHorizontalAlign":"center","toolTipFontSize":"1.11vmin","progressBarBackgroundColor":["#3399FF"],"borderSize":0,"progressBarBorderSize":0,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"height":"100%","playbackBarHeadShadow":true,"subtitlesVerticalAlign":"bottom","vrPointerSelectionColor":"#FF6600","toolTipTextShadowOpacity":0,"toolTipTextShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"transitionDuration":500,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"shadow":false,"playbackBarHeadOpacity":1,"subtitlesTextShadowVerticalLength":1,"toolTipBorderRadius":3,"subtitlesTextShadowOpacity":1,"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","surfaceReticleOpacity":0.6,"progressBarBorderColor":"#000000","toolTipFontColor":"#606060","progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"subtitlesBorderSize":0,"toolTipBorderSize":1,"paddingTop":0,"playbackBarOpacity":1,"subtitlesTop":0,"toolTipFontStyle":"normal","toolTipTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"borderRadius":0,"paddingBottom":0,"progressBackgroundColor":["#FFFFFF"],"propagateClick":false,"paddingLeft":0,"toolTipPaddingTop":4,"progressBackgroundColorDirection":"vertical","progressBarOpacity":1,"transitionMode":"blending","playbackBarBorderRadius":0,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingLeft":6,"subtitlesFontColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","paddingRight":0,"playbackBarProgressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"subtitlesFontSize":"3vmin","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipOpacity":1,"playbackBarProgressOpacity":1,"surfaceReticleSelectionOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderColor":"#000000","subtitlesFontWeight":"normal","progressBackgroundOpacity":1,"displayTooltipInTouchScreens":true,"doubleClickAction":"toggle_fullscreen","toolTipShadowHorizontalLength":0,"minHeight":50,"playbackBarHeadBackgroundColorDirection":"vertical","minWidth":100,"subtitlesBorderColor":"#FFFFFF","progressBottom":0,"toolTipShadowColor":"#333333","progressRight":0,"progressHeight":10,"playbackBarBorderSize":0,"subtitlesPaddingLeft":5,"toolTipShadowSpread":0,"vrPointerSelectionTime":2000,"toolTipShadowBlurRadius":3,"toolTipPaddingRight":6,"subtitlesTextDecoration":"none","progressBorderRadius":0,"toolTipFontWeight":"normal","subtitlesPaddingRight":5,"progressOpacity":1,"toolTipShadowOpacity":1,"subtitlesBottom":50,"progressBorderSize":0},{"automaticZoomSpeed":10,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_9AF5B4F9_9311_50E5_41CE_F6F9F7C89D81","id":"panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_camera"},{"arrowKeysAction":"translate","zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation"},{"showEffect":{"duration":350,"class":"FadeInEffect","easing":"cubic_in_out"},"backgroundOpacity":0.55,"left":0,"propagateClick":false,"borderRadius":0,"paddingLeft":0,"id":"veilPopupPanorama","right":0,"toolTipHorizontalAlign":"center","paddingRight":0,"backgroundColorRatios":[0],"class":"UIComponent","backgroundColorDirection":"vertical","top":0,"borderSize":0,"bottom":0,"backgroundColor":["#000000"],"minHeight":0,"minWidth":0,"shadow":false,"visible":false,"paddingTop":0,"paddingBottom":0,"data":{"name":"UIComponent6798"}},{"backgroundOpacity":1,"left":0,"propagateClick":false,"borderRadius":0,"paddingLeft":0,"id":"zoomImagePopupPanorama","right":0,"toolTipHorizontalAlign":"center","paddingRight":0,"backgroundColorRatios":[],"class":"ZoomImage","backgroundColorDirection":"vertical","top":0,"borderSize":0,"bottom":0,"backgroundColor":[],"minHeight":0,"minWidth":0,"shadow":false,"visible":false,"scaleMode":"custom","paddingTop":0,"paddingBottom":0,"data":{"name":"ZoomImage6799"}},{"showEffect":{"duration":350,"class":"FadeInEffect","easing":"cubic_in_out"},"iconColor":"#000000","data":{"name":"CloseButton6800"},"backgroundOpacity":0.3,"textDecoration":"none","gap":5,"propagateClick":false,"borderRadius":0,"paddingLeft":5,"id":"closeButtonPopupPanorama","fontFamily":"Arial","verticalAlign":"middle","right":10,"toolTipHorizontalAlign":"center","paddingRight":5,"backgroundColorRatios":[0,0.1,1],"class":"CloseButton","iconHeight":"100%","horizontalAlign":"center","backgroundColorDirection":"vertical","borderColor":"#000000","top":10,"borderSize":0,"shadowColor":"#000000","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"mode":"push","fontSize":"1.29vmin","iconLineWidth":5,"iconWidth":"100%","shadowBlurRadius":6,"minHeight":0,"minWidth":0,"shadowSpread":1,"fontStyle":"normal","shadow":false,"pressedIconColor":"#888888","layout":"horizontal","rollOverIconColor":"#666666","visible":false,"fontColor":"#FFFFFF","paddingTop":5,"paddingBottom":5,"cursor":"hand","fontWeight":"normal"},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"data":{"label":"Poligon"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligon"},"hfov":6.72,"distance":50,"image":{"levels":[{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_HS_1gdiedq0.png","width":76,"class":"ImageResourceLevel","height":66}],"class":"ImageResource"},"pitch":-23.97,"roll":0,"yaw":-4.2}],"id":"overlay_9F8461A5_9313_716F_41D5_833F9A5BCD37","areas":["this.HotspotPanoramaOverlayArea_9FD671D8_9313_7124_41D7_EDC59FAA86E9"],"maps":[]},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"data":{"label":"Poligon"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligon"},"hfov":10.13,"distance":50,"image":{"levels":[{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_HS_6pg39ibm.png","width":115,"class":"ImageResourceLevel","height":63}],"class":"ImageResource"},"pitch":-13.23,"roll":0,"yaw":10.13}],"id":"overlay_9D85EF67_9313_51EC_41B9_45E53A79101D","areas":["this.HotspotPanoramaOverlayArea_9D829F73_9313_51E4_41D2_8D1BE2F01D90"],"maps":[]},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"data":{"label":"Poligon"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligon"},"hfov":6.99,"distance":50,"image":{"levels":[{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_HS_agtvmdu6.png","width":79,"class":"ImageResourceLevel","height":55}],"class":"ImageResource"},"pitch":-32.32,"roll":0,"yaw":12.01}],"id":"overlay_9D2674B3_931E_D764_41DA_7703202485F3","areas":["this.HotspotPanoramaOverlayArea_9D5934C0_931E_D724_41DE_113B63717F63"],"maps":[]},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"data":{"label":"Poligon"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligon"},"hfov":11.77,"distance":50,"image":{"levels":[{"url":"media/panorama_99E298E8_9311_70E4_41C0_ADD4EC2ADE53_HS_6d3rjx4m.png","width":134,"class":"ImageResourceLevel","height":135}],"class":"ImageResource"},"pitch":-23.75,"roll":0,"yaw":55.02}],"id":"overlay_9DC4182F_9312_BF7C_41C2_EB434CF1EAA6","areas":["this.HotspotPanoramaOverlayArea_9DC53838_9312_BF64_41E0_FFD365B9A301"],"maps":[]},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_9AF5B4F9_9311_50E5_41CE_F6F9F7C89D81"},{"mapColor":"image","click":"this.openLink(this.translate('LinkBehaviour_9D0D1EF5_9312_D0ED_41D4_5511635A3540.source'), '_blank')","id":"HotspotPanoramaOverlayArea_9FD671D8_9313_7124_41D7_EDC59FAA86E9","class":"HotspotPanoramaOverlayArea"},{"mapColor":"image","click":"this.showPopupPanoramaOverlay(this.popup_9EA25970_9313_51E3_41D5_48B287E6497A, {'paddingTop':5,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconLineWidth':5,'borderRadius':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconLineWidth':5,'iconWidth':20,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'iconColor':'#000000','pressedIconColor':'#888888','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverIconColor':'#666666','pressedBorderSize':0,'paddingRight':5,'pressedBorderColor':'#000000','borderColor':'#000000','borderSize':0,'rollOverBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverBorderColor':'#000000','pressedIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.res_9E8571B3_9312_F164_41D4_2597F4950CFC, null, null, null, false)","id":"HotspotPanoramaOverlayArea_9D829F73_9313_51E4_41D2_8D1BE2F01D90","class":"HotspotPanoramaOverlayArea"},{"mapColor":"image","click":"this.openLink(this.translate('LinkBehaviour_9EBDF7B6_9313_716C_41CE_9ED01F3CED98.source'), '_blank')","id":"HotspotPanoramaOverlayArea_9D5934C0_931E_D724_41DE_113B63717F63","class":"HotspotPanoramaOverlayArea"},{"mapColor":"image","click":"this.openLink(this.translate('LinkBehaviour_9EBDA7B6_9313_716C_41CF_4B4B973214B5.source'), '_blank')","id":"HotspotPanoramaOverlayArea_9DC53838_9312_BF64_41E0_FFD365B9A301","class":"HotspotPanoramaOverlayArea"}],"defaultVRPointer":"laser","mobileMipmappingEnabled":false,"mouseWheelEnabled":true,"paddingTop":0,"paddingBottom":0,"scrollBarColor":"#000000","vrPolyfillScale":0.75};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.21.js.map
//Generated with v2020.5.21, Thu Feb 11 2021