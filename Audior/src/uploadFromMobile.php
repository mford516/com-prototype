<?php

if(!is_dir("recordings")){
	$res = mkdir("recordings",0777); 
}

if(!is_dir("recordings/mobileRecordings")){
	$res = mkdir("recordings/mobileRecordings",0777); 
}

if(isset($_FILES["FileInput"]) && $_FILES["FileInput"]["error"]== UPLOAD_ERR_OK){

	$UploadDirectory	= 'recordings/mobileRecordings/'; 	

	//Note :if "memory_limit" , "upload_max_filesize" or post_max_size is set to low in "php.ini" it won't work. 
	
	if (!isset($_SERVER['HTTP_X_REQUESTED_WITH'])){
		die();
	}

	/*if ($_FILES["FileInput"]["size"] > 5242880){
		die("File size is too big!");
	}*/
	
	switch(strtolower($_FILES['FileInput']['type']))
	{
			case 'audio/3ga': //when recording on Android devices the 3ga container is used. It contains AAC sound.
			case 'video/quicktime': //when recording on Apple devices the mov container is used. It contains AAC sound.
				break;
			default:
				//die('Unsupported File!');
	}
	
	$File_Name          = strtolower($_FILES['FileInput']['name']);
	$File_Ext           = substr($File_Name, strrpos($File_Name, '.')); 
	$Random_Number      = rand(0, 9999999999); 
	$NewFileName 		= "mobile_audio_recording_".$Random_Number.$File_Ext; 
	
	if(move_uploaded_file($_FILES['FileInput']['tmp_name'], $UploadDirectory.$NewFileName )){
		
		$currentDir = getcwd();
		
		//we execute ffmpeg to start the conversion process from 3gp and mov files containging aac sound to mp3. The PHP process will hang until the conversion ends. Audio conversions are very fast and they should not notmrally affect you. If they do the output of exec/ffmpeg must be redirected to a file or another output stream. See http://php.net/manual/en/function.exec.php for details.
		exec($currentDir."/ffmpeg -i ".$currentDir."/recordings/mobileRecordings/".$NewFileName." ".$currentDir."/recordings/mobileRecordings/mobile_audio_recording_".$Random_Number.".mp3");
		
		//we remove the initial raw unconverted file
		unlink($UploadDirectory.$NewFileName);

		//we let the browser know the conversion ended. The browser will embed the mp3 file for playback.
		die('Audio file uploaded and converted to: mobile_audio_recording_'.$Random_Number.'.mp3');	
	}else{
		die('error uploading File!');
	}
}
else
{
	die('Something wrong with upload! Is "upload_max_filesize" set correctly?');
}