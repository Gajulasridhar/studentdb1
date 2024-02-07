sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'languages/test/integration/FirstJourney',
		'languages/test/integration/pages/StudentList',
		'languages/test/integration/pages/StudentObjectPage',
		'languages/test/integration/pages/Student_LanguagesObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentList, StudentObjectPage, Student_LanguagesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('languages') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentList: StudentList,
					onTheStudentObjectPage: StudentObjectPage,
					onTheStudent_LanguagesObjectPage: Student_LanguagesObjectPage
                }
            },
            opaJourney.run
        );
    }
);