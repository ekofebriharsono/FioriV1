sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/PeopleList',
		'project1/test/integration/pages/PeopleObjectPage'
    ],
    function(JourneyRunner, opaJourney, PeopleList, PeopleObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePeopleList: PeopleList,
					onThePeopleObjectPage: PeopleObjectPage
                }
            },
            opaJourney.run
        );
    }
);