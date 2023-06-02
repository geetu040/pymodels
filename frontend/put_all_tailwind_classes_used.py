"""

This script finds all the tailwind classes used in the project

"""

import os

colors = [
	"blue", "red", "yellow", "purple",
	"green", "slate", "teal", "lime"
]
root = "./src/"
sign = "${c}"
to_remove = [
    "`}",
    "`}>",
    "className={`",
    "`:`",
]

content = ""
for r, d, f in os.walk(root):
	for file in f:
		ext = file.split(".")[-1]
		if ext == "js" or ext == "jsx":
			# print(root, r)
			path = os.path.join(r, file)
			with open(path, 'r') as f:
				content += f.read()
				for to_r in to_remove:
					content = content.replace(to_r, " ")

props = []
for word in content.split():
    if sign in word:
        if word not in props:
            props.append(word)

new_props = []
for c in colors:
    for p in props:
        new_p = p.replace(sign, c)
        new_props.append(new_p)

with open("all_tailwind_classes_used.txt", 'w') as f:
    f.write(" ".join(new_props))

print("Done")