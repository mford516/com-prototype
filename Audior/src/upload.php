<?php
//this file is called by the Audior.swf file when the [SAVE] button is pressed

// the folder where to save the files
$folderName = "recordings/";

if (file_exists(dirname(dirname(__FILE__)) . "/integration_upload.php")){ include(dirname(dirname(__FILE__)) . "/integration_upload.php"); }

//the recorderId value sent via flash vars from index.html
$recorderId = $_GET["recorderId"];

//the userId sent via flash vars from index.html
$userId= $_GET["userId"];

//the swf sends the name of the recording via the GET variable named "recordName", basename() is a security measure
$recordName = basename($_GET["recordName"]);

//if recordName does not end in .mp3 stop execution
//the $ means end, the /i means case-insensitive, therefore it matches .mp3 AND .mp3 
if (!preg_match('/\.mp3$/i', $recordName)){
	die("save=failed");
}

//the duration of the recorded audio file in seconds but accurate to the millisecond (like this: 4.322)
$duration= $_GET["duration"];

//we make the recordings folder if it does not exists
if(!is_dir("recordings")){
	$res = mkdir("recordings",0777); 
}

//The MP3 data is sent via POST
if(isset($GLOBALS["HTTP_RAW_POST_DATA"])){
	$recording = fopen($folderName.$recordName,"wb");
	fwrite($recording , $GLOBALS["HTTP_RAW_POST_DATA"] );
	fclose($recording);
}
echo "save=ok&fileurl=".$folderName.$recordName;
die();
//echo "save=failed" to tell Audior the MP3 saving process has failed
//The fileurl returned by upload.php is used internally by Audior when someone presses the [Download] button. It is not sent through to the JS API (onUploadDone sends the actual filename not the value of fileurl).
?>