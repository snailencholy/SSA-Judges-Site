import re
import string

text = ""
checked = ""
pattern = '[a-z][A-Z]+'


with open("outfile.txt", 'r+') as file:
    text = file.read()
    for i in text:
        if re.search(pattern, i):
            checked += "".join(" " + i)
    
print(checked)

    
            