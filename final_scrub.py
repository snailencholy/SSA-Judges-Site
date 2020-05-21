"""
This program takes the data that has been gathered and trimmed down
from the SSA judges dispositions site, and scrubs out all the xml tags.
This leaves the data in a form that just needs some find and replace inside
the text file to fix spacing issues.

This isn't super elegant or well done, but it gets the job done.
"""
###########
# Imports #
###########  
import re

###########
# Globals #
###########
stripped = ""
output = ""
pattern = '[a-z]+[A-Z]+'
outfile = open("outfile.txt", 'w', encoding='utf-8')

#####################
# Main Script Logic #
#####################
with open('scrubbed.txt', 'r+') as file:
    for i in file.readlines():
        #Regex that searches for angle brackets and gets rid of them
        #and their contents
        stripped += re.sub('<[^<]+?>', "", i)
    outfile.write(stripped)
    outfile.close()

# with open("outfile.txt", 'r+', encoding='utf-8') as final_file:
#     for line in final_file.read():
#         output += line.replace(" ", "")
#     final_file.write(output) 


