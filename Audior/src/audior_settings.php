<?php 

// maxTimeLimit controls the maximum length of the recording.The values accepted are in seconds.
$maxTimeLimit = '115';

//recordName controls the name of the recording.
$recordName = 'audio_recording_';

//addRandomNumberToName helps you generate different names for the recordings. If set to 1 all the mp3 names will start with the recordName above and will end with a 6 digit random number. Values: 0 for disabled, 1 for enabled .
$addRandomNumberToName = 1;

//uploadURL is the path to the script that handles the upload of the mp3 file.
$uploadURL ='upload.php';

//canDownload  controls weather or not the user can download the MP3. Values: 0 for disabled, 1 for enabled.
$canDownload = 1;

//weather or not the sound wave is shown, 1 for show, 0 for hidden.
$showSoundWave = 1;

//Audior will place a marker at every markerDistance seconds. Set to 0 to disable.
$markerDistance = 5;

//Path to the used language file.
$languageFile = 'translations/en.xml';

//This setting controls whether or not all of the flash buttons are shown/hidden. Set to 0 to hide the buttons
$showButtons = 1;

//This setting controls whether or not the Save button is enabled/disabled. Set to 1 to disable it
$disableSaveButton = 0;

//This setting controls whether or not the Record again button is enabled/disabled. Set to 1 to disable it
$disableRecordAgainButton = 0;

//This setting controls the radius of the corners of the Audior background. Set this to 0 for square corners.
$bgCornerRadius = 15;

//This setting controls the background color for Audior.
$bgColor = '0xefefef';

//This setting controls the border color of the Audior background.
$borderColor = '0x999999';

//This setting controls the border width of the Audior background.
$borderWidth = 1;

//This setting controls the color of the soundwave
$soundWaveColor = '0x333333';

//This setting controls the color with which the generated soundwave is filled with upon playback to indicate the position within the recording
$playBackFillColor = '0xFA5223';

if (file_exists(dirname(dirname(__FILE__)) . "/integration.php")){ include(dirname(dirname(__FILE__)) . "/integration.php"); }

header("Content-Type:text/xml");
 echo '<AudiorSettings>
		<maxTimeLimit>'.$maxTimeLimit.'</maxTimeLimit>
		<recordName>'.$recordName.'</recordName>
		<addRandomNumberToName>'.$addRandomNumberToName.'</addRandomNumberToName>
		<uploadURL>'.$uploadURL.'</uploadURL>
		<canDownload>'.$canDownload.'</canDownload>
		<showSoundWave>'.$showSoundWave.'</showSoundWave>
		<markerDistance>'.$markerDistance.'</markerDistance>
		<languageFile>'.$languageFile.'</languageFile>
		<showButtons>'.$showButtons.'</showButtons>
		<disableSaveButton>'.$disableSaveButton.'</disableSaveButton>
		<disableRecordAgainButton>'.$disableRecordAgainButton.'</disableRecordAgainButton>
		<bgCornerRadius>'.$bgCornerRadius.'</bgCornerRadius>
		<bgColor>'.$bgColor.'</bgColor>
		<borderColor>'.$borderColor.'</borderColor>
		<borderWidth>'.$borderWidth.'</borderWidth>
		<soundWaveColor>'.$soundWaveColor.'</soundWaveColor>
		<playBackFillColor>'.$playBackFillColor .'</playBackFillColor>
	  </AudiorSettings>';

?>