#!C:\Ruby193\bin\ruby
#encoding: utf-8

require 'cgi'

cgi = CGI.new
puts cgi.header
puts "<html><body>This is a test</body></html>"
puts cgi["recorderId"]
puts cgi.content_type
puts cgi.content_length
puts cgi.query_string