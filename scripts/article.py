# write-html-2-mac.py
import webbrowser

from cherrypy import request
v = request.params['text']

f = open('helloworld.html','w')

message = """<html>
<head></head>
<body><p>""" + str(v) + """</p></body>
</html>"""

f.write(message)
f.close()

#Change path to reflect file location
filename = 'file:///Users/savan/PHSNetwork/scripts' + 'helloworld.html'
webbrowser.open_new_tab(filename)
