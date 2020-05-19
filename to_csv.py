"""
This is to pull data from the cleaned and scrubbed judges dispositions
and put it into a csv file "database" for my react app to pull from.

Once again, this is quick and dirty and probably not super elegant, but
it gets the job done.
"""


###########
# imports #
###########
import csv


###########
# globals #
###########
formatted = ""

#####################
# Main script logic #
#####################
with open("outfile.txt", 'r') as inFile:
    for line in inFile.readlines():
        line.rstrip()
        formatted += line + ","

    print(formatted)