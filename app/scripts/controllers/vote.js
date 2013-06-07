"use strict";

votrApp.controller("VoteCtrl", function($scope) {
	$scope.presidentialCandidates = [
		{
    		"id": 1,
    		"candidate": [
				{
					"Full Name": "Barack Obama",
					"Party": "Democrat",
					"Alma Mater": [
						{"school": "Occidental College"},
						{"school": "Columbia University (B.A.)"},
						{"school": "Harvard Law School (J.D.)"}
					],
					"Career": [
						{"job": "Community Organizer"},
						{"job": "Lawyer"},
						{"job": "Constitutional law professor"},
						{"job": "Author"},
						{"job": "United States Senator from Illinois"},
						{"job": "Member of the Illinois Senate from the 13th District"},
						{"job": "44th President of the United States"}
					],
					"Home State": "Illinois",
					"Born": [
						{"Date": "August 4, 1961 (age 51)"},
						{"Location": "Honolulu, Hawaii"}
					],
					"Religion": "Protestant",
					"Running Mate": "Joe Biden"
				}
			]
		},

		{
			"id": 2,
			"candidate": [
				{
					"Full Name": "Mitt Romney",
					"Party": "Repulican",
					"Alma Mater": [
						{"school": "Brifham Young University (B.A.)"},
						{"school": "Harvard University (M.B.A., J.D.)"}
					],
					"Career": [
						{"job": "Management consultant, Venture capitalist"},
						{"job": "Private equity"},
						{"job": "CEO, 2002 Winter Olympics Organizing Committee"},
						{"job": "CEO, Bain & Company"},
						{"job": "Capital"},
						{"job": "Cofounder and CEO, Bain"},
						{"job": "70th Governor of Massachusetts"}
					],
					"Home State": "California",
					"Born": [
						{"Date": "March 12, 1947 (age 65)"},
						{"Location": "Detroit, Michigan"}
					],
					"Religion": "The Church of Jesus Christ of Latter-day Saints (Mormon)",
					"Running Mate": "Paul Ryan"
				}
			]
		}
	];


	$scope.vicePresidentialCandidates = [
		{
			"id": 1,
			"candidate": [
				{
					"Full Name": "Joe Biden",
					"Party": "Democrat",
					"Alma Mater": [
						{"school": "University of Delaware (B.A.)"},
						{"school": "Syracuse University (J.D.)"}
					],
					"Career": [
						{"job": "Lawyer"},
						{"job": "United States Senator from Delaware"},
						{"job": "Chairman of the Senate Committee on Foreign Relations"},
						{"job": "Chairman of the International Narcotics Control Caucus"},
						{"job": "Chairman of the Senate Committee on the Judiciary"},
						{"job": "47th Vice President of the United States"}
					],
					"Home State": "Delaware",
					"Born": [
						{"Date": "November 20, 1942 (age 70)"},
						{"Location": "Scranton, Pennsylvania"}
					],
					"Religion": "Roman Catholicism",
					"Running Mate": "Barack Obama"
				}
			]
		},
	
		{
			"id": 2,
			"candidate": [
				{
					"Full Name": "Paul Ryan",
					"Party": "Republican",
					"Alma Mater": [
						{"school": "Miami University"}
					],
					"Career": [
						{"job": "Lawyer"},
						{"job": "Member of the U.S. House of Representatives from Wisconsin\"s 1st district"}
					],
					"Home State": "Wisconsin",
					"Born": [
						{"Date": "January 29, 1970 (age 43)"},
						{"Location": "Janesville, Wisconsin"}
					],
					"Religion": "Roman Catholicism",
					"Running Mate": "Mitt Romney"
				}
			]
		}
	];


	$scope.votingTopics = [{
        "National": [
            {
                "id": 1,
                "name": "National",
                "topicTitle": "President & Vice President",
                "topicLink": "/#/vote/president"
            }
        ],
        "State": [
            {
                "California": [
                    {
                        "id": 1,
                        "topicTitle": "United States Senator",
                        "topicLink": "/#/vote/us-senator"
                    },
                    {
                        "id": 2,
                        "topicTitle": "United States Representative",
                        "topicLink": "/#/vote/us-representative"
                    },
                    {
                        "id": 3,
                        "topicTitle": "State Assembly",
                        "topicLink": "/#/vote/state-assembly"
                    },
                    {
                        "id": 4,
                        "topicTitle": "School Govering Board Member",
                        "topicLink": "/#/vote/state-gov-board-member"
                    },
                    {
                        "id": 5,
                        "topicTitle": "State Proposition 30",
                        "topicLink": "/#/vote/state-prop-30"
                    },
                    {
                        "id": 6,
                        "topicTitle": "State Proposition 31",
                        "topicLink": "/#/vote/state-prop-31"
                    },
                    {
                        "id": 7,
                        "topicTitle": "State Proposition 32",
                        "topicLink": "/#/vote/state-prop-32"
                    },
                    {
                        "id": 8,
                        "topicTitle": "State Proposition 33",
                        "topicLink": "/#/vote/state-prop-33"
                    },
                    {
                        "id": 9,
                        "topicTitle": "State Proposition 34",
                        "topicLink": "/#/vote/state-prop-34"
                    },
                    {
                        "id": 10,
                        "topicTitle": "State Proposition 35",
                        "topicLink": "/#/vote/state-prop-35"
                    },
                    {
                        "id": 11,
                        "topicTitle": "State Proposition 36",
                        "topicLink": "/#/vote/state-prop-36"
                    },
                    {
                        "id": 12,
                        "topicTitle": "State Proposition 37",
                        "topicLink": "/#/vote/state-prop-37"
                    },
                    {
                        "id": 13,
                        "topicTitle": "State Proposition 38",
                        "topicLink": "/#/vote/state-prop-38"
                    },
                    {
                        "id": 14,
                        "topicTitle": "State Proposition 39",
                        "topicLink": "/#/vote/state-prop-39"
                    },
                    {
                        "id": 15,
                        "topicTitle": "State Proposition 40",
                        "topicLink": "/#/vote/state-prop-40"
                    }
                ],
                "City": [
                    {
                        "Sacramento": [
                            {
                                "id": 1,
                                "topicTitle": "City Mayor",
                                "topicLink": "/#/vote/city-mayor"
                            },
                            {
                                "id": 2,
                                "topicTitle": "City Council Memeber",
                                "topicLink": "city-council-member"
                            },
                            {
                                "id": 3,
                                "topicTitle": "City Measure G",
                                "topicLink": "city-measure-g"
                            }
                        ]
                    }
                ],
                "County": [
                    {
                        "Yolo": [
                            {
                                "id": 1,
                                "topicTitle": "County Measure H",
                                "topicLink": "/#/vote/couty-measure-h"
                            }
                        ]
                    }
                ]
            }
        ]
    }];


	$scope.selectTopic = function( topic ) {
		$scope.selectedTopic.push( topic );
	};


	$scope.selectedTopics = [
		// Populated with ballot
	];


	$scope.toggleSelection = function() {
		$scope.isSelected = ! $scope.isSelected;

		// If the item has been selected, then we have to
		// tell the parent controller to selected the
		// relevant friend.
		if ( $scope.isSelected ) {

			$scope.selectTopic( $scope.friend );

		// If the item has been unselected, then we have
		// to tell the parent controller to DEselected the
		// relevant friend.
		} else {
			$scope.deselectFriend( $scope.friend );
		}
	};


	// -- Define Scope Variables. --------------- //

	// I determine if the list item has been selected.
	$scope.isSelected = false;

});
