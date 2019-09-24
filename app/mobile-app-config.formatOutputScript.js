{
    "terms": [
        {
            "type": "button",
            "position": "bottom-center",
            "label": "I Accept",
            "className": "submit",
            "action": "event",
            "event": "accept"
        },
        {
            "type": "html",
            "value": "{terms}"
        }
    ],
    "test-list": [
        {
            "type": "list",
            "list": [
                {
                    "label": "Item 1",
                    "htmlContent": "some html"
                },
                {
                    "label": "Item 2",
                    "htmlContent": "some html 2"
                },
                {
                    "label": "Item 3",
                    "htmlContent": "some html 3"
                }
            ],
            "empty": [
                {
                    "type": "heading",
                    "value": "nothing here"
                }
            ],
            "before": [],
            "listItemFields": "{marker-card}",
            "after": []
        }
    ],
        "marker-card": [
        {
            "type": "fieldset",
            "fields": [
                {
                    "type": "label",
                    "value": "{value.name}"
                },
                {
                    "type": "html",
                    "value": "{value.description}"
                }
            ]
        },
        {
            "type": "buttonset",
            "align": "right",
            "style": "horizontal-align:right;",
            "className": "marker-card-menu",
            "buttons": [
                {
                    "action": "form",
                    "form": "mainmap",
                    "remember": false,
                    "icon": "{mapIcon}"
                }
            ]
        }
    ],
    "marker-list": [
        {
            "type": "list",
            "list": "layer",
            "listArgs": "{data.layers}",
            "empty": [
                {
                    "type": "heading",
                    "value": "nothing here"
                }
            ],
            "before": [],
            "listItemFields": [
                {
                    "type": "card",
                    "fields": [
        {
            "type": "fieldset",
            "fields": [
                {
                    "type": "label",
                    "value": "{value.name}"
                },
                {
                    "type": "html",
                    "value": "{value.description}"
                }
            ]
        },
        {
            "type": "buttonset",
            "align": "right",
            "style": "horizontal-align:right;",
            "className": "marker-card-menu",
            "buttons": [
                {
                    "action": "form",
                    "form": "mainmap",
                    "remember": false,
                    "icon": "{mapIcon}"
                }
            ]
        }
    ]
                }
            ],
            "after": []
        }
    ],
    "menu-v1": [
        {
            "type": "data",
            "data": {
                "someVariable": "use data.someVariable"
            }
        },
        {
            "type": "fieldset",
            "position": "bottom-center",
            "fields": [
                {
                    "type": "heading",
                    "value": "Rijeka Fiume App"
                }
            ]
        },
        {
            "type": "fieldset",
            "fields": [
                {
                    "type": "buttonset",
                    "className": "augmented-menu btn-main",
                    "buttons": [
                        {
                            "label": "{nearLabel}",
                            "action": "form",
                            "data": {
                                "layers": [
                                    36
                                ]
                            },
                            "view": "mainmap",
                            "icon": "{nearIcon}"
                        },
                        {
                            "label": "{spotsLabel}",
                            "action": "form",
                            "data": {
                                "layers": [
                                    36
                                ]
                            },
                            "view": "marker-list",
                            "icon": "{spotsIcon}"
                        },
                        {
                            "label": "{searchLabel}",
                            "action": "form",
                            "view": "menu-search",
                            "icon": "{searchIcon}"
                        },
                        {
                            "label": "{toursLabel}",
                            "action": "form",
                            "data": {
                                "layers": [
                                    36
                                ]
                            },
                            "view": "tours",
                            "icon": "{tourIcon}"
                        },
                        {
                            "label": "{yourLabel}",
                            "action": "form",
                            "view": "placeholder",
                            "icon": "{userIcon}"
                        }
                    ]
                }
            ]
        },
        {
            "type": "space"
        },
        {
            "type": "progressbar"
        },
        {
            "type": "fieldset",
            "position": "top-center",
            "fields": [
                {
                    "type": "buttonset",
                    "buttons": [
                        {
                            "label": "Issues",
                            "action": "link",
                            "icon": "{surveyIcon}",
                            "link": "https:\/\/docs.google.com\/forms\/d\/e\/1FAIpQLSd5Z3ugPsScom9p_lGJvGDGBh1prd-ubKxpRXPrS0A5xhNM8w\/viewform?usp=sf_link",
                            "className": "small-icon"
                        },
                        {
                            "label": "Help\/About",
                            "action": "form",
                            "form": "about",
                            "icon": "{aboutIcon}",
                            "className": "small-icon"
                        },
                        {
                            "label": "Share",
                            "action": "share",
                            "link": "https:\/\/rijeka.geolive.ca\/app-download",
                            "linkLabel": "Check out this app",
                            "icon": "{shareIcon}",
                            "className": "small-icon"
                        }
                    ]
                }
            ]
        }
    ],
    "menu-search": [
        {
            "type": "fieldset",
            "position": "bottom-center",
            "fields": [
                {
                    "type": "heading",
                    "value": "Search"
                }
            ]
        },
        {
            "type": "fieldset",
            "fields": [
                {
                    "type": "buttonset",
                    "className": "augmented-menu btn-main",
                    "buttons": [
                        {
                            "label": "{categoriesLabel}",
                            "action": "form",
                            "view": "types",
                            "icon": "{categoriesIcon}"
                        },
                        {
                            "label": "{periodsLabel}",
                            "action": "form",
                            "view": "periods",
                            "icon": "{periodsIcon}"
                        }
                    ]
                }
            ]
        }
    ],
    "types": "{types}",
    "tours": "{tours}",
    "mainmap": [
        {
            "type": "data",
            "data": {
                "feature": false,
                "center": [
                    "lat",
                    "lon",
                    "zoom"
                ],
                "hasActiveFeature": false
            }
        },
        {
            "type": "map",
            "position": "detail-top",
            "layers": "{data.layers}",
            "center": [
                45.320116149473989,
                14.44043993835453
            ],
            "markerIcon": "{}",
            "zoom": 13,
            "zoomToLocation": false
        },
        {
            "type": "fieldset",
            "position": "absolute",
            "fields": [
                {
                    "type": "buttonset",
                    "buttons": [
                        {
                            "label": "List",
                            "action": "view",
                            "icon": "{listIcon}",
                            "view": "marker-list",
                            "remember": false,
                            "data": {
                                "layers": "{data.layers}"
                            },
                            "className": "small-icon"
                        },
                        {
                            "label": "AR",
                            "action": "view",
                            "view": "augmented",
                            "icon": "{augmentedIcon}",
                            "className": "small-icon",
                            "remember": false,
                            "data": {
                                "layers": "{data.layers}"
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "periods": "{periods}",
    "about": [
        {
            "type": "label",
            "value": "About the"
        },
        {
            "type": "heading",
            "value": "Rijeka Fiume App"
        },
        {
            "type": "html",
            "value": "This is a description of the app who its for and why it was made"
        },
        {
            "type": "html",
            "value": "This is a description of the research the team"
        },
        {
            "type": "html",
            "value": "This is a shoutout to Geolive mapping server and opensource software"
        }
    ],
    "placeholder": [
        {
            "type": "heading",
            "value": "Hello World"
        },
        {
            "type": "label",
            "value": "This is a placeholder page"
        }
    ],

    "menu": "{menu.json}",
    "map": "{map.json}",
    "augmented": [
        {
            "type": "augmentedreality",
            "card": "{views.marker-card}",
            "layers": "{data.layers}",
            "offsetLatLng": {
                "lat": 45.322000000000003,
                "lng": 14.452
            }
        },
        {
            "type": "fieldset",
            "position": "absolute",
            "fields": [
                {
                    "type": "buttonset",
                    "buttons": [
                        {
                            "label": "List",
                            "action": "view",
                            "icon": "{listIcon}",
                            "view": "marker-list",
                            "className": "small-icon",
                            "remember": false,
                            "data": {
                                "layers": "{data.layers}"
                            }
                        },
                        {
                            "label": "Map",
                            "action": "view",
                            "view": "mainmap",
                            "icon": "{mapIcon}",
                            "className": "small-icon",
                            "remember": false,
                            "data": {
                                "layers": "{data.layers}"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}