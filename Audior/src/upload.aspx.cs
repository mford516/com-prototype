using System;
using System.Collections.Generic;
using System.Web;
using System.IO;
using System.Collections;

namespace Audior
{
    public partial class Upload : System.Web.UI.Page
    {
        private const string UPLOAD_DIRECTORY = "recordings/";
        private IList extensions = new string[] { "mp3" };

		public static void CopyStream(Stream input, Stream output)
		{
			byte[] buffer = new byte[8 * 1024];
			int len;
			while ( (len = input.Read(buffer, 0, buffer.Length)) > 0)
			{
				output.Write(buffer, 0, len);
			}    
		}

        protected void Page_Load(object sender, EventArgs e)
        {

            	//the recorderId value sent via flash vars from index.html
                string recorderId = this.Request.Params["recorderId"];
                
                //the userId sent via flash vars from index.html
                string userId = this.Request.Params["userId"];
                
                //the swf sends the name of the recording via the GET variable named "recordName"
                string recordName = this.Request.Params["recordName"];
                
                //the duration of the recorded audio file in seconds but accurate to the millisecond (like this: 4.322)
                string duration = this.Request.Params["duration"];
                
               // HttpPostedFile file = HttpContext.Current.Request.Files["Filedata"];
               
                string uploadDirectory = HttpContext.Current.Server.MapPath(UPLOAD_DIRECTORY);
				if (!Directory.Exists(uploadDirectory))
				{
					Directory.CreateDirectory(uploadDirectory);
				}
				
				string uploadFile = Path.Combine(uploadDirectory, recordName);
				
				//Get the stream  
				Stream input = (Stream)Request.InputStream;  
		  
				using (Stream file = File.OpenWrite(uploadFile))
				{
					CopyStream(input, file);
				}
			

                string response = string.Empty;
                response = "save=ok&fileurl=recordings/"+recordName;
				//The fileurl returned by upload.aspx.cs is used internally by Audior when someone presses the [Download] button. It is not sent through to the JS API (onUploadDone sends the actual filename not the value of fileurl).
                Response.Write(response);
        }
    }
}